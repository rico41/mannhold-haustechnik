"use client";

import { useState, useEffect } from "react";
import {
  Flame,
  Wrench,
  AlertTriangle,
  Calculator,
  ArrowLeft,
  ArrowRight,
  Send,
  Loader2,
  CheckCircle2,
  Phone,
  MapPin,
  CheckCircle,
  Home,
  Building2,
  Building,
  DoorOpen,
  Thermometer,
  Zap,
  Droplets,
  Wind,
  Sun,
  Clock,
  Calendar,
  CalendarDays,
  CalendarX,
  Snowflake,
  ShowerHead,
  AlertOctagon,
  Volume2,
  HelpCircle,
  FileText,
  FileCheck,
  FileX,
  Gauge,
  Settings2,
  Lightbulb,
  Upload,
  X,
  FileImage,
  File,
  Camera,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { company } from "@/lib/data";
import { checkServiceArea, type ServiceAreaResult } from "@/lib/utils/service-area";
import { trackFormSubmit } from "@/lib/analytics/conversion-events";
import { trackFacebookEvent, trackGoogleAdsConversion } from "@/components/analytics/RetargetingPixels";
import type { LucideIcon } from "lucide-react";

// ============ TYPES ============

export type CategoryType = "modernisierung" | "wartung" | "reparatur" | "planung";

export type MultiStepFormPreselection = {
  category?: CategoryType;
  systemTyp?: string;
  geraeteTyp?: string;
  leistungsTyp?: string;
};

export type MultiStepRequestFormProps = {
  preselection?: MultiStepFormPreselection;
  showTitle?: boolean;
  title?: string;
  subtitle?: string;
};

type ModernisierungData = {
  systemTyp: string;
  gebaeudeTyp: string;
  baujahr: string;
  wohnflaeche: string;
  aktuelleHeizung: string;
  waermeverteilung: string;
  pvAnlage: string;
  verbrauchJahr1: string;
  verbrauchJahr2: string;
  verbrauchJahr3: string;
};

type WartungData = {
  geraeteTyp: string;
  hersteller: string;
  modell: string;
  geraeeBaujahr: string;
  letzteWartung: string;
  maengel: string;
  maengelBeschreibung: string;
  dateien: UploadedFile[];
};

type ReparaturData = {
  problemArt: string;
  dringlichkeit: string;
  hersteller: string;
  fehlercode: string;
  beschreibung: string;
  dateien: UploadedFile[];
};

type PlanungData = {
  leistungsTyp: string;
  grund: string;
  bauplaeneVorhanden: string;
  dateien: UploadedFile[];
};

type ContactData = {
  name: string;
  email: string;
  phone: string;
  strasse: string;
  plz: string;
  ort: string;
  nachricht: string;
  datenschutz: boolean;
};

type UploadedFile = {
  name: string;
  type: string;
  size: number;
  base64: string;
};

type FormData = {
  category: CategoryType | null;
  modernisierung: ModernisierungData;
  wartung: WartungData;
  reparatur: ReparaturData;
  planung: PlanungData;
  contact: ContactData;
};

type OptionItem = {
  value: string;
  label: string;
  icon?: LucideIcon;
  description?: string;
};

// ============ REUSABLE OPTION BUTTON COMPONENT ============

const OptionButton = ({
  option,
  isSelected,
  onClick,
  size = "medium",
}: {
  option: OptionItem;
  isSelected: boolean;
  onClick: () => void;
  size?: "small" | "medium" | "large";
}) => {
  const Icon = option.icon;

  const sizeClasses = {
    small: "p-3",
    medium: "p-4",
    large: "p-5",
  };

  const iconSizeClasses = {
    small: "h-5 w-5",
    medium: "h-6 w-6",
    large: "h-7 w-7",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-xl border-2 text-left transition-all ${sizeClasses[size]} ${
        isSelected
          ? "border-primary bg-primary/5 shadow-md"
          : "border-gray-200 hover:border-primary/50 hover:bg-gray-50"
      }`}
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <div
            className={`p-2 rounded-lg shrink-0 ${
              isSelected ? "bg-primary text-white" : "bg-gray-100 text-gray-600"
            }`}
          >
            <Icon className={iconSizeClasses[size]} />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className={`font-medium ${size === "small" ? "text-sm" : ""}`}>{option.label}</p>
          {option.description && (
            <p className="text-xs text-muted-foreground mt-0.5">{option.description}</p>
          )}
        </div>
        {isSelected && <CheckCircle className="h-5 w-5 text-primary shrink-0" />}
      </div>
    </button>
  );
};

// ============ OPTIONS WITH ICONS ============

const categories: (OptionItem & { id: CategoryType })[] = [
  {
    id: "modernisierung",
    value: "modernisierung",
    label: "Neue Heizung / Modernisierung",
    description: "Wärmepumpe, Gas, Fußbodenheizung",
    icon: Flame,
  },
  {
    id: "wartung",
    value: "wartung",
    label: "Wartung & Service",
    description: "Regelmäßige Pflege Ihrer Anlage",
    icon: Wrench,
  },
  {
    id: "reparatur",
    value: "reparatur",
    label: "Reparatur / Störung",
    description: "Heizung ausgefallen, Fehlercode",
    icon: AlertTriangle,
  },
  {
    id: "planung",
    value: "planung",
    label: "Planung & Optimierung",
    description: "Heizlastberechnung, Hydraulischer Abgleich",
    icon: Calculator,
  },
];

const systemTypOptions: OptionItem[] = [
  { value: "waermepumpe", label: "Wärmepumpe", icon: Wind, description: "Umweltfreundlich & zukunftssicher" },
  { value: "gas", label: "Gasheizung", icon: Flame, description: "Bewährte Technik" },
  { value: "hybrid", label: "Hybrid-System", icon: Zap, description: "Das Beste aus beiden Welten" },
  { value: "fussbodenheizung", label: "Fußbodenheizung", icon: Thermometer, description: "Nachrüsten / Einbau" },
  { value: "beratung", label: "Noch unsicher", icon: HelpCircle, description: "Ich brauche Beratung" },
];

const gebaeudeTypOptions: OptionItem[] = [
  { value: "einfamilienhaus", label: "Einfamilienhaus", icon: Home },
  { value: "mehrfamilienhaus", label: "Mehrfamilienhaus", icon: Building2 },
  { value: "reihenhaus", label: "Reihen-/Doppelhaus", icon: Building },
  { value: "wohnung", label: "Wohnung", icon: DoorOpen },
];

const baujahrOptions: OptionItem[] = [
  { value: "vor_1990_unsaniert", label: "Vor 1990 (unsaniert)", icon: CalendarX },
  { value: "vor_1990_saniert", label: "Vor 1990 (saniert)", icon: CalendarDays },
  { value: "1990_2010", label: "1990 – 2010", icon: Calendar },
  { value: "nach_2010", label: "Nach 2010 / Neubau", icon: CalendarDays },
];

const aktuelleHeizungOptions: OptionItem[] = [
  { value: "oel", label: "Ölheizung", icon: Droplets },
  { value: "gas", label: "Gasheizung", icon: Flame },
  { value: "nachtspeicher", label: "Strom / Nachtspeicher", icon: Zap },
  { value: "fernwaerme", label: "Fernwärme", icon: Thermometer },
  { value: "sonstiges", label: "Sonstiges", icon: HelpCircle },
];

const waermeverteilungOptions: OptionItem[] = [
  { value: "heizkoerper", label: "Nur Heizkörper", icon: Thermometer, description: "Klassische Radiatoren" },
  { value: "fussbodenheizung", label: "Nur Fußbodenheizung", icon: Home, description: "Flächenheizung" },
  { value: "gemischt", label: "Gemischt", icon: Settings2, description: "Heizkörper + Fußbodenheizung" },
];

const pvAnlageOptions: OptionItem[] = [
  { value: "ja", label: "Ja, vorhanden", icon: Sun, description: "PV-Anlage bereits installiert" },
  { value: "geplant", label: "In Planung", icon: Lightbulb, description: "PV-Anlage geplant" },
  { value: "nein", label: "Nein", icon: HelpCircle, description: "Keine PV-Anlage" },
];

const geraeteTypOptions: OptionItem[] = [
  { value: "gastherme", label: "Gastherme / Gaskessel", icon: Flame, description: "Gas-Heizgerät" },
  { value: "waermepumpe", label: "Wärmepumpe", icon: Wind, description: "Wärmepumpen-System" },
  { value: "sonstiges", label: "Sonstiges Gerät", icon: HelpCircle, description: "Anderes Heizgerät" },
];

// Hersteller mit Logos (Servicepartner)
type ManufacturerOption = {
  value: string;
  label: string;
  logo: string;
  description: string;
};

const vaillantOption: ManufacturerOption = {
  value: "vaillant",
  label: "Vaillant",
  logo: "/images/vaillant-logo-aw-2104046.jpg",
  description: "Deutsche Markenqualität seit 1874",
};

const ovumOption: ManufacturerOption = {
  value: "ovum",
  label: "OVUM",
  logo: "/images/OVUM_waermepumpen_logo_landscape_cmyk_color_black.png",
  description: "Premium Wärmepumpen aus Österreich",
};

// Alle Hersteller (für Wärmepumpen)
const alleHerstellerOptions: ManufacturerOption[] = [vaillantOption, ovumOption];

// Nur Vaillant (für Gasthermen - OVUM hat nur Wärmepumpen)
const gasthermeHerstellerOptions: ManufacturerOption[] = [vaillantOption];

// Helper: Hersteller basierend auf Gerätetyp
const getHerstellerForGeraeteTyp = (geraeteTyp: string): ManufacturerOption[] => {
  if (geraeteTyp === "gastherme" || geraeteTyp === "sonstiges") {
    return gasthermeHerstellerOptions;
  }
  return alleHerstellerOptions;
};

// Manufacturer Button Component mit Logo
const ManufacturerButton = ({
  option,
  isSelected,
  onClick,
}: {
  option: ManufacturerOption;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-xl border-2 p-6 text-left transition-all ${
        isSelected
          ? "border-primary bg-primary/5 shadow-md"
          : "border-gray-200 hover:border-primary/50 hover:bg-gray-50"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-32">
          <Image
            src={option.logo}
            alt={`${option.label} Logo`}
            fill
            className="object-contain"
            sizes="128px"
          />
        </div>
        <div className="text-center">
          <p className="font-semibold text-lg">{option.label}</p>
          <p className="text-xs text-muted-foreground mt-1">{option.description}</p>
        </div>
        {isSelected && (
          <CheckCircle className="h-5 w-5 text-primary" />
        )}
      </div>
    </button>
  );
};

// File Upload Component
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "application/pdf"];

const FileUploadField = ({
  files,
  onFilesChange,
  label,
  hint,
  maxFiles = 5,
}: {
  files: UploadedFile[];
  onFilesChange: (files: UploadedFile[]) => void;
  label: string;
  hint: string;
  maxFiles?: number;
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const processFile = async (file: globalThis.File): Promise<UploadedFile | null> => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      setUploadError("Nur JPG, PNG, WebP oder PDF erlaubt");
      return null;
    }
    if (file.size > MAX_FILE_SIZE) {
      setUploadError("Datei zu groß (max. 5MB)");
      return null;
    }

    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve({
          name: file.name,
          type: file.type,
          size: file.size,
          base64: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFiles = async (fileList: FileList) => {
    setUploadError(null);
    const remainingSlots = maxFiles - files.length;
    const filesToProcess = Array.from(fileList).slice(0, remainingSlots);

    const processedFiles = await Promise.all(filesToProcess.map(processFile));
    const validFiles = processedFiles.filter((f): f is UploadedFile => f !== null);

    if (validFiles.length > 0) {
      onFilesChange([...files, ...validFiles]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleRemove = (index: number) => {
    onFilesChange(files.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith("image/")) return FileImage;
    return File;
  };

  return (
    <div className="space-y-3">
      <Label className="text-base font-semibold">{label}</Label>
      <p className="text-sm text-muted-foreground">{hint}</p>

      {files.length < maxFiles && (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors ${
            isDragging
              ? "border-primary bg-primary/5"
              : "border-gray-200 hover:border-primary/50"
          }`}
        >
          <input
            type="file"
            id="file-upload"
            multiple
            accept={ALLOWED_TYPES.join(",")}
            onChange={(e) => e.target.files && handleFiles(e.target.files)}
            className="hidden"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <Camera className="h-6 w-6 text-gray-500" aria-hidden />
            </div>
            <div>
              <span className="text-primary font-medium">Dateien auswählen</span>
              <span className="text-muted-foreground"> oder hierher ziehen</span>
            </div>
            <p className="text-xs text-muted-foreground">
              JPG, PNG, WebP oder PDF (max. 5MB pro Datei)
            </p>
          </label>
        </div>
      )}

      {uploadError && (
        <p className="text-sm text-red-500">{uploadError}</p>
      )}

      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, index) => {
            const FileIcon = getFileIcon(file.type);
            return (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
              >
                <div className="w-10 h-10 rounded-lg bg-white border flex items-center justify-center shrink-0">
                  {file.type.startsWith("image/") ? (
                    <img
                      src={file.base64}
                      alt={file.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <FileIcon className="h-5 w-5 text-gray-500" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatFileSize(file.size)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemove(index)}
                  className="p-1 hover:bg-gray-200 rounded transition-colors"
                >
                  <X className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const letzteWartungOptions: OptionItem[] = [
  { value: "letztes_jahr", label: "Letztes Jahr", icon: Calendar, description: "Vor weniger als 12 Monaten" },
  { value: "vor_2_3_jahren", label: "Vor 2–3 Jahren", icon: CalendarDays, description: "Länger her" },
  { value: "laenger_her", label: "Länger her / Unbekannt", icon: CalendarX, description: "Oder noch nie" },
];

const maengelOptions: OptionItem[] = [
  { value: "nein", label: "Nein, alles in Ordnung", icon: CheckCircle, description: "Anlage läuft einwandfrei" },
  { value: "ja", label: "Ja, es gibt Probleme", icon: AlertTriangle, description: "Bekannte Mängel vorhanden" },
];

const problemArtOptions: OptionItem[] = [
  { value: "keine_waerme", label: "Heizung ausgefallen", icon: Snowflake, description: "Komplett kalt" },
  { value: "kein_warmwasser", label: "Kein Warmwasser", icon: ShowerHead, description: "Wasser bleibt kalt" },
  { value: "wasserverlust", label: "Wasserverlust / Tropft", icon: Droplets, description: "Undichtigkeit" },
  { value: "fehlermeldung", label: "Fehlermeldung", icon: AlertOctagon, description: "Fehler im Display" },
  { value: "geraeusche", label: "Geräusche / Klopfen", icon: Volume2, description: "Ungewöhnliche Töne" },
  { value: "sonstiges", label: "Sonstiges Problem", icon: HelpCircle, description: "Anderes Problem" },
];

const dringlichkeitOptions: OptionItem[] = [
  { value: "notfall", label: "Notfall", icon: AlertTriangle, description: "Totalausfall – so schnell wie möglich" },
  { value: "wichtig", label: "Wichtig", icon: Clock, description: "Funktion eingeschränkt – zeitnah" },
  { value: "normal", label: "Hat Zeit", icon: Calendar, description: "Normaler Termin reicht aus" },
];

const leistungsTypOptions: OptionItem[] = [
  { value: "heizlastberechnung", label: "Heizlastberechnung", icon: Calculator, description: "Für Wärmepumpen-Auslegung" },
  { value: "hydraulischer_abgleich", label: "Hydraulischer Abgleich", icon: Gauge, description: "Für Förderung (BAFA/KfW)" },
];

const grundOptions: OptionItem[] = [
  { value: "foerderantrag", label: "Für Förderantrag", icon: FileCheck, description: "BAFA / KfW Förderung" },
  { value: "optimierung", label: "Heizung optimieren", icon: Settings2, description: "Wird nicht richtig warm" },
  { value: "planung", label: "Neubau / Sanierung", icon: Building, description: "Projekt in Planung" },
];

const bauplaeneOptions: OptionItem[] = [
  { value: "ja_digital", label: "Ja, digital vorhanden", icon: FileCheck, description: "PDF oder CAD" },
  { value: "ja_papier", label: "Ja, in Papierform", icon: FileText, description: "Ausgedruckte Pläne" },
  { value: "nein", label: "Nein / Unvollständig", icon: FileX, description: "Keine Pläne verfügbar" },
];

// ============ INITIAL STATE ============

const initialFormData: FormData = {
  category: null,
  modernisierung: {
    systemTyp: "",
    gebaeudeTyp: "",
    baujahr: "",
    wohnflaeche: "",
    aktuelleHeizung: "",
    waermeverteilung: "",
    pvAnlage: "",
    verbrauchJahr1: "",
    verbrauchJahr2: "",
    verbrauchJahr3: "",
  },
  wartung: {
    geraeteTyp: "",
    hersteller: "",
    modell: "",
    geraeeBaujahr: "",
    letzteWartung: "",
    maengel: "",
    maengelBeschreibung: "",
    dateien: [],
  },
  reparatur: {
    problemArt: "",
    dringlichkeit: "",
    hersteller: "",
    fehlercode: "",
    beschreibung: "",
    dateien: [],
  },
  planung: {
    leistungsTyp: "",
    grund: "",
    bauplaeneVorhanden: "",
    dateien: [],
  },
  contact: {
    name: "",
    email: "",
    phone: "",
    strasse: "",
    plz: "",
    ort: "",
    nachricht: "",
    datenschutz: false,
  },
};

// ============ STEP DEFINITIONS ============

type StepConfig = {
  id: string;
  title: string;
  subtitle?: string;
};

const getStepsForCategory = (category: CategoryType | null): StepConfig[] => {
  const baseSteps: StepConfig[] = [{ id: "category", title: "Anliegen" }];

  if (!category) return [...baseSteps, { id: "contact", title: "Kontakt" }];

  switch (category) {
    case "modernisierung":
      return [
        ...baseSteps,
        { id: "mod-system", title: "System", subtitle: "Was interessiert Sie?" },
        { id: "mod-gebaeude", title: "Gebäude", subtitle: "Gebäudetyp & Baujahr" },
        { id: "mod-heizung", title: "Heizung", subtitle: "Aktuelle Situation" },
        { id: "mod-details", title: "Details", subtitle: "Zusätzliche Infos" },
        { id: "contact", title: "Kontakt" },
      ];
    case "wartung":
      return [
        ...baseSteps,
        { id: "wart-geraet", title: "Gerät", subtitle: "Gerätetyp & Hersteller" },
        { id: "wart-details", title: "Details", subtitle: "Modell & Wartungsstatus" },
        { id: "contact", title: "Kontakt" },
      ];
    case "reparatur":
      return [
        ...baseSteps,
        { id: "rep-problem", title: "Problem", subtitle: "Was ist passiert?" },
        { id: "rep-dringlichkeit", title: "Dringlichkeit", subtitle: "Wie schnell?" },
        { id: "rep-details", title: "Details", subtitle: "Weitere Infos" },
        { id: "contact", title: "Kontakt" },
      ];
    case "planung":
      return [
        ...baseSteps,
        { id: "plan-leistung", title: "Leistung", subtitle: "Was benötigen Sie?" },
        { id: "plan-details", title: "Details", subtitle: "Weitere Infos" },
        { id: "contact", title: "Kontakt" },
      ];
    default:
      return [...baseSteps, { id: "contact", title: "Kontakt" }];
  }
};

// ============ COMPONENT ============

export const MultiStepRequestForm = ({
  preselection,
  showTitle = false,
  title = "Jetzt unverbindlich anfragen",
  subtitle = "Wählen Sie Ihr Anliegen und wir melden uns schnellstmöglich bei Ihnen.",
}: MultiStepRequestFormProps) => {
  // Calculate initial step based on preselection
  const getInitialStep = () => {
    if (!preselection?.category) return 0;
    // Skip category step if preselected
    return 1;
  };

  // Build initial form data with preselection
  const getInitialFormData = (): FormData => {
    const base = { ...initialFormData };
    if (preselection?.category) {
      base.category = preselection.category;
    }
    if (preselection?.systemTyp) {
      base.modernisierung.systemTyp = preselection.systemTyp;
    }
    if (preselection?.geraeteTyp) {
      base.wartung.geraeteTyp = preselection.geraeteTyp;
    }
    if (preselection?.leistungsTyp) {
      base.planung.leistungsTyp = preselection.leistungsTyp;
    }
    return base;
  };

  const [currentStep, setCurrentStep] = useState(getInitialStep);
  const [formData, setFormData] = useState<FormData>(getInitialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [serviceAreaResult, setServiceAreaResult] = useState<ServiceAreaResult | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const steps = getStepsForCategory(formData.category);
  const totalSteps = steps.length;
  const currentStepConfig = steps[currentStep];

  // PLZ-Check bei Änderung
  useEffect(() => {
    if (formData.contact.plz.length >= 5) {
      const result = checkServiceArea(formData.contact.plz);
      setServiceAreaResult(result);
    } else {
      setServiceAreaResult(null);
    }
  }, [formData.contact.plz]);

  // Navigation
  const handleNext = () => {
    if (validateCurrentStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
      setValidationErrors({});
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
    setValidationErrors({});
  };

  // Validierung
  const validateCurrentStep = (): boolean => {
    const errors: Record<string, string> = {};
    const stepId = currentStepConfig?.id;

    switch (stepId) {
      case "category":
        if (!formData.category) errors.category = "Bitte wählen Sie eine Kategorie";
        break;
      case "mod-system":
        if (!formData.modernisierung.systemTyp) errors.systemTyp = "Bitte auswählen";
        break;
      case "mod-gebaeude":
        if (!formData.modernisierung.gebaeudeTyp) errors.gebaeudeTyp = "Bitte auswählen";
        if (!formData.modernisierung.baujahr) errors.baujahr = "Bitte auswählen";
        break;
      case "mod-heizung":
        if (!formData.modernisierung.aktuelleHeizung) errors.aktuelleHeizung = "Bitte auswählen";
        if (!formData.modernisierung.waermeverteilung) errors.waermeverteilung = "Bitte auswählen";
        break;
      case "wart-geraet":
        if (!formData.wartung.geraeteTyp) errors.geraeteTyp = "Bitte auswählen";
        if (!formData.wartung.hersteller) errors.hersteller = "Bitte auswählen";
        break;
      case "wart-details":
        if (!formData.wartung.letzteWartung) errors.letzteWartung = "Bitte auswählen";
        break;
      case "rep-problem":
        if (!formData.reparatur.problemArt) errors.problemArt = "Bitte auswählen";
        break;
      case "rep-dringlichkeit":
        if (!formData.reparatur.dringlichkeit) errors.dringlichkeit = "Bitte auswählen";
        break;
      case "plan-leistung":
        if (!formData.planung.leistungsTyp) errors.leistungsTyp = "Bitte auswählen";
        break;
      case "plan-details":
        if (!formData.planung.grund) errors.grund = "Bitte auswählen";
        break;
      case "contact":
        if (!formData.contact.name.trim()) errors.name = "Name ist erforderlich";
        if (!formData.contact.email.trim()) errors.email = "E-Mail ist erforderlich";
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.contact.email)) {
          errors.email = "Ungültige E-Mail-Adresse";
        }
        if (!formData.contact.strasse.trim()) errors.strasse = "Straße ist erforderlich";
        if (!formData.contact.plz.trim()) errors.plz = "PLZ ist erforderlich";
        if (!formData.contact.ort.trim()) errors.ort = "Ort ist erforderlich";
        if (!formData.contact.datenschutz) errors.datenschutz = "Zustimmung erforderlich";
        break;
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Form Submit
  const handleSubmit = async () => {
    if (!validateCurrentStep()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.contact.name,
          email: formData.contact.email,
          phone: formData.contact.phone,
          plz: `${formData.contact.plz} ${formData.contact.ort}`,
          nachricht: formData.contact.nachricht,
          formType: "multistep",
          category: formData.category,
          strasse: formData.contact.strasse,
          ort: formData.contact.ort,
          details: getCategoryDetails(),
          serviceArea: serviceAreaResult,
        }),
      });

      if (!response.ok) {
        throw new Error("Fehler beim Senden der Anfrage");
      }

      trackFormSubmit("multistep_request", {
        category: formData.category,
        serviceAreaCovered: serviceAreaResult?.isCovered,
      });

      trackFacebookEvent("Lead", {
        content_name: "MultiStep Request Form",
        content_category: formData.category,
      });
      trackGoogleAdsConversion("multistep_form_submit");

      setIsSubmitted(true);
    } catch (err) {
      setError(
        "Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getCategoryDetails = () => {
    switch (formData.category) {
      case "modernisierung":
        return formData.modernisierung;
      case "wartung":
        return formData.wartung;
      case "reparatur":
        return formData.reparatur;
      case "planung":
        return formData.planung;
      default:
        return {};
    }
  };

  // Update Form Data Helpers
  const updateModernisierung = (field: keyof ModernisierungData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      modernisierung: { ...prev.modernisierung, [field]: value },
    }));
  };

  const updateWartung = (field: keyof WartungData, value: string) => {
    setFormData((prev) => {
      const newWartung = { ...prev.wartung, [field]: value };
      
      // Reset hersteller wenn Gerätetyp wechselt und OVUM nicht mehr verfügbar ist
      if (field === "geraeteTyp") {
        const availableHersteller = getHerstellerForGeraeteTyp(value);
        const isCurrentHerstellerAvailable = availableHersteller.some(
          (h) => h.value === prev.wartung.hersteller
        );
        if (!isCurrentHerstellerAvailable) {
          newWartung.hersteller = "";
        }
      }
      
      return { ...prev, wartung: newWartung };
    });
  };

  const updateReparatur = (field: keyof ReparaturData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      reparatur: { ...prev.reparatur, [field]: value },
    }));
  };

  const updatePlanung = (field: keyof PlanungData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      planung: { ...prev.planung, [field]: value },
    }));
  };

  const updateContact = (field: keyof ContactData, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      contact: { ...prev.contact, [field]: value },
    }));
  };

  // ============ RENDER SUCCESS ============

  if (isSubmitted) {
    return (
      <Card className="border-0 shadow-xl">
        <CardContent className="p-8 md:p-12 text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold font-heading mb-4">Vielen Dank für Ihre Anfrage!</h3>
          <p className="text-muted-foreground mb-6">
            Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden – in der Regel innerhalb
            von 24 Stunden.
          </p>
          {formData.category === "reparatur" && formData.reparatur.dringlichkeit === "notfall" && (
            <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <p className="text-orange-800 font-medium">Bei einem Notfall erreichen Sie uns auch telefonisch:</p>
              <a href={`tel:${company.contact.phone}`} className="text-lg font-bold text-orange-600 hover:underline">
                {company.contact.phoneDisplay}
              </a>
            </div>
          )}
          <Button
            variant="outline"
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(0);
              setFormData(initialFormData);
            }}
          >
            Neue Anfrage senden
          </Button>
        </CardContent>
      </Card>
    );
  }

  // ============ RENDER FORM ============

  return (
    <Card className="border-0 shadow-xl">
      <CardContent className="p-6 md:p-8">
        {/* Optional Title */}
        {showTitle && (
          <div className="text-center mb-8 pb-6 border-b">
            <h2 className="text-2xl md:text-3xl font-bold font-heading">{title}</h2>
            <p className="mt-2 text-muted-foreground">{subtitle}</p>
          </div>
        )}

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2 overflow-x-auto">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`text-xs font-medium whitespace-nowrap px-1 ${
                  index <= currentStep ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {step.title}
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Schritt {currentStep + 1} von {totalSteps}
          </p>
        </div>

        {/* Step Content */}
        <div className="min-h-[350px]">
          {/* ===== CATEGORY SELECTION ===== */}
          {currentStepConfig?.id === "category" && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Wie können wir Ihnen helfen?</h2>
                <p className="text-muted-foreground">Wählen Sie Ihr Anliegen</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categories.map((cat) => (
                  <OptionButton
                    key={cat.id}
                    option={cat}
                    isSelected={formData.category === cat.id}
                    onClick={() => setFormData((prev) => ({ ...prev, category: cat.id }))}
                    size="large"
                  />
                ))}
              </div>
              {validationErrors.category && (
                <p className="text-sm text-red-500 text-center">{validationErrors.category}</p>
              )}
            </div>
          )}

          {/* ===== MODERNISIERUNG STEPS ===== */}
          {currentStepConfig?.id === "mod-system" && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Was interessiert Sie?</h2>
                <p className="text-muted-foreground">Wählen Sie das gewünschte System</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {systemTypOptions.map((opt) => (
                  <OptionButton
                    key={opt.value}
                    option={opt}
                    isSelected={formData.modernisierung.systemTyp === opt.value}
                    onClick={() => updateModernisierung("systemTyp", opt.value)}
                    size="large"
                  />
                ))}
              </div>
              {validationErrors.systemTyp && (
                <p className="text-sm text-red-500 text-center">{validationErrors.systemTyp}</p>
              )}
            </div>
          )}

          {currentStepConfig?.id === "mod-gebaeude" && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Ihr Gebäude</h2>
                <p className="text-muted-foreground">Gebäudetyp und Baujahr</p>
              </div>
              <div className="space-y-3">
                <Label className="text-base font-semibold">Gebäudetyp *</Label>
                <div className="grid grid-cols-2 gap-3">
                  {gebaeudeTypOptions.map((opt) => (
                    <OptionButton
                      key={opt.value}
                      option={opt}
                      isSelected={formData.modernisierung.gebaeudeTyp === opt.value}
                      onClick={() => updateModernisierung("gebaeudeTyp", opt.value)}
                      size="medium"
                    />
                  ))}
                </div>
                {validationErrors.gebaeudeTyp && (
                  <p className="text-xs text-red-500">{validationErrors.gebaeudeTyp}</p>
                )}
              </div>
              <div className="space-y-3">
                <Label className="text-base font-semibold">Baujahr *</Label>
                <div className="grid grid-cols-2 gap-3">
                  {baujahrOptions.map((opt) => (
                    <OptionButton
                      key={opt.value}
                      option={opt}
                      isSelected={formData.modernisierung.baujahr === opt.value}
                      onClick={() => updateModernisierung("baujahr", opt.value)}
                      size="medium"
                    />
                  ))}
                </div>
                {validationErrors.baujahr && <p className="text-xs text-red-500">{validationErrors.baujahr}</p>}
              </div>
            </div>
          )}

          {currentStepConfig?.id === "mod-heizung" && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Aktuelle Heizung</h2>
                <p className="text-muted-foreground">Wie heizen Sie aktuell?</p>
              </div>
              <div className="space-y-3">
                <Label className="text-base font-semibold">Aktuelle Heizungsart *</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {aktuelleHeizungOptions.map((opt) => (
                    <OptionButton
                      key={opt.value}
                      option={opt}
                      isSelected={formData.modernisierung.aktuelleHeizung === opt.value}
                      onClick={() => updateModernisierung("aktuelleHeizung", opt.value)}
                      size="medium"
                    />
                  ))}
                </div>
                {validationErrors.aktuelleHeizung && (
                  <p className="text-xs text-red-500">{validationErrors.aktuelleHeizung}</p>
                )}
              </div>
              <div className="space-y-3">
                <Label className="text-base font-semibold">Wärmeverteilung *</Label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {waermeverteilungOptions.map((opt) => (
                    <OptionButton
                      key={opt.value}
                      option={opt}
                      isSelected={formData.modernisierung.waermeverteilung === opt.value}
                      onClick={() => updateModernisierung("waermeverteilung", opt.value)}
                      size="medium"
                    />
                  ))}
                </div>
                {validationErrors.waermeverteilung && (
                  <p className="text-xs text-red-500">{validationErrors.waermeverteilung}</p>
                )}
              </div>
            </div>
          )}

          {currentStepConfig?.id === "mod-details" && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Zusätzliche Details</h2>
                <p className="text-muted-foreground">Optional, aber hilfreich für die Planung</p>
              </div>
              <div className="space-y-2">
                <Label className="text-base font-semibold">Beheizte Wohnfläche (ca. m²)</Label>
                <Input
                  type="text"
                  placeholder="z.B. 150"
                  value={formData.modernisierung.wohnflaeche}
                  onChange={(e) => updateModernisierung("wohnflaeche", e.target.value)}
                  className="max-w-xs"
                />
              </div>

              {/* Verbrauch der letzten 3 Jahre */}
              <div className="space-y-4">
                <div>
                  <Label className="text-base font-semibold">
                    Verbrauch der letzten 3 Jahre{" "}
                    <span className="text-muted-foreground font-normal">
                      ({formData.modernisierung.aktuelleHeizung === "oel" ? "Liter" : "kWh"})
                    </span>
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Falls vorhanden – hilft bei der Auslegung der neuen Heizung
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground">2023</Label>
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="z.B. 2500"
                        value={formData.modernisierung.verbrauchJahr1}
                        onChange={(e) => updateModernisierung("verbrauchJahr1", e.target.value)}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                        {formData.modernisierung.aktuelleHeizung === "oel" ? "L" : "kWh"}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground">2024</Label>
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="z.B. 2300"
                        value={formData.modernisierung.verbrauchJahr2}
                        onChange={(e) => updateModernisierung("verbrauchJahr2", e.target.value)}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                        {formData.modernisierung.aktuelleHeizung === "oel" ? "L" : "kWh"}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground">2025</Label>
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="z.B. 2400"
                        value={formData.modernisierung.verbrauchJahr3}
                        onChange={(e) => updateModernisierung("verbrauchJahr3", e.target.value)}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                        {formData.modernisierung.aktuelleHeizung === "oel" ? "L" : "kWh"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-base font-semibold">Photovoltaik-Anlage vorhanden?</Label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {pvAnlageOptions.map((opt) => (
                    <OptionButton
                      key={opt.value}
                      option={opt}
                      isSelected={formData.modernisierung.pvAnlage === opt.value}
                      onClick={() => updateModernisierung("pvAnlage", opt.value)}
                      size="medium"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ===== WARTUNG STEPS ===== */}
          {currentStepConfig?.id === "wart-geraet" && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Ihr Gerät</h2>
                <p className="text-muted-foreground">Gerätetyp und Hersteller</p>
              </div>
              <div className="space-y-3">
                <Label className="text-base font-semibold">Gerätetyp *</Label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {geraeteTypOptions.map((opt) => (
                    <OptionButton
                      key={opt.value}
                      option={opt}
                      isSelected={formData.wartung.geraeteTyp === opt.value}
                      onClick={() => updateWartung("geraeteTyp", opt.value)}
                      size="large"
                    />
                  ))}
                </div>
                {validationErrors.geraeteTyp && (
                  <p className="text-xs text-red-500">{validationErrors.geraeteTyp}</p>
                )}
              </div>
              <div className="space-y-3">
                <Label className="text-base font-semibold">Hersteller *</Label>
                <div className={`grid gap-4 ${getHerstellerForGeraeteTyp(formData.wartung.geraeteTyp).length === 1 ? "grid-cols-1 max-w-sm mx-auto" : "grid-cols-1 sm:grid-cols-2"}`}>
                  {getHerstellerForGeraeteTyp(formData.wartung.geraeteTyp).map((opt) => (
                    <ManufacturerButton
                      key={opt.value}
                      option={opt}
                      isSelected={formData.wartung.hersteller === opt.value}
                      onClick={() => updateWartung("hersteller", opt.value)}
                    />
                  ))}
                </div>
                {validationErrors.hersteller && (
                  <p className="text-xs text-red-500">{validationErrors.hersteller}</p>
                )}
              </div>
            </div>
          )}

          {currentStepConfig?.id === "wart-details" && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Details zur Anlage</h2>
                <p className="text-muted-foreground">Modell und Wartungsstatus</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Modellbezeichnung</Label>
                  <Input
                    type="text"
                    placeholder="z.B. ecoTEC plus"
                    value={formData.wartung.modell}
                    onChange={(e) => updateWartung("modell", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Baujahr Gerät (ca.)</Label>
                  <Input
                    type="text"
                    placeholder="z.B. 2018"
                    value={formData.wartung.geraeeBaujahr}
                    onChange={(e) => updateWartung("geraeeBaujahr", e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-3">
                <Label className="text-base font-semibold">Letzte Wartung *</Label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {letzteWartungOptions.map((opt) => (
                    <OptionButton
                      key={opt.value}
                      option={opt}
                      isSelected={formData.wartung.letzteWartung === opt.value}
                      onClick={() => updateWartung("letzteWartung", opt.value)}
                      size="medium"
                    />
                  ))}
                </div>
                {validationErrors.letzteWartung && (
                  <p className="text-xs text-red-500">{validationErrors.letzteWartung}</p>
                )}
              </div>
              <div className="space-y-3">
                <Label className="text-base font-semibold">Bekannte Mängel?</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {maengelOptions.map((opt) => (
                    <OptionButton
                      key={opt.value}
                      option={opt}
                      isSelected={formData.wartung.maengel === opt.value}
                      onClick={() => updateWartung("maengel", opt.value)}
                      size="medium"
                    />
                  ))}
                </div>
              </div>
              {formData.wartung.maengel === "ja" && (
                <div className="space-y-2">
                  <Label>Bitte beschreiben Sie das Problem</Label>
                  <Textarea
                    placeholder="Beschreiben Sie kurz das Problem..."
                    value={formData.wartung.maengelBeschreibung}
                    onChange={(e) => updateWartung("maengelBeschreibung", e.target.value)}
                    rows={3}
                  />
                </div>
              )}

              {/* Datei-Upload */}
              <FileUploadField
                files={formData.wartung.dateien}
                onFilesChange={(files) =>
                  setFormData((prev) => ({
                    ...prev,
                    wartung: { ...prev.wartung, dateien: files },
                  }))
                }
                label="Fotos hochladen (optional)"
                hint="Ein Foto vom Typenschild hilft uns bei der Vorbereitung."
              />
            </div>
          )}

          {/* ===== REPARATUR STEPS ===== */}
          {currentStepConfig?.id === "rep-problem" && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Was ist das Problem?</h2>
                <p className="text-muted-foreground">Beschreiben Sie die Störung</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {problemArtOptions.map((opt) => (
                  <OptionButton
                    key={opt.value}
                    option={opt}
                    isSelected={formData.reparatur.problemArt === opt.value}
                    onClick={() => updateReparatur("problemArt", opt.value)}
                    size="large"
                  />
                ))}
              </div>
              {validationErrors.problemArt && (
                <p className="text-sm text-red-500 text-center">{validationErrors.problemArt}</p>
              )}
            </div>
          )}

          {currentStepConfig?.id === "rep-dringlichkeit" && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Wie dringend ist es?</h2>
                <p className="text-muted-foreground">Wählen Sie die Dringlichkeit</p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {dringlichkeitOptions.map((opt) => (
                  <OptionButton
                    key={opt.value}
                    option={opt}
                    isSelected={formData.reparatur.dringlichkeit === opt.value}
                    onClick={() => updateReparatur("dringlichkeit", opt.value)}
                    size="large"
                  />
                ))}
              </div>
              {validationErrors.dringlichkeit && (
                <p className="text-sm text-red-500 text-center">{validationErrors.dringlichkeit}</p>
              )}
              {formData.reparatur.dringlichkeit === "notfall" && (
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl">
                  <div className="flex items-center gap-2 text-orange-800 mb-2">
                    <Phone className="h-5 w-5" />
                    <span className="font-semibold">Notfall?</span>
                  </div>
                  <p className="text-sm text-orange-700 mb-2">Bei akutem Notfall erreichen Sie uns telefonisch:</p>
                  <a href={`tel:${company.contact.phone}`} className="text-lg font-bold text-orange-600 hover:underline">
                    {company.contact.phoneDisplay}
                  </a>
                </div>
              )}
            </div>
          )}

          {currentStepConfig?.id === "rep-details" && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Weitere Details</h2>
                <p className="text-muted-foreground">Optional, aber hilfreich</p>
              </div>
              <div className="space-y-3">
                <Label className="text-base font-semibold">Hersteller (falls bekannt)</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {alleHerstellerOptions.map((opt) => (
                    <ManufacturerButton
                      key={opt.value}
                      option={opt}
                      isSelected={formData.reparatur.hersteller === opt.value}
                      onClick={() => updateReparatur("hersteller", opt.value)}
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label>Fehlercode (falls sichtbar)</Label>
                <Input
                  type="text"
                  placeholder="z.B. F.28"
                  value={formData.reparatur.fehlercode}
                  onChange={(e) => updateReparatur("fehlercode", e.target.value)}
                  className="max-w-xs"
                />
              </div>
              <div className="space-y-2">
                <Label>Weitere Details zum Problem</Label>
                <Textarea
                  placeholder="Beschreiben Sie das Problem genauer..."
                  value={formData.reparatur.beschreibung}
                  onChange={(e) => updateReparatur("beschreibung", e.target.value)}
                  rows={3}
                />
              </div>

              {/* Datei-Upload */}
              <FileUploadField
                files={formData.reparatur.dateien}
                onFilesChange={(files) =>
                  setFormData((prev) => ({
                    ...prev,
                    reparatur: { ...prev.reparatur, dateien: files },
                  }))
                }
                label="Fotos hochladen (optional)"
                hint="Fotos vom Fehlercode, Typenschild oder der Störung helfen uns bei der Vorbereitung."
              />
            </div>
          )}

          {/* ===== PLANUNG STEPS ===== */}
          {currentStepConfig?.id === "plan-leistung" && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Welche Leistung benötigen Sie?</h2>
                <p className="text-muted-foreground">Wählen Sie den gewünschten Service</p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {leistungsTypOptions.map((opt) => (
                  <OptionButton
                    key={opt.value}
                    option={opt}
                    isSelected={formData.planung.leistungsTyp === opt.value}
                    onClick={() => updatePlanung("leistungsTyp", opt.value)}
                    size="large"
                  />
                ))}
              </div>
              {validationErrors.leistungsTyp && (
                <p className="text-sm text-red-500 text-center">{validationErrors.leistungsTyp}</p>
              )}
            </div>
          )}

          {currentStepConfig?.id === "plan-details" && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Weitere Details</h2>
                <p className="text-muted-foreground">Warum benötigen Sie diese Leistung?</p>
              </div>
              <div className="space-y-3">
                <Label className="text-base font-semibold">Grund für die Anfrage *</Label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {grundOptions.map((opt) => (
                    <OptionButton
                      key={opt.value}
                      option={opt}
                      isSelected={formData.planung.grund === opt.value}
                      onClick={() => updatePlanung("grund", opt.value)}
                      size="medium"
                    />
                  ))}
                </div>
                {validationErrors.grund && <p className="text-xs text-red-500">{validationErrors.grund}</p>}
              </div>
              <div className="space-y-3">
                <Label className="text-base font-semibold">Baupläne / Grundrisse vorhanden?</Label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {bauplaeneOptions.map((opt) => (
                    <OptionButton
                      key={opt.value}
                      option={opt}
                      isSelected={formData.planung.bauplaeneVorhanden === opt.value}
                      onClick={() => updatePlanung("bauplaeneVorhanden", opt.value)}
                      size="medium"
                    />
                  ))}
                </div>
              </div>

              {/* Datei-Upload für Baupläne */}
              {(formData.planung.bauplaeneVorhanden === "ja_digital" ||
                formData.planung.bauplaeneVorhanden === "ja_papier") && (
                <FileUploadField
                  files={formData.planung.dateien}
                  onFilesChange={(files) =>
                    setFormData((prev) => ({
                      ...prev,
                      planung: { ...prev.planung, dateien: files },
                    }))
                  }
                  label="Baupläne / Grundrisse hochladen"
                  hint="Laden Sie Ihre Baupläne hoch – das beschleunigt die Bearbeitung."
                />
              )}

              <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-center gap-2 text-green-800 mb-2">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium text-sm">Gut zu wissen:</span>
                </div>
                <p className="text-sm text-green-700">
                  Eine Heizlastberechnung ist Voraussetzung für die korrekte Auslegung einer Wärmepumpe. Der
                  Hydraulische Abgleich wird für BAFA/KfW-Förderungen benötigt.
                </p>
              </div>
            </div>
          )}

          {/* ===== CONTACT STEP ===== */}
          {currentStepConfig?.id === "contact" && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Ihre Kontaktdaten</h2>
                <p className="text-muted-foreground">Wo soll die Leistung erbracht werden?</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Straße & Hausnummer *</Label>
                  <Input
                    type="text"
                    placeholder="Musterstraße 123"
                    value={formData.contact.strasse}
                    onChange={(e) => updateContact("strasse", e.target.value)}
                    className={validationErrors.strasse ? "border-red-500" : ""}
                  />
                  {validationErrors.strasse && <p className="text-xs text-red-500">{validationErrors.strasse}</p>}
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>PLZ *</Label>
                    <Input
                      type="text"
                      placeholder="10827"
                      value={formData.contact.plz}
                      onChange={(e) => updateContact("plz", e.target.value)}
                      className={validationErrors.plz ? "border-red-500" : ""}
                      maxLength={5}
                    />
                    {validationErrors.plz && <p className="text-xs text-red-500">{validationErrors.plz}</p>}
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Label>Ort *</Label>
                    <Input
                      type="text"
                      placeholder="Berlin"
                      value={formData.contact.ort}
                      onChange={(e) => updateContact("ort", e.target.value)}
                      className={validationErrors.ort ? "border-red-500" : ""}
                    />
                    {validationErrors.ort && <p className="text-xs text-red-500">{validationErrors.ort}</p>}
                  </div>
                </div>

                {serviceAreaResult && (
                  <div
                    className={`p-4 rounded-xl border ${
                      serviceAreaResult.isCovered ? "bg-green-50 border-green-200" : "bg-yellow-50 border-yellow-200"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin
                        className={`h-5 w-5 ${serviceAreaResult.isCovered ? "text-green-600" : "text-yellow-600"}`}
                      />
                      {serviceAreaResult.isCovered ? (
                        <div>
                          <p className="font-medium text-green-800">Wir sind in Ihrem Gebiet aktiv!</p>
                          <p className="text-sm text-green-700">
                            {serviceAreaResult.location?.name} – {serviceAreaResult.location?.distanceInfo}
                          </p>
                        </div>
                      ) : (
                        <div>
                          <p className="font-medium text-yellow-800">Diese PLZ liegt außerhalb unseres Kerngebiets.</p>
                          <p className="text-sm text-yellow-700">Wir prüfen gerne, ob wir Ihnen dennoch helfen können.</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Name *</Label>
                    <Input
                      type="text"
                      placeholder="Max Mustermann"
                      value={formData.contact.name}
                      onChange={(e) => updateContact("name", e.target.value)}
                      className={validationErrors.name ? "border-red-500" : ""}
                    />
                    {validationErrors.name && <p className="text-xs text-red-500">{validationErrors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label>E-Mail *</Label>
                    <Input
                      type="email"
                      placeholder="max@beispiel.de"
                      value={formData.contact.email}
                      onChange={(e) => updateContact("email", e.target.value)}
                      className={validationErrors.email ? "border-red-500" : ""}
                    />
                    {validationErrors.email && <p className="text-xs text-red-500">{validationErrors.email}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Telefon (optional)</Label>
                  <Input
                    type="tel"
                    placeholder="030 12345678"
                    value={formData.contact.phone}
                    onChange={(e) => updateContact("phone", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Nachricht (optional)</Label>
                  <Textarea
                    placeholder="Haben Sie noch weitere Informationen für uns?"
                    value={formData.contact.nachricht}
                    onChange={(e) => updateContact("nachricht", e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="datenschutz"
                    checked={formData.contact.datenschutz}
                    onChange={(e) => updateContact("datenschutz", e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <Label htmlFor="datenschutz" className="text-sm text-muted-foreground">
                    Ich habe die{" "}
                    <a href="/datenschutz" className="text-primary hover:underline">
                      Datenschutzerklärung
                    </a>{" "}
                    gelesen und stimme zu. <span className="text-red-500">*</span>
                  </Label>
                </div>
                {validationErrors.datenschutz && (
                  <p className="text-xs text-red-500">{validationErrors.datenschutz}</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">{error}</div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 0}
            className={currentStep === 0 ? "invisible" : ""}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück
          </Button>

          {currentStepConfig?.id !== "contact" ? (
            <Button type="button" onClick={handleNext} size="lg">
              Weiter
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Wird gesendet...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Anfrage absenden
                </>
              )}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MultiStepRequestForm;
