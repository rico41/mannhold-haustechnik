import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ChevronRight, Bot } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { company } from "@/lib/data";
import { getMainServices } from "@/lib/data/services";
import { seoServices, seoLocations } from "@/lib/data/programmatic";

const services = getMainServices();

// Top Services für Footer (nach Priorität)
const topServices = seoServices
  .filter((s) => s.priority <= 2)
  .slice(0, 4);

// Top Locations für Footer (nach Priorität)
const topLocations = seoLocations
  .filter((l) => l.priority <= 2)
  .slice(0, 6);

const footerLinks = {
  leistungen: services.slice(0, 6).map((service) => ({
    label: service.shortTitle,
    href: `/leistungen/${service.slug}`,
  })),
  unternehmen: [
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Referenzen", href: "/referenzen" },
    { label: "Ratgeber", href: "/ratgeber" },
    { label: "FAQ", href: "/faq" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  rechtliches: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" },
  ],
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* SEO Links Section - Programmatic Pages */}
      <div className="bg-[#252525]">
        <div className="container-custom py-8">
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Beliebte Services in Ihrer Nähe
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {topServices.flatMap((service) =>
              topLocations.slice(0, 3).map((location) => (
                <Link
                  key={`${service.slug}-${location.slug}`}
                  href={`/${service.slug}-${location.slug}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors truncate"
                  title={`${service.name} in ${location.name}`}
                >
                  {service.shortName} {location.shortName}
                </Link>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <img 
                src="/images/logo.svg" 
                alt="Mannhold Haustechnik Logo" 
                width={180}
                height={48}
                className="h-10 lg:h-12 w-auto"
              />
            </Link>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Ihr Experte für Wärmepumpen und moderne Heiztechnik in Berlin Süd
              und Potsdam. Als zertifizierter Vaillant und OVUM Partner bieten wir
              Ihnen erstklassige Beratung und fachgerechte Installation.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-[#F7941D]" />
                <span>
                  {company.address.street}
                  <br />
                  {company.address.zip} {company.address.city}
                </span>
              </div>
              <a
                href={`tel:${company.contact.phone}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5 shrink-0 text-[#F7941D]" />
                {company.contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${company.contact.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5 shrink-0 text-[#F7941D]" />
                {company.contact.email}
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <Clock className="h-5 w-5 shrink-0 mt-0.5 text-[#F7941D]" />
                <span>
                  {company.hours.weekdays}
                  <br />
                  {company.hours.friday}
                  <br />
                  {company.hours.saturday}
                </span>
              </div>
              {/* 24/7 KI-Assistent Hinweis */}
              <div className="flex items-start gap-3 text-gray-400 mt-4 pt-4 border-t border-gray-700">
                <Bot className="h-5 w-5 shrink-0 mt-0.5 text-[#F7941D]" />
                <span>
                  <span className="text-white font-medium">24/7 erreichbar</span>
                  <br />
                  <span className="text-sm">Unser KI-Telefonassistent nimmt Ihre Anfrage jederzeit entgegen</span>
                </span>
              </div>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="font-semibold font-heading text-white mb-4">
              Leistungen
            </h4>
            <ul className="space-y-2">
              {footerLinks.leistungen.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Standorte - Programmatic SEO Links */}
          <div>
            <h4 className="font-semibold font-heading text-white mb-4">
              Wärmepumpe in...
            </h4>
            <ul className="space-y-2">
              {topLocations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/waermepumpe-${location.slug}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {location.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/standorte"
                  className="text-[#F7941D] hover:text-[#F7941D]/80 transition-colors"
                >
                  Alle Standorte →
                </Link>
              </li>
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h4 className="font-semibold font-heading text-white mb-4">
              Unternehmen
            </h4>
            <ul className="space-y-2">
              {footerLinks.unternehmen.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Partner Logos */}
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-3">Partner:</p>
                <div className="flex items-center gap-4">
                  <img
                    src="/images/vaillant-logo-aw-2104046.jpg"
                    alt="Vaillant Partner Logo"
                    width={80}
                    height={32}
                    className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="/images/OVUM_waermepumpen_logo_landscape_cmyk_color_black.png"
                    alt="OVUM Premium Partner Logo"
                    width={100}
                    height={32}
                    className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-3">Innungsmitglied:</p>
                <img
                  src="/images/neues-shk-logo.jpg"
                  alt="SHK Innung Berlin Logo - Innungsmitglied"
                  width={100}
                  height={40}
                  className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extended SEO Links - All Locations */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hydraulischer Abgleich */}
            <div>
              <h5 className="text-sm font-semibold text-gray-400 mb-3">
                Hydraulischer Abgleich
              </h5>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {seoLocations.slice(0, 8).map((location) => (
                  <Link
                    key={`ha-${location.slug}`}
                    href={`/hydraulischer-abgleich-${location.slug}`}
                    className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {location.shortName}
                  </Link>
                ))}
              </div>
            </div>

            {/* Heizungsinstallateur */}
            <div>
              <h5 className="text-sm font-semibold text-gray-400 mb-3">
                Heizungsinstallateur
              </h5>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {seoLocations.slice(0, 8).map((location) => (
                  <Link
                    key={`hi-${location.slug}`}
                    href={`/heizungsinstallateur-${location.slug}`}
                    className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {location.shortName}
                  </Link>
                ))}
              </div>
            </div>

            {/* Heizung erneuern */}
            <div>
              <h5 className="text-sm font-semibold text-gray-400 mb-3">
                Heizung erneuern
              </h5>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {seoLocations.slice(0, 8).map((location) => (
                  <Link
                    key={`he-${location.slug}`}
                    href={`/heizung-erneuern-${location.slug}`}
                    className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {location.shortName}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Bar */}
      <div className="container-custom py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} {company.name}. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.rechtliches.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
