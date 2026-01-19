export type Testimonial = {
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
 * Automatisch abgerufen am: 2026-01-19
 * Gesamt-Rating: 5 (7 Bewertungen)
 */
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Luis domingo",
    location: "Berlin",
    rating: 5,
    text: "Herr Mannhold hat unseren Gasherdschlauch neu angebracht und angeschlossen. Des Weiteren auch unsere Duschrinne freigemacht. Wir können seine Dienstleistung nur wärmstens weiterempfehlen! Sehr sympathisch und professionell.",
    service: "Heizungsservice",
    date: "2022-11",
  },
  {
    id: "2",
    name: "Lorenzo Toso",
    location: "Berlin",
    rating: 5,
    text: "Herr Mannhold war kurzfristig zu erreichen, pünktlich und freundlich. Er hat das Problem sofort erkannt und schnell behoben. Gerne wieder",
    service: "Heizungsservice",
    date: "2021-01",
  },
  {
    id: "3",
    name: "Wilfried Peters",
    location: "Berlin",
    rating: 5,
    text: "Alles bestens, kann ich jederzeit weiterempfehlen. Sehr netter Kontakt und schnelle Hilfe. Danke.",
    service: "Heizungsservice",
    date: "2021-02",
  },
  {
    id: "4",
    name: "FRIEDRICH GÄRTNER",
    location: "Berlin",
    rating: 5,
    text: "Einhaltung der Terminabsprachen. Professionelle Abwicklung. Sympathisches Auftreten. Faire Preisgestaltung.",
    service: "Heizungsservice",
    date: "2022-11",
  },
  {
    id: "5",
    name: "julian l",
    location: "Berlin",
    rating: 5,
    text: "Schnelle Antworten, schnelles Angebot, freundliches Gespräch vor Ort mit vielen Tipps. Vielen Dank!",
    service: "Heizungsservice",
    date: "2023-04",
  }
];

export const googleRating = {
  average: 5,
  total: 7,
  lastUpdated: "2026-01-19",
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
