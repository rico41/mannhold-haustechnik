/**
 * Script zum Abrufen der Google-Bewertungen und Aktualisieren der testimonials.ts
 * 
 * Ausführen mit: node scripts/fetch-google-reviews.js
 * 
 * Benötigt .env.local mit:
 * - GOOGLE_PLACES_API_KEY
 * - GOOGLE_PLACE_ID
 */

const fs = require('fs');
const path = require('path');

// Lade .env.local
const envPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=');
    if (key && valueParts.length) {
      process.env[key.trim()] = valueParts.join('=').trim();
    }
  });
}

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;

if (!API_KEY || !PLACE_ID) {
  console.error('❌ Fehler: GOOGLE_PLACES_API_KEY und GOOGLE_PLACE_ID müssen in .env.local gesetzt sein');
  console.log('\nBeispiel .env.local:');
  console.log('GOOGLE_PLACES_API_KEY=AIza...');
  console.log('GOOGLE_PLACE_ID=ChIJ...');
  process.exit(1);
}

async function fetchReviews() {
  console.log('🔍 Rufe Google Places API ab...');
  console.log(`   Place ID: ${PLACE_ID}`);
  
  const fields = 'name,rating,user_ratings_total,reviews';
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=${fields}&language=de&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
      console.error('❌ API Fehler:', data.status, data.error_message);
      process.exit(1);
    }

    const { result } = data;
    console.log(`✅ ${result.name}`);
    console.log(`   Rating: ${result.rating} (${result.user_ratings_total} Bewertungen)`);
    console.log(`   Reviews abgerufen: ${result.reviews?.length || 0}`);

    return result;
  } catch (error) {
    console.error('❌ Fetch Fehler:', error.message);
    process.exit(1);
  }
}

function detectService(text) {
  const lowerText = text.toLowerCase();
  const serviceKeywords = {
    'wärmepumpe': 'Wärmepumpe',
    'wärme pumpe': 'Wärmepumpe',
    'vaillant': 'Vaillant Wärmepumpe',
    'ovum': 'OVUM Wärmepumpe',
    'gastherme': 'Gastherme',
    'gas therme': 'Gastherme',
    'gasheizung': 'Gastherme',
    'fußbodenheizung': 'Fußbodenheizung',
    'fussbodenheizung': 'Fußbodenheizung',
    'hydraulisch': 'Hydraulischer Abgleich',
    'abgleich': 'Hydraulischer Abgleich',
    'wartung': 'Heizungswartung',
    'heizlast': 'Heizlastberechnung',
    'notdienst': 'Heizungsnotdienst',
    'notfall': 'Heizungsnotdienst',
    'heizung': 'Heizungsservice',
  };

  for (const [keyword, service] of Object.entries(serviceKeywords)) {
    if (lowerText.includes(keyword)) {
      return service;
    }
  }
  return 'Heizungsservice';
}

function formatDate(timestamp) {
  const date = new Date(timestamp * 1000);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

function generateTestimonialsFile(reviews, placeDetails) {
  const testimonials = reviews.map((review, index) => ({
    id: String(index + 1),
    name: review.author_name,
    location: 'Berlin', // Google gibt keinen genauen Ort
    rating: review.rating,
    text: review.text.replace(/"/g, '\\"').replace(/\n/g, ' '),
    service: detectService(review.text),
    date: formatDate(review.time),
  }));

  const fileContent = `export type Testimonial = {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  image?: string;
};

/**
 * Echte Google-Bewertungen
 * Automatisch abgerufen am: ${new Date().toISOString().split('T')[0]}
 * Gesamt-Rating: ${placeDetails.rating} (${placeDetails.user_ratings_total} Bewertungen)
 */
export const testimonials: Testimonial[] = [
${testimonials.map(t => `  {
    id: "${t.id}",
    name: "${t.name}",
    location: "${t.location}",
    rating: ${t.rating},
    text: "${t.text}",
    service: "${t.service}",
    date: "${t.date}",
  }`).join(',\n')}
];

export const googleRating = {
  average: ${placeDetails.rating},
  total: ${placeDetails.user_ratings_total},
  lastUpdated: "${new Date().toISOString().split('T')[0]}",
};

export const getTestimonialsByLocation = (location: string): Testimonial[] => {
  return testimonials.filter((t) =>
    t.location.toLowerCase().includes(location.toLowerCase())
  );
};

export const getTestimonialsByService = (service: string): Testimonial[] => {
  return testimonials.filter((t) =>
    t.service.toLowerCase().includes(service.toLowerCase())
  );
};
`;

  return fileContent;
}

async function main() {
  const placeDetails = await fetchReviews();
  
  if (!placeDetails.reviews || placeDetails.reviews.length === 0) {
    console.error('❌ Keine Bewertungen gefunden');
    process.exit(1);
  }

  console.log('\n📝 Generiere testimonials.ts...');
  
  const fileContent = generateTestimonialsFile(placeDetails.reviews, placeDetails);
  const outputPath = path.join(__dirname, '..', 'src', 'lib', 'data', 'testimonials.ts');
  
  fs.writeFileSync(outputPath, fileContent, 'utf-8');
  
  console.log(`✅ Datei aktualisiert: ${outputPath}`);
  console.log('\n📊 Zusammenfassung:');
  console.log(`   - ${placeDetails.reviews.length} Bewertungen importiert`);
  console.log(`   - Durchschnitt: ${placeDetails.rating} Sterne`);
  console.log(`   - Gesamt: ${placeDetails.user_ratings_total} Bewertungen auf Google`);
}

main();
