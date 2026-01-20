"use client";

import { motion } from "framer-motion";

export const Partners = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50 border-y border-border/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground uppercase tracking-wider"
          >
            Offizielle Partner von
          </motion.p>

          <div className="flex items-center gap-12 md:gap-16">
            {/* Vaillant Logo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="px-6 py-4 rounded-xl bg-white shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  src="/images/vaillant-logo-aw-2104046.jpg"
                  alt="Vaillant Partner Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </motion.div>

            {/* OVUM Logo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="px-6 py-4 rounded-xl bg-gray-900 shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  src="/images/OVUM_waermepumpen_logo_landscape_cmyk_color_white.png"
                  alt="OVUM Premium Partner Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
