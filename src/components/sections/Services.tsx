"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getMainServices } from "@/lib/data/services";

const services = getMainServices();

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Services = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-[#0089CF] uppercase tracking-wider mb-4"
          >
            Unsere Leistungen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading"
          >
            Alles aus einer Hand für Ihre{" "}
            <span className="text-gradient">Heizung</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Von der Beratung über die Installation bis zur Wartung – wir
            begleiten Sie durch alle Phasen Ihres Heizungsprojekts.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Link href={`/leistungen/${service.slug}`}>
                  <Card className="group h-full border-2 border-transparent hover:border-primary/20 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
                    
                    {/* Image Header */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                      <img 
                        src={service.image} 
                        alt={`${service.title} Installation Berlin - Mannhold Haustechnik ${service.shortTitle}`}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute bottom-4 left-6 right-6 z-20 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-lg font-bold font-heading text-white">
                          {service.shortTitle}
                        </h3>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Features Preview */}
                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature) => (
                          <li
                            key={feature}
                            className="text-sm text-muted-foreground flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F7941D]" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Link */}
                      <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                        Mehr erfahren
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" variant="outline" className="px-8">
            <Link href="/leistungen">
              Alle Leistungen ansehen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
