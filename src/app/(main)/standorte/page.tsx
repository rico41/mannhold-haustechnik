import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone, Wind, Settings, RefreshCw, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { company } from "@/lib/data";
import { seoLocations, seoServices } from "@/lib/data/programmatic";
import { CTASection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Standorte & Einzugsgebiet | Wärmepumpen Berlin & Potsdam",
  description:
    "Mannhold Haustechnik ist Ihr lokaler Wärmepumpen-Experte in Berlin Süd und Potsdam. Alle Bezirke: Schöneberg, Steglitz, Zehlendorf, Tempelhof, Charlottenburg und mehr.",
  keywords: [
    "Wärmepumpe Berlin",
    "Heizungsinstallateur Berlin",
    "Wärmepumpe Potsdam",
    "Heizung Berlin Süd",
  ],
};

// Service-Icons Mapping
const serviceIcons = {
  waermepumpe: Wind,
  "hydraulischer-abgleich": Settings,
  "heizung-erneuern": RefreshCw,
  "wartung-heizung": Wrench,
};

export default function StandortePage() {
  const berlinLocations = seoLocations.filter((l) => l.region === "berlin");
  const brandenburgLocations = seoLocations.filter((l) => l.region === "brandenburg");
  
  // Top 4 Services für die Matrix
  const topServices = seoServices.filter((s) => 
    ["waermepumpe", "hydraulischer-abgleich", "heizung-erneuern", "wartung-heizung"].includes(s.slug)
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-[#0089CF] uppercase tracking-wider mb-4">
              Einzugsgebiet
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
              Wärmepumpen & Heizungstechnik in{" "}
              <span className="text-gradient">Berlin & Potsdam</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Von unserem Standort in Berlin-Schöneberg aus erreichen wir schnell
              alle Bezirke im Süden Berlins sowie Potsdam und Umgebung. Finden Sie 
              Ihren Service direkt in Ihrem Bezirk.
            </p>
          </div>
        </div>
      </section>

      {/* Our Location */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-[#F7941D]/10 to-[#0089CF]/10 rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
                  Unser Firmensitz
                </h2>
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="h-6 w-6 text-[#F7941D] shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">{company.name}</p>
                    <p className="text-muted-foreground">
                      {company.address.street}
                      <br />
                      {company.address.zip} {company.address.city}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Zentral in Berlin-Schöneberg gelegen, sind wir in kurzer Zeit
                  bei Ihnen vor Ort – für Beratung, Installation und Service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href="/kontakt">
                      Kontakt aufnehmen
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={`tel:${company.contact.phone}`}>
                      <Phone className="mr-2 h-5 w-5" />
                      {company.contact.phoneDisplay}
                    </a>
                  </Button>
                </div>
              </div>

              {/* Map */}
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-[#F7941D]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Berlin Locations with Service Matrix */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Berlin – Unsere Bezirke
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Wählen Sie Ihren Bezirk und den gewünschten Service.
            </p>
          </div>

          <div className="space-y-6">
            {berlinLocations.map((location) => (
              <Card key={location.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Location Info */}
                    <div className="lg:w-1/3">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F7941D]/10 to-[#0089CF]/10 flex items-center justify-center shrink-0">
                          <MapPin className="h-6 w-6 text-[#F7941D]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold font-heading">
                            {location.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {location.distanceInfo}
                          </p>
                          {location.priority === 1 && (
                            <Badge className="mt-2 bg-[#F7941D]">
                              Kerngebiet
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Service Links */}
                    <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-3">
                      {topServices.map((service) => {
                        const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] || Wind;
                        return (
                          <Link
                            key={`${service.slug}-${location.slug}`}
                            href={`/${service.slug}-${location.slug}`}
                            className="group flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gradient-to-br hover:from-[#F7941D]/10 hover:to-[#0089CF]/10 transition-all"
                          >
                            <Icon className="h-4 w-4 text-[#0089CF] group-hover:text-[#F7941D] transition-colors shrink-0" />
                            <span className="text-sm font-medium group-hover:text-primary transition-colors truncate">
                              {service.shortName}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Potsdam & Brandenburg */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Potsdam & Umgebung
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Auch in Brandenburg sind wir für Sie da.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {brandenburgLocations.map((location) => (
              <Card key={location.id} className="overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Location Info */}
                    <div className="lg:w-1/3">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F7941D]/10 to-[#0089CF]/10 flex items-center justify-center shrink-0">
                          <MapPin className="h-7 w-7 text-[#0089CF]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold font-heading">
                            {location.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {location.distanceInfo}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Service Links */}
                    <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-3">
                      {topServices.map((service) => {
                        const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] || Wind;
                        return (
                          <Link
                            key={`${service.slug}-${location.slug}`}
                            href={`/${service.slug}-${location.slug}`}
                            className="group flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gradient-to-br hover:from-[#F7941D]/10 hover:to-[#0089CF]/10 transition-all"
                          >
                            <Icon className="h-4 w-4 text-[#0089CF] group-hover:text-[#F7941D] transition-colors shrink-0" />
                            <span className="text-sm font-medium group-hover:text-primary transition-colors truncate">
                              {service.shortName}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Programmatic Pages Summary */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-2">
              Alle Services in allen Bezirken
            </h3>
            <p className="text-muted-foreground">
              Insgesamt {seoServices.length * seoLocations.length} spezialisierte Seiten für Ihre Region
            </p>
          </div>
          
          {/* Quick Service Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {seoServices.slice(0, 4).map((service) => (
              <div key={service.slug} className="text-center">
                <p className="text-sm font-semibold text-muted-foreground mb-2">
                  {service.name}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {seoLocations.filter(l => l.priority <= 2).map((location) => (
                    <Link
                      key={`${service.slug}-${location.slug}`}
                      href={`/${service.slug}-${location.slug}`}
                      className="px-3 py-1 bg-white rounded-full text-xs hover:bg-primary hover:text-white transition-colors shadow-sm"
                    >
                      {location.shortName}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
