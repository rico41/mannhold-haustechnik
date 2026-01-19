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
} from "@/components/sections";
import { company } from "@/lib/data";
import { testimonials } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Wärmepumpe Berlin | Vaillant & OVUM Installation ab 12.000€ | Mannhold Haustechnik",
  description:
    "Wärmepumpe Berlin: Bis zu 70% Förderung ✓ Vaillant & OVUM Spezialist ✓ Installation in Steglitz, Charlottenburg, Potsdam ✓ Kostenlose Beratung ✓ 030 123 456 78",
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
      "Wärmepumpe Berlin: Bis zu 70% Förderung ✓ Vaillant & OVUM Spezialist ✓ Installation in Steglitz, Charlottenburg, Potsdam",
    url: "https://mannhold-haustechnik.de",
    siteName: "Mannhold Haustechnik",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wärmepumpe Berlin | Vaillant & OVUM Installation | Mannhold",
    description:
      "Wärmepumpe Berlin: Bis zu 70% Förderung ✓ Vaillant & OVUM Spezialist ✓ Installation in Steglitz, Charlottenburg, Potsdam",
  },
  alternates: {
    canonical: "https://mannhold-haustechnik.de",
  },
};

// LocalBusiness Schema für Homepage
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://mannhold-haustechnik.de",
  name: company.name,
  image: "https://mannhold-haustechnik.de/images/logo.svg",
  url: "https://mannhold-haustechnik.de",
  telephone: company.contact.phone,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    postalCode: company.address.zip,
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.4862,
    longitude: 13.3589,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Tempelhof-Schöneberg",
    },
    {
      "@type": "City",
      name: "Steglitz-Zehlendorf",
    },
    {
      "@type": "City",
      name: "Charlottenburg-Wilmersdorf",
    },
    {
      "@type": "City",
      name: "Neukölln",
    },
    {
      "@type": "City",
      name: "Potsdam",
    },
  ],
  sameAs: company.social ? [
    company.social.facebook,
    company.social.instagram,
    company.social.linkedin,
  ].filter(Boolean) : [],
};

// Review Schema für Homepage
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://mannhold-haustechnik.de",
  name: company.name,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: testimonials.length,
    bestRating: "5",
    worstRating: "5",
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
      <BlogPreview />
      <FAQPreview />
      <CTASection />
    </>
  );
}
