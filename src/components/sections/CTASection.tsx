"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Calendar, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/data";
import { trackCTAClick, trackPhoneClick } from "@/lib/analytics/conversion-events";

export const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1a1a1a]/85 z-10" />
        <Image 
          src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=2000" 
          alt="Heizungsinstallateur Berlin - Wärmepumpen Installation und Wartung" 
          fill
          sizes="100vw"
          className="object-cover"
          loading="lazy"
          quality={75}
          priority={false}
        />
      </div>

      <div className="container-custom relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-[#F7941D] uppercase tracking-wider mb-4"
          >
            Jetzt starten
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white"
          >
            Bereit für Ihre neue{" "}
            <span className="text-gradient">Heizung?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Lassen Sie sich unverbindlich beraten und erfahren Sie, wie viel
            Förderung Sie für Ihre Wärmepumpe erhalten können.
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-[#F7941D]" />
              <span>Eignungs-Check</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F7941D]" />
              <span>Individuelle Förderberechnung</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0089CF]" />
              <span>Unverbindliches Angebot</span>
            </div>
          </motion.div>

          {/* Scarcity & Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full backdrop-blur-sm">
              <Users className="h-4 w-4 text-[#F7941D]" />
              <span>12 Anfragen in den letzten 24h</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full backdrop-blur-sm">
              <Clock className="h-4 w-4 text-[#0089CF]" />
              <span>Nächster Eignungs-Check: Diese Woche</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-[#F7941D] hover:bg-[#F7941D]/90 text-white text-lg px-8 h-14"
            >
              <Link
                href="/#eignungs-check"
                onClick={() => trackCTAClick("cta_section_form", "cta_section", "bottom_cta")}
              >
                Machen Sie den Eignungs-Check
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-lg px-8 h-14 border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:text-white hover:border-white/50 font-semibold"
            >
              <a
                href={`tel:${company.contact.phone}`}
                onClick={() => trackPhoneClick("general", "cta_section")}
              >
                <Phone className="mr-2 h-5 w-5" />
                <span className="font-bold">{company.contact.phoneDisplay}</span>
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
