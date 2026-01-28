"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, CheckCircle2, Star, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/data";
import { GoogleReviewsBadge } from "@/components/reviews/GoogleReviewsBadge";
import { useGoogleReviews } from "@/lib/hooks/useGoogleReviews";
import { trackCTAClick, trackPhoneClick } from "@/lib/analytics/conversion-events";

const benefits = [
  "Bis zu 70% Förderung möglich",
  "Vaillant & OVUM Partner",
  "Hilfestellung bei Förderanträgen",
];

export const FlyerHero = () => {
  const { data } = useGoogleReviews();
  const totalReviews = data?.totalReviews || 200;
  const averageRating = data?.averageRating || 5.0;
  const offerUrl = company.offerSoftware?.url;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-8 pb-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0089CF]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-[#F7941D]/10 to-transparent" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            {/* Partner Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0089CF]/10 text-[#0089CF] text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0089CF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0089CF]"></span>
              </span>
              Zertifizierter Partner
            </div>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.round(averageRating)
                        ? "fill-[#F7941D] text-[#F7941D]"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <span className="font-semibold text-gray-900">{averageRating.toFixed(1)}</span>
              <span className="text-gray-600">({totalReviews}+)</span>
            </div>

            {/* Customer Count Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0089CF]/5 text-[#0089CF] text-sm font-medium">
              <Users className="h-4 w-4" />
              <span>200+ Installationen 2024</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight mb-4">
            <span className="text-foreground">Wärmepumpe Berlin: </span>
            <span className="text-gradient">Vaillant & OVUM Installation</span>
            <br />
            <span className="text-foreground">mit bis zu 70% Förderung</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Professionelle Heizungsmodernisierung mit Vaillant und OVUM Premium Wärmepumpen. 
            Bis zu 70% staatliche Förderung möglich – wir helfen beim Antrag.
          </p>

          {/* Benefits */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 mb-8">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm md:text-base">
                <CheckCircle2 className="h-5 w-5 text-[#F7941D] shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* Primary CTA - Angebotssoftware */}
          {offerUrl && (
            <div className="mb-6">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-lg px-8 h-14 min-w-[280px]"
                onClick={() => trackCTAClick("flyer_offer_link", "flyer", "hero_section")}
              >
                <a
                  href={offerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  {company.offerSoftware?.label || "Online-Angebot anfordern"}
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            </div>
          )}

          {/* Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-lg px-8 h-14 border-2"
            >
              <Link
                href="/kontakt"
                onClick={() => trackCTAClick("flyer_contact", "flyer", "hero_section")}
              >
                Kontakt aufnehmen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-lg px-8 h-14 border-2"
            >
              <a
                href={`tel:${company.contact.phone}`}
                onClick={() => trackPhoneClick("flyer", "hero_section")}
              >
                <Phone className="mr-2 h-5 w-5" />
                {company.contact.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlyerHero;
