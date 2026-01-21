"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/data";
import { trackScrollDepth, trackCTAClick, trackPhoneClick } from "@/lib/analytics/conversion-events";

export const ScrollTriggeredCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Prüfe ob bereits dismissiert (sessionStorage)
    const dismissed = sessionStorage.getItem("scroll-cta-dismissed");
    if (dismissed === "true") {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      // Zeige CTA nach 50% Scroll
      const scrollPercentage =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage >= 50 && !isDismissed) {
        setIsVisible(true);
        trackScrollDepth(50);
      } else if (scrollPercentage < 30) {
        // Verstecke wieder wenn zu weit oben
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem("scroll-cta-dismissed", "true");
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-20 left-1/2 -translate-x-1/2 z-40 lg:bottom-24 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-white rounded-xl shadow-2xl border-2 border-primary/20 p-4 max-w-md mx-4 animate-in slide-in-from-bottom-4 duration-300">
        <div className="flex items-center gap-4">
          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="shrink-0 p-1 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Schließen"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>

          {/* Content */}
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900 mb-2">
              Kostenlose Beratung gewünscht?
            </p>
            <p className="text-xs text-muted-foreground mb-3">
              Bis zu 70% Förderung möglich – jetzt unverbindlich informieren!
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-2">
              <Button
                asChild
                size="sm"
                className="flex-1 bg-primary hover:bg-primary/90 text-white text-xs"
              >
                <Link
                  href="/kontakt"
                  onClick={() => trackCTAClick("scroll_triggered", "general", "scroll_50")}
                >
                  Jetzt anfragen
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="shrink-0 border-2 text-xs px-3"
              >
                <a
                  href={`tel:${company.contact.phone}`}
                  aria-label="Anrufen"
                  onClick={() => trackPhoneClick("general", "scroll_triggered")}
                >
                  <Phone className="h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
