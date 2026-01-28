import type { Metadata } from "next";
import { FlyerHero } from "@/components/sections/FlyerHero";
import { FlyerServices } from "@/components/sections/FlyerServices";
import { FlyerContact } from "@/components/sections/FlyerContact";

export const metadata: Metadata = {
  title: "Angebot anfordern | Wärmepumpe Berlin",
  description:
    "Schnell und unverbindlich: Online-Angebot für Wärmepumpen anfordern. Vaillant & OVUM Partner. Bis zu 70% Förderung möglich. Kostenlose Beratung.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://mannhold-haustechnik.de/flyer",
  },
};

export default function FlyerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <FlyerHero />
      <FlyerServices />
      <FlyerContact />
    </div>
  );
}
