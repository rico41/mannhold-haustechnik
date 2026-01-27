import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import dynamic from "next/dynamic";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { RetargetingPixels } from "@/components/analytics/RetargetingPixels";
import { StickyMobileCTA } from "@/components/common/StickyMobileCTA";
import { ExitIntentModal } from "@/components/common/ExitIntentModal";
import { FloatingReviewsBadge } from "@/components/common/FloatingReviewsBadge";
import { ScrollTriggeredCTA } from "@/components/common/ScrollTriggeredCTA";
import { MobileQuickActions } from "@/components/common/MobileQuickActions";
// CSS Import am Ende für bessere Performance
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Swap ist besser für LCP als optional
  preload: true, // Preload für besseren LCP
  adjustFontFallback: true,
  fallback: ["system-ui", "arial"], // Schnelle Fallbacks
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap", // Swap ist besser für LCP als optional
  weight: ["400", "500", "600", "700", "800"],
  preload: true, // Preload für besseren LCP
  adjustFontFallback: true,
  fallback: ["system-ui", "arial"], // Schnelle Fallbacks
});

// Header und Footer lazy laden für besseren LCP
// SSR bleibt aktiviert für SEO, aber Client-Side JS wird defer geladen
const Header = dynamic(() => import("@/components/layout/Header").then((mod) => mod.Header), {
  ssr: true,
  loading: () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white h-16 lg:h-28 border-b border-gray-100">
      <div className="container-custom h-full flex items-center justify-between">
        <div className="h-10 lg:h-12 w-40 bg-gray-100 rounded animate-pulse" />
        <div className="hidden lg:flex gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-4 w-16 bg-gray-100 rounded animate-pulse" />
          ))}
        </div>
        <div className="h-10 w-32 bg-gray-100 rounded animate-pulse hidden lg:block" />
      </div>
    </header>
  ),
});

const Footer = dynamic(() => import("@/components/layout/Footer").then((mod) => mod.Footer), {
  ssr: true,
  loading: () => (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-custom">
        <div className="h-64 bg-gray-800 rounded animate-pulse" />
      </div>
    </footer>
  ),
});

export const metadata: Metadata = {
  title: {
    default: "Wärmepumpe Berlin | Vaillant & OVUM | Mannhold Haustechnik",
    template: "%s | Mannhold Haustechnik",
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
    title: "Wärmepumpe Berlin | Vaillant & OVUM",
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
    title: "Wärmepumpe Berlin | Vaillant & OVUM Installation",
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
  metadataBase: new URL("https://mannhold-haustechnik.de"),
};

// HINWEIS: LocalBusiness Schema wurde entfernt, um Duplikate zu vermeiden.
// Jede Seite definiert ihr eigenes spezifisches Schema (HVACBusiness, etc.)
// Das verhindert Konflikte und "ungültige Elemente" in Google Search Console.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        {/* Performance Optimierung: Preconnect nur für externe Domains */}
        {/* HINWEIS: Preconnect für die eigene Domain ist nicht sinnvoll, da die Verbindung bereits besteht */}
        {/* Lighthouse meldet daher "keine vorverbundenen Ursprünge" - das ist korrekt */}
        {/* Externe Domains - dns-prefetch für weniger kritische Ressourcen */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        {/* Preload Hero-Bild für besseren LCP - höchste Priorität */}
        <link
          rel="preload"
          as="image"
          href="/images/vaillant/aroTHERMplus_13x18_quer_300dpi5.jpg"
          fetchPriority="high"
          type="image/jpeg"
        />
        {/* Content Security Policy - Report Only Mode für Entwicklung */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://images.unsplash.com; frame-src 'self' https://www.google.com;"
        />
        {/* Schema.org wird auf Seitenebene definiert (page.tsx, etc.) */}
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
        <RetargetingPixels />
        <Header />
        <main id="main-content" className="min-h-screen pt-16 lg:pt-28" role="main">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
        <ExitIntentModal />
        <FloatingReviewsBadge />
        <ScrollTriggeredCTA />
        <MobileQuickActions />
      </body>
    </html>
  );
}
