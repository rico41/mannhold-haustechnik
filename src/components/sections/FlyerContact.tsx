"use client";

import { Phone, Mail, MapPin, Clock, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { company } from "@/lib/data";
import { trackPhoneClick, trackCTAClick } from "@/lib/analytics/conversion-events";

export const FlyerContact = () => {
  const offerUrl = company.offerSoftware?.url;

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">
              <span className="text-gradient">Kontakt</span> aufnehmen
            </h2>
            <p className="text-muted-foreground">
              Wir beraten Sie gerne persönlich – kostenlos und unverbindlich.
            </p>
          </div>

          {/* Angebotssoftware CTA - Prominent */}
          {offerUrl && (
            <Card className="mb-8 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-[#0089CF]/5">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold font-heading mb-2">
                  Online-Angebot anfordern
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Füllen Sie unser Formular aus und erhalten Sie schnell ein unverbindliches Angebot.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 min-w-[280px]"
                  onClick={() => trackCTAClick("flyer_offer_contact", "flyer", "contact_section")}
                >
                  <a
                    href={offerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    {company.offerSoftware?.label || "Online-Angebot anfordern"}
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Phone */}
            <Card className="border-2 hover:border-primary/20 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0089CF]/10 flex items-center justify-center border border-[#0089CF]/20 shrink-0">
                    <Phone className="h-6 w-6 text-[#0089CF]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Telefon</h3>
                    <Button
                      asChild
                      variant="link"
                      className="p-0 h-auto text-base font-medium text-[#0089CF] hover:text-[#0089CF]/80"
                      onClick={() => trackPhoneClick("flyer", "contact_section")}
                    >
                      <a href={`tel:${company.contact.phone}`}>
                        {company.contact.phoneDisplay}
                      </a>
                    </Button>
                    <p className="text-sm text-muted-foreground mt-1">
                      Mo-Do: 08:00-16:00 Uhr
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="border-2 hover:border-primary/20 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F7941D]/10 flex items-center justify-center border border-[#F7941D]/20 shrink-0">
                    <Mail className="h-6 w-6 text-[#F7941D]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">E-Mail</h3>
                    <Button
                      asChild
                      variant="link"
                      className="p-0 h-auto text-base font-medium text-[#F7941D] hover:text-[#F7941D]/80 break-all"
                    >
                      <a href={`mailto:${company.contact.email}`}>
                        {company.contact.email}
                      </a>
                    </Button>
                    <p className="text-sm text-muted-foreground mt-1">
                      Antwort innerhalb von 24h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="border-2 hover:border-primary/20 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0089CF]/10 flex items-center justify-center border border-[#0089CF]/20 shrink-0">
                    <MapPin className="h-6 w-6 text-[#0089CF]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Adresse</h3>
                    <p className="text-sm text-muted-foreground">
                      {company.address.street}
                      <br />
                      {company.address.zip} {company.address.city}
                      <br />
                      {company.address.district}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="border-2 hover:border-primary/20 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F7941D]/10 flex items-center justify-center border border-[#F7941D]/20 shrink-0">
                    <Clock className="h-6 w-6 text-[#F7941D]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Öffnungszeiten</h3>
                    <p className="text-sm text-muted-foreground">
                      {company.hours.weekdays}
                      <br />
                      {company.hours.friday}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional CTA */}
          <div className="mt-8 text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8"
              onClick={() => trackCTAClick("flyer_contact_footer", "flyer", "contact_section")}
            >
              <a href="/kontakt">
                Kontaktformular öffnen
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlyerContact;
