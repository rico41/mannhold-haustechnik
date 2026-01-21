"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Clock, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type UrgencyBannerProps = {
  message?: string;
  ctaText?: string;
  ctaHref?: string;
  dismissible?: boolean;
  className?: string;
};

export const UrgencyBanner = ({
  message = "Förderung 2024 läuft aus – Jetzt noch sichern!",
  ctaText = "Jetzt informieren",
  ctaHref = "/kontakt",
  dismissible = true,
  className = "",
}: UrgencyBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Prüfe ob bereits dismissiert (localStorage)
    const dismissed = localStorage.getItem("urgency-banner-dismissed");
    if (dismissed === "true") {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem("urgency-banner-dismissed", "true");
    // Nach 24 Stunden wieder anzeigen
    setTimeout(() => {
      localStorage.removeItem("urgency-banner-dismissed");
    }, 24 * 60 * 60 * 1000);
  };

  if (isDismissed || !isVisible) {
    return null;
  }

  return (
    <div
      className={`bg-gradient-to-r from-[#F7941D] to-[#F7941D]/90 text-white py-3 px-4 ${className} ${
        isVisible ? "animate-fade-in-down" : "hidden"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-center gap-4 relative">
          {/* Icon */}
          <Clock className="h-5 w-5 shrink-0 animate-pulse" />

          {/* Message */}
          <div className="flex-1 text-center">
            <p className="text-sm md:text-base font-medium">{message}</p>
          </div>

          {/* CTA */}
          <Button
            asChild
            size="sm"
            variant="secondary"
            className="shrink-0 bg-white text-[#F7941D] hover:bg-white/90 hidden sm:flex"
          >
            <Link href={ctaHref}>
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          {/* Close Button */}
          {dismissible && (
            <button
              onClick={handleDismiss}
              className="shrink-0 p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Banner schließen"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
