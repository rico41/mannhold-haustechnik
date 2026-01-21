"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Banknote,
  Shield,
  Clock,
  Award,
  HeadphonesIcon,
} from "lucide-react";

const benefits = [
  {
    icon: Banknote,
    title: "Bis zu 70% Förderung möglich",
    description:
      "Nutzen Sie staatliche Förderprogramme und sparen Sie bei Ihrer neuen Heizung. Wir geben Ihnen Hilfestellung bei Förderanträgen.",
  },
  {
    icon: Leaf,
    title: "Klimafreundlich heizen",
    description:
      "Reduzieren Sie Ihren CO2-Fußabdruck mit einer modernen Wärmepumpe und leisten Sie Ihren Beitrag zum Klimaschutz.",
  },
  {
    icon: Shield,
    title: "Zertifizierte Partner",
    description:
      "Als offizieller Vaillant und OVUM Partner garantieren wir höchste Qualität bei Installation und Service.",
  },
  {
    icon: Clock,
    title: "Schnelle Umsetzung",
    description:
      "Von der Beratung bis zur Inbetriebnahme – wir setzen Ihr Projekt zügig und professionell um.",
  },
  {
    icon: Award,
    title: "10+ Jahre Erfahrung",
    description:
      "Profitieren Sie von unserer langjährigen Erfahrung im Bereich Heizungstechnik und Wärmepumpen.",
  },
  {
    icon: HeadphonesIcon,
    title: "Persönlicher Service",
    description:
      "Ein fester Ansprechpartner für Ihr Projekt – von der ersten Beratung bis zur regelmäßigen Wartung.",
  },
];

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

export const Benefits = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-[#F7941D] uppercase tracking-wider mb-4"
          >
            Ihre Vorteile
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading"
          >
            Warum Mannhold{" "}
            <span className="text-gradient">Haustechnik?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Wir stehen für Qualität, Zuverlässigkeit und faire Preise. Erfahren
            Sie, was uns von anderen unterscheidet.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F7941D] to-[#0089CF] flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold font-heading mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-[#F7941D] to-[#0089CF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
