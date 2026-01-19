import { cache } from "react";
import {
  fetchGoogleReviews,
  convertGoogleReviewsToTestimonials,
  getAggregateRating,
  type PlaceDetails,
} from "./google-reviews";
import { testimonials as fallbackTestimonials } from "@/lib/data/testimonials";

/**
 * Server-side cached function to fetch Google Reviews
 * Uses React cache() for deduplication during a single request
 */
export const getGoogleReviewsServer = cache(async () => {
  try {
    const placeDetails = await fetchGoogleReviews();

    if (!placeDetails || !placeDetails.reviews?.length) {
      return {
        reviews: fallbackTestimonials,
        aggregate: {
          ratingValue: "5.0",
          reviewCount: fallbackTestimonials.length,
          bestRating: "5",
          worstRating: "1",
        },
        totalReviews: fallbackTestimonials.length,
        averageRating: 5.0,
        googleMapsUrl: null,
        isLive: false,
      };
    }

    const reviews = convertGoogleReviewsToTestimonials(placeDetails.reviews);
    const aggregate = getAggregateRating(placeDetails);

    return {
      reviews,
      aggregate,
      totalReviews: placeDetails.user_ratings_total,
      averageRating: placeDetails.rating,
      googleMapsUrl: placeDetails.url,
      isLive: true,
    };
  } catch (error) {
    console.error("Error fetching Google reviews (server):", error);
    
    return {
      reviews: fallbackTestimonials,
      aggregate: {
        ratingValue: "5.0",
        reviewCount: fallbackTestimonials.length,
        bestRating: "5",
        worstRating: "1",
      },
      totalReviews: fallbackTestimonials.length,
      averageRating: 5.0,
      googleMapsUrl: null,
      isLive: false,
    };
  }
});

/**
 * Get aggregate rating for Schema.org markup
 */
export const getSchemaAggregateRating = cache(async () => {
  const data = await getGoogleReviewsServer();
  return data.aggregate;
});
