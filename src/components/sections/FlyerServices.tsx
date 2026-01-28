"use client";

import Link from "next/link";
import { ArrowRight, Wind, Flame, Thermometer, Settings, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getMainServices } from "@/lib/data/services";
import { trackCTAClick } from "@/lib/analytics/conversion-events";

const services = getMainServices().slice(0, 5); // Top 5 Services für Flyer

const iconMap: Record<string, typeof Wind> = {
  waermepumpe: Wind,
  gastherme: Flame,
  fussbodenheizung: Thermometer,
  "hydraulischer-abgleich": Settings,
  wartung: Wrench,
};

export const FlyerServices = () => {
  return (
    <section className="section-padding bg-white py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">
            Unsere <span className="text-gradient">Leistungen</span>
          </h2>
          <p className="text-muted-foreground">
            Alles aus einer Hand für Ihre Heizung – von der Beratung bis zur Wartung.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.id] || Wind;
            return (
              <Card
                key={service.id}
                className="border-2 border-transparent hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#F7941D]/10 flex items-center justify-center border border-[#F7941D]/20">
                      <Icon className="h-6 w-6 text-[#F7941D]" />
                    </div>
                    <h3 className="text-lg font-bold font-heading">{service.shortTitle}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Features Preview */}
                  <ul className="space-y-1.5 mb-4">
                    {service.features.slice(0, 2).map((feature) => (
                      <li key={feature} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#F7941D] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="w-full text-sm"
                  >
                    <Link
                      href={`/leistungen/${service.slug}`}
                      onClick={() => trackCTAClick(`flyer_service_${service.slug}`, "flyer", "services_section")}
                    >
                      Mehr erfahren
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Button asChild size="lg" variant="outline" className="px-8">
            <Link href="/leistungen">
              Alle Leistungen ansehen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FlyerServices;
