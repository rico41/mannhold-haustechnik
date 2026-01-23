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
  ArrowUpRight,
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
  parseDistrictSlug,
  getAllDistrictSEOSlugs,
  generateFAQForDistrictPage,
  getRelatedDistrictPages,
  type SEOService,
  type SEODistrict,
} from "@/lib/data/programmatic";
import { company, testimonials, getTestimonialsByLocation } from "@/lib/data";
import { CTASection } from "@/components/sections";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generiere alle Seiten zur Build-Zeit
export async function generateStaticParams() {
  const slugs = getAllDistrictSEOSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Dynamische Metadaten
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseDistrictSlug(slug);

  if (!parsed) {
    return { title: "Seite nicht gefunden" };
  }

  const { service, district } = parsed;

  const title = `${service.name} ${district.name} | ${district.fullName} | Mannhold`;
  const description = `${service.name} in ${district.fullName} ✓ Lokaler Fachbetrieb ✓ Vaillant & OVUM Partner ✓ ${district.characteristics[0]}. Jetzt Angebot anfordern!`;

  return {
    title,
    description,
    keywords: [
      `${service.name} ${district.name}`,
      `${service.name} ${district.fullName}`,
      `Heizungsinstallateur ${district.name}`,
      `Heizung ${district.name}`,
      `Wärmepumpe ${district.name}`,
    ],
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
      canonical: `https://mannhold-haustechnik.de/stadtteil/${slug}`,
    },
  };
}

export default async function DistrictSEOPage({ params }: Props) {
  const { slug } = await params;
  const parsed = parseDistrictSlug(slug);

  if (!parsed) {
    notFound();
  }

  const { service, district } = parsed;
  const Icon = service.icon;

  // Generiere FAQ
  const faqs = generateFAQForDistrictPage(service, district);

  // Verwandte Stadtteil-Seiten (gleicher Service, anderer Stadtteil im gleichen Bezirk)
  const relatedDistricts = getRelatedDistrictPages(slug, 4);

  // Lokale Testimonials (suche nach Stadtteil oder Bezirk)
  const localTestimonials = getTestimonialsByLocation(district.name).length > 0
    ? getTestimonialsByLocation(district.name)
    : getTestimonialsByLocation(district.parentBezirkName).slice(0, 2);

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `https://mannhold-haustechnik.de/stadtteil/${slug}`,
    name: company.name,
    image: "https://mannhold-haustechnik.de/images/logo.svg",
    description: `${service.name} in ${district.fullName} - Ihr lokaler Fachbetrieb`,
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
    url: `https://mannhold-haustechnik.de/stadtteil/${slug}`,
    priceRange: "€€",
    areaServed: {
      "@type": "Place",
      name: district.fullName,
    },
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.slice(0, 3).map((faq) => ({
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
        name: "Standorte",
        item: "https://mannhold-haustechnik.de/standorte",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: district.parentBezirkName,
        item: `https://mannhold-haustechnik.de/standorte/${district.parentBezirkId}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: `${service.name} in ${district.name}`,
        item: `https://mannhold-haustechnik.de/stadtteil/${slug}`,
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
                <Link href="/standorte" className="hover:text-primary">
                  Standorte
                </Link>
                <span>/</span>
                <Link
                  href={`/${service.slug}-${district.parentBezirkId}`}
                  className="hover:text-primary"
                >
                  {district.parentBezirkName}
                </Link>
                <span>/</span>
                <span className="text-foreground">{district.name}</span>
              </nav>

              {/* Badges */}
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <Badge variant="secondary" className="bg-[#0089CF]/10 text-[#0089CF]">
                  <Icon className="h-4 w-4 mr-1" />
                  {service.shortName}
                </Badge>
                <Badge variant="secondary" className="bg-[#F7941D]/10 text-[#F7941D]">
                  <MapPin className="h-4 w-4 mr-1" />
                  {district.name}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {district.region === "berlin" ? "Berlin" : "Brandenburg"}
                </Badge>
              </div>

              {/* H1 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
                {service.name} in{" "}
                <span className="text-gradient">{district.name}</span>
              </h1>

              {/* Intro */}
              <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                {district.localIntro} Als zertifizierter Vaillant und OVUM Partner 
                bieten wir Ihnen professionelle {service.name.toLowerCase()}-Lösungen 
                in {district.fullName}.
              </p>

              {/* Highlights */}
              <ul className="mt-8 space-y-3">
                {district.characteristics.slice(0, 3).map((char, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#F7941D] shrink-0" />
                    <span>{char}</span>
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
                    Kostenlose Beratung in {district.name}
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
                {service.name} in {district.name}
              </h2>

              {/* PLZ */}
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">
                  Postleitzahlen in {district.name}:
                </p>
                <div className="flex flex-wrap gap-2">
                  {district.zipCodes.map((zip) => (
                    <span
                      key={zip}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {zip}
                    </span>
                  ))}
                </div>
              </div>

              {/* Parent-Bezirk Link */}
              <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-muted-foreground mb-2">
                  Bezirk:
                </p>
                <Link
                  href={`/${service.slug}-${district.parentBezirkId}`}
                  className="flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <Building className="h-4 w-4" />
                  {service.name} in {district.parentBezirkName}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
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
              Ihre Vorteile bei {service.name} in {district.name}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Profitieren Sie von unserem lokalen Service.
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
              Unser Leistungsumfang in {district.name}
            </h2>
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

      {/* Local Testimonials */}
      {localTestimonials.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading">
                Kundenstimmen aus {district.parentBezirkName}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {localTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="bg-gray-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-[#F7941D] text-[#F7941D]"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">
                      &ldquo;{testimonial.text.substring(0, 150)}...&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F7941D]/20 to-[#0089CF]/20 flex items-center justify-center">
                        <span className="font-bold text-[#0089CF]">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading">
                Häufige Fragen zu {service.name} in {district.name}
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(0, 5).map((faq, index) => (
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

      {/* Related Districts */}
      {relatedDistricts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading">
                {service.name} in weiteren Stadtteilen
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Wir sind auch in anderen Teilen von {district.parentBezirkName} für Sie da.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedDistricts.map((page) => (
                <Link key={page.slug} href={`/stadtteil/${page.slug}`}>
                  <Card className="group h-full hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-[#F7941D] shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">
                            {page.service.shortName} in {page.district.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {page.district.fullName}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Link zum Bezirk */}
            <div className="mt-8 text-center">
              <Button asChild variant="outline">
                <Link href={`/${service.slug}-${district.parentBezirkId}`}>
                  Alle Infos zu {service.name} in {district.parentBezirkName}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
