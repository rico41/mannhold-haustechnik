"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Phone, ArrowRight, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/data";
import { trackExitIntent, trackCTAClick, trackPhoneClick } from "@/lib/analytics/conversion-events";

export const ExitIntentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Prüfe ob bereits gezeigt (Session Storage)
    const shown = sessionStorage.getItem("exit-intent-shown");
    if (shown === "true") {
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Exit Intent: Maus bewegt sich nach oben aus dem Viewport
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exit-intent-shown", "true");
        trackExitIntent("exit_intent_modal");
      }
    };

    // Nur auf Desktop (Mobile hat kein Exit Intent)
    if (window.innerWidth >= 768) {
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-300"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in slide-in-from-bottom-4 duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Schließen"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F7941D]/10 rounded-full mb-6">
            <Percent className="h-5 w-5 text-[#F7941D]" />
            <span className="text-sm font-semibold text-[#F7941D]">
              Spezialangebot
            </span>
          </div>

          {/* Headline */}
          <h2
            id="exit-intent-title"
            className="text-2xl md:text-3xl font-bold font-heading mb-4"
          >
            Warten Sie! Noch nicht gehen
          </h2>

          {/* Text */}
          <p className="text-muted-foreground mb-6">
            Machen Sie den Eignungs-Check und erfahren Sie,{" "}
            <span className="font-semibold text-primary">
              ob Ihr Haus für eine Wärmepumpe geeignet ist
            </span>{" "}
            – inkl. bis zu 70% staatlicher Förderung. Wir helfen Ihnen bei der Antragstellung!
          </p>

          {/* Benefits */}
          <ul className="text-left space-y-2 mb-8">
            <li className="flex items-center gap-2 text-sm">
              <div className="w-5 h-5 rounded-full bg-[#F7941D]/10 flex items-center justify-center shrink-0">
                <span className="text-[#F7941D] text-xs font-bold">✓</span>
              </div>
              Kostenloser Eignungs-Check
            </li>
            <li className="flex items-center gap-2 text-sm">
              <div className="w-5 h-5 rounded-full bg-[#F7941D]/10 flex items-center justify-center shrink-0">
                <span className="text-[#F7941D] text-xs font-bold">✓</span>
              </div>
              Bis zu 70% Förderung möglich
            </li>
            <li className="flex items-center gap-2 text-sm">
              <div className="w-5 h-5 rounded-full bg-[#F7941D]/10 flex items-center justify-center shrink-0">
                <span className="text-[#F7941D] text-xs font-bold">✓</span>
              </div>
              Hilfestellung bei Förderanträgen
            </li>
            <li className="flex items-center gap-2 text-sm">
              <div className="w-5 h-5 rounded-full bg-[#F7941D]/10 flex items-center justify-center shrink-0">
                <span className="text-[#F7941D] text-xs font-bold">✓</span>
              </div>
              Unverbindliches Angebot
            </li>
          </ul>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <Button
              asChild
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white"
            >
              <Link
                href="/#eignungs-check"
                onClick={() => {
                  trackCTAClick("exit_intent_form", "general", "exit_intent_modal");
                  handleClose();
                }}
              >
                Machen Sie den Eignungs-Check
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full border-2"
            >
              <a
                href={`tel:${company.contact.phone}`}
                onClick={() => {
                  trackPhoneClick("general", "exit_intent_modal");
                  handleClose();
                }}
              >
                <Phone className="mr-2 h-5 w-5" />
                Direkt anrufen: {company.contact.phoneDisplay}
              </a>
            </Button>
          </div>

          {/* Trust Text */}
          <p className="mt-6 text-xs text-muted-foreground">
            Über 200 zufriedene Kunden in 2024 • Durchschnittliche Antwortzeit: 2h
          </p>
        </div>
      </div>
    </div>
  );
};
