"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, Loader2, CheckCircle2, Phone, Clock, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { company } from "@/lib/data";
import { trackFormSubmit, trackFormFieldFocus } from "@/lib/analytics/conversion-events";
import { trackFacebookEvent, trackGoogleAdsConversion } from "@/components/analytics/RetargetingPixels";

type FormData = {
  name: string;
  email: string;
  phone: string;
  plz: string;
  anliegen: string;
  nachricht: string;
  datenschutz: boolean;
};

const anliegenOptions = [
  { value: "waermepumpe", label: "Wärmepumpe Installation" },
  { value: "gastherme", label: "Gasthermen-Service" },
  { value: "fussbodenheizung", label: "Fußbodenheizung" },
  { value: "hydraulischer-abgleich", label: "Hydraulischer Abgleich" },
  { value: "heizlastberechnung", label: "Heizlastberechnung" },
  { value: "wartung", label: "Wartung & Service" },
  { value: "beratung", label: "Allgemeine Beratung" },
  { value: "sonstiges", label: "Sonstiges" },
];

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedAnliegen, setSelectedAnliegen] = useState("");
  const [showFullForm, setShowFullForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const handleFormSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          anliegen: selectedAnliegen,
        }),
      });

      if (!response.ok) {
        throw new Error("Fehler beim Senden der Nachricht");
      }

      // Track Conversion
      trackFormSubmit("contact", {
        anliegen: selectedAnliegen,
        hasPhone: !!data.phone,
      });

      // Retargeting Events
      trackFacebookEvent("Lead", {
        content_name: "Contact Form",
        content_category: "Contact",
      });
      trackGoogleAdsConversion("contact_form_submit");

      setIsSubmitted(true);
      reset();
      setSelectedAnliegen("");
    } catch (err) {
      setError(
        "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="border-0 shadow-xl">
        <CardContent className="p-8 md:p-12 text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold font-heading mb-4">
            Vielen Dank für Ihre Anfrage!
          </h3>
          <p className="text-muted-foreground mb-6">
            Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich
            bei Ihnen melden – in der Regel innerhalb von 24 Stunden.
          </p>
          <Button
            variant="outline"
            onClick={() => setIsSubmitted(false)}
          >
            Neue Anfrage senden
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-xl">
      <CardContent className="p-8 md:p-12">
        {/* Trust Indicators */}
        <div className="mb-8 p-6 bg-gradient-to-r from-[#F7941D]/5 to-[#0089CF]/5 rounded-xl border border-[#F7941D]/10">
          <h3 className="font-semibold text-lg mb-4">Was Sie erhalten:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#F7941D] shrink-0" />
              <span className="text-sm">Kostenlose Beratung</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#F7941D] shrink-0" />
              <span className="text-sm">Unverbindliches Angebot</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#F7941D] shrink-0" />
              <span className="text-sm">Hilfestellung bei Förderung</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-gray-200">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>200+ Anfragen diesen Monat</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>Durchschnittliche Antwortzeit: 2h</span>
            </div>
          </div>
        </div>

        {/* Phone-First CTA */}
        <div className="mb-6 p-4 bg-[#0089CF]/5 border border-[#0089CF]/20 rounded-lg">
          <p className="text-sm font-medium mb-3">Schnellere Hilfe gewünscht?</p>
          <Button
            asChild
            variant="outline"
            className="w-full border-2 border-[#0089CF] text-[#0089CF] hover:bg-[#0089CF] hover:text-white"
          >
            <a
              href={`tel:${company.contact.phone}`}
              onClick={() => {
                if (typeof window !== "undefined" && window.gtag) {
                  trackFormSubmit("contact", { action: "phone_fallback" });
                }
              }}
            >
              <Phone className="mr-2 h-5 w-5" />
              Direkt anrufen: {company.contact.phoneDisplay}
            </a>
          </Button>
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">
                Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                placeholder="Ihr vollständiger Name"
                {...register("name", {
                  required: "Name ist erforderlich",
                })}
                className={errors.name ? "border-red-500" : ""}
                aria-invalid={errors.name ? "true" : "false"}
                onFocus={() => trackFormFieldFocus("name", "contact")}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                E-Mail <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="ihre@email.de"
                {...register("email", {
                  required: "E-Mail ist erforderlich",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Ungültige E-Mail-Adresse",
                  },
                })}
                className={errors.email ? "border-red-500" : ""}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* PLZ - Always visible */}
          <div className="space-y-2">
            <Label htmlFor="plz">
              PLZ / Ort <span className="text-red-500">*</span>
            </Label>
            <Input
              id="plz"
              placeholder="10827 Berlin"
              {...register("plz", {
                required: "PLZ/Ort ist erforderlich",
              })}
              className={errors.plz ? "border-red-500" : ""}
              aria-invalid={errors.plz ? "true" : "false"}
            />
            {errors.plz && (
              <p className="text-sm text-red-500">{errors.plz.message}</p>
            )}
          </div>

          {/* Progressive Disclosure Button */}
          {!showFullForm && (
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => setShowFullForm(true)}
            >
              Weitere Details angeben (optional)
            </Button>
          )}

          {/* Additional Fields - Shown after clicking "Weitere Details" */}
          {showFullForm && (
            <>
              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon (optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="030 550 718 31"
                  {...register("phone")}
                />
              </div>

              {/* Anliegen */}
              <div className="space-y-2">
                <Label htmlFor="anliegen">
                  Anliegen <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={selectedAnliegen}
                  onValueChange={setSelectedAnliegen}
                  required
                >
                  <SelectTrigger id="anliegen">
                    <SelectValue placeholder="Bitte wählen Sie Ihr Anliegen" />
                  </SelectTrigger>
                  <SelectContent>
                    {anliegenOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Nachricht */}
              <div className="space-y-2">
                <Label htmlFor="nachricht">Ihre Nachricht</Label>
                <Textarea
                  id="nachricht"
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                  rows={5}
                  {...register("nachricht")}
                />
              </div>
            </>
          )}

          {/* Datenschutz */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="datenschutz"
              {...register("datenschutz", {
                required: "Sie müssen der Datenschutzerklärung zustimmen",
              })}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <Label htmlFor="datenschutz" className="text-sm text-muted-foreground">
              Ich habe die{" "}
              <a href="/datenschutz" className="text-primary hover:underline">
                Datenschutzerklärung
              </a>{" "}
              gelesen und stimme der Verarbeitung meiner Daten zu.{" "}
              <span className="text-red-500">*</span>
            </Label>
          </div>
          {errors.datenschutz && (
            <p className="text-sm text-red-500">{errors.datenschutz.message}</p>
          )}

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Wird gesendet...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Anfrage senden
              </>
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Wir antworten in der Regel innerhalb von 24 Stunden.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
