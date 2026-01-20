"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CategoryFilter } from "@/components/common/CategoryFilter";
import { CTASection } from "@/components/sections";

// Placeholder project data
const projects = [
  {
    id: 1,
    title: "Wärmepumpe Einfamilienhaus",
    location: "Berlin-Steglitz",
    date: "2024",
    category: "Wärmepumpe",
    description:
      "Installation einer Vaillant aroTHERM plus Wärmepumpe in einem Einfamilienhaus aus den 1970er Jahren. Inklusive Heizlastberechnung und hydraulischem Abgleich.",
    features: [
      "Vaillant aroTHERM plus 10kW",
      "Heizlastberechnung nach DIN EN 12831",
      "Hydraulischer Abgleich",
      "70% Förderung möglich",
    ],
  },
  {
    id: 2,
    title: "OVUM Premium Wärmepumpe",
    location: "Berlin-Zehlendorf",
    date: "2024",
    category: "Premium",
    description:
      "OVUM Premium Wärmepumpe für eine hochwertige Villa. Besonders leiser Betrieb und optimale Integration ins Smart Home.",
    features: [
      "OVUM Premium Serie",
      "Smart Home Integration",
      "Flüsterleiser Betrieb",
      "Premium-Installation",
    ],
  },
  {
    id: 3,
    title: "Gasthermen-Modernisierung",
    location: "Berlin-Schöneberg",
    date: "2024",
    category: "Gastherme",
    description:
      "Austausch einer 25 Jahre alten Gastherme durch ein modernes Brennwertgerät. Energieeinsparung von über 25%.",
    features: [
      "Vaillant Brennwerttherme",
      "25% Energieeinsparung",
      "Moderne Steuerung",
      "Kompakte Installation",
    ],
  },
  {
    id: 4,
    title: "Fußbodenheizung Sanierung",
    location: "Berlin-Tempelhof",
    date: "2023",
    category: "Fußbodenheizung",
    description:
      "Komplette Spülung und Reinigung einer verschlammten Fußbodenheizung. Wiederherstellung der vollen Heizleistung.",
    features: [
      "Professionelle Spülung",
      "Schlammentsorgung",
      "Korrosionsschutz",
      "50% bessere Heizleistung",
    ],
  },
  {
    id: 5,
    title: "Wärmepumpe Mehrfamilienhaus",
    location: "Potsdam",
    date: "2023",
    category: "Wärmepumpe",
    description:
      "Installation einer leistungsstarken Wärmepumpenanlage für ein Mehrfamilienhaus mit 6 Wohneinheiten.",
    features: [
      "Kaskadenschaltung",
      "Zentrale Warmwasserbereitung",
      "Individuelle Raumregelung",
      "Hohe Förderung",
    ],
  },
  {
    id: 6,
    title: "Hydraulischer Abgleich Altbau",
    location: "Berlin-Friedenau",
    date: "2023",
    category: "Service",
    description:
      "Hydraulischer Abgleich nach Verfahren B in einem denkmalgeschützten Altbau. Voraussetzung für die Heizungsförderung.",
    features: [
      "Verfahren B",
      "Raumweise Berechnung",
      "Förderfähige Dokumentation",
      "15% Energieeinsparung",
    ],
  },
];

export default function ReferenzenPage() {
  // Categories aus den Projekten extrahieren
  const categories = useMemo(
    () => [...new Set(projects.map((p) => p.category))],
    []
  );

  // State für gefilterte Projekte
  const [filteredProjects, setFilteredProjects] = useState(projects);
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-[#0089CF] uppercase tracking-wider mb-4">
              Referenzen
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
              Unsere{" "}
              <span className="text-gradient">Projekte</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Überzeugen Sie sich von unserer Arbeit. Hier finden Sie eine
              Auswahl unserer erfolgreich umgesetzten Projekte in Berlin und
              Potsdam.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient">
                100+
              </div>
              <div className="mt-2 text-muted-foreground">Projekte</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient">
                50+
              </div>
              <div className="mt-2 text-muted-foreground">Wärmepumpen</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient">
                5.0
              </div>
              <div className="mt-2 text-muted-foreground">Bewertung</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient">
                5+
              </div>
              <div className="mt-2 text-muted-foreground">Jahre Erfahrung</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <CategoryFilter
              items={projects}
              categories={categories}
              getCategory={(project) => project.category}
              onFilterChange={setFilteredProjects}
              allLabel="Alle"
            />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">
                  Keine Projekte in dieser Kategorie gefunden.
                </p>
              </div>
            ) : (
              filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400">Projektbild</span>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-primary">
                    {project.category}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li
                        key={index}
                        className="text-sm flex items-center gap-2"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#F7941D]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Ihr Projekt könnte das nächste sein
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Lassen Sie sich unverbindlich beraten und erfahren Sie, wie wir
              auch Ihr Heizungsprojekt erfolgreich umsetzen können.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/kontakt">
                Projekt anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
