/**
 * Zentrale Type-Definitionen für Analytics
 * 
 * Diese Datei definiert globale Types für:
 * - Google Analytics (gtag)
 * - Facebook Pixel (fbq)
 * - Google Ads Conversion Tracking
 */

declare global {
  interface Window {
    // Google Analytics & Google Ads
    gtag?: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];

    // Facebook Pixel
    fbq?: (
      command: string,
      event: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export {};
