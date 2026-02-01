"use client";

import { useState, useEffect } from "react";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { RetargetingPixels } from "@/components/analytics/RetargetingPixels";
import { CookieConsentBanner } from "@/components/common/CookieConsentBanner";
import {
  hasAnalyticsConsent,
  hasMarketingConsent,
} from "@/lib/consent/cookie-consent";

/**
 * Wrapper: Lädt Google Analytics & Retargeting Pixels erst nach DSGVO-konformer Einwilligung.
 * Zeigt Cookie-Consent-Banner wenn keine Einwilligung vorliegt.
 */
export const ConsentAwareAnalytics = () => {
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setAnalyticsConsent(hasAnalyticsConsent());
    setMarketingConsent(hasMarketingConsent());

    const handleConsentUpdate = () => {
      setAnalyticsConsent(hasAnalyticsConsent());
      setMarketingConsent(hasMarketingConsent());
    };

    window.addEventListener("consent-updated", handleConsentUpdate);
    return () => window.removeEventListener("consent-updated", handleConsentUpdate);
  }, []);

  return (
    <>
      <CookieConsentBanner />
      {mounted && (
        <>
          {analyticsConsent && <GoogleAnalytics />}
          {marketingConsent && <RetargetingPixels />}
        </>
      )}
    </>
  );
};
