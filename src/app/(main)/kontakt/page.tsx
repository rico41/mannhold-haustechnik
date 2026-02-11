import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Bot } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kontakt | Mannhold Haustechnik Berlin – Wärmepumpe & Heiztechnik",
  description:
    "Kontakt: Mannhold Haustechnik, Kolonnenstraße 8, 10827 Berlin. ☎ 030 550 718 31. Eignungs-Check für Wärmepumpe, Heizung & Gastherme in Berlin und Potsdam.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-[#0089CF] uppercase tracking-wider mb-4">
              Kontakt
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
              Sprechen Sie mit{" "}
              <span className="text-gradient">uns</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Haben Sie Fragen zu Wärmepumpen, Heizungsaustausch oder unseren
              Services? Wir beraten Sie gerne – kostenlos und unverbindlich.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold font-heading mb-6">
                  Kontaktinformationen
                </h2>
                <p className="text-muted-foreground mb-8">
                  Erreichen Sie uns telefonisch, per E-Mail oder besuchen Sie
                  uns an unserem Standort in Berlin-Schöneberg.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone with 24/7 KI Badge */}
                <a
                  href={`tel:${company.contact.phone}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-[#F7941D]/5 to-[#0089CF]/10 border-2 border-[#F7941D]/20 hover:border-[#F7941D]/40 transition-colors group relative overflow-hidden"
                >
                  {/* 24/7 Badge */}
                  <div className="absolute top-0 right-0 bg-[#F7941D] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    24/7
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#F7941D]/20 flex items-center justify-center shrink-0 group-hover:bg-[#F7941D]/30 transition-colors">
                    <Phone className="h-6 w-6 text-[#F7941D]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">Telefon</h3>
                      <span className="inline-flex items-center gap-1 text-xs bg-[#0089CF]/10 text-[#0089CF] px-2 py-0.5 rounded-full">
                        <Bot className="h-3 w-3" />
                        KI-Assistent
                      </span>
                    </div>
                    <p className="text-lg font-medium text-primary">
                      {company.contact.phoneDisplay}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Jederzeit erreichbar – unser KI-Telefonassistent nimmt Ihre Anfrage entgegen
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${company.contact.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-br hover:from-[#F7941D]/5 hover:to-[#0089CF]/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0089CF]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0089CF]/20 transition-colors">
                    <Mail className="h-6 w-6 text-[#0089CF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">E-Mail</h3>
                    <p className="text-lg font-medium text-primary">
                      {company.contact.email}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Antwort innerhalb von 24h
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
                  <div className="w-12 h-12 rounded-xl bg-[#F7941D]/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-[#F7941D]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-muted-foreground">
                      {company.address.street}
                      <br />
                      {company.address.zip} {company.address.city}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
                  <div className="w-12 h-12 rounded-xl bg-[#0089CF]/10 flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-[#0089CF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Öffnungszeiten</h3>
                    <p className="text-muted-foreground">
                      {company.hours.weekdays}
                      <br />
                      {company.hours.friday}
                      <br />
                      {company.hours.saturday}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Info - Digital & Innovation */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-[#0089CF]/10 to-[#F7941D]/10 border border-[#0089CF]/20">
                <div className="flex items-start gap-3">
                  <Bot className="h-6 w-6 text-[#0089CF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">Digital & Zukunftsorientiert</h3>
                    <p className="text-sm text-muted-foreground">
                      Unser KI-Telefonassistent ermöglicht es Ihnen, uns <strong>24 Stunden am Tag, 7 Tage die Woche</strong> zu erreichen. 
                      Hinterlassen Sie Ihre Anfrage oder vereinbaren Sie einen Rückruf – auch außerhalb der Geschäftszeiten.
                    </p>
                    <p className="text-sm text-[#0089CF] font-medium mt-2">
                      Modernste Technik für besten Service.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Unser Standort
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Zentral in Berlin-Schöneberg – schnell bei Ihnen in ganz Berlin
              Süd und Potsdam.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="aspect-video max-w-5xl mx-auto bg-gray-200 rounded-2xl overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.5!2d13.3556!3d52.4847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8508c8d3f6e47%3A0x8e7e7c0f0f0f0f0f!2sKolonnenstra%C3%9Fe%208%2C%2010827%20Berlin!5e0!3m2!1sde!2sde!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mannhold Haustechnik Standort"
              className="absolute inset-0"
            />
          </div>

          {/* Service Areas */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-4">Unser Einzugsgebiet</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Schöneberg",
                "Steglitz",
                "Zehlendorf",
                "Tempelhof",
                "Friedenau",
                "Wilmersdorf",
                "Potsdam",
              ].map((area) => (
                <Link
                  key={area}
                  href={`/standorte/berlin-${area.toLowerCase()}`}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  {area}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
