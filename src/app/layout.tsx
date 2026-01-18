import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
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
    default: "Mannhold Haustechnik | Wärmepumpen & Heizung Berlin",
    template: "%s | Mannhold Haustechnik",
  },
  description:
    "Ihr Experte für Wärmepumpen, Gasthermen und Heizungsinstallation in Berlin Süd und Potsdam. Vaillant & OVUM Partner. ✓ Heizlastberechnung ✓ Hydraulischer Abgleich ✓ Fußbodenheizung",
  keywords: [
    "Wärmepumpe Berlin",
    "Heizungsinstallation Berlin",
    "Vaillant Wärmepumpe",
    "OVUM Wärmepumpe",
    "Gasthermen Austausch",
    "Heizlastberechnung",
    "Hydraulischer Abgleich",
    "Fußbodenheizung Wartung",
    "Heizungsbauer Berlin Süd",
    "Heizungsfirma Potsdam",
  ],
  authors: [{ name: "Mannhold Haustechnik GmbH" }],
  creator: "Mannhold Haustechnik GmbH",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://mannhold-haustechnik.de",
    siteName: "Mannhold Haustechnik",
    title: "Mannhold Haustechnik | Wärmepumpen & Heizung Berlin",
    description:
      "Ihr Experte für Wärmepumpen, Gasthermen und Heizungsinstallation in Berlin Süd und Potsdam.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mannhold Haustechnik | Wärmepumpen & Heizung Berlin",
    description:
      "Ihr Experte für Wärmepumpen, Gasthermen und Heizungsinstallation in Berlin Süd und Potsdam.",
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
    // google: "your-google-verification-code",
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
