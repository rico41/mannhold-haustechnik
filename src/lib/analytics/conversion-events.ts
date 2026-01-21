/**
 * Conversion Tracking Events für Google Analytics 4
 * 
 * Diese Funktionen tracken wichtige Conversion-Events wie:
 * - Form Submissions
 * - Phone Clicks
 * - CTA Clicks
 * - Scroll Depth
 * - Exit Intent
 */

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Trackt Form Submission
 */
export const trackFormSubmit = (formType: "contact" | "quote" | "newsletter", data?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "form_submit", {
      event_category: "Conversion",
      event_label: formType,
      value: 1,
      ...data,
    });

    // GA4 Conversion Event
    window.gtag("event", "generate_lead", {
      event_category: "Contact",
      event_label: formType,
      value: 1,
    });
  }
};

/**
 * Trackt Phone Click
 */
export const trackPhoneClick = (location?: string, source?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "phone_click", {
      event_category: "Conversion",
      event_label: location || "general",
      source: source || "unknown",
      value: 1,
    });

    // GA4 Call Extension Event
    window.gtag("event", "click_to_call", {
      event_category: "Contact",
      event_label: location || "General",
      value: 1,
    });
  }
};

/**
 * Trackt CTA Click
 */
export const trackCTAClick = (ctaType: string, location?: string, source?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "cta_click", {
      event_category: "Conversion",
      event_label: ctaType,
      location: location || "general",
      source: source || "unknown",
      value: 1,
    });
  }
};

/**
 * Trackt Scroll Depth
 */
export const trackScrollDepth = (depth: 25 | 50 | 75 | 100) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "scroll_depth", {
      event_category: "Engagement",
      event_label: `${depth}%`,
      value: depth,
    });
  }
};

/**
 * Trackt Exit Intent
 */
export const trackExitIntent = (source?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "exit_intent", {
      event_category: "Engagement",
      event_label: source || "unknown",
      value: 1,
    });
  }
};

/**
 * Trackt Form Field Focus (Form Abandonment Tracking)
 */
export const trackFormFieldFocus = (fieldName: string, formType: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "form_field_focus", {
      event_category: "Form Engagement",
      event_label: `${formType}_${fieldName}`,
    });
  }
};

/**
 * Trackt Form Abandonment (wenn User das Formular verlässt ohne Submit)
 */
export const trackFormAbandonment = (formType: string, fieldsFilled: number) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "form_abandonment", {
      event_category: "Conversion",
      event_label: formType,
      value: fieldsFilled,
    });
  }
};

/**
 * Trackt WhatsApp Click
 */
export const trackWhatsAppClick = (location?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "whatsapp_click", {
      event_category: "Conversion",
      event_label: location || "general",
      value: 1,
    });
  }
};

/**
 * Trackt Video Play (wenn Videos vorhanden)
 */
export const trackVideoPlay = (videoTitle: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "video_play", {
      event_category: "Engagement",
      event_label: videoTitle,
      value: 1,
    });
  }
};
