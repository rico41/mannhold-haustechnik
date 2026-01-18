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

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Familie Müller",
    location: "Berlin-Steglitz",
    rating: 5,
    text: "Herr Mannhold und sein Team haben unsere alte Gasheizung durch eine moderne Vaillant Wärmepumpe ersetzt. Von der Beratung bis zur Installation alles top! Die Förderanträge wurden ebenfalls unterstützt. Absolute Empfehlung!",
    service: "Wärmepumpe",
    date: "2024-11",
  },
  {
    id: "2",
    name: "Thomas K.",
    location: "Berlin-Schöneberg",
    rating: 5,
    text: "Schnelle und unkomplizierte Wartung unserer Fußbodenheizung. Die Spülung hat wahre Wunder gewirkt – endlich wieder gleichmäßig warm in allen Räumen. Sehr professioneller und freundlicher Service.",
    service: "Fußbodenheizung",
    date: "2024-10",
  },
  {
    id: "3",
    name: "Dr. Schneider",
    location: "Berlin-Zehlendorf",
    rating: 5,
    text: "Wir haben uns für eine OVUM Premium Wärmepumpe entschieden und sind begeistert. Extrem leise und effizient. Das Team hat sauber gearbeitet und alles bestens erklärt. Top Beratung zur Förderung!",
    service: "OVUM Wärmepumpe",
    date: "2024-09",
  },
  {
    id: "4",
    name: "Sabine W.",
    location: "Potsdam",
    rating: 5,
    text: "Trotz der Anfahrt aus Berlin wurden wir super betreut. Der hydraulische Abgleich wurde fachgerecht durchgeführt und dokumentiert – wichtig für unsere Förderung. Sehr zufrieden!",
    service: "Hydraulischer Abgleich",
    date: "2024-08",
  },
  {
    id: "5",
    name: "Michael R.",
    location: "Berlin-Tempelhof",
    rating: 5,
    text: "Unsere alte Gastherme musste dringend ersetzt werden. Mannhold Haustechnik hat innerhalb einer Woche ein neues Brennwertgerät installiert. Faire Preise und pünktliche Ausführung.",
    service: "Gastherme",
    date: "2024-07",
  },
  {
    id: "6",
    name: "Andrea & Peter L.",
    location: "Berlin-Friedenau",
    rating: 5,
    text: "Die Heizlastberechnung wurde sehr gründlich durchgeführt. Auf dieser Basis konnten wir unsere Wärmepumpe optimal dimensionieren. Kompetente Beratung und faire Konditionen.",
    service: "Heizlastberechnung",
    date: "2024-06",
  },
];

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
