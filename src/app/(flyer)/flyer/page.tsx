import type { Metadata } from "next";
import { FlyerLanding } from "@/components/sections/FlyerLanding";

export const metadata: Metadata = {
  title: "Angebot anfordern | Wärmepumpe Berlin",
  description:
    "Schnell und unverbindlich: Online-Angebot für Wärmepumpen anfordern. Vaillant & OVUM Partner. Bis zu 70% Förderung möglich. Eignungs-Check.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://mannhold-haustechnik.de/flyer",
  },
};

export default function FlyerPage() {
  return <FlyerLanding />;
}
