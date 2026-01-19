import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle2,
  Clock,
  Star,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  parseSlug,
  getAllSEOSlugs,
  generateFAQForPage,
  getRelatedLocationPages,
  getRelatedServicePages,
  type SEOService,
  type SEOLocation,
} from "@/lib/data/programmatic";
import { company } from "@/lib/data";
import { CTASection } from "@/components/sections";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generiere alle Seiten zur Build-Zeit
export async function generateStaticParams() {
  const slugs = getAllSEOSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Dynamische Metadaten
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseSlug(slug);

  if (!parsed) {
    return { title: "Seite nicht gefunden" };
  }

  const { service, location } = parsed;

  // Generiere Title und Description mit allen Platzhaltern
  const title = service.titleTemplate
    .replace(/{bezirk}/g, location.name)
    .replace(/{shortName}/g, location.shortName);
  const description = service.metaDescriptionTemplate
    .replace(/{bezirk}/g, location.name)
    .replace(/{shortName}/g, location.shortName)
    .replace(/{distanceInfo}/g, location.distanceInfo);
  const keywords = service.keywordTemplates.map((kw) =>
    kw.replace(/{bezirk}/g, location.name).replace(/{shortName}/g, location.shortName)
  );

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://mannhold-haustechnik.de/${slug}`,
    },
  };
}

export default async function ProgrammaticSEOPage({ params }: Props) {
  const { slug } = await params;
  const parsed = parseSlug(slug);

  if (!parsed) {
    notFound();
  }

  const { service, location } = parsed;
  const Icon = service.icon;

  // Generiere FAQ
  const faqs = generateFAQForPage(service, location);

  // Verwandte Seiten
  const relatedLocations = getRelatedLocationPages(slug, 4);
  const relatedServices = getRelatedServicePages(slug, 4);

  // LocalBusiness Schema (erweitert)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://mannhold-haustechnik.de/${slug}`,
    name: company.name,
    image: "https://mannhold-haustechnik.de/images/logo.svg",
    description: service.metaDescriptionTemplate
      .replace(/{bezirk}/g, location.name)
      .replace(/{distanceInfo}/g, location.distanceInfo),
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      postalCode: company.address.zip,
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.4862,
      longitude: 13.3589,
    },
    telephone: company.contact.phone,
    email: company.contact.email,
    url: `https://mannhold-haustechnik.de/${slug}`,
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    areaServed: {
      "@type": "Place",
      name: location.name,
    },
    sameAs: company.social ? [
      company.social.facebook,
      company.social.instagram,
      company.social.linkedin,
    ].filter(Boolean) : [],
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.introTemplate.replace(/{bezirk}/g, location.name),
    provider: {
      "@type": "LocalBusiness",
      name: company.name,
    },
    areaServed: {
      "@type": "Place",
      name: location.name,
    },
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://mannhold-haustechnik.de",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: service.name,
        item: `https://mannhold-haustechnik.de/leistungen/${service.slug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${service.name} in ${location.name}`,
        item: `https://mannhold-haustechnik.de/${slug}`,
      },
    ],
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
                <span>/</span>
                <Link href="/leistungen" className="hover:text-primary">
                  Leistungen
                </Link>
                <span>/</span>
                <span className="text-foreground">{service.name} in {location.shortName}</span>
              </nav>

              {/* Badges */}
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <Badge variant="secondary" className="bg-[#0089CF]/10 text-[#0089CF]">
                  <Icon className="h-4 w-4 mr-1" />
                  {service.shortName}
                </Badge>
                <Badge variant="secondary" className="bg-[#F7941D]/10 text-[#F7941D]">
                  <MapPin className="h-4 w-4 mr-1" />
                  {location.shortName}
                </Badge>
              </div>

              {/* H1 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
                {service.h1Template.replace(/{bezirk}/g, location.name)}
              </h1>

              {/* Intro */}
              <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                {service.introTemplate.replace(/{bezirk}/g, location.name)}{" "}
                {location.localIntro}
              </p>

              {/* Highlights */}
              <ul className="mt-8 space-y-3">
                {location.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#F7941D] shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Link href="/kontakt">
                    Kostenlose Beratung in {location.shortName}
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

            {/* Info Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-xl font-bold font-heading mb-6">
                {service.name} in {location.name}
              </h2>

              {/* Anfahrtsinfo */}
              <div className="flex items-start gap-3 mb-6 p-4 bg-gray-50 rounded-xl">
                <Clock className="h-5 w-5 text-[#F7941D] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Anfahrt</p>
                  <p className="text-sm text-muted-foreground">
                    {location.distanceInfo}
                  </p>
                </div>
              </div>

              {/* PLZ */}
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">
                  Postleitzahlen in {location.shortName}:
                </p>
                <div className="flex flex-wrap gap-2">
                  {location.zipCodes.slice(0, 8).map((zip) => (
                    <span
                      key={zip}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {zip}
                    </span>
                  ))}
                  {location.zipCodes.length > 8 && (
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      +{location.zipCodes.length - 8}
                    </span>
                  )}
                </div>
              </div>

              {/* Kontakt */}
              <div className="pt-6 border-t">
                <p className="font-semibold mb-2">Direkt Kontakt aufnehmen</p>
                <a
                  href={`tel:${company.contact.phone}`}
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  {company.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Ihre Vorteile bei {service.name}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Profitieren Sie von unserem Service in {location.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F7941D] to-[#0089CF] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Unser Leistungsumfang
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Das bieten wir Ihnen im Bereich {service.name} in {location.shortName}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0089CF]/10 flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-[#0089CF]">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-semibold">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area Description */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                {service.name} in {location.name}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {location.areaDescription}
              </p>

              <div className="space-y-4">
                {location.characteristics.map((char, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Building className="h-5 w-5 text-[#0089CF]" />
                    <span>{char}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-[#F7941D] mx-auto mb-4" />
                <p className="font-medium">{location.name}</p>
                <p className="text-sm text-muted-foreground">
                  {location.region === "berlin" ? "Berlin" : "Brandenburg"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading">
                Häufige Fragen zu {service.name} in {location.shortName}
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-white rounded-xl border-0 shadow-sm overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-5 text-left hover:no-underline [&[data-state=open]]:bg-gray-50">
                    <span className="text-base font-medium pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Locations */}
      {relatedLocations.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading">
                {service.name} in weiteren Bezirken
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Wir sind auch in anderen Teilen von Berlin und Potsdam für Sie da.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedLocations.map((page) => (
                <Link key={page.slug} href={`/${page.slug}`}>
                  <Card className="group h-full hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-[#F7941D] shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">
                            {page.location.shortName}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {page.location.distanceInfo}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading">
                Weitere Leistungen in {location.shortName}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Entdecken Sie unser komplettes Angebot für {location.name}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.map((page) => {
                const RelatedIcon = page.service.icon;
                return (
                  <Link key={page.slug} href={`/${page.slug}`}>
                    <Card className="group h-full hover:shadow-lg transition-all cursor-pointer">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F7941D]/10 to-[#0089CF]/10 flex items-center justify-center mb-4">
                          <RelatedIcon className="h-6 w-6 text-[#0089CF]" />
                        </div>
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {page.service.shortName}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          in {location.shortName}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
