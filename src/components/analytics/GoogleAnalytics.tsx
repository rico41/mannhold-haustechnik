"use client";

import Script from "next/script";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const GoogleAnalytics = () => {
  // Nur laden, wenn eine GA ID konfiguriert ist
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
};

// Event Tracking Funktionen für Local SEO
export const trackContactFormSubmission = (location?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "generate_lead", {
      event_category: "Contact",
      event_label: location || "General",
      value: 1,
    });
  }
};

export const trackPhoneClick = (location?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "click_to_call", {
      event_category: "Contact",
      event_label: location || "General",
      value: 1,
    });
  }
};

export const trackServicePageView = (serviceName: string, location: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "view_service", {
      event_category: "Service",
      event_label: `${serviceName} - ${location}`,
      service_name: serviceName,
      location: location,
    });
  }
};

export const trackLocationPageView = (location: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "view_location", {
      event_category: "Location",
      event_label: location,
    });
  }
};

export const trackFAQExpand = (question: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "faq_expand", {
      event_category: "Engagement",
      event_label: question.substring(0, 100),
    });
  }
};

export const trackCTAClick = (ctaType: string, location?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "cta_click", {
      event_category: "Conversion",
      event_label: ctaType,
      location: location || "General",
    });
  }
};

// TypeScript Deklaration für gtag
declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}
