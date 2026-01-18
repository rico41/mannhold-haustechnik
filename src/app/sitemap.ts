import type { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";
import { generateAllSEOPages } from "@/lib/data/programmatic";
import { blogArticles } from "@/lib/data/blog";

const baseUrl = "https://mannhold-haustechnik.de";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/leistungen`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/standorte`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/referenzen`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ratgeber`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  // Service pages (alte Struktur)
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/leistungen/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Location pages (alte Struktur)
  const locationPages = locations.map((location) => ({
    url: `${baseUrl}/standorte/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // ========================================
  // PROGRAMMATIC SEO PAGES
  // ========================================
  // Generiert ~112 Seiten für alle Service+Bezirk Kombinationen
  const programmaticPages = generateAllSEOPages().map((page) => {
    // Priorität basierend auf Service+Location Priority
    // High priority (2-3) = 0.95, Medium (4-5) = 0.9, Low (6+) = 0.85
    let priority = 0.85;
    if (page.priority <= 3) {
      priority = 0.95;
    } else if (page.priority <= 5) {
      priority = 0.9;
    }

    return {
      url: `${baseUrl}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority,
    };
  });

  // ========================================
  // BLOG / RATGEBER PAGES
  // ========================================
  const blogPages = blogArticles.map((article) => ({
    url: `${baseUrl}/ratgeber/${article.slug}`,
    lastModified: new Date(article.lastUpdated),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...locationPages,
    ...programmaticPages,
    ...blogPages,
  ];
}
