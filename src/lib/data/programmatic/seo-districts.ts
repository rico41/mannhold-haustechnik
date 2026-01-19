/**
 * SEO Stadtteile/Ortsteile für hyper-lokale Keyword-Optimierung
 * Diese sind granularer als die Bezirke (seo-locations.ts) und 
 * erlauben spezifische Stadtteil-Keywords wie "Wärmepumpe Friedenau"
 */

export type SEODistrict = {
  id: string;
  slug: string;
  name: string;
  fullName: string; // z.B. "Berlin-Friedenau"
  parentBezirkId: string; // Bezug zu seoLocations
  parentBezirkName: string;
  region: "berlin" | "brandenburg";
  priority: number; // 1 = höchste Priorität (nah am Standort)
  zipCodes: string[];
  // Lokale Details
  characteristics: string[];
  localIntro: string;
  // SEO-spezifisch
  searchVolume: "high" | "medium" | "low"; // Geschätztes Suchvolumen
};

export const seoDistricts: SEODistrict[] = [
  // ===== TEMPELHOF-SCHÖNEBERG (Unser Bezirk - Priority 1) =====
  {
    id: "schoeneberg",
    slug: "schoeneberg",
    name: "Schöneberg",
    fullName: "Berlin-Schöneberg",
    parentBezirkId: "tempelhof-schoeneberg",
    parentBezirkName: "Tempelhof-Schöneberg",
    region: "berlin",
    priority: 1,
    zipCodes: ["10777", "10779", "10781", "10783", "10823", "10825", "10827", "10829"],
    characteristics: [
      "Unser Firmensitz",
      "Urbanes Wohngebiet",
      "Gute Altbausubstanz",
      "Viele Etagenwohnungen",
    ],
    localIntro: "Als ansässiger Betrieb direkt in Schöneberg sind wir innerhalb weniger Minuten bei Ihnen.",
    searchVolume: "high",
  },
  {
    id: "friedenau",
    slug: "friedenau",
    name: "Friedenau",
    fullName: "Berlin-Friedenau",
    parentBezirkId: "tempelhof-schoeneberg",
    parentBezirkName: "Tempelhof-Schöneberg",
    region: "berlin",
    priority: 1,
    zipCodes: ["12159", "12161"],
    characteristics: [
      "Ruhiges Wohnviertel",
      "Viele Einfamilienhäuser",
      "Gründerzeitarchitektur",
      "Gehobenes Wohnen",
    ],
    localIntro: "Friedenau mit seinen charakteristischen Gründerzeithäusern liegt nur wenige Minuten von unserem Standort entfernt.",
    searchVolume: "medium",
  },
  {
    id: "tempelhof",
    slug: "tempelhof",
    name: "Tempelhof",
    fullName: "Berlin-Tempelhof",
    parentBezirkId: "tempelhof-schoeneberg",
    parentBezirkName: "Tempelhof-Schöneberg",
    region: "berlin",
    priority: 1,
    zipCodes: ["12099", "12101", "12103", "12105", "12107", "12109"],
    characteristics: [
      "Gemischte Bebauung",
      "Einfamilienhäuser",
      "Siedlungsbauten",
      "Gute Infrastruktur",
    ],
    localIntro: "Tempelhof erreichen wir von unserem Standort in wenigen Minuten – ideal für schnellen Service.",
    searchVolume: "high",
  },
  {
    id: "mariendorf",
    slug: "mariendorf",
    name: "Mariendorf",
    fullName: "Berlin-Mariendorf",
    parentBezirkId: "tempelhof-schoeneberg",
    parentBezirkName: "Tempelhof-Schöneberg",
    region: "berlin",
    priority: 1,
    zipCodes: ["12105", "12107", "12109"],
    characteristics: [
      "Wohngebiet",
      "Einfamilienhäuser",
      "Gute Wärmepumpen-Bedingungen",
      "Familienfreundlich",
    ],
    localIntro: "In Mariendorf sind wir regelmäßig für Wärmepumpen-Installationen und Heizungswartungen unterwegs.",
    searchVolume: "medium",
  },
  {
    id: "marienfelde",
    slug: "marienfelde",
    name: "Marienfelde",
    fullName: "Berlin-Marienfelde",
    parentBezirkId: "tempelhof-schoeneberg",
    parentBezirkName: "Tempelhof-Schöneberg",
    region: "berlin",
    priority: 2,
    zipCodes: ["12277", "12279"],
    characteristics: [
      "Industriegebiet und Wohnen",
      "Einfamilienhäuser",
      "Gute Wärmepumpen-Bedingungen",
    ],
    localIntro: "Marienfelde im Süden von Tempelhof-Schöneberg erreichen wir schnell und unkompliziert.",
    searchVolume: "low",
  },
  {
    id: "lichtenrade",
    slug: "lichtenrade",
    name: "Lichtenrade",
    fullName: "Berlin-Lichtenrade",
    parentBezirkId: "tempelhof-schoeneberg",
    parentBezirkName: "Tempelhof-Schöneberg",
    region: "berlin",
    priority: 2,
    zipCodes: ["12305", "12307", "12309"],
    characteristics: [
      "Am Stadtrand",
      "Viele Einfamilienhäuser",
      "Ideal für Wärmepumpen",
      "Ruhige Wohnlage",
    ],
    localIntro: "Lichtenrade bietet mit seinen Einfamilienhäusern ideale Voraussetzungen für Wärmepumpen.",
    searchVolume: "medium",
  },

  // ===== STEGLITZ-ZEHLENDORF (Priority 1) =====
  {
    id: "steglitz",
    slug: "steglitz",
    name: "Steglitz",
    fullName: "Berlin-Steglitz",
    parentBezirkId: "steglitz-zehlendorf",
    parentBezirkName: "Steglitz-Zehlendorf",
    region: "berlin",
    priority: 1,
    zipCodes: ["12157", "12161", "12163", "12165", "12167", "12169"],
    characteristics: [
      "Gehobenes Wohngebiet",
      "Viele Einfamilienhäuser",
      "Gute Altbausubstanz",
      "Beliebte Wohnlage",
    ],
    localIntro: "Steglitz mit seinen attraktiven Wohnlagen erreichen wir von Schöneberg in nur 10-15 Minuten.",
    searchVolume: "high",
  },
  {
    id: "zehlendorf",
    slug: "zehlendorf",
    name: "Zehlendorf",
    fullName: "Berlin-Zehlendorf",
    parentBezirkId: "steglitz-zehlendorf",
    parentBezirkName: "Steglitz-Zehlendorf",
    region: "berlin",
    priority: 1,
    zipCodes: ["14163", "14165", "14167", "14169"],
    characteristics: [
      "Villenviertel",
      "Gehobenes Wohnen",
      "Große Grundstücke",
      "Premium-Lage",
    ],
    localIntro: "Die villenreichen Wohngebiete in Zehlendorf sind ideal für Premium-Wärmepumpen von OVUM und Vaillant.",
    searchVolume: "high",
  },
  {
    id: "lichterfelde",
    slug: "lichterfelde",
    name: "Lichterfelde",
    fullName: "Berlin-Lichterfelde",
    parentBezirkId: "steglitz-zehlendorf",
    parentBezirkName: "Steglitz-Zehlendorf",
    region: "berlin",
    priority: 1,
    zipCodes: ["12203", "12205", "12207", "12209", "12247", "12249"],
    characteristics: [
      "Villen und Einfamilienhäuser",
      "Grüne Wohnlage",
      "Ideal für Wärmepumpen",
      "Gehobene Ansprüche",
    ],
    localIntro: "Lichterfelde bietet mit seinen Einfamilienhäusern und Villen perfekte Bedingungen für moderne Wärmepumpen.",
    searchVolume: "medium",
  },
  {
    id: "dahlem",
    slug: "dahlem",
    name: "Dahlem",
    fullName: "Berlin-Dahlem",
    parentBezirkId: "steglitz-zehlendorf",
    parentBezirkName: "Steglitz-Zehlendorf",
    region: "berlin",
    priority: 1,
    zipCodes: ["14195"],
    characteristics: [
      "Exklusive Villenlage",
      "Universitätsviertel",
      "Große Grundstücke",
      "Premium-Wohnlagen",
    ],
    localIntro: "Dahlem mit seinen exklusiven Villen ist ideal für hochwertige Wärmepumpen-Lösungen.",
    searchVolume: "medium",
  },
  {
    id: "wannsee",
    slug: "wannsee",
    name: "Wannsee",
    fullName: "Berlin-Wannsee",
    parentBezirkId: "steglitz-zehlendorf",
    parentBezirkName: "Steglitz-Zehlendorf",
    region: "berlin",
    priority: 2,
    zipCodes: ["14109"],
    characteristics: [
      "Am Wasser gelegen",
      "Exklusive Villen",
      "Naturnahes Wohnen",
      "Premium-Lage",
    ],
    localIntro: "Die exklusiven Villen am Wannsee eignen sich hervorragend für moderne Wärmepumpen-Systeme.",
    searchVolume: "low",
  },
  {
    id: "nikolassee",
    slug: "nikolassee",
    name: "Nikolassee",
    fullName: "Berlin-Nikolassee",
    parentBezirkId: "steglitz-zehlendorf",
    parentBezirkName: "Steglitz-Zehlendorf",
    region: "berlin",
    priority: 2,
    zipCodes: ["14129"],
    characteristics: [
      "Villenviertel",
      "Waldnähe",
      "Exklusives Wohnen",
      "Große Grundstücke",
    ],
    localIntro: "Nikolassee bietet mit seinen Villen ideale Voraussetzungen für effiziente Wärmepumpen.",
    searchVolume: "low",
  },
  {
    id: "lankwitz",
    slug: "lankwitz",
    name: "Lankwitz",
    fullName: "Berlin-Lankwitz",
    parentBezirkId: "steglitz-zehlendorf",
    parentBezirkName: "Steglitz-Zehlendorf",
    region: "berlin",
    priority: 2,
    zipCodes: ["12247", "12249"],
    characteristics: [
      "Familienfreundlich",
      "Einfamilienhäuser",
      "Ruhige Wohnlage",
      "Gute Infrastruktur",
    ],
    localIntro: "Lankwitz mit seinen Einfamilienhäusern ist ein beliebtes Gebiet für Wärmepumpen-Installationen.",
    searchVolume: "medium",
  },

  // ===== CHARLOTTENBURG-WILMERSDORF (Priority 1) =====
  {
    id: "charlottenburg",
    slug: "charlottenburg",
    name: "Charlottenburg",
    fullName: "Berlin-Charlottenburg",
    parentBezirkId: "charlottenburg-wilmersdorf",
    parentBezirkName: "Charlottenburg-Wilmersdorf",
    region: "berlin",
    priority: 1,
    zipCodes: ["10585", "10587", "10589", "10623", "10625", "10627", "10629"],
    characteristics: [
      "City West",
      "Altbauquartiere",
      "Gehobenes Wohnen",
      "Gute Infrastruktur",
    ],
    localIntro: "Charlottenburg mit seinen charakteristischen Altbauten erreichen wir in etwa 15-20 Minuten.",
    searchVolume: "high",
  },
  {
    id: "wilmersdorf",
    slug: "wilmersdorf",
    name: "Wilmersdorf",
    fullName: "Berlin-Wilmersdorf",
    parentBezirkId: "charlottenburg-wilmersdorf",
    parentBezirkName: "Charlottenburg-Wilmersdorf",
    region: "berlin",
    priority: 1,
    zipCodes: ["10707", "10709", "10711", "10713", "10715", "10717", "10719"],
    characteristics: [
      "Gehobenes Wohnviertel",
      "Altbaubestand",
      "Internationale Bewohner",
      "Zentrale Lage",
    ],
    localIntro: "Wilmersdorf liegt nur wenige Minuten von unserem Standort entfernt – ideal für schnellen Service.",
    searchVolume: "high",
  },
  {
    id: "schmargendorf",
    slug: "schmargendorf",
    name: "Schmargendorf",
    fullName: "Berlin-Schmargendorf",
    parentBezirkId: "charlottenburg-wilmersdorf",
    parentBezirkName: "Charlottenburg-Wilmersdorf",
    region: "berlin",
    priority: 2,
    zipCodes: ["14193", "14199"],
    characteristics: [
      "Villen und Einfamilienhäuser",
      "Ruhige Wohnlage",
      "Gehobenes Wohnen",
      "Grün",
    ],
    localIntro: "Schmargendorf bietet mit seinen Villen optimale Bedingungen für Wärmepumpen.",
    searchVolume: "low",
  },
  {
    id: "grunewald",
    slug: "grunewald",
    name: "Grunewald",
    fullName: "Berlin-Grunewald",
    parentBezirkId: "charlottenburg-wilmersdorf",
    parentBezirkName: "Charlottenburg-Wilmersdorf",
    region: "berlin",
    priority: 2,
    zipCodes: ["14193"],
    characteristics: [
      "Exklusive Villenlage",
      "Waldnähe",
      "Premium-Wohnen",
      "Große Grundstücke",
    ],
    localIntro: "Grunewald mit seinen exklusiven Villen ist ideal für Premium-Wärmepumpen von OVUM.",
    searchVolume: "medium",
  },
  {
    id: "westend",
    slug: "westend",
    name: "Westend",
    fullName: "Berlin-Westend",
    parentBezirkId: "charlottenburg-wilmersdorf",
    parentBezirkName: "Charlottenburg-Wilmersdorf",
    region: "berlin",
    priority: 2,
    zipCodes: ["14050", "14052", "14053", "14055", "14057", "14059"],
    characteristics: [
      "Villenviertel",
      "Gehobenes Wohnen",
      "Nähe Olympiastadion",
      "Grüne Wohnlage",
    ],
    localIntro: "Westend bietet mit seinen Villen und Einfamilienhäusern ideale Voraussetzungen für Wärmepumpen.",
    searchVolume: "medium",
  },

  // ===== NEUKÖLLN (Priority 2) =====
  {
    id: "neukoelln-nord",
    slug: "neukoelln",
    name: "Neukölln",
    fullName: "Berlin-Neukölln",
    parentBezirkId: "neukoelln",
    parentBezirkName: "Neukölln",
    region: "berlin",
    priority: 2,
    zipCodes: ["12043", "12045", "12047", "12049", "12051", "12053", "12055", "12057", "12059"],
    characteristics: [
      "Dicht besiedelt",
      "Altbauquartiere",
      "Aufstrebendes Viertel",
      "Vielfältig",
    ],
    localIntro: "Neukölln erreichen wir von Schöneberg in nur 10-15 Minuten.",
    searchVolume: "high",
  },
  {
    id: "britz",
    slug: "britz",
    name: "Britz",
    fullName: "Berlin-Britz",
    parentBezirkId: "neukoelln",
    parentBezirkName: "Neukölln",
    region: "berlin",
    priority: 2,
    zipCodes: ["12347", "12349", "12351", "12359"],
    characteristics: [
      "Siedlungen",
      "Einfamilienhäuser",
      "Grün",
      "Familienfreundlich",
    ],
    localIntro: "Britz mit seinen Siedlungshäusern bietet gute Voraussetzungen für Wärmepumpen-Installationen.",
    searchVolume: "medium",
  },
  {
    id: "rudow",
    slug: "rudow",
    name: "Rudow",
    fullName: "Berlin-Rudow",
    parentBezirkId: "neukoelln",
    parentBezirkName: "Neukölln",
    region: "berlin",
    priority: 2,
    zipCodes: ["12353", "12355", "12357"],
    characteristics: [
      "Einfamilienhäuser",
      "Am Stadtrand",
      "Ideal für Wärmepumpen",
      "Ruhig",
    ],
    localIntro: "Rudow im Süden von Neukölln bietet mit seinen Einfamilienhäusern ideale Wärmepumpen-Bedingungen.",
    searchVolume: "medium",
  },

  // ===== FRIEDRICHSHAIN-KREUZBERG (Priority 2) =====
  {
    id: "kreuzberg",
    slug: "kreuzberg",
    name: "Kreuzberg",
    fullName: "Berlin-Kreuzberg",
    parentBezirkId: "friedrichshain-kreuzberg",
    parentBezirkName: "Friedrichshain-Kreuzberg",
    region: "berlin",
    priority: 2,
    zipCodes: ["10961", "10963", "10965", "10967", "10969", "10997", "10999"],
    characteristics: [
      "Altbauquartiere",
      "Urban und lebendig",
      "Dicht besiedelt",
      "Kreatives Viertel",
    ],
    localIntro: "Kreuzberg grenzt direkt an Schöneberg – wir sind in wenigen Minuten bei Ihnen.",
    searchVolume: "high",
  },
  {
    id: "friedrichshain",
    slug: "friedrichshain",
    name: "Friedrichshain",
    fullName: "Berlin-Friedrichshain",
    parentBezirkId: "friedrichshain-kreuzberg",
    parentBezirkName: "Friedrichshain-Kreuzberg",
    region: "berlin",
    priority: 2,
    zipCodes: ["10243", "10245", "10247", "10249"],
    characteristics: [
      "Altbaubestand",
      "Jung und dynamisch",
      "Dicht besiedelt",
      "Aufstrebend",
    ],
    localIntro: "Friedrichshain erreichen wir in etwa 15-20 Minuten von unserem Standort.",
    searchVolume: "high",
  },

  // ===== POTSDAM (Priority 1) =====
  {
    id: "potsdam-zentrum",
    slug: "potsdam-zentrum",
    name: "Potsdam Zentrum",
    fullName: "Potsdam Zentrum",
    parentBezirkId: "potsdam",
    parentBezirkName: "Potsdam",
    region: "brandenburg",
    priority: 1,
    zipCodes: ["14467", "14469"],
    characteristics: [
      "Landeshauptstadt",
      "UNESCO Welterbe",
      "Historische Altstadt",
      "Gehobenes Wohnen",
    ],
    localIntro: "Auch in Potsdam Zentrum sind wir Ihr kompetenter Partner für Wärmepumpen und Heizungstechnik.",
    searchVolume: "high",
  },
  {
    id: "babelsberg",
    slug: "babelsberg",
    name: "Babelsberg",
    fullName: "Potsdam-Babelsberg",
    parentBezirkId: "potsdam",
    parentBezirkName: "Potsdam",
    region: "brandenburg",
    priority: 1,
    zipCodes: ["14482"],
    characteristics: [
      "Villen und Einfamilienhäuser",
      "Filmstadt",
      "Grüne Wohnlage",
      "Beliebt bei Familien",
    ],
    localIntro: "Babelsberg mit seinen Villen bietet ideale Voraussetzungen für moderne Wärmepumpen.",
    searchVolume: "medium",
  },
  {
    id: "bornstedt",
    slug: "bornstedt",
    name: "Bornstedt",
    fullName: "Potsdam-Bornstedt",
    parentBezirkId: "potsdam",
    parentBezirkName: "Potsdam",
    region: "brandenburg",
    priority: 2,
    zipCodes: ["14469"],
    characteristics: [
      "Neubaugebiete",
      "Einfamilienhäuser",
      "Familienfreundlich",
      "Modern",
    ],
    localIntro: "Bornstedt mit seinen Neubauten ist ideal für effiziente Wärmepumpen-Systeme.",
    searchVolume: "low",
  },
  {
    id: "kleinmachnow",
    slug: "kleinmachnow",
    name: "Kleinmachnow",
    fullName: "Kleinmachnow",
    parentBezirkId: "kleinmachnow",
    parentBezirkName: "Potsdam-Mittelmark",
    region: "brandenburg",
    priority: 1,
    zipCodes: ["14532"],
    characteristics: [
      "Speckgürtel",
      "Viele Einfamilienhäuser",
      "Gehobenes Wohnen",
      "Ideal für Wärmepumpen",
    ],
    localIntro: "Kleinmachnow im Berliner Speckgürtel erreichen wir in etwa 20-25 Minuten.",
    searchVolume: "medium",
  },
  {
    id: "teltow",
    slug: "teltow",
    name: "Teltow",
    fullName: "Teltow",
    parentBezirkId: "kleinmachnow",
    parentBezirkName: "Potsdam-Mittelmark",
    region: "brandenburg",
    priority: 2,
    zipCodes: ["14513"],
    characteristics: [
      "Wachsende Stadt",
      "Einfamilienhäuser",
      "Gute Anbindung",
      "Familienfreundlich",
    ],
    localIntro: "Teltow erreichen wir schnell über die Autobahn – ideal für Kunden im südlichen Speckgürtel.",
    searchVolume: "medium",
  },
  {
    id: "stahnsdorf",
    slug: "stahnsdorf",
    name: "Stahnsdorf",
    fullName: "Stahnsdorf",
    parentBezirkId: "kleinmachnow",
    parentBezirkName: "Potsdam-Mittelmark",
    region: "brandenburg",
    priority: 2,
    zipCodes: ["14532"],
    characteristics: [
      "Ländlich geprägt",
      "Einfamilienhäuser",
      "Ruhige Wohnlage",
      "Ideal für Wärmepumpen",
    ],
    localIntro: "Stahnsdorf bietet mit seinen Einfamilienhäusern perfekte Bedingungen für Wärmepumpen.",
    searchVolume: "low",
  },
];

// Hilfsfunktionen

export const getSEODistrictBySlug = (slug: string): SEODistrict | undefined => {
  return seoDistricts.find((district) => district.slug === slug);
};

export const getSEODistrictsByBezirk = (bezirkId: string): SEODistrict[] => {
  return seoDistricts.filter((district) => district.parentBezirkId === bezirkId);
};

export const getBerlinDistricts = (): SEODistrict[] => {
  return seoDistricts.filter((district) => district.region === "berlin");
};

export const getBrandenburgDistricts = (): SEODistrict[] => {
  return seoDistricts.filter((district) => district.region === "brandenburg");
};

export const getPriorityDistricts = (priority: number = 1): SEODistrict[] => {
  return seoDistricts.filter((district) => district.priority === priority);
};

export const getAllDistrictSlugs = (): string[] => {
  return seoDistricts.map((district) => district.slug);
};

// Generiert Keywords für einen Stadtteil
export const generateDistrictKeywords = (
  districtName: string,
  serviceName: string
): string[] => {
  return [
    `${serviceName} ${districtName}`,
    `${serviceName} installieren ${districtName}`,
    `${serviceName} ${districtName} Kosten`,
    `Heizungsinstallateur ${districtName}`,
    `Heizung ${districtName}`,
  ];
};
