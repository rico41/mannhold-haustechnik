"use client";

import { Shield, CheckCircle2 } from "lucide-react";

type GuaranteeBadgeProps = {
  variant?: "default" | "compact" | "inline";
  className?: string;
};

export const GuaranteeBadge = ({
  variant = "default",
  className = "",
}: GuaranteeBadgeProps) => {
  if (variant === "inline") {
    return (
      <span className={`inline-flex items-center gap-1 text-sm text-muted-foreground ${className}`}>
        <Shield className="h-4 w-4 text-[#0089CF]" />
        <span>5 Jahre Garantie auf Installation</span>
      </span>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-[#0089CF]/10 rounded-lg border border-[#0089CF]/20 ${className}`}>
        <Shield className="h-4 w-4 text-[#0089CF]" />
        <span className="text-sm font-medium text-[#0089CF]">5 Jahre Garantie</span>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br from-[#0089CF]/5 to-[#F7941D]/5 rounded-xl p-6 border border-[#0089CF]/20 ${className}`}>
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#0089CF]/10 flex items-center justify-center shrink-0">
          <Shield className="h-6 w-6 text-[#0089CF]" />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">5 Jahre Garantie</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Auf alle unsere Installationen gewähren wir eine umfassende 5-Jahres-Garantie.
          </p>
          <ul className="space-y-1.5">
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-[#F7941D] shrink-0" />
              <span>Garantie auf Material und Verarbeitung</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-[#F7941D] shrink-0" />
              <span>Schnelle Reaktionszeit bei Problemen</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-[#F7941D] shrink-0" />
              <span>Kostenlose Nachbesserung</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
