"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  FileText,
} from "lucide-react";
import { company } from "@/lib/data";
import { trackCTAClick, trackPhoneClick } from "@/lib/analytics/conversion-events";
import { getMainServices } from "@/lib/data/services";

const benefits = [
  "Bis zu 70% Förderung möglich",
  "Vaillant & OVUM Partner",
  "Hilfestellung bei Förderanträgen",
];

export const FlyerLanding = () => {
  const offerUrl = company.offerSoftware?.url;
  const mainServices = getMainServices().slice(0, 5);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Minimal Header */}
      <header className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-gray-100 px-4 py-3 safe-area-inset-top">
        <Link
          href="/"
          className="flex items-center gap-3 max-w-lg mx-auto"
          aria-label="Zur Startseite"
        >
          <Image
            src="/images/logo.svg"
            alt="Mannhold Haustechnik"
            width={120}
            height={40}
            className="h-9 w-auto"
            priority
          />
          <span className="text-sm font-medium text-gray-600 hidden sm:inline">
            {company.shortName}
          </span>
        </Link>
      </header>

      <main className="flex-1 px-4 pb-8 max-w-lg mx-auto w-full">
        {/* Headline + Benefits – kompakt */}
        <section className="pt-6 pb-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 leading-tight">
            Wärmepumpe Berlin
            <br />
            <span className="text-[#F7941D]">bis zu 70% Förderung</span>
          </h1>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-gray-600">
            {benefits.map((item) => (
              <li key={item} className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F7941D]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Action-Punkte – klare Buttons, wohin man soll */}
        <section className="space-y-3" aria-label="Handlungen">
          {offerUrl && (
            <a
              href={offerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full min-h-[56px] px-5 py-4 rounded-xl bg-[#F7941D] text-white font-semibold text-base shadow-lg active:scale-[0.98] transition-transform"
              onClick={() => trackCTAClick("flyer_offer", "flyer", "cta_block")}
              aria-label="Online-Angebot für Wärmepumpen anfordern"
            >
              <span className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                {company.offerSoftware?.label ?? "Online-Angebot anfordern"}
              </span>
              <ExternalLink className="h-5 w-5 shrink-0" />
            </a>
          )}

          <a
            href={`tel:${company.contact.phone}`}
            className="flex items-center justify-between w-full min-h-[56px] px-5 py-4 rounded-xl bg-[#0089CF] text-white font-semibold text-base shadow-lg active:scale-[0.98] transition-transform"
            onClick={() => trackPhoneClick("flyer", "cta_block")}
            aria-label={`Jetzt anrufen: ${company.contact.phoneDisplay}`}
          >
            <span className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Jetzt anrufen
            </span>
            <span className="font-bold tabular-nums">{company.contact.phoneDisplay}</span>
          </a>

          <Link
            href="/kontakt"
            className="flex items-center justify-between w-full min-h-[56px] px-5 py-4 rounded-xl border-2 border-gray-300 text-gray-800 font-semibold text-base active:scale-[0.98] transition-transform"
            onClick={() => trackCTAClick("flyer_contact", "flyer", "cta_block")}
            aria-label="Kontaktformular öffnen"
          >
            <span>Kontaktformular</span>
            <ChevronRight className="h-5 w-5 text-gray-500" />
          </Link>
        </section>

        {/* Was wir anbieten – nur Links, keine Karten */}
        <section className="pt-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Was wir anbieten
          </h2>
          <ul className="space-y-1">
            {mainServices.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/leistungen/${service.slug}`}
                  className="flex items-center justify-between py-3 text-gray-800 font-medium border-b border-gray-100 last:border-0 active:bg-gray-50 -mx-2 px-2 rounded-lg"
                  onClick={() =>
                    trackCTAClick(`flyer_service_${service.slug}`, "flyer", "offer_links")
                  }
                >
                  {service.shortTitle}
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer – nur Kontakt als tappable Links */}
        <footer className="pt-10 mt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-4">{company.shortName}</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={`tel:${company.contact.phone}`}
                className="flex items-center gap-2 text-[#0089CF] font-medium"
                onClick={() => trackPhoneClick("flyer", "footer")}
              >
                <Phone className="h-4 w-4" />
                {company.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.contact.email}`}
                className="flex items-center gap-2 text-[#0089CF] font-medium break-all"
              >
                <Mail className="h-4 w-4 shrink-0" />
                {company.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2 text-gray-600">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              <span>
                {company.address.street}, {company.address.zip} {company.address.city}
              </span>
            </li>
          </ul>
          <p className="mt-3 text-xs text-gray-400">
            {company.hours.weekdays} · {company.hours.friday}
          </p>
        </footer>
      </main>
    </div>
  );
};

export default FlyerLanding;
