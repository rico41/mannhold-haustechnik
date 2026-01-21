"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/data";
import { trackCTAClick, trackPhoneClick } from "@/lib/analytics/conversion-events";

export const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Prüfe ob bereits dismissiert (localStorage)
    const dismissed = localStorage.getItem("sticky-cta-dismissed");
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Zeige CTA nach kurzer Verzögerung
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem("sticky-cta-dismissed", "true");
    // Nach 1 Stunde wieder anzeigen
    setTimeout(() => {
      localStorage.removeItem("sticky-cta-dismissed");
    }, 60 * 60 * 1000);
  };

  if (isDismissed || !isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300 ease-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-white border-t-2 border-primary shadow-2xl px-4 py-3 safe-area-inset-bottom">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="shrink-0 p-1 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Schließen"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>

          {/* CTA Buttons */}
          <div className="flex-1 flex items-center gap-2">
              <Button
                asChild
                size="lg"
                className="flex-1 bg-primary hover:bg-primary/90 text-white h-12 text-base font-semibold"
              >
                <Link
                  href="/kontakt"
                  onClick={() => trackCTAClick("sticky_mobile", "mobile", "sticky_bottom")}
                >
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Kostenlose Beratung
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="shrink-0 border-2 border-primary text-primary hover:bg-primary/5 h-12 px-4"
              >
                <a
                  href={`tel:${company.contact.phone}`}
                  aria-label="Anrufen"
                  onClick={() => trackPhoneClick("general", "sticky_mobile")}
                >
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
