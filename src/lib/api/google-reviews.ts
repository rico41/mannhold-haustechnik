/**
 * Google Places API Integration für Live-Bewertungen
 * 
 * Benötigte Umgebungsvariablen:
 * - GOOGLE_PLACES_API_KEY: API Key mit Places API aktiviert
 * - GOOGLE_PLACE_ID: Die Place ID des GMB-Eintrags
 */

export type GoogleReview = {
  author_name: string;
  rating: number;
  text: string;
  time: number; // Unix timestamp
  relative_time_description: string;
  profile_photo_url?: string;
  author_url?: string;
};

export type PlaceDetails = {
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
  formatted_address: string;
  formatted_phone_number?: string;
  website?: string;
  url: string; // Google Maps URL
};

export type GooglePlacesResponse = {
  result: PlaceDetails;
  status: string;
  error_message?: string;
};

// Cache für Bewertungen (verhindert zu viele API-Calls)
let cachedReviews: {
  data: PlaceDetails | null;
  timestamp: number;
} = {
  data: null,
  timestamp: 0,
};

// Cache-Dauer: 1 Stunde (3600000 ms)
const CACHE_DURATION = 60 * 60 * 1000;

/**
 * Ruft die Place Details inkl. Bewertungen von Google ab
 * Verwendet Caching um API-Kosten zu minimieren
 */
export const fetchGoogleReviews = async (): Promise<PlaceDetails | null> => {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.warn("Google Places API: Missing API_KEY or PLACE_ID");
    return null;
  }

  // Prüfe Cache
  const now = Date.now();
  if (cachedReviews.data && now - cachedReviews.timestamp < CACHE_DURATION) {
    return cachedReviews.data;
  }

  try {
    const fields = [
      "name",
      "rating",
      "user_ratings_total",
      "reviews",
      "formatted_address",
      "formatted_phone_number",
      "website",
      "url",
    ].join(",");

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&language=de&key=${apiKey}`;

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Next.js Cache: 1 Stunde
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: GooglePlacesResponse = await response.json();

    if (data.status !== "OK") {
      console.error("Google Places API Error:", data.status, data.error_message);
      return null;
    }

    // Update Cache
    cachedReviews = {
      data: data.result,
      timestamp: now,
    };

    return data.result;
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    return null;
  }
};

/**
 * Konvertiert Google Reviews in unser Testimonial-Format
 */
export const convertGoogleReviewsToTestimonials = (
  reviews: GoogleReview[]
): Array<{
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  image?: string;
}> => {
  return reviews.map((review, index) => {
    // Versuche Service aus dem Text zu extrahieren
    const serviceKeywords: Record<string, string> = {
      wärmepumpe: "Wärmepumpe",
      "wärme pumpe": "Wärmepumpe",
      vaillant: "Vaillant Wärmepumpe",
      ovum: "OVUM Wärmepumpe",
      gastherme: "Gastherme",
      gas: "Gastherme",
      fußbodenheizung: "Fußbodenheizung",
      fussbodenheizung: "Fußbodenheizung",
      hydraulisch: "Hydraulischer Abgleich",
      wartung: "Heizungswartung",
      heizlast: "Heizlastberechnung",
      modernisierung: "Heizungsmodernisierung",
    };

    let detectedService = "Heizungsservice";
    const lowerText = review.text.toLowerCase();
    
    for (const [keyword, service] of Object.entries(serviceKeywords)) {
      if (lowerText.includes(keyword)) {
        detectedService = service;
        break;
      }
    }

    // Konvertiere Unix Timestamp zu Datum
    const date = new Date(review.time * 1000);
    const dateString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;

    return {
      id: `google-${index + 1}`,
      name: review.author_name,
      location: "Berlin", // Google gibt keinen genauen Ort an
      rating: review.rating,
      text: review.text,
      service: detectedService,
      date: dateString,
      image: review.profile_photo_url,
    };
  });
};

/**
 * Berechnet Aggregate Rating für Schema.org
 */
export const getAggregateRating = (placeDetails: PlaceDetails) => {
  return {
    ratingValue: placeDetails.rating.toFixed(1),
    reviewCount: placeDetails.user_ratings_total,
    bestRating: "5",
    worstRating: "1",
  };
};
