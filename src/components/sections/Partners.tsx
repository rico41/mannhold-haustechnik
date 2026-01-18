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
            {/* Vaillant Logo Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white shadow-sm group-hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#00923F] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <div>
                  <span className="font-bold text-xl text-[#00923F]">
                    Vaillant
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    Partner
                  </span>
                </div>
              </div>
            </motion.div>

            {/* OVUM Logo Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white shadow-sm group-hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#0089CF] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">O</span>
                </div>
                <div>
                  <span className="font-bold text-xl text-[#0089CF]">OVUM</span>
                  <span className="block text-xs text-muted-foreground">
                    Premium Partner
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
