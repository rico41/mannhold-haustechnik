import { seoServices, type SEOService } from "./seo-services";
import { seoLocations, type SEOLocation } from "./seo-locations";
import { seoDistricts, type SEODistrict } from "./seo-districts";

export type SEOPage = {
  slug: string;
  service: SEOService;
  location: SEOLocation;
  // Generated content
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  keywords: string[];
  // Computed
  priority: number;
  url: string;
};

// NEU: Typ für Stadtteil-Seiten
export type SEODistrictPage = {
  slug: string;
  service: SEOService;
  district: SEODistrict;
  // Generated content
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  keywords: string[];
  // Computed
  priority: number;
  url: string;
  // Parent-Bezirk für Verlinkung
  parentBezirkSlug: string;
};

/**
 * Ersetzt Platzhalter in Templates
 */
const replacePlaceholders = (template: string, location: SEOLocation): string => {
  return template
    .replace(/{bezirk}/g, location.name)
    .replace(/{shortName}/g, location.shortName)
    .replace(/{region}/g, location.region === "berlin" ? "Berlin" : "Brandenburg")
    .replace(/{distanceInfo}/g, location.distanceInfo);
};

/**
 * Generiert alle SEO-Seiten-Kombinationen
 */
export const generateAllSEOPages = (): SEOPage[] => {
  const pages: SEOPage[] = [];

  for (const service of seoServices) {
    for (const location of seoLocations) {
      const slug = `${service.slug}-${location.slug}`;
      
      // Kombinierte Priorität (niedriger = wichtiger)
      const priority = service.priority + location.priority;

      const page: SEOPage = {
        slug,
        service,
        location,
        title: replacePlaceholders(service.titleTemplate, location),
        metaDescription: replacePlaceholders(service.metaDescriptionTemplate, location),
        h1: replacePlaceholders(service.h1Template, location),
        intro: replacePlaceholders(service.introTemplate, location) + " " + location.localIntro,
        keywords: service.keywordTemplates.map((kw) => replacePlaceholders(kw, location)),
        priority,
        url: `/${slug}`,
      };

      pages.push(page);
    }
  }

  // Sortiere nach Priorität (niedrigste zuerst = wichtigste)
  return pages.sort((a, b) => a.priority - b.priority);
};

/**
 * Generiert FAQ Items für eine Seite
 */
export const generateFAQForPage = (
  service: SEOService,
  location: SEOLocation
): Array<{ question: string; answer: string }> => {
  return service.faqTemplates.map((faq) => ({
    question: replacePlaceholders(faq.questionTemplate, location),
    answer: replacePlaceholders(faq.answerTemplate, location),
  }));
};

/**
 * Findet eine Seite anhand des Slugs
 */
export const findSEOPage = (slug: string): SEOPage | undefined => {
  const allPages = generateAllSEOPages();
  return allPages.find((page) => page.slug === slug);
};

/**
 * Parst einen Slug in Service und Location
 */
export const parseSlug = (
  slug: string
): { service: SEOService; location: SEOLocation } | null => {
  // Versuche, den Slug zu parsen
  for (const service of seoServices) {
    if (slug.startsWith(service.slug + "-")) {
      const locationSlug = slug.substring(service.slug.length + 1);
      const location = seoLocations.find((loc) => loc.slug === locationSlug);
      if (location) {
        return { service, location };
      }
    }
  }
  return null;
};

/**
 * Generiert alle möglichen Slugs für generateStaticParams
 */
export const getAllSEOSlugs = (): string[] => {
  const slugs: string[] = [];
  for (const service of seoServices) {
    for (const location of seoLocations) {
      slugs.push(`${service.slug}-${location.slug}`);
    }
  }
  return slugs;
};

/**
 * Findet verwandte Seiten (gleicher Service, andere Location)
 */
export const getRelatedLocationPages = (
  currentSlug: string,
  limit: number = 4
): SEOPage[] => {
  const current = parseSlug(currentSlug);
  if (!current) return [];

  return generateAllSEOPages()
    .filter(
      (page) =>
        page.service.slug === current.service.slug &&
        page.location.slug !== current.location.slug
    )
    .slice(0, limit);
};

/**
 * Findet verwandte Seiten (gleiche Location, andere Services)
 */
export const getRelatedServicePages = (
  currentSlug: string,
  limit: number = 4
): SEOPage[] => {
  const current = parseSlug(currentSlug);
  if (!current) return [];

  return generateAllSEOPages()
    .filter(
      (page) =>
        page.location.slug === current.location.slug &&
        page.service.slug !== current.service.slug
    )
    .slice(0, limit);
};

/**
 * Statistiken über die generierten Seiten
 */
