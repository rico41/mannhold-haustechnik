import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getMainServices } from "@/lib/data/services";
import { CTASection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Unsere Leistungen",
  description:
    "Wärmepumpen, Gasthermen, Fußbodenheizung, Hydraulischer Abgleich und mehr. Alle Heizungs-Dienstleistungen von Mannhold Haustechnik in Berlin.",
};

const services = getMainServices();

export default function LeistungenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-[#0089CF] uppercase tracking-wider mb-4">
              Leistungen
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
              Unsere{" "}
              <span className="text-gradient">Dienstleistungen</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Von der Wärmepumpen-Installation über Gasthermen-Service bis zur
              Fußbodenheizung – wir bieten Ihnen das komplette Spektrum moderner
              Heiztechnik.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.id} href={`/leistungen/${service.slug}`}>
                  <Card className="group h-full border-2 border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F7941D]/10 to-[#0089CF]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-8 w-8 text-[#0089CF]" />
                        </div>

                        <div className="flex-1">
                          {/* Title */}
                          <h2 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">
                            {service.title}
                          </h2>

                          {/* Description */}
                          <p className="text-muted-foreground mb-6">
                            {service.description}
                          </p>

                          {/* Features */}
                          <ul className="grid grid-cols-2 gap-2 mb-6">
                            {service.features.slice(0, 4).map((feature) => (
                              <li
                                key={feature}
                                className="text-sm text-muted-foreground flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F7941D]" />
                                {feature}
                              </li>
                            ))}
                          </ul>

                          {/* Link */}
                          <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                            Mehr erfahren
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Warum Mannhold Haustechnik?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Wir stehen für Qualität, Zuverlässigkeit und faire Preise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F7941D] to-[#0089CF] flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">70%</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Förderung möglich</h3>
              <p className="text-muted-foreground">
                Nutzen Sie staatliche Förderprogramme für Ihre neue Heizung.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F7941D] to-[#0089CF] flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">5+</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Jahre Erfahrung</h3>
              <p className="text-muted-foreground">
                Profitieren Sie von unserer langjährigen Expertise.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F7941D] to-[#0089CF] flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">100+</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Zufriedene Kunden</h3>
              <p className="text-muted-foreground">
                In Berlin und Potsdam vertrauen uns zahlreiche Kunden.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/#eignungs-check">
                Machen Sie den Eignungs-Check
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
