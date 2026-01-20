import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { company } from "@/lib/data";

// Kritische Komponenten (above the fold) - direkt importiert für schnelles initiales Rendering
// Hero wird sofort geladen (LCP-Element)
const Hero = dynamic(() => import("@/components/sections/Hero").then((mod) => ({ default: mod.Hero })), {
  ssr: true,
  loading: () => <div className="min-h-[600px]" />,
});

// Partners wird lazy-loaded, da es nicht kritisch für LCP ist
const Partners = dynamic(() => import("@/components/sections/Partners").then((mod) => ({ default: mod.Partners })), {
  ssr: true,
  loading: () => <div className="min-h-[200px]" />,
});

// Lazy Load Komponenten mit Framer Motion (große Library)
const Services = dynamic(() => import("@/components/sections/Services").then((mod) => ({ default: mod.Services })), {
  ssr: true,
  loading: () => <div className="min-h-[500px]" />,
});

const Benefits = dynamic(() => import("@/components/sections/Benefits").then((mod) => ({ default: mod.Benefits })), {
  ssr: true,
  loading: () => <div className="min-h-[400px]" />,
});

// Lazy Load nicht-kritische Komponenten (below the fold)
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then((mod) => ({ default: mod.Testimonials })), {
  ssr: true,
  loading: () => <div className="min-h-[400px]" />,
});

const LocationsPreview = dynamic(() => import("@/components/sections/LocationsPreview").then((mod) => ({ default: mod.LocationsPreview })), {
  ssr: true,
  loading: () => <div className="min-h-[300px]" />,
});

const GoogleMapsSection = dynamic(() => import("@/components/sections/GoogleMapsSection").then((mod) => ({ default: mod.GoogleMapsSection })), {
  ssr: true,
  loading: () => <div className="min-h-[400px]" />,
});

const BlogPreview = dynamic(() => import("@/components/sections/BlogPreview").then((mod) => ({ default: mod.BlogPreview })), {
  ssr: true,
  loading: () => <div className="min-h-[300px]" />,
});

const FAQPreview = dynamic(() => import("@/components/sections/FAQPreview").then((mod) => ({ default: mod.FAQPreview })), {
  ssr: true,
  loading: () => <div className="min-h-[300px]" />,
});

const CTASection = dynamic(() => import("@/components/sections/CTASection").then((mod) => ({ default: mod.CTASection })), {
  ssr: true,
  loading: () => <div className="min-h-[300px]" />,
});

export const metadata: Metadata = {
  title: "Wärmepumpe Berlin | Vaillant & OVUM | Mannhold",
  description:
    "Wärmepumpe Berlin: Bis zu 70% Förderung möglich ✓ Hilfestellung bei Förderanträgen ✓ Vaillant & OVUM Spezialist ✓ Installation in Steglitz, Charlottenburg, Potsdam ✓ Kostenlose Beratung ✓ 030 550 718 31",
  keywords: [
    "Wärmepumpe Berlin",
    "Wärmepumpe Installation Berlin",
    "Vaillant Wärmepumpe Berlin",
    "OVUM Wärmepumpe Berlin",
    "Wärmepumpe Steglitz",
    "Wärmepumpe Charlottenburg",
    "Wärmepumpe Potsdam",
    "Wärmepumpe Kosten Berlin",
    "Wärmepumpe Förderung Berlin",
    "Heizungsinstallateur Berlin",
  ],
  openGraph: {
    title: "Wärmepumpe Berlin | Vaillant & OVUM | Mannhold",
    description:
      "Wärmepumpe Berlin: Bis zu 70% Förderung möglich ✓ Hilfestellung bei Förderanträgen ✓ Vaillant & OVUM Spezialist ✓ Installation in Steglitz, Charlottenburg, Potsdam",
    url: "https://mannhold-haustechnik.de",
    siteName: "Mannhold Haustechnik",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://mannhold-haustechnik.de/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mannhold Haustechnik - Wärmepumpen Installation Berlin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wärmepumpe Berlin | Vaillant & OVUM Installation | Mannhold",
    description:
      "Wärmepumpe Berlin: Bis zu 70% Förderung möglich ✓ Hilfestellung bei Förderanträgen ✓ Vaillant & OVUM Spezialist ✓ Installation in Steglitz, Charlottenburg, Potsdam",
    images: ["https://mannhold-haustechnik.de/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://mannhold-haustechnik.de",
  },
};

export default async function HomePage() {
  // Lazy-load testimonials und googleRating nur wenn benötigt
  // Reduziert initiales JavaScript-Bundle
  const { testimonials, googleRating } = await import("@/lib/data/testimonials");

  // Schema-Daten werden dynamisch geladen, um initiales Bundle zu reduzieren
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": "https://mannhold-haustechnik.de",
    name: company.name,
    alternateName: "Mannhold Haustechnik",
    description: "Ihr Experte für Wärmepumpen, Heizungsinstallation und Heizungswartung in Berlin und Potsdam. Vaillant & OVUM Partner.",
    image: "https://mannhold-haustechnik.de/images/logo.svg",
    url: "https://mannhold-haustechnik.de",
    telephone: company.contact.phone,
    email: company.contact.email,
    priceRange: "€€-€€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      postalCode: company.address.zip,
      addressRegion: "Berlin",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.4862,
      longitude: 13.3589,
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 52.4862,
        longitude: 13.3589,
      },
      geoRadius: "50000",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "16:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "08:00",
        closes: "12:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Tempelhof-Schöneberg" },
      { "@type": "City", name: "Steglitz-Zehlendorf" },
      { "@type": "City", name: "Charlottenburg-Wilmersdorf" },
      { "@type": "City", name: "Neukölln" },
      { "@type": "City", name: "Friedrichshain-Kreuzberg" },
      { "@type": "City", name: "Spandau" },
      { "@type": "City", name: "Potsdam" },
      { "@type": "City", name: "Kleinmachnow" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Heizungsdienstleistungen",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wärmepumpen-Installation",
            description: "Installation von Vaillant und OVUM Wärmepumpen mit bis zu 70% Förderung möglich",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Heizungswartung",
            description: "Jährliche Wartung für Wärmepumpen, Gasthermen und Fußbodenheizungen",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hydraulischer Abgleich",
            description: "Hydraulischer Abgleich nach Verfahren B für optimale Heizungseffizienz",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Heizungsmodernisierung",
            description: "Komplette Heizungsmodernisierung in Berlin und Potsdam",
          },
        },
      ],
    },
    sameAs: company.social ? [
      company.social.facebook,
      company.social.instagram,
      company.social.linkedin,
    ].filter(Boolean) : [],
    knowsAbout: [
      "Wärmepumpen",
      "Heizungsinstallation",
      "Hydraulischer Abgleich",
      "Heizlastberechnung",
      "Fußbodenheizung",
      "Gasthermen",
    ],
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://mannhold-haustechnik.de",
    name: company.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: googleRating.average.toString(),
      reviewCount: googleRating.total.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: testimonials.slice(0, 5).map((testimonial) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: testimonial.name,
      },
      datePublished: testimonial.date,
      reviewBody: testimonial.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: testimonial.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
    })),
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <Hero />
      <Partners />
      <Services />
      <Benefits />
      <Testimonials />
      <LocationsPreview />
      <GoogleMapsSection />
      <BlogPreview />
      <FAQPreview />
      <CTASection />
    </>
  );
}
