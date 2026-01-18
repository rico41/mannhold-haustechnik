"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
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

          {/* Phone & PLZ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Telefon (optional)</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="030 123 456 78"
                {...register("phone")}
              />
            </div>

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
