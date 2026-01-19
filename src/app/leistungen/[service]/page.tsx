import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services, getServiceBySlug } from "@/lib/data/services";
import { company, testimonials } from "@/lib/data";
import { CTASection } from "@/components/sections";

type Props = {
  params: Promise<{ service: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return {
      title: "Leistung nicht gefunden",
    };
  }

  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
  };
}

export default async function ServicePage({ params }: Props) {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  // Find related testimonial
  const relatedTestimonial = testimonials.find((t) =>
    t.service.toLowerCase().includes(service.shortTitle.toLowerCase())
  );

  // Get related services (exclude current)
  const relatedServices = services
    .filter((s) => s.id !== service.id && !s.slug.includes("/"))
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
                <span>/</span>
                <Link href="/leistungen" className="hover:text-primary">
                  Leistungen
                </Link>
                <span>/</span>
                <span className="text-foreground">{service.shortTitle}</span>
              </nav>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F7941D]/10 to-[#0089CF]/10 flex items-center justify-center">
                  <Icon className="h-7 w-7 text-[#0089CF]" />
                </div>
                <Badge className="bg-[#0089CF] text-white hover:bg-[#0089CF]/90">
                  Kernleistung
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
                {service.title}
              </h1>

              <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                {service.longDescription}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Link href="/kontakt">
                    Kostenlose Beratung
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={`tel:${company.contact.phone}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    {company.contact.phoneDisplay}
                  </a>
                </Button>
              </div>
            </div>

            {/* Benefits Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold font-heading mb-6">
                Ihre Vorteile
              </h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#F7941D] shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Unser Leistungsumfang
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Erfahren Sie, was wir im Bereich {service.shortTitle} für Sie tun
              können.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gradient-to-br hover:from-[#F7941D]/5 hover:to-[#0089CF]/5 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0089CF]/10 flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-[#0089CF]">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {relatedTestimonial && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block text-sm font-semibold text-[#0089CF] uppercase tracking-wider mb-4">
                Kundenstimme
              </span>
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed">
                &ldquo;{relatedTestimonial.text}&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F7941D]/20 to-[#0089CF]/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-[#0089CF]">
                    {relatedTestimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-semibold">{relatedTestimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {relatedTestimonial.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              So läuft die Zusammenarbeit
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              In wenigen Schritten zu Ihrer neuen {service.shortTitle}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Kontakt aufnehmen",
                description:
                  "Rufen Sie uns an oder nutzen Sie unser Kontaktformular.",
              },
              {
                step: "2",
                title: "Beratung vor Ort",
                description:
                  "Wir besichtigen Ihre Immobilie und beraten Sie individuell.",
              },
              {
                step: "3",
                title: "Angebot & Förderung",
                description:
                  "Sie erhalten ein transparentes Angebot inkl. Förderberechnung.",
              },
              {
                step: "4",
                title: "Installation",
                description:
                  "Unser Fachteam führt die Installation termingerecht durch.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F7941D] to-[#0089CF] flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#F7941D]/30 to-[#0089CF]/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Weitere Leistungen
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Entdecken Sie unser komplettes Leistungsspektrum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((relatedService) => {
              const RelatedIcon = relatedService.icon;
              return (
                <Link
                  key={relatedService.id}
                  href={`/leistungen/${relatedService.slug}`}
                >
                  <Card className="group h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F7941D]/10 to-[#0089CF]/10 flex items-center justify-center mb-4">
                        <RelatedIcon className="h-6 w-6 text-[#0089CF]" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {relatedService.shortTitle}
                      </h3>
                      <p className="text-muted-foreground line-clamp-2">
                        {relatedService.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/leistungen">
                Alle Leistungen ansehen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
