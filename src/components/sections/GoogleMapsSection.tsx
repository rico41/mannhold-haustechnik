"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { company } from "@/lib/data";

export const GoogleMapsSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-[#0089CF] uppercase tracking-wider mb-4"
          >
            Unser Standort
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading"
          >
            Ihr Heizungsexperte in{" "}
            <span className="text-gradient">Berlin-Schöneberg</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Von unserem Standort aus erreichen wir ganz Berlin Süd und Potsdam schnell und zuverlässig.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Kontakt-Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F7941D]/10 to-[#0089CF]/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-[#0089CF]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Adresse</h3>
                  <p className="text-muted-foreground">
                    {company.address.street}<br />
                    {company.address.zip} {company.address.city}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F7941D]/10 to-[#0089CF]/10 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-[#0089CF]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Telefon</h3>
                  <a
                    href={`tel:${company.contact.phone}`}
                    className="text-primary hover:underline"
                  >
                    {company.contact.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F7941D]/10 to-[#0089CF]/10 flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-[#0089CF]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">E-Mail</h3>
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="text-primary hover:underline"
                  >
                    {company.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F7941D]/10 to-[#0089CF]/10 flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-[#0089CF]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Öffnungszeiten</h3>
                  <p className="text-muted-foreground">
                    {company.hours.weekdays}<br />
                    {company.hours.friday}<br />
                    {company.hours.saturday}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyBFw0Qbyq9zTFTd-tUY6dS6FG4QmuUBlUo'}&q=${encodeURIComponent(company.name + ", " + company.address.street + ", " + company.address.zip + " " + company.address.city)}&zoom=14&maptype=roadmap`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mannhold Haustechnik Standort Berlin-Schöneberg"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.name + " " + company.address.street + " " + company.address.city)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                In Google Maps öffnen →
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMapsSection;
