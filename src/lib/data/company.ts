export const company = {
  name: "Mannhold Haustechnik GmbH",
  shortName: "Mannhold Haustechnik",
  slogan: "Sanitär • Heizung • Wartung",
  founded: 2020,
  gmbhSince: 2024,
  address: {
    street: "Kolonnenstraße 8",
    zip: "10827",
    city: "Berlin",
    district: "Schöneberg",
    country: "Deutschland",
  },
  contact: {
    phone: "+49 30 12345678",
    phoneDisplay: "030 123 456 78",
    email: "info@mannhold-haustechnik.de",
    website: "https://mannhold-haustechnik.de",
  },
  hours: {
    weekdays: "Mo - Do: 08:00 - 16:00 Uhr",
    friday: "Fr: 08:00 - 12:00 Uhr",
    saturday: "Sa: Geschlossen",
    sunday: "So: Geschlossen",
  },
  social: {
    instagram: "https://instagram.com/mannhold_haustechnik",
    facebook: "https://facebook.com/mannholdhaustechnik",
    linkedin: "https://linkedin.com/company/mannhold-haustechnik",
  },
  partners: ["Vaillant", "OVUM"],
  specializations: [
    "Wärmepumpen",
    "Gasthermen",
    "Heizlastberechnung",
    "Hydraulischer Abgleich",
    "Fußbodenheizung",
  ],
  serviceArea: [
    "Berlin Schöneberg",
    "Berlin Steglitz",
    "Berlin Zehlendorf",
    "Berlin Tempelhof",
    "Berlin Friedenau",
    "Berlin Wilmersdorf",
    "Potsdam",
  ],
} as const;

export type Company = typeof company;
