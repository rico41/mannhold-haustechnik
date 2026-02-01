"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  hasConsent,
  saveConsentPreferences,
  acceptAll,
  acceptEssentialOnly,
} from "@/lib/consent/cookie-consent";

const BANNER_ID = "cookie-consent-banner";

export const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const consent = hasConsent();
    setIsVisible(!consent);

    const handleShowSettings = () => setIsVisible(true);
    window.addEventListener("show-cookie-settings", handleShowSettings);
    return () =>
      window.removeEventListener("show-cookie-settings", handleShowSettings);
  }, []);

  const handleAcceptAll = () => {
    acceptAll();
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    acceptEssentialOnly();
    setIsVisible(false);
  };

  const handleSaveSettings = () => {
    saveConsentPreferences({ analytics, marketing });
    setIsVisible(false);
  };

  const handleToggleSettings = () => {
    setShowSettings((prev) => !prev);
  };

  if (!isVisible) return null;

  return (
    <div
      id={BANNER_ID}
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 bg-white border-t-2 border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
    >
      <div className="container-custom max-w-4xl mx-auto">
        <div className="flex flex-col gap-4">
          {/* Header */}
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0089CF]/10">
              <Cookie className="h-5 w-5 text-[#0089CF]" aria-hidden />
            </div>
            <div className="flex-1 min-w-0">
              <h2
                id="cookie-consent-title"
                className="text-lg font-semibold font-heading text-gray-900"
              >
                Cookies & Datenschutz
              </h2>
              <p
                id="cookie-consent-description"
                className="mt-1 text-sm text-gray-600"
              >
                Wir verwenden Cookies, um unsere Website zu betreiben und Ihr
                Erlebnis zu verbessern. Einige sind für den Betrieb notwendig,
                andere helfen uns bei der Analyse und Werbung. Sie entscheiden,
                welche Cookies wir verwenden dürfen. Details finden Sie in unserer{" "}
                <Link
                  href="/datenschutz"
                  className="text-[#0089CF] hover:underline font-medium"
                >
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Settings Toggle */}
          <button
            type="button"
            onClick={handleToggleSettings}
            className="flex items-center gap-2 text-sm font-medium text-[#0089CF] hover:text-[#0089CF]/80 transition-colors"
            aria-expanded={showSettings}
          >
            {showSettings ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Einstellungen ausblenden
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                Cookie-Einstellungen anpassen
              </>
            )}
          </button>

          {/* Cookie Categories (DSGVO: Opt-in, keine vorab angekreuzten Boxen) */}
          {showSettings && (
            <div className="space-y-4 p-4 rounded-lg bg-gray-50 border border-gray-200">
              <p className="text-sm font-medium text-gray-700">
                Sie können Ihre Einwilligung für jede Kategorie einzeln erteilen:
              </p>

              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-[#0089CF] focus:ring-[#0089CF]"
                    aria-describedby="analytics-desc"
                  />
                  <div>
                    <span className="text-sm font-medium text-gray-900 group-hover:text-gray-700">
                      Analyse (z. B. Google Analytics)
                    </span>
                    <p id="analytics-desc" className="text-xs text-gray-600 mt-0.5">
                      Hilft uns zu verstehen, wie Besucher die Website nutzen.
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-[#0089CF] focus:ring-[#0089CF]"
                    aria-describedby="marketing-desc"
                  />
                  <div>
                    <span className="text-sm font-medium text-gray-900 group-hover:text-gray-700">
                      Marketing (z. B. Google Ads, Facebook Pixel)
                    </span>
                    <p id="marketing-desc" className="text-xs text-gray-600 mt-0.5">
                      Ermöglicht personalisierte Werbung.
                    </p>
                  </div>
                </label>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={handleSaveSettings}
                className="w-full sm:w-auto"
              >
                Auswahl speichern
              </Button>
            </div>
          )}

          {/* Action Buttons - DSGVO: Beide Optionen gleichwertig darstellen */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              onClick={handleEssentialOnly}
              className="flex-1 sm:flex-none sm:min-w-[180px] border-2"
            >
              Nur notwendige
            </Button>
            <Button 
              onClick={handleAcceptAll}
              className="flex-1 sm:flex-none sm:min-w-[180px]"
            >
              Alle akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
