"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, CheckCircle2, Star, Users, Clock, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/data";
import { GoogleReviewsBadge } from "@/components/reviews/GoogleReviewsBadge";
import { useGoogleReviews } from "@/lib/hooks/useGoogleReviews";
import { trackCTAClick, trackPhoneClick } from "@/lib/analytics/conversion-events";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getTopFAQs } from "@/lib/data/faq";

const benefits = [
  "Bis zu 70% Förderung möglich",
  "Vaillant & OVUM Partner",
  "Hilfestellung bei Förderanträgen",
];

// CSS Keyframes werden in globals.css definiert
// Hier nutzen wir CSS-Animationen statt Framer Motion für besseren LCP

export const Hero = () => {
  const { data } = useGoogleReviews();
  const totalReviews = data?.totalReviews || 200;
  const averageRating = data?.averageRating || 5.0;
  const topFAQs = getTopFAQs(3);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0089CF]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-[#F7941D]/10 to-transparent" />
      </div>

      <div className="container-custom relative">
        {/* Mobile Hero Image - LCP Element für mobile Geräte - ZUERST für besseren LCP */}
        <div className="relative lg:hidden mb-8">
          <div className="relative aspect-[4/3] max-w-md mx-auto">
            {/* Background Blob/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#F7941D]/20 to-[#0089CF]/20 rounded-2xl transform rotate-3 scale-105 blur-lg" />
            
            {/* Main Image - LCP Element Mobile */}
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-xl border-2 border-white">
              <Image 
                src="/images/installation_außen.png" 
                alt="Wärmepumpen-Außeneinheit am modernen Einfamilienhaus - Mannhold Haustechnik Installation Berlin" 
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 640px) 100vw, 640px"
                className="object-cover"
                quality={75}
                loading="eager"
              />
              
              {/* Overlay Gradient for Text Readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-7rem)] py-12 lg:py-0">
          {/* Content - CSS Animation statt Framer Motion */}
          <div
            className="text-center lg:text-left animate-fade-in-up"
            style={{ animationDelay: "0ms" }}
          >
            {/* Trust Badges Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
              {/* Partner Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0089CF]/10 text-[#0089CF] text-sm font-medium animate-fade-in-scale"
                style={{ animationDelay: "50ms" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0089CF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0089CF]"></span>
                </span>
                Zertifizierter Partner
              </div>

              {/* Google Rating Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm animate-fade-in-scale"
                style={{ animationDelay: "80ms" }}
              >
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
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0089CF]/5 text-[#0089CF] text-sm font-medium animate-fade-in-scale"
                style={{ animationDelay: "110ms" }}
              >
                <Users className="h-4 w-4" />
                <span>200+ Installationen 2024</span>
              </div>

              {/* 24/7 KI-Telefon Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#F7941D]/10 to-[#0089CF]/10 border border-[#F7941D]/20 text-gray-700 text-sm font-medium animate-fade-in-scale"
                style={{ animationDelay: "140ms" }}
              >
                <Bot className="h-4 w-4 text-[#F7941D]" />
                <span>24/7 erreichbar – KI-Telefonassistent</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
              <span className="text-foreground">Wärmepumpe Berlin: </span>
              <span className="text-gradient">Vaillant & OVUM Installation</span>
              <br />
              <span className="text-foreground">mit bis zu 70% Förderung möglich</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Professionelle Heizungsmodernisierung mit Vaillant und OVUM
              Premium Wärmepumpen. Bis zu 70% staatliche Förderung möglich – wir helfen beim Antrag.
            </p>

            {/* Benefits */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2 text-sm md:text-base animate-fade-in-left"
                  style={{ animationDelay: `${150 + index * 30}ms` }}
                >
                  <CheckCircle2 className="h-5 w-5 text-[#F7941D]" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Trust Indicator - Response Time */}
            <div
              className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground animate-fade-in-up"
              style={{ animationDelay: "150ms" }}
            >
              <Clock className="h-4 w-4 text-[#F7941D]" />
              <span>Durchschnittliche Antwortzeit: 2 Stunden</span>
            </div>

            {/* CTAs */}
            <div
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-lg px-8 h-14"
              >
                <Link
                  href="/kontakt"
                  onClick={() => trackCTAClick("hero_cta", "hero", "hero_section")}
                >
                  Kostenlose Beratung
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
                  onClick={() => trackPhoneClick("general", "hero_section")}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {company.contact.phoneDisplay}
                </a>
              </Button>
            </div>

            {/* Top 3 FAQs */}
            <div
              className="mt-12 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up"
              style={{ animationDelay: "250ms" }}
            >
              <h3 className="text-xl font-semibold font-heading mb-4 text-center lg:text-left">
                Häufig gestellte Fragen
              </h3>
              <Accordion type="single" collapsible className="space-y-2">
                {topFAQs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="bg-white/50 rounded-lg border border-gray-200 px-4"
                  >
                    <AccordionTrigger className="text-left text-sm font-medium py-3 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground pb-3">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-4 text-center lg:text-left">
                <Link
                  href="/faq"
                  className="text-sm text-primary hover:underline font-medium"
                >
                  Alle FAQs ansehen →
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Hero Image - LCP Element für Desktop */}
          <div
            className="relative hidden lg:block"
            style={{ opacity: 1 }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background Blob/Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F7941D]/20 to-[#0089CF]/20 rounded-[2rem] transform rotate-3 scale-105 blur-lg" />
              
              {/* Main Image - LCP Element Desktop */}
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src="/images/installation_außen.png" 
                  alt="Wärmepumpen-Außeneinheit am modernen Einfamilienhaus - Mannhold Haustechnik Installation Berlin" 
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 0vw, (max-width: 1280px) 50vw, 480px"
                  className="object-cover"
                  quality={78}
                  loading="eager"
                />
                
                {/* Overlay Gradient for Text Readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Floating badges - CSS Animation statt Framer Motion */}
              <div
                className="absolute top-8 -right-6 bg-white rounded-xl shadow-lg px-4 py-3 border border-gray-100 animate-float"
              >
                <Image
                  src="/images/vaillant-logo-aw-2104046.jpg"
                  alt="Vaillant Partner Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                  quality={85}
                />
              </div>

              <div
                className="absolute bottom-12 -left-6 bg-white rounded-xl shadow-lg px-4 py-3 border border-gray-100 animate-float-delayed"
              >
                <Image
                  src="/images/OVUM_waermepumpen_logo_landscape_cmyk_color_black.png"
                  alt="OVUM Premium Partner Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 50L48 45.8C96 41.7 192 33.3 288 35.2C384 37 480 49 576 54.2C672 59.3 768 57.7 864 52.5C960 47.3 1056 38.7 1152 38.3C1248 38 1344 46 1392 50L1440 54V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
