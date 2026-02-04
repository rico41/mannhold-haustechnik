import { seoLocations, type SEOLocation } from "@/lib/data/programmatic/seo-locations";

export type ServiceAreaResult = {
  isCovered: boolean;
  location?: {
    id: string;
    name: string;
    shortName: string;
    region: "berlin" | "brandenburg";
    bezirk: string;
    distanceInfo: string;
  };
};

/**
 * Prüft, ob eine PLZ im Leistungsgebiet liegt.
 * @param zipCode - Die zu prüfende Postleitzahl (5 Ziffern)
 * @returns ServiceAreaResult mit isCovered und optional dem zugehörigen Standort
 */
export const checkServiceArea = (zipCode: string): ServiceAreaResult => {
  // PLZ normalisieren (nur Ziffern, führende Leerzeichen entfernen)
  const normalizedZip = zipCode.trim().replace(/\D/g, "");

  // PLZ muss 5 Ziffern haben
  if (normalizedZip.length !== 5) {
    return { isCovered: false };
  }

  // Suche nach der PLZ in allen Standorten
  const matchingLocation = seoLocations.find((location) =>
    location.zipCodes.includes(normalizedZip)
  );

  if (matchingLocation) {
    return {
      isCovered: true,
      location: {
        id: matchingLocation.id,
        name: matchingLocation.name,
        shortName: matchingLocation.shortName,
        region: matchingLocation.region,
        bezirk: matchingLocation.bezirk,
        distanceInfo: matchingLocation.distanceInfo,
      },
    };
  }

  return { isCovered: false };
};

/**
 * Gibt alle PLZ im Leistungsgebiet zurück (für Validierung).
 */
export const getAllServiceAreaZipCodes = (): string[] => {
  const allZipCodes = new Set<string>();
  seoLocations.forEach((location) => {
    location.zipCodes.forEach((zip) => allZipCodes.add(zip));
  });
  return Array.from(allZipCodes);
};

/**
 * Prüft, ob eine PLZ ein gültiges Format hat.
 */
export const isValidGermanZipCode = (zipCode: string): boolean => {
  const normalizedZip = zipCode.trim().replace(/\D/g, "");
  return normalizedZip.length === 5 && /^[0-9]{5}$/.test(normalizedZip);
};
