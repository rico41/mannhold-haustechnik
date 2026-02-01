"use client";

import { Button } from "@/components/ui/button";

type CookieSettingsLinkProps = {
  variant?: "button" | "link";
};

/**
 * Button/Link zum Öffnen der Cookie-Einstellungen (DSGVO: Nutzer müssen Einwilligung widerrufen können)
 */
export const CookieSettingsLink = ({ variant = "button" }: CookieSettingsLinkProps) => {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("show-cookie-settings"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (variant === "link") {
    return (
      <button
        type="button"
        onClick={handleClick}
        className="text-sm text-gray-500 hover:text-white transition-colors"
      >
        Cookie-Einstellungen
      </button>
    );
  }

  return (
    <Button variant="outline" size="sm" onClick={handleClick}>
      Cookie-Einstellungen verwalten
    </Button>
  );
};
