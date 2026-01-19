import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

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
    default: "Wärmepumpe Berlin | Vaillant & OVUM Installation | Mannhold Haustechnik",
    template: "%s | Mannhold Haustechnik",
  },
  description:
    "Wärmepumpe Berlin & Potsdam ✓ Vaillant & OVUM Partner ✓ Bis 70% Förderung ✓ Heizungsinstallateur ✓ Gasthermen ✓ Hydraulischer Abgleich ✓ Heizlastberechnung. Jetzt beraten lassen!",
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
    "Heizungsnotdienst Berlin",
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
    title: "Wärmepumpe Berlin | Vaillant & OVUM Installation | Mannhold Haustechnik",
    description:
      "Wärmepumpe Berlin & Potsdam ✓ Vaillant & OVUM Partner ✓ Bis 70% Förderung ✓ Heizungsinstallateur. Jetzt beraten lassen!",
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
};

import { Header, Footer } from "@/components/layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
      </head>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen pt-16 lg:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