export const getSEOStats = () => {
  const allPages = generateAllSEOPages();
  const allDistrictPages = generateAllDistrictPages();
  const berlinPages = allPages.filter((p) => p.location.region === "berlin");
  const brandenburgPages = allPages.filter(
    (p) => p.location.region === "brandenburg"
  );

  return {
    totalPages: allPages.length,
    totalDistrictPages: allDistrictPages.length,
    totalAllPages: allPages.length + allDistrictPages.length,
    berlinPages: berlinPages.length,
    brandenburgPages: brandenburgPages.length,
    servicesCount: seoServices.length,
    locationsCount: seoLocations.length,
    districtsCount: seoDistricts.length,
    highPriorityPages: allPages.filter((p) => p.priority <= 3).length,
  };
};

// ========================================
// STADTTEIL-SEITEN (Hyper-Local SEO)
// ========================================

/**
 * Ersetzt Platzhalter in Templates für Stadtteile
 */
const replaceDistrictPlaceholders = (template: string, district: SEODistrict): string => {
  return template
    .replace(/{bezirk}/g, district.name)
    .replace(/{shortName}/g, district.name)
    .replace(/{region}/g, district.region === "berlin" ? "Berlin" : "Brandenburg")
    .replace(/{distanceInfo}/g, district.localIntro);
};

/**
 * Generiert alle Stadtteil-SEO-Seiten-Kombinationen
 * Nur für Priority 1-2 Services und Priority 1-2 Stadtteile
 */
export const generateAllDistrictPages = (): SEODistrictPage[] => {
  const pages: SEODistrictPage[] = [];

  // Nur Priority 1-2 Services für Stadtteile (um die Anzahl zu begrenzen)
  const priorityServices = seoServices.filter((s) => s.priority <= 2);
  // Nur Priority 1-2 Stadtteile
  const priorityDistricts = seoDistricts.filter((d) => d.priority <= 2);

  for (const service of priorityServices) {
    for (const district of priorityDistricts) {
      const slug = `${service.slug}-${district.slug}`;
      
      // Kombinierte Priorität
      const priority = service.priority + district.priority;

      const page: SEODistrictPage = {
        slug,
        service,
        district,
        title: `${service.name} ${district.name} | ${district.fullName} | Mannhold`,
        metaDescription: `${service.name} in ${district.fullName} ✓ Lokaler Fachbetrieb ✓ ${district.characteristics[0]} ✓ Schneller Service. Jetzt Angebot für ${district.name} anfordern!`,
        h1: `${service.name} in ${district.name}`,
        intro: replaceDistrictPlaceholders(service.introTemplate, district) + " " + district.localIntro,
        keywords: [
          `${service.name} ${district.name}`,
          `${service.name} ${district.fullName}`,
          `${service.name} installieren ${district.name}`,
          `Heizungsinstallateur ${district.name}`,
          `Heizung ${district.name}`,
        ],
        priority,
        url: `/stadtteil/${slug}`,
        parentBezirkSlug: district.parentBezirkId,
      };

      pages.push(page);
    }
  }

  return pages.sort((a, b) => a.priority - b.priority);
};

/**
 * Generiert alle Stadtteil-Slugs für generateStaticParams
 */
export const getAllDistrictSEOSlugs = (): string[] => {
  const slugs: string[] = [];
  const priorityServices = seoServices.filter((s) => s.priority <= 2);
  const priorityDistricts = seoDistricts.filter((d) => d.priority <= 2);

  for (const service of priorityServices) {
    for (const district of priorityDistricts) {
      slugs.push(`${service.slug}-${district.slug}`);
    }
  }
  return slugs;
};

/**
 * Parst einen Stadtteil-Slug in Service und District
 */
export const parseDistrictSlug = (
  slug: string
): { service: SEOService; district: SEODistrict } | null => {
  const priorityServices = seoServices.filter((s) => s.priority <= 2);
  
  for (const service of priorityServices) {
    if (slug.startsWith(service.slug + "-")) {
      const districtSlug = slug.substring(service.slug.length + 1);
      const district = seoDistricts.find((d) => d.slug === districtSlug);
      if (district) {
        return { service, district };
      }
    }
  }
  return null;
};

/**
 * Generiert FAQ Items für eine Stadtteil-Seite
 */
export const generateFAQForDistrictPage = (
  service: SEOService,
  district: SEODistrict
): Array<{ question: string; answer: string }> => {
  return service.faqTemplates.map((faq) => ({
    question: replaceDistrictPlaceholders(faq.questionTemplate, district),
    answer: replaceDistrictPlaceholders(faq.answerTemplate, district),
  }));
};

/**
 * Findet verwandte Stadtteil-Seiten (gleicher Service, andere Stadtteile im gleichen Bezirk)
 */
export const getRelatedDistrictPages = (
  currentSlug: string,
  limit: number = 4
): SEODistrictPage[] => {
  const current = parseDistrictSlug(currentSlug);
  if (!current) return [];

  return generateAllDistrictPages()
    .filter(
      (page) =>
        page.service.slug === current.service.slug &&
        page.district.slug !== current.district.slug &&
        page.district.parentBezirkId === current.district.parentBezirkId
    )
    .slice(0, limit);
};

// Export der Basis-Daten
export { seoServices, seoLocations, seoDistricts };
export type { SEOService, SEOLocation, SEODistrict };
