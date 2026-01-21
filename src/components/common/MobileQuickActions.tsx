"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { company } from "@/lib/data";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics/conversion-events";

export const MobileQuickActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Nur auf Mobile anzeigen
    const checkMobile = () => {
      if (window.innerWidth < 1024) {
        // Zeige nach kurzer Scroll-Distanz
        const handleScroll = () => {
          if (window.scrollY > 400) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePhoneClick = () => {
    trackPhoneClick("general", "mobile_quick_actions");
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick("general");
    window.open(
      `https://wa.me/493055071831?text=${encodeURIComponent(
        "Hallo, ich hätte gerne eine kostenlose Beratung zu Wärmepumpen."
      )}`,
      "_blank"
    );
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-24 right-4 z-40 lg:hidden">
      <div className="flex flex-col gap-3">
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center hover:bg-[#20BA5A] transition-colors"
          aria-label="WhatsApp Nachricht senden"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </button>

        {/* Phone Button */}
        <a
          href={`tel:${company.contact.phone}`}
          onClick={handlePhoneClick}
          className="w-14 h-14 bg-[#0089CF] rounded-full shadow-lg flex items-center justify-center hover:bg-[#0077B6] transition-colors"
          aria-label="Anrufen"
        >
          <Phone className="h-6 w-6 text-white" />
        </a>
      </div>
    </div>
  );
};
