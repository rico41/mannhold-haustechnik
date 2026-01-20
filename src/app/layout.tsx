import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
// CSS Import am Ende für bessere Performance
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Wärmepumpe Berlin | Vaillant & OVUM | Mannhold",
    template: "%s | Mannhold",
  },
  description:
    "Wärmepumpe Berlin & Potsdam ✓ Vaillant & OVUM Partner ✓ Bis 70% Förderung möglich ✓ Hilfestellung bei Förderanträgen ✓ Heizungsinstallateur ✓ Gasthermen ✓ Hydraulischer Abgleich ✓ Heizlastberechnung. Jetzt beraten lassen!",
  keywords: [
    // Haupt-Keywords
    "Wärmepumpe Berlin",
    "Wärmepumpe Potsdam",
    "Heizungsinstallateur Berlin",
    "Heizungsbauer Berlin",
    // Marken-Keywords
    "Vaillant Wärmepumpe Berlin",
    "OVUM Wärmepumpe Berlin",
    "Vaillant aroTHERM Berlin",
    "Vaillant Partner Berlin",
    // Service-Keywords
    "Gastherme austauschen Berlin",
    "Heizlastberechnung Berlin",
    "Hydraulischer Abgleich Berlin",
    "Fußbodenheizung Wartung Berlin",
    "Heizungswartung Berlin",
    // Long-Tail Keywords
    "Wärmepumpe Altbau Berlin",
    "Wärmepumpe Förderung Berlin",
    "Heizung erneuern Berlin",
    "Heizungsmodernisierung Berlin",
    // Bezirks-Keywords
    "Wärmepumpe Steglitz",
    "Wärmepumpe Zehlendorf",
    "Wärmepumpe Charlottenburg",
    "Wärmepumpe Schöneberg",
    "Heizungsfirma Potsdam",
  ],
  authors: [{ name: "Mannhold Haustechnik GmbH" }],
  creator: "Mannhold Haustechnik GmbH",
  publisher: "Mannhold Haustechnik GmbH",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://mannhold-haustechnik.de",
    siteName: "Mannhold Haustechnik",
    title: "Wärmepumpe Berlin | Vaillant & OVUM | Mannhold",
    description:
      "Wärmepumpe Berlin & Potsdam ✓ Vaillant & OVUM Partner ✓ Bis 70% Förderung möglich ✓ Hilfestellung bei Förderanträgen ✓ Heizungsinstallateur. Jetzt beraten lassen!",
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
      "Wärmepumpe Berlin & Potsdam ✓ Vaillant & OVUM Partner ✓ Bis 70% Förderung ✓ Heizungsinstallateur",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_VERIFICATION || undefined,
  },
  alternates: {
    canonical: "https://mannhold-haustechnik.de",
  },
  other: {
    "geo.region": "DE-BE",
    "geo.placename": "Berlin",
    "geo.position": "52.4862;13.3589",
    "ICBM": "52.4862, 13.3589",
  },
  // Preconnect-Links über Metadata API (wird früher im HTML ausgegeben)
  // Next.js 16 rendert diese automatisch im <head>
  metadataBase: new URL("https://mannhold-haustechnik.de"),
};

import { Header, Footer } from "@/components/layout";
import { company } from "@/lib/data";
import { googleRating } from "@/lib/data/testimonials";

// LocalBusiness Schema für alle Seiten
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://mannhold-haustechnik.de",
  name: company.name,
  image: "https://mannhold-haustechnik.de/images/logo.svg",
  url: "https://mannhold-haustechnik.de",
  telephone: company.contact.phone,
  email: company.contact.email,
  priceRange: "€€-€€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    postalCode: company.address.zip,
    addressRegion: "BE",
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
    name: "Heizungstechnik Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wärmepumpe Installation",
          description: "Installation von Vaillant und OVUM Wärmepumpen",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hydraulischer Abgleich",
          description: "Optimierung der Heizungsanlage nach DIN EN 12831",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wartung & Service",
          description: "Regelmäßige Wartung von Wärmepumpen und Gasthermen",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: googleRating.average.toString(),
    reviewCount: googleRating.total.toString(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        {/* Preconnect für kritische Ressourcen - Performance Optimierung */}
        {/* WICHTIG: Maximal 2-3 Preconnect-Links (Lighthouse Best Practice) */}
        {/* Eigene Domain für _next/static Assets - HOCHSTE PRIORITÄT */}
        <link rel="preconnect" href="https://mannhold-haustechnik.de" crossOrigin="" />
        {/* Google Fonts werden von Next.js automatisch optimiert - KEIN Preconnect nötig */}
        {/* Externe Domains - dns-prefetch für weniger kritische Ressourcen */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        {/* Preload Hero-Bild für besseren LCP */}
        <link
          rel="preload"
          as="image"
          href="/images/vaillant/aroTHERMplus_13x18_quer_300dpi5.jpg"
          fetchPriority="high"
        />
        {/* Content Security Policy - Report Only Mode für Entwicklung */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://images.unsplash.com; frame-src 'self' https://www.google.com;"
        />
        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}
        style={{ willChange: "scroll-position" }}
      >
        {/* Skip to main content - Accessibility */}
        <a
          href="#main-content"
          className="absolute left-[-9999px] focus:left-4 focus:top-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Zum Hauptinhalt springen
        </a>
        <GoogleAnalytics />
        <Header />
        <main id="main-content" className="min-h-screen pt-16 lg:pt-28" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
