"use client";

import { MultiStepRequestForm, type MultiStepFormPreselection } from "@/components/forms/MultiStepRequestForm";

export type RequestFormSectionProps = {
  preselection?: MultiStepFormPreselection;
  title?: string;
  subtitle?: string;
  variant?: "default" | "gradient" | "gray";
  className?: string;
};

export const RequestFormSection = ({
  preselection,
  title = "Jetzt unverbindlich anfragen",
  subtitle = "Wählen Sie Ihr Anliegen und wir melden uns schnellstmöglich bei Ihnen.",
  variant = "default",
  className = "",
}: RequestFormSectionProps) => {
  const bgClasses = {
    default: "bg-white",
    gradient: "bg-gradient-to-br from-gray-50 via-white to-blue-50",
    gray: "bg-gray-50",
  };

  return (
    <section className={`section-padding ${bgClasses[variant]} ${className}`}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Anfrage starten
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading">{title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
          </div>
          <MultiStepRequestForm preselection={preselection} />
        </div>
      </div>
    </section>
  );
};

export default RequestFormSection;
