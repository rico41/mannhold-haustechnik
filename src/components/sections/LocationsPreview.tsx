"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { seoLocations } from "@/lib/data/programmatic";

// Nur Priority 1-2 Locations für die Vorschau
const priorityLocations = seoLocations.filter((l) => l.priority <= 2);

export const LocationsPreview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-[#F7941D] uppercase tracking-wider mb-4"
          >
            Unser Einzugsgebiet
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading"
          >
            Wärmepumpen in{" "}
            <span className="text-gradient">Berlin & Potsdam</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Von unserem Standort in Berlin-Schöneberg aus sind wir schnell bei
            Ihnen – ob in Berlin Süd oder Potsdam.
          </motion.p>
        </div>

        {/* Locations Grid - Links to Programmatic SEO Pages */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {priorityLocations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={`/waermepumpe-${location.slug}`}
                className="group block p-4 md:p-6 bg-gray-50 rounded-xl hover:bg-gradient-to-br hover:from-[#F7941D]/5 hover:to-[#0089CF]/5 transition-all duration-300 border-2 border-transparent hover:border-primary/10"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F7941D]/10 to-[#0089CF]/10 flex items-center justify-center shrink-0">
                    <Wind className="h-5 w-5 text-[#0089CF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      Wärmepumpe {location.shortName}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {location.distanceInfo}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Links to other services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <span className="text-sm text-muted-foreground self-center">
            Weitere Services:
          </span>
          {priorityLocations.slice(0, 4).map((location) => (
            <Link
              key={`ha-${location.slug}`}
              href={`/hydraulischer-abgleich-${location.slug}`}
              className="text-sm px-3 py-1 bg-gray-100 rounded-full hover:bg-[#0089CF]/10 hover:text-[#0089CF] transition-colors"
            >
              Hydraulischer Abgleich {location.shortName}
            </Link>
          ))}
        </motion.div>

        {/* Map/Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-10"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold font-heading mb-4">
                Unser Standort
              </h3>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-5 w-5 text-[#F7941D] shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Kolonnenstraße 8</p>
                  <p className="text-muted-foreground">10827 Berlin-Schöneberg</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Zentral im Süden Berlins gelegen, erreichen wir alle unsere
                Einsatzgebiete schnell und unkompliziert.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline">
                  <Link href="/kontakt">
                    Anfahrt & Kontakt
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/standorte">
                    Alle Standorte anzeigen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Map Image */}
            <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg border-2 border-white/50">
              <img 
                src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&q=80&w=1200" 
                alt="Wärmepumpe Berlin - Servicegebiet Steglitz, Charlottenburg, Potsdam - Mannhold Haustechnik" 
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
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsPreview;
