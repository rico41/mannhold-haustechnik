import type { Metadata } from "next";
import {
  Hero,
  Services,
  Benefits,
  Partners,
  Testimonials,
  LocationsPreview,
  BlogPreview,
  FAQPreview,
  CTASection,
  GoogleMapsSection,
} from "@/components/sections";
import { company } from "@/lib/data";
import { testimonials, googleRating } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Wärmepumpe Berlin | Vaillant & OVUM Installation ab 12.000€ | Mannhold Haustechnik",
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
    title: "Wärmepumpe Berlin | Vaillant & OVUM Installation | Mannhold Haustechnik",
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

// HVACBusiness Schema für Homepage (spezifischer als LocalBusiness)
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
  priceRange: "€€",
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
    geoRadius: "50000", // 50km Radius
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

// Review Schema für Homepage - mit echten Google-Bewertungen
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

export default function HomePage() {
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
