import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";
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
  ],
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#F7941D] to-[#0089CF]">
        <div className="container-custom py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-white">
                Bereit für Ihre neue Heizung?
              </h3>
              <p className="mt-2 text-white/90">
                Kostenlose Beratung und Fördercheck – wir sind für Sie da.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#F7941D] font-semibold rounded-lg hover:bg-white/90 transition-colors"
              >
                Jetzt Beratung anfragen
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href={`tel:${company.contact.phone}`}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                {company.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>

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
                  {company.hours.saturday}
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
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-3">Partner:</p>
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-gray-400">
                  Vaillant
                </span>
                <span className="text-sm font-semibold text-gray-400">OVUM</span>
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
