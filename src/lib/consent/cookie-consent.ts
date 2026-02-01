/**
 * DSGVO-konforme Cookie-Einwilligung
 *
 * Speichert die Einwilligung in localStorage.
 * Tracking-Skripte (GA4, Facebook Pixel, Google Ads) laden erst nach expliziter Einwilligung.
 */

const STORAGE_KEY = "mannhold-cookie-consent";
const CONSENT_VERSION = 1; // Bei Änderungen an Kategorien erhöhen

export type ConsentPreferences = {
  essential: boolean; // Immer true, erforderlich für Website-Funktion
  analytics: boolean; // Google Analytics
  marketing: boolean; // Facebook Pixel, Google Ads
  version: number;
  timestamp: string;
};

const DEFAULT_PREFERENCES: ConsentPreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  version: CONSENT_VERSION,
  timestamp: new Date().toISOString(),
};

const getStoredPreferences = (): ConsentPreferences | null => {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored) as ConsentPreferences;
    // Bei Version-Änderung Consent neu abfragen
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
};

export const getConsentPreferences = (): ConsentPreferences | null => {
  return getStoredPreferences();
};

export const hasConsent = (): boolean => {
  return getStoredPreferences() !== null;
};

export const hasAnalyticsConsent = (): boolean => {
  const prefs = getStoredPreferences();
  return prefs?.analytics ?? false;
};

export const hasMarketingConsent = (): boolean => {
  const prefs = getStoredPreferences();
  return prefs?.marketing ?? false;
};

export const saveConsentPreferences = (
  preferences: Partial<Pick<ConsentPreferences, "analytics" | "marketing">>
): void => {
  const stored = getStoredPreferences();
  const updated: ConsentPreferences = {
    ...(stored ?? DEFAULT_PREFERENCES),
    essential: true,
    analytics: preferences.analytics ?? stored?.analytics ?? false,
    marketing: preferences.marketing ?? stored?.marketing ?? false,
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
  };
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent("consent-updated", { detail: updated }));
  }
};

export const acceptAll = (): void => {
  saveConsentPreferences({ analytics: true, marketing: true });
};

export const acceptEssentialOnly = (): void => {
  saveConsentPreferences({ analytics: false, marketing: false });
};

export const revokeConsent = (): void => {
  saveConsentPreferences({ analytics: false, marketing: false });
};
