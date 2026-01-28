import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems, getFAQsByCategory } from "@/lib/data/faq";
import { CTASection } from "@/components/sections";

export const metadata: Metadata = {
  title: "FAQ - Häufige Fragen",
  description:
    "Antworten auf häufig gestellte Fragen zu Wärmepumpen, Gasthermen, Förderung und unseren Dienstleistungen. Mannhold Haustechnik Berlin.",
};

const categories = [
  { id: "waermepumpe", label: "Wärmepumpe", color: "bg-[#0089CF]" },
  { id: "foerderung", label: "Förderung", color: "bg-[#F7941D]" },
  { id: "gastherme", label: "Gastherme", color: "bg-gray-600" },
  { id: "service", label: "Service", color: "bg-green-600" },
  { id: "allgemein", label: "Allgemein", color: "bg-purple-600" },
];

// FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-[#0089CF] uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
              Häufig gestellte{" "}
              <span className="text-gradient">Fragen</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Hier finden Sie Antworten auf die häufigsten Fragen rund um
              Wärmepumpen, Förderung und unsere Dienstleistungen.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar - Categories */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-lg font-bold mb-4">Kategorien</h2>
                <nav className="space-y-2">
                  {categories.map((cat) => (
                    <a
                      key={cat.id}
                      href={`#${cat.id}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <span
                        className={`w-3 h-3 rounded-full ${cat.color}`}
                      />
                      <span className="group-hover:text-primary transition-colors">
                        {cat.label}
                      </span>
                    </a>
                  ))}
                </nav>

                {/* Contact Hint */}
                <div className="mt-8 p-6 bg-gradient-to-br from-[#F7941D]/10 to-[#0089CF]/10 rounded-xl">
                  <HelpCircle className="h-8 w-8 text-[#F7941D] mb-4" />
                  <h3 className="font-bold mb-2">Frage nicht dabei?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Kontaktieren Sie uns direkt – wir helfen Ihnen gerne!
                  </p>
                  <Button asChild size="sm">
                    <Link href="/kontakt">Kontakt</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* FAQ Sections */}
            <div className="lg:col-span-3 space-y-12">
              {categories.map((cat) => {
                const categoryFaqs = getFAQsByCategory(
                  cat.id as "waermepumpe" | "foerderung" | "gastherme" | "service" | "allgemein"
                );
                if (categoryFaqs.length === 0) return null;

                return (
                  <div key={cat.id} id={cat.id} className="scroll-mt-32">
                    <div className="flex items-center gap-3 mb-6">
                      <span
                        className={`w-4 h-4 rounded-full ${cat.color}`}
                      />
                      <h2 className="text-2xl font-bold font-heading">
                        {cat.label}
                      </h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                      {categoryFaqs.map((faq) => (
                        <AccordionItem
                          key={faq.id}
                          value={faq.id}
                          className="bg-gray-50 rounded-xl border-0 overflow-hidden"
                        >
                          <AccordionTrigger className="px-6 py-5 text-left hover:no-underline [&[data-state=open]]:bg-gray-100">
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
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Still Questions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Noch Fragen?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Wir beraten Sie gerne persönlich zu Ihrem individuellen
              Heizungsprojekt – kostenlos und unverbindlich.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/kontakt">
                  Kontakt aufnehmen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/leistungen">Leistungen ansehen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
