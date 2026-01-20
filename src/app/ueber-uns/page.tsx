import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Users, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/data";
import { CTASection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Über uns | Mannhold Haustechnik - Ihr Experte in Berlin",
  description:
    "Lernen Sie Mannhold Haustechnik kennen – Ihr Experte für Wärmepumpen und Heizungstechnik in Berlin seit 2020. Zertifizierter Vaillant und OVUM Partner.",
};

const milestones = [
  {
    year: "2020",
    title: "Gründung",
    description:
      "Start als Einzelunternehmen mit Fokus auf Heizungstechnik in Berlin-Schöneberg.",
  },
  {
    year: "2022",
    title: "Vaillant Partner",
    description:
      "Zertifizierung als offizieller Vaillant Partner für Wärmepumpen-Installation.",
  },
  {
    year: "2023",
    title: "OVUM Premium Partner",
    description:
      "Erweiterung des Portfolios um OVUM Premium Wärmepumpen aus Österreich.",
  },
  {
    year: "2024",
    title: "GmbH-Gründung",
    description:
      "Umwandlung in die Mannhold Haustechnik GmbH für nachhaltiges Wachstum.",
  },
];

const values = [
  {
    icon: Award,
    title: "Qualität",
    description:
      "Wir arbeiten ausschließlich mit hochwertigen Produkten von Vaillant und OVUM und legen höchsten Wert auf fachgerechte Installation.",
  },
  {
    icon: Users,
    title: "Kundennähe",
    description:
      "Persönliche Beratung, ein fester Ansprechpartner und Service auf Augenhöhe – das zeichnet uns aus.",
  },
  {
    icon: MapPin,
    title: "Regionalität",
    description:
      "Als lokales Unternehmen kennen wir Berlin und Potsdam und sind schnell bei Ihnen vor Ort.",
  },
  {
    icon: Calendar,
    title: "Zuverlässigkeit",
    description:
      "Termintreue, transparente Kommunikation und faire Preise sind für uns selbstverständlich.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-[#0089CF] uppercase tracking-wider mb-4">
                Über uns
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
                Ihr Partner für{" "}
                <span className="text-gradient">moderne Heiztechnik</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                Seit 2020 sind wir Ihr zuverlässiger Partner für Wärmepumpen,
                Gasthermen und Heizungstechnik in Berlin und Potsdam. Als
                zertifizierter Vaillant und OVUM Partner setzen wir auf Qualität
                und persönlichen Service.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/kontakt">
                    Jetzt kennenlernen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Team/Company Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F7941D]/20 to-[#0089CF]/20 rounded-2xl transform rotate-3 scale-105 blur-lg" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200" 
                  alt="Mannhold Haustechnik Team - Heizungsinstallateur Berlin - Wärmepumpen Experten" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0089CF]/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-[#0089CF]" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Persönlich</div>
                    <div className="text-sm text-muted-foreground">
                      Feste Ansprechpartner
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient">
                5+
              </div>
              <div className="mt-2 text-muted-foreground">Jahre Erfahrung</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient">
                100+
              </div>
              <div className="mt-2 text-muted-foreground">Projekte</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient">
                2
              </div>
              <div className="mt-2 text-muted-foreground">Premium Partner</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient">
                5.0
              </div>
              <div className="mt-2 text-muted-foreground">Google Bewertung</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Unsere Geschichte
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Von der Gründung bis heute – ein Weg geprägt von Leidenschaft für
              Heiztechnik und zufriedenen Kunden.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F7941D] to-[#0089CF] transform md:-translate-x-1/2" />

              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#F7941D] to-[#0089CF] transform -translate-x-1/2 z-10 border-2 border-white shadow-sm" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Unsere Werte
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Diese Grundsätze leiten unser Handeln jeden Tag.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F7941D] to-[#0089CF] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Unsere Partner
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Als zertifizierter Partner führender Hersteller garantieren wir
              höchste Qualität.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Vaillant */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-transparent hover:border-[#00923F]/20">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/images/vaillant-logo-aw-2104046.jpg"
                  alt="Vaillant Partner Logo"
                  className="h-16 w-auto object-contain"
                />
                <div>
                  <h3 className="text-2xl font-bold text-[#00923F]">Vaillant</h3>
                  <p className="text-muted-foreground font-medium">Zertifizierter Partner</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Vaillant steht seit 1874 für deutsche Ingenieurskunst und
                Innovation. Als zertifizierter Partner installieren wir die
                hocheffizienten aroTHERM plus Wärmepumpen.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00923F]" />
                  Schulungen und Zertifizierungen
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00923F]" />
                  Direkter Herstellersupport
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00923F]" />
                  Original-Ersatzteile
                </li>
              </ul>
            </div>

            {/* OVUM */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-transparent hover:border-[#0089CF]/20">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/images/OVUM_waermepumpen_logo_landscape_cmyk_color_white.png"
                  alt="OVUM Premium Partner Logo"
                  className="h-16 w-auto object-contain"
                />
                <div>
                  <h3 className="text-2xl font-bold text-[#0089CF]">OVUM</h3>
                  <p className="text-muted-foreground font-medium">Premium Partner</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                OVUM aus Österreich steht für Premium-Qualität und Innovation.
                Die kompakten Wärmepumpen überzeugen durch höchste Effizienz und
                flüsterleisen Betrieb.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0089CF]" />
                  Premium-Qualität aus Österreich
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0089CF]" />
                  Persönlicher Herstellerkontakt
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0089CF]" />
                  Exklusiver Installationsbetrieb
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                Unser Standort
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Von Berlin-Schöneberg aus sind wir schnell bei Ihnen – ob in
                Steglitz, Zehlendorf, Tempelhof oder Potsdam.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F7941D]/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-[#F7941D]" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{company.name}</p>
                    <p className="text-muted-foreground">
                      {company.address.street}
                      <br />
                      {company.address.zip} {company.address.city}
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild>
                <Link href="/kontakt">
                  Anfahrt & Kontakt
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Map Image */}
            <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg border-2 border-white">
              <img 
                src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&q=80&w=1200" 
                alt="Mannhold Haustechnik Standort Berlin-Schöneberg - Servicegebiet Berlin Süd bis Potsdam" 
                className="w-full h-full object-cover grayscale opacity-50"
              />
              {/* Overlay mit Pin */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-xl animate-bounce">
                  <MapPin className="h-8 w-8 text-[#F7941D]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
