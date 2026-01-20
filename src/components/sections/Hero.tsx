import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/data";

const benefits = [
  "Bis zu 70% Förderung möglich",
  "Vaillant & OVUM Partner",
  "Hilfestellung bei Förderanträgen",
];

// CSS Keyframes werden in globals.css definiert
// Hier nutzen wir CSS-Animationen statt Framer Motion für besseren LCP

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0089CF]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-[#F7941D]/10 to-transparent" />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-7rem)] py-12 lg:py-0">
          {/* Content - CSS Animation statt Framer Motion */}
          <div
            className="text-center lg:text-left animate-fade-in-up"
            style={{ animationDelay: "0ms" }}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0089CF]/10 text-[#0089CF] text-sm font-medium mb-6 animate-fade-in-scale"
              style={{ animationDelay: "100ms" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0089CF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0089CF]"></span>
              </span>
              Zertifizierter Vaillant & OVUM Partner
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
                  style={{ animationDelay: `${200 + index * 50}ms` }}
                >
                  <CheckCircle2 className="h-5 w-5 text-[#F7941D]" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-lg px-8 h-14"
              >
                <Link href="/kontakt">
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
                <a href={`tel:${company.contact.phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {company.contact.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>

          {/* Visual - CSS Animation statt Framer Motion */}
          {/* LCP-Element: Keine Animation für besseren LCP */}
          <div
            className="relative hidden lg:block"
            style={{ opacity: 1 }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background Blob/Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F7941D]/20 to-[#0089CF]/20 rounded-[2rem] transform rotate-3 scale-105 blur-lg" />
              
              {/* Main Image - LCP Element */}
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src="/images/vaillant/aroTHERMplus_13x18_quer_300dpi5.jpg" 
                  alt="Vaillant aroTHERM plus Wärmepumpe Installation Berlin - Mannhold Haustechnik" 
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 0vw, (max-width: 1280px) 50vw, 450px"
                  className="object-cover"
                  quality={75}
                  unoptimized={false}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//Z"
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
                className="absolute bottom-12 -left-6 bg-white rounded-xl shadow-lg px-5 py-4 border border-gray-100 animate-float-delayed"
              >
                <div className="flex items-center gap-3">
                   <div className="h-10 w-10 rounded-full bg-[#F7941D]/10 flex items-center justify-center">
                     <span className="font-bold text-[#F7941D]">70%</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Förderung</div>
                    <div className="text-xs text-muted-foreground">Hilfestellung beim Antrag</div>
                  </div>
                </div>
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
