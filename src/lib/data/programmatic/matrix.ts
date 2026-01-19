import { seoServices, type SEOService } from "./seo-services";
import { seoLocations, type SEOLocation } from "./seo-locations";

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
  const berlinPages = allPages.filter((p) => p.location.region === "berlin");
  const brandenburgPages = allPages.filter(
    (p) => p.location.region === "brandenburg"
  );

  return {
    totalPages: allPages.length,
    berlinPages: berlinPages.length,
    brandenburgPages: brandenburgPages.length,
    servicesCount: seoServices.length,
    locationsCount: seoLocations.length,
    highPriorityPages: allPages.filter((p) => p.priority <= 3).length,
  };
};

// Export der Basis-Daten
export { seoServices, seoLocations };
export type { SEOService, SEOLocation };
