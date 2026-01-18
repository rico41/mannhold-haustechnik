export type SEOLocation = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  region: "berlin" | "brandenburg";
  bezirk: string; // Offizieller Bezirksname
  priority: number;
  zipCodes: string[];
  population: number;
  // Lokale Details
  characteristics: string[];
  highlights: string[];
  nearbyLocations: string[];
  // Fahrtzeit vom Standort Schöneberg
  distanceInfo: string;
  // SEO spezifische Texte
  localIntro: string;
  areaDescription: string;
};

export const seoLocations: SEOLocation[] = [
  // ===== BERLIN BEZIRKE =====
  {
    id: "tempelhof-schoeneberg",
    slug: "tempelhof-schoeneberg",
    name: "Tempelhof-Schöneberg",
    shortName: "Tempelhof-Schöneberg",
    region: "berlin",
    bezirk: "Tempelhof-Schöneberg",
    priority: 1,
    zipCodes: [
      "10777", "10779", "10781", "10783", "10823", "10825", "10827", "10829",
      "12099", "12101", "12103", "12105", "12107", "12109", "10965", "12157",
    ],
    population: 350000,
    characteristics: [
      "Unser Firmensitz",
      "Gemischte Wohnbebauung",
      "Altbau und Nachkriegsbauten",
      "Gute ÖPNV-Anbindung",
    ],
    highlights: [
      "Kürzeste Anfahrtswege – wir sind vor Ort!",
      "Viele lokale Referenzprojekte",
      "Schnellste Reaktionszeiten",
    ],
    nearbyLocations: ["Steglitz-Zehlendorf", "Neukölln", "Friedrichshain-Kreuzberg", "Charlottenburg-Wilmersdorf"],
    distanceInfo: "Unser Standort – sofort verfügbar",
    localIntro: "Als ansässiger Betrieb in der Kolonnenstraße sind wir Ihr direkter Ansprechpartner vor Ort.",
    areaDescription: "Tempelhof-Schöneberg vereint urbanes Leben mit ruhigen Wohnvierteln. Von unserem Firmensitz aus erreichen wir Sie schnell und unkompliziert.",
  },
  {
    id: "steglitz-zehlendorf",
    slug: "steglitz-zehlendorf",
    name: "Steglitz-Zehlendorf",
    shortName: "Steglitz-Zehlendorf",
    region: "berlin",
    bezirk: "Steglitz-Zehlendorf",
    priority: 1,
    zipCodes: [
      "12157", "12161", "12163", "12165", "12167", "12169",
      "14109", "14129", "14163", "14165", "14167", "14169", "12203", "12205", "12207", "12209", "12247", "12249",
    ],
    population: 310000,
    characteristics: [
      "Hohe Eigenheimquote",
      "Villenviertel",
      "Gehobene Wohnlagen",
      "Viel Grün",
    ],
    highlights: [
      "Ideale Bedingungen für Wärmepumpen",
      "Viele Einfamilienhäuser",
      "Premium-Kundschaft",
    ],
    nearbyLocations: ["Tempelhof-Schöneberg", "Charlottenburg-Wilmersdorf", "Potsdam"],
    distanceInfo: "Nur 10-15 Minuten Anfahrt",
    localIntro: "Die villenreichen Wohngebiete in Steglitz-Zehlendorf sind ideal für moderne Wärmepumpen-Lösungen.",
    areaDescription: "Steglitz-Zehlendorf ist geprägt von Einfamilienhäusern, Villen und viel Grün – optimale Voraussetzungen für effiziente Heiztechnik.",
  },
  {
    id: "charlottenburg-wilmersdorf",
    slug: "charlottenburg-wilmersdorf",
    name: "Charlottenburg-Wilmersdorf",
    shortName: "Charlottenburg-Wilmersdorf",
    region: "berlin",
    bezirk: "Charlottenburg-Wilmersdorf",
    priority: 1,
    zipCodes: [
      "10585", "10587", "10589", "10623", "10625", "10627", "10629",
      "10707", "10709", "10711", "10713", "10715", "10717", "10719",
      "14050", "14052", "14053", "14055", "14057", "14059", "14193", "14195", "14197", "14199",
    ],
    population: 340000,
    characteristics: [
      "Gehobenes Wohnen",
      "Altbaubestände",
      "City West",
      "Internationale Bewohner",
    ],
    highlights: [
      "Anspruchsvolle Kundschaft",
      "Hochwertige Altbausanierung",
      "Smart Home Integration",
    ],
    nearbyLocations: ["Tempelhof-Schöneberg", "Spandau", "Mitte", "Steglitz-Zehlendorf"],
    distanceInfo: "15-20 Minuten Anfahrt",
    localIntro: "In Charlottenburg-Wilmersdorf treffen Altbaucharme und moderne Ansprüche aufeinander – wir finden die passende Heizlösung.",
    areaDescription: "Der Bezirk vereint historische Altbauten mit modernem Wohnen. Unsere Lösungen passen sich den besonderen Anforderungen an.",
  },
  {
    id: "neukoelln",
    slug: "neukoelln",
    name: "Neukölln",
    shortName: "Neukölln",
    region: "berlin",
    bezirk: "Neukölln",
    priority: 2,
    zipCodes: [
      "12043", "12045", "12047", "12049", "12051", "12053", "12055", "12057", "12059",
      "12347", "12349", "12351", "12353", "12355", "12357", "12359",
    ],
    population: 330000,
    characteristics: [
      "Dicht besiedelt",
      "Mischbebauung",
      "Aufstrebend",
      "Vielfältig",
    ],
    highlights: [
      "Großes Modernisierungspotenzial",
      "Viele Altbauten",
      "Wachsender Markt",
    ],
    nearbyLocations: ["Tempelhof-Schöneberg", "Treptow-Köpenick", "Friedrichshain-Kreuzberg"],
    distanceInfo: "10-15 Minuten Anfahrt",
    localIntro: "Neukölln bietet großes Potenzial für Heizungsmodernisierung – vom Altbau bis zum Neubau.",
    areaDescription: "Der aufstrebende Bezirk Neukölln ist geprägt von Gründerzeitbauten und Neubauprojekten mit vielfältigen Heizungsanforderungen.",
  },
  {
    id: "friedrichshain-kreuzberg",
    slug: "friedrichshain-kreuzberg",
    name: "Friedrichshain-Kreuzberg",
    shortName: "Friedrichshain-Kreuzberg",
    region: "berlin",
    bezirk: "Friedrichshain-Kreuzberg",
    priority: 2,
    zipCodes: [
      "10243", "10245", "10247", "10249",
      "10961", "10963", "10965", "10967", "10969", "10997", "10999",
    ],
    population: 290000,
    characteristics: [
      "Urbanes Zentrum",
      "Altbauquartiere",
      "Jung und dynamisch",
      "Hohe Dichte",
    ],
    highlights: [
      "Spezialisiert auf Etagenheizungen",
      "Altbausanierung",
      "Denkmalschutz-Erfahrung",
    ],
    nearbyLocations: ["Tempelhof-Schöneberg", "Neukölln", "Mitte", "Treptow-Köpenick"],
    distanceInfo: "10-15 Minuten Anfahrt",
    localIntro: "Die Altbauquartiere in Friedrichshain-Kreuzberg erfordern sensible Heizungslösungen – unsere Spezialität.",
    areaDescription: "Friedrichshain-Kreuzberg ist geprägt von historischen Altbauten, die besondere Anforderungen an moderne Heiztechnik stellen.",
  },
  {
    id: "spandau",
    slug: "spandau",
    name: "Spandau",
    shortName: "Spandau",
    region: "berlin",
    bezirk: "Spandau",
    priority: 2,
    zipCodes: [
      "13581", "13583", "13585", "13587", "13589", "13591", "13593", "13595", "13597", "13599",
      "14089",
    ],
    population: 245000,
    characteristics: [
      "Eigenständiger Charakter",
      "Viele Einfamilienhäuser",
      "Wasserreich",
      "Familienfreundlich",
    ],
    highlights: [
      "Hohe Eigenheimquote",
      "Ideal für Wärmepumpen",
      "Ruhige Wohnlagen",
    ],
    nearbyLocations: ["Charlottenburg-Wilmersdorf", "Reinickendorf"],
    distanceInfo: "20-30 Minuten Anfahrt",
    localIntro: "Spandau mit seinen vielen Einfamilienhäusern bietet ideale Voraussetzungen für Wärmepumpen-Installationen.",
    areaDescription: "Der westliche Bezirk Spandau ist geprägt von Eigenheimen und bietet optimale Bedingungen für moderne Heiztechnik.",
  },
  {
    id: "reinickendorf",
    slug: "reinickendorf",
    name: "Reinickendorf",
    shortName: "Reinickendorf",
    region: "berlin",
    bezirk: "Reinickendorf",
    priority: 3,
    zipCodes: [
      "13403", "13405", "13407", "13409",
      "13435", "13437", "13439",
      "13465", "13467", "13469",
      "13503", "13505", "13507", "13509",
    ],
    population: 265000,
    characteristics: [
      "Nördlich gelegen",
      "Grüner Bezirk",
      "Viele Siedlungen",
      "Familienfreundlich",
    ],
    highlights: [
      "Siedlungshäuser ideal für Wärmepumpen",
      "Guter Mix aus Alt- und Neubau",
      "Wachsender Markt",
    ],
    nearbyLocations: ["Pankow", "Spandau", "Mitte"],
    distanceInfo: "25-35 Minuten Anfahrt",
    localIntro: "Reinickendorf im Norden Berlins bietet mit seinen Siedlungen und Eigenheimen viel Potenzial für Heizungsmodernisierung.",
    areaDescription: "Der grüne Bezirk Reinickendorf ist geprägt von Siedlungshäusern und Einfamilienhäusern aus verschiedenen Epochen.",
  },
  {
    id: "pankow",
    slug: "pankow",
    name: "Pankow",
    shortName: "Pankow",
    region: "berlin",
    bezirk: "Pankow",
    priority: 3,
    zipCodes: [
      "10405", "10407", "10409", "10435", "10437", "10439",
      "13051", "13053", "13086", "13088", "13089",
      "13125", "13127", "13129",
      "13156", "13158", "13159",
      "13187", "13189",
    ],
    population: 410000,
    characteristics: [
      "Größter Bezirk",
      "Prenzlauer Berg",
      "Familien-Hotspot",
      "Dynamisch wachsend",
    ],
    highlights: [
      "Größter Berliner Bezirk",
      "Vielfältige Bausubstanz",
      "Starke Nachfrage",
    ],
    nearbyLocations: ["Mitte", "Friedrichshain-Kreuzberg", "Lichtenberg", "Reinickendorf"],
    distanceInfo: "20-30 Minuten Anfahrt",
    localIntro: "Pankow ist Berlins größter Bezirk mit vielfältiger Bausubstanz – vom Prenzlauer Berg Altbau bis zum Pankower Einfamilienhaus.",
    areaDescription: "Der beliebte Bezirk Pankow vereint urbanes Leben im Prenzlauer Berg mit ruhigeren Wohngebieten im Norden.",
  },
  {
    id: "mitte",
    slug: "mitte",
    name: "Mitte",
    shortName: "Mitte",
    region: "berlin",
    bezirk: "Mitte",
    priority: 3,
    zipCodes: [
      "10115", "10117", "10119", "10178", "10179",
      "10551", "10553", "10555", "10557", "10559",
      "13347", "13349", "13351", "13353", "13355", "13357", "13359",
    ],
    population: 385000,
    characteristics: [
      "Zentral",
      "Gemischt",
      "Geschäftsbereich",
      "Historisch",
    ],
    highlights: [
      "Gewerbliche Kunden",
      "Altbausanierung",
      "Zentrale Lage",
    ],
    nearbyLocations: ["Friedrichshain-Kreuzberg", "Pankow", "Charlottenburg-Wilmersdorf"],
    distanceInfo: "15-25 Minuten Anfahrt",
    localIntro: "Berlin-Mitte bietet eine Mischung aus Wohn- und Geschäftsgebäuden mit vielfältigen Heizungsanforderungen.",
    areaDescription: "Im Herzen Berlins treffen historische Bauten auf moderne Architektur – jedes Projekt erfordert individuelle Lösungen.",
  },
  {
    id: "treptow-koepenick",
    slug: "treptow-koepenick",
    name: "Treptow-Köpenick",
    shortName: "Treptow-Köpenick",
    region: "berlin",
    bezirk: "Treptow-Köpenick",
    priority: 3,
    zipCodes: [
      "12435", "12437", "12439", "12459",
      "12487", "12489", "12524", "12526", "12527", "12555", "12557", "12559",
      "12587", "12589",
    ],
    population: 275000,
    characteristics: [
      "Wasserreich",
      "Grün",
      "Aufstrebend",
      "Familienfreundlich",
    ],
    highlights: [
      "Wachsender Bezirk",
      "Viele Neubauprojekte",
      "Naturnahes Wohnen",
    ],
    nearbyLocations: ["Neukölln", "Friedrichshain-Kreuzberg", "Lichtenberg"],
    distanceInfo: "20-35 Minuten Anfahrt",
    localIntro: "Treptow-Köpenick im Südosten Berlins wächst stetig und bietet viele Möglichkeiten für moderne Heiztechnik.",
    areaDescription: "Der grüne und wasserreiche Bezirk Treptow-Köpenick vereint Altbau, Plattenbau und moderne Neubauten.",
  },
  {
    id: "marzahn-hellersdorf",
    slug: "marzahn-hellersdorf",
    name: "Marzahn-Hellersdorf",
    shortName: "Marzahn-Hellersdorf",
    region: "berlin",
    bezirk: "Marzahn-Hellersdorf",
    priority: 3,
    zipCodes: [
      "12619", "12621", "12623", "12627", "12629",
      "12679", "12681", "12683", "12685", "12687", "12689",
    ],
    population: 270000,
    characteristics: [
      "Großsiedlungen",
      "Modernisierungsbedarf",
      "Familienfreundlich",
      "Grün",
    ],
    highlights: [
      "Großes Modernisierungspotenzial",
      "Plattenbausanierung",
      "Wachsende Nachfrage",
    ],
    nearbyLocations: ["Lichtenberg", "Treptow-Köpenick"],
    distanceInfo: "30-40 Minuten Anfahrt",
    localIntro: "Marzahn-Hellersdorf bietet großes Potenzial für die energetische Modernisierung der Plattenbaubestände.",
    areaDescription: "Die Großsiedlungen in Marzahn-Hellersdorf werden kontinuierlich modernisiert – auch im Bereich Heiztechnik.",
  },
  {
    id: "lichtenberg",
    slug: "lichtenberg",
    name: "Lichtenberg",
    shortName: "Lichtenberg",
    region: "berlin",
    bezirk: "Lichtenberg",
    priority: 3,
    zipCodes: [
      "10315", "10317", "10318", "10319",
      "10365", "10367", "10369",
      "13051", "13053", "13055", "13057", "13059",
    ],
    population: 295000,
    characteristics: [
      "Ostberlin",
      "Aufstrebend",
      "Gut angebunden",
      "Vielfältig",
    ],
    highlights: [
      "Sanierungsbedarf",
      "Gute Anbindung",
      "Wachsender Markt",
    ],
    nearbyLocations: ["Pankow", "Marzahn-Hellersdorf", "Friedrichshain-Kreuzberg"],
    distanceInfo: "25-35 Minuten Anfahrt",
    localIntro: "Lichtenberg im Osten Berlins bietet eine Mischung aus Altbau und Plattenbau mit vielfältigem Modernisierungsbedarf.",
    areaDescription: "Der aufstrebende Bezirk Lichtenberg entwickelt sich dynamisch und bietet viele Chancen für Heizungsmodernisierung.",
  },

  // ===== BRANDENBURG =====
  {
    id: "potsdam",
    slug: "potsdam",
    name: "Potsdam",
    shortName: "Potsdam",
    region: "brandenburg",
    bezirk: "Potsdam",
    priority: 1,
    zipCodes: [
      "14467", "14469", "14471", "14473", "14476", "14478", "14480", "14482",
    ],
    population: 185000,
    characteristics: [
      "Landeshauptstadt",
      "UNESCO Welterbe",
      "Gehobenes Wohnen",
      "Wachsend",
    ],
    highlights: [
      "Brandenburger Landeshauptstadt",
      "Viele Eigenheime",
      "Starke Nachfrage",
    ],
    nearbyLocations: ["Steglitz-Zehlendorf", "Kleinmachnow"],
    distanceInfo: "25-35 Minuten Anfahrt",
    localIntro: "Auch in Potsdam und Umgebung sind wir Ihr kompetenter Partner für Wärmepumpen und moderne Heiztechnik.",
    areaDescription: "Die Landeshauptstadt Potsdam bietet mit ihren Villenvierteln und Neubaugebieten ideale Voraussetzungen für Wärmepumpen.",
  },
  {
    id: "kleinmachnow",
    slug: "kleinmachnow",
    name: "Kleinmachnow / Teltow / Stahnsdorf",
    shortName: "Kleinmachnow",
    region: "brandenburg",
    bezirk: "Potsdam-Mittelmark",
    priority: 2,
    zipCodes: ["14532", "14513", "14476"],
    population: 60000,
    characteristics: [
      "Speckgürtel",
      "Hohe Lebensqualität",
      "Viele Eigenheime",
      "Kaufkräftig",
    ],
    highlights: [
      "Berliner Speckgürtel",
      "Premium-Wohnlagen",
      "Ideale Wärmepumpen-Bedingungen",
    ],
    nearbyLocations: ["Steglitz-Zehlendorf", "Potsdam"],
    distanceInfo: "20-30 Minuten Anfahrt",
    localIntro: "Der südwestliche Berliner Speckgürtel mit Kleinmachnow, Teltow und Stahnsdorf ist ideal für moderne Wärmepumpen-Lösungen.",
    areaDescription: "Die beliebten Vororte südwestlich von Berlin bieten mit ihren Einfamilienhäusern perfekte Voraussetzungen für Wärmepumpen.",
  },
];

export const getSEOLocationBySlug = (slug: string): SEOLocation | undefined => {
  return seoLocations.find((location) => location.slug === slug);
};

export const getBerlinSEOLocations = (): SEOLocation[] => {
  return seoLocations.filter((location) => location.region === "berlin");
};

export const getAllSEOLocationSlugs = (): string[] => {
  return seoLocations.map((location) => location.slug);
};
