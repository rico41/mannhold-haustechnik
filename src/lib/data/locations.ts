export type Location = {
  id: string;
  slug: string;
  name: string;
  fullName: string;
  region: "berlin" | "brandenburg";
  zipCodes: string[];
  description: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  highlights: string[];
  nearbyAreas: string[];
};

export const locations: Location[] = [
  {
    id: "schoeneberg",
    slug: "berlin-schoeneberg",
    name: "Schöneberg",
    fullName: "Berlin-Schöneberg",
    region: "berlin",
    zipCodes: ["10777", "10779", "10781", "10783", "10823", "10825", "10827", "10829"],
    description:
      "Als ansässiges Unternehmen in der Kolonnenstraße sind wir Ihr lokaler Partner für Wärmepumpen und Heizungstechnik in Schöneberg. Schnelle Reaktionszeiten und persönlicher Service direkt vor Ort.",
    seoTitle: "Wärmepumpe & Heizung Schöneberg | Lokaler Meisterbetrieb",
    seoDescription:
      "Ihr Heizungsinstallateur in Berlin-Schöneberg ✓ Wärmepumpen ✓ Gasthermen ✓ Fußbodenheizung. Direkt vor Ort in der Kolonnenstraße. Jetzt Beratung anfragen!",
    keywords: [
      "Wärmepumpe Schöneberg",
      "Heizungsinstallateur Schöneberg",
      "Heizung Schöneberg",
      "Gasthermen Austausch Schöneberg",
      "Heizungsbauer 10827",
    ],
    highlights: [
      "Unser Firmensitz – kürzeste Anfahrtswege",
      "Lokale Referenzen im Kiez",
      "Schnelle Notfall-Reaktion",
    ],
    nearbyAreas: ["Friedenau", "Tempelhof", "Kreuzberg", "Wilmersdorf"],
  },
  {
    id: "steglitz",
    slug: "berlin-steglitz",
    name: "Steglitz",
    fullName: "Berlin-Steglitz",
    region: "berlin",
    zipCodes: ["12157", "12161", "12163", "12165", "12167", "12169"],
    description:
      "Steglitz mit seinen zahlreichen Ein- und Mehrfamilienhäusern ist ideal für den Umstieg auf Wärmepumpen. Wir beraten Sie zu Förderungen und finden die optimale Lösung für Ihr Zuhause.",
    seoTitle: "Wärmepumpe Steglitz | Installation & Service vom Fachbetrieb",
    seoDescription:
      "Wärmepumpen-Installation in Berlin-Steglitz ✓ Vaillant & OVUM Partner ✓ Bis zu 70% Förderung möglich ✓ Hydraulischer Abgleich. Kostenlose Beratung vor Ort!",
    keywords: [
      "Wärmepumpe Steglitz",
      "Heizung Steglitz",
      "Heizungsinstallateur Steglitz",
      "Gasthermen Austausch Steglitz",
      "Heizungsfirma 12163",
    ],
    highlights: [
      "Viele Einfamilienhäuser – ideal für Wärmepumpen",
      "Erfahrung mit Altbau-Sanierung",
      "Kurze Anfahrt von unserem Standort",
    ],
    nearbyAreas: ["Zehlendorf", "Lichterfelde", "Friedenau", "Lankwitz"],
  },
  {
    id: "zehlendorf",
    slug: "berlin-zehlendorf",
    name: "Zehlendorf",
    fullName: "Berlin-Zehlendorf",
    region: "berlin",
    zipCodes: ["14109", "14129", "14163", "14165", "14167", "14169"],
    description:
      "Die villenreichen Wohngebiete in Zehlendorf bieten optimale Voraussetzungen für Premium-Wärmepumpen. Unsere OVUM und Vaillant Lösungen passen perfekt zu anspruchsvollen Immobilien.",
    seoTitle: "Premium Wärmepumpe Zehlendorf | OVUM & Vaillant Spezialist",
    seoDescription:
      "Premium Wärmepumpen für Zehlendorf ✓ OVUM & Vaillant ✓ Villen & Einfamilienhäuser ✓ Heizlastberechnung. Ihr Experte für hochwertige Heizungslösungen!",
    keywords: [
      "Wärmepumpe Zehlendorf",
      "Premium Wärmepumpe Berlin",
      "Heizung Zehlendorf",
      "OVUM Wärmepumpe Zehlendorf",
      "Heizungsfirma 14163",
    ],
    highlights: [
      "Erfahrung mit hochwertigen Immobilien",
      "Premium OVUM Wärmepumpen",
      "Diskreter und professioneller Service",
    ],
    nearbyAreas: ["Steglitz", "Dahlem", "Wannsee", "Nikolassee"],
  },
  {
    id: "tempelhof",
    slug: "berlin-tempelhof",
    name: "Tempelhof",
    fullName: "Berlin-Tempelhof",
    region: "berlin",
    zipCodes: ["12099", "12101", "12103", "12105", "12107", "12109"],
    description:
      "Tempelhof mit seiner Mischung aus Altbauten und Nachkriegsbauten bietet vielfältige Möglichkeiten für moderne Heiztechnik. Wir finden die passende Lösung für jedes Gebäude.",
    seoTitle: "Heizungsaustausch Tempelhof | Wärmepumpe & Gastherme",
    seoDescription:
      "Heizungsmodernisierung in Berlin-Tempelhof ✓ Wärmepumpen ✓ Gasthermen-Austausch ✓ Fußbodenheizung. Altbau-Spezialisten mit Förderkompetenz!",
    keywords: [
      "Wärmepumpe Tempelhof",
      "Heizung austauschen Tempelhof",
      "Gastherme Tempelhof",
      "Heizungsinstallateur 12103",
      "Fußbodenheizung Tempelhof",
    ],
    highlights: [
      "Altbau-Expertise",
      "Flexible Lösungen für jeden Gebäudetyp",
      "Fördermittelberatung inklusive",
    ],
    nearbyAreas: ["Schöneberg", "Neukölln", "Mariendorf", "Kreuzberg"],
  },
  {
    id: "friedenau",
    slug: "berlin-friedenau",
    name: "Friedenau",
    fullName: "Berlin-Friedenau",
    region: "berlin",
    zipCodes: ["12159", "12161"],
    description:
      "Das charmante Friedenau mit seinen gepflegten Altbauten verdient moderne Heiztechnik, die zum Charakter der Gebäude passt. Wir beraten Sie zu schonenden Sanierungslösungen.",
    seoTitle: "Wärmepumpe Friedenau | Altbau-Sanierung vom Profi",
    seoDescription:
      "Heizungssanierung in Berlin-Friedenau ✓ Wärmepumpen für Altbau ✓ Hydraulischer Abgleich ✓ Denkmalschutz-gerechte Lösungen. Beratung vor Ort!",
    keywords: [
      "Wärmepumpe Friedenau",
      "Heizung Friedenau",
      "Altbausanierung Heizung",
      "Heizungsinstallateur 12159",
      "Hydraulischer Abgleich Friedenau",
    ],
    highlights: [
      "Spezialisiert auf Altbau-Sanierung",
      "Denkmalschutz-kompatible Lösungen",
      "Erfahrung mit Etagenheizungen",
    ],
    nearbyAreas: ["Schöneberg", "Steglitz", "Wilmersdorf"],
  },
  {
    id: "wilmersdorf",
    slug: "berlin-wilmersdorf",
    name: "Wilmersdorf",
    fullName: "Berlin-Wilmersdorf",
    region: "berlin",
    zipCodes: ["10707", "10709", "10711", "10713", "10715", "10717", "10719", "14197", "14199"],
    description:
      "Wilmersdorf vereint urbanes Leben mit gehobenen Wohnlagen. Unsere modernen Heizlösungen passen perfekt zu den Ansprüchen der Bewohner – effizient, leise und zukunftssicher.",
    seoTitle: "Heizungsmodernisierung Wilmersdorf | Wärmepumpen-Experte",
    seoDescription:
      "Moderne Heiztechnik für Berlin-Wilmersdorf ✓ Wärmepumpen ✓ Gasthermen ✓ Smart Home Integration. Ihr Partner für energieeffizientes Heizen!",
    keywords: [
      "Wärmepumpe Wilmersdorf",
      "Heizung Wilmersdorf",
      "Heizungsmodernisierung Berlin",
      "Gasthermen Austausch Wilmersdorf",
      "Heizungsfirma 10711",
    ],
    highlights: [
      "Gehobene Wohnlagen – passende Lösungen",
      "Leise Wärmepumpen für Wohngebiete",
      "Smart Home Integration möglich",
    ],
    nearbyAreas: ["Charlottenburg", "Schöneberg", "Friedenau", "Dahlem"],
  },
  {
    id: "potsdam",
    slug: "potsdam",
    name: "Potsdam",
    fullName: "Potsdam",
    region: "brandenburg",
    zipCodes: ["14467", "14469", "14471", "14473", "14476", "14478", "14480", "14482"],
    description:
      "Auch in Potsdam und Umgebung sind wir Ihr kompetenter Partner für Wärmepumpen und Heizungstechnik. Profitieren Sie von unserer Erfahrung und dem umfassenden Service.",
    seoTitle: "Wärmepumpe Potsdam | Heizungsinstallation vom Berliner Fachbetrieb",
    seoDescription:
      "Wärmepumpen-Installation in Potsdam ✓ Vaillant & OVUM Partner ✓ Fördermittelberatung ✓ Service aus Berlin. Jetzt Angebot für Potsdam anfragen!",
    keywords: [
      "Wärmepumpe Potsdam",
      "Heizungsinstallateur Potsdam",
      "Heizung Potsdam",
      "Heizungsfirma Potsdam",
      "Wärmepumpe Babelsberg",
    ],
    highlights: [
      "Service auch in Brandenburg",
      "Kurze Anfahrt von Berlin",
      "Lokale Referenzprojekte",
    ],
    nearbyAreas: ["Babelsberg", "Kleinmachnow", "Teltow", "Stahnsdorf"],
  },
];

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find((location) => location.slug === slug);
};

export const getBerlinLocations = (): Location[] => {
  return locations.filter((location) => location.region === "berlin");
};

export const getAllLocationSlugs = (): string[] => {
  return locations.map((location) => location.slug);
};
