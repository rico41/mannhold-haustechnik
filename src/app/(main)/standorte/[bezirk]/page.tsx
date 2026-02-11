import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle2,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  locations,
  getLocationBySlug,
  company,
  testimonials,
  getTestimonialsByLocation,
} from "@/lib/data";
import { getMainServices } from "@/lib/data/services";
import { CTASection } from "@/components/sections";
import { MultiStepRequestForm } from "@/components/forms/MultiStepRequestForm";

type Props = {
  params: Promise<{ bezirk: string }>;
};

export async function generateStaticParams() {
  return locations.map((location) => ({
    bezirk: location.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { bezirk } = await params;
  const location = getLocationBySlug(bezirk);

  if (!location) {
    return {
      title: "Standort nicht gefunden",
    };
  }

  const canonicalUrl = `https://mannhold-haustechnik.de/standorte/${bezirk}`;
  return {
    title: location.seoTitle,
    description: location.seoDescription,
    keywords: location.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: location.seoTitle,
      description: location.seoDescription,
      url: canonicalUrl,
      type: "website",
      locale: "de_DE",
      siteName: "Mannhold Haustechnik",
    },
    twitter: {
      card: "summary_large_image",
      title: location.seoTitle,
      description: location.seoDescription,
    },
  };
}

export default async function StandortPage({ params }: Props) {
  const { bezirk } = await params;
  const location = getLocationBySlug(bezirk);

  if (!location) {
    notFound();
  }

  const services = getMainServices();
  const locationTestimonials = getTestimonialsByLocation(location.name);

  // Schema.org HVACBusiness markup (spezifischer als LocalBusiness)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `https://mannhold-haustechnik.de/standorte/${bezirk}`,
    name: company.name,
    description: location.description,
    image: "https://mannhold-haustechnik.de/images/logo.svg",
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
    url: company.contact.website,
    areaServed: {
      "@type": "Place",
      name: location.fullName,
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 52.4862,
        longitude: 13.3589,
      },
      geoRadius: "50000", // 50km Radius
    },
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "16:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "08:00",
        closes: "12:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Heizungsdienstleistungen",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wärmepumpen-Installation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Heizungswartung",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hydraulischer Abgleich",
          },
        },
      ],
    },
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

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
                <Link href="/standorte" className="hover:text-primary">
                  Standorte
                </Link>
                <span>/</span>
                <span className="text-foreground">{location.name}</span>
              </nav>

              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-[#F7941D]" />
                <Badge variant="secondary">
                  {location.region === "berlin" ? "Berlin" : "Brandenburg"}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
                Wärmepumpe &<br />
                Heizung in{" "}
                <span className="text-gradient">{location.name}</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                {location.description}
              </p>

              {/* Highlights */}
              <ul className="mt-8 space-y-3">
                {location.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#F7941D]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Link href="/#eignungs-check">
                    Machen Sie den Eignungs-Check
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

            {/* Anfrage-Formular */}
            <div>
              <MultiStepRequestForm
                showTitle
                title={`Anfrage in ${location.name}`}
                subtitle="In wenigen Schritten zur passenden Lösung"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Unsere Leistungen in {location.name}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Profitieren Sie von unserem umfassenden Service direkt vor Ort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  href={`/leistungen/${service.slug}`}
                >
                  <Card className="group h-full hover:shadow-lg transition-all cursor-pointer">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F7941D]/10 to-[#0089CF]/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-[#0089CF]" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {service.shortTitle} in {location.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {locationTestimonials.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-heading">
                  Kundenstimme aus {location.name}
                </h2>
              </div>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 fill-[#F7941D] text-[#F7941D]"
                      />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                    &ldquo;{locationTestimonials[0].text}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F7941D]/20 to-[#0089CF]/20 flex items-center justify-center">
                      <span className="text-xl font-bold text-[#0089CF]">
                        {locationTestimonials[0].name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">
                        {locationTestimonials[0].name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {locationTestimonials[0].location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Why Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Warum Mannhold Haustechnik in {location.name}?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F7941D] to-[#0089CF] flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Schnell vor Ort</h3>
              <p className="text-muted-foreground">
                Von unserem Standort in Schöneberg sind wir in kurzer Zeit bei
                Ihnen in {location.name}.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F7941D] to-[#0089CF] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lokale Expertise</h3>
              <p className="text-muted-foreground">
                Wir kennen die Gegebenheiten in {location.name} und beraten Sie
                passgenau.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F7941D] to-[#0089CF] flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Beste Bewertungen</h3>
              <p className="text-muted-foreground">
                Unsere Kunden in {location.name} sind zufrieden – überzeugen Sie
                sich selbst.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Unser Standort
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Von Berlin-Schöneberg aus erreichen wir {location.name} schnell und unkompliziert.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyBFw0Qbyq9zTFTd-tUY6dS6FG4QmuUBlUo'}&q=${encodeURIComponent(company.address.street + ", " + company.address.zip + " " + company.address.city)}&zoom=13&maptype=roadmap`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mannhold Haustechnik Standort - Service in ${location.name}`}
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                <strong>Mannhold Haustechnik GmbH</strong><br />
                {company.address.street}, {company.address.zip} {company.address.city}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="container-custom">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6">Weitere Standorte</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {locations
                .filter((l) => l.id !== location.id)
                .map((loc) => (
                  <Link
                    key={loc.id}
                    href={`/standorte/${loc.slug}`}
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors shadow-sm"
                  >
                    {loc.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
