import {
  Wind,
  Flame,
  Thermometer,
  Settings,
  Calculator,
  Wrench,
  Home,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

export type SEOService = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  priority: number;
  // SEO Templates mit {bezirk} Platzhalter
  titleTemplate: string;
  metaDescriptionTemplate: string;
  h1Template: string;
  // Content Bausteine
  introTemplate: string;
  benefits: string[];
  features: string[];
  // FAQ Templates
  faqTemplates: Array<{
    questionTemplate: string;
    answerTemplate: string;
  }>;
  // Keywords
  keywordTemplates: string[];
  // Related Services
  relatedServices: string[];
};

export const seoServices: SEOService[] = [
  {
    id: "waermepumpe",
    slug: "waermepumpe",
    name: "Wärmepumpe",
    shortName: "Wärmepumpe",
    icon: Wind,
    priority: 1,
    titleTemplate: "Wärmepumpe {bezirk} | Installation & Beratung",
    metaDescriptionTemplate:
      "Wärmepumpen-Installation in {bezirk} ✓ Vaillant & OVUM Partner ✓ Bis 70% Förderung ✓ Kostenlose Beratung vor Ort. Jetzt Angebot für {bezirk} anfragen!",
    h1Template: "Wärmepumpe in {bezirk}",
    introTemplate:
      "Sie suchen einen zuverlässigen Partner für die Installation einer Wärmepumpe in {bezirk}? Als zertifizierter Vaillant und OVUM Partner sind wir Ihr lokaler Experte für moderne Heiztechnik. Von unserem Standort in Berlin-Schöneberg erreichen wir Sie in {bezirk} schnell und unkompliziert.",
    benefits: [
      "Bis zu 70% staatliche Förderung",
      "Bis zu 50% niedrigere Heizkosten",
      "CO2-neutrales Heizen",
      "Unabhängig von Gas- und Ölpreisen",
      "Wertsteigerung Ihrer Immobilie",
    ],
    features: [
      "Vaillant aroTHERM plus Wärmepumpen",
      "OVUM Premium Wärmepumpen",
      "Luft-Wasser-Wärmepumpen",
      "Sole-Wasser-Wärmepumpen",
      "Hybridlösungen",
      "Kostenlose Förderberatung",
    ],
    faqTemplates: [
      {
        questionTemplate: "Was kostet eine Wärmepumpe in {bezirk}?",
        answerTemplate:
          "Die Kosten für eine Wärmepumpe in {bezirk} liegen zwischen 15.000€ und 35.000€ je nach Gebäude und Modell. Durch staatliche Förderung können Sie bis zu 70% der Kosten zurückerhalten. Wir erstellen Ihnen ein individuelles Angebot für Ihr Objekt in {bezirk}.",
      },
      {
        questionTemplate: "Welche Wärmepumpe ist für {bezirk} geeignet?",
        answerTemplate:
          "Für die meisten Gebäude in {bezirk} empfehlen wir Luft-Wasser-Wärmepumpen von Vaillant oder OVUM. Diese sind besonders effizient und arbeiten flüsterleise – ideal für Wohngebiete. Wir beraten Sie vor Ort in {bezirk}, welches System optimal zu Ihrem Gebäude passt.",
      },
      {
        questionTemplate: "Wie lange dauert die Installation in {bezirk}?",
        answerTemplate:
          "Die Installation einer Wärmepumpe in {bezirk} dauert in der Regel 2-3 Tage. Inklusive Planung, Förderantrag und Terminierung rechnen Sie mit ca. 4-8 Wochen vom Erstkontakt bis zur fertigen Anlage.",
      },
    ],
    keywordTemplates: [
      "Wärmepumpe {bezirk}",
      "Wärmepumpe installieren {bezirk}",
      "Wärmepumpe kaufen {bezirk}",
      "Luft Wärmepumpe {bezirk}",
      "Wärmepumpe Kosten {bezirk}",
    ],
    relatedServices: [
      "heizlastberechnung",
      "hydraulischer-abgleich",
      "fussbodenheizung",
    ],
  },
  {
    id: "heizungsinstallateur",
    slug: "heizungsinstallateur",
    name: "Heizungsinstallateur",
    shortName: "Heizungsinstallateur",
    icon: Home,
    priority: 1,
    titleTemplate: "Heizungsinstallateur {bezirk} | Ihr lokaler Fachbetrieb",
    metaDescriptionTemplate:
      "Heizungsinstallateur in {bezirk} gesucht? ✓ Wärmepumpen ✓ Gasthermen ✓ Fußbodenheizung ✓ Schneller Service. Mannhold Haustechnik – Ihr Meisterbetrieb!",
    h1Template: "Heizungsinstallateur in {bezirk}",
    introTemplate:
      "Als erfahrener Heizungsinstallateur in {bezirk} bieten wir Ihnen das komplette Spektrum moderner Heiztechnik. Ob Wärmepumpe, Gastherme oder Fußbodenheizung – unser Fachteam ist schnell bei Ihnen vor Ort in {bezirk}.",
    benefits: [
      "Lokaler Meisterbetrieb",
      "Schnelle Terminvergabe",
      "Faire Festpreise",
      "Alle Heizsysteme",
      "Förderberatung inklusive",
    ],
    features: [
      "Heizungsinstallation",
      "Heizungsaustausch",
      "Heizungsmodernisierung",
      "Notdienst",
      "Wartung & Service",
      "Energieberatung",
    ],
    faqTemplates: [
      {
        questionTemplate:
          "Wie finde ich einen guten Heizungsinstallateur in {bezirk}?",
        answerTemplate:
          "Bei der Wahl eines Heizungsinstallateurs in {bezirk} sollten Sie auf Zertifizierungen (z.B. Vaillant Partner), Kundenbewertungen und lokale Präsenz achten. Als Meisterbetrieb aus Berlin-Schöneberg sind wir schnell bei Ihnen in {bezirk} und bieten faire Festpreise.",
      },
      {
        questionTemplate: "Bieten Sie Notdienst in {bezirk} an?",
        answerTemplate:
          "Ja, wir bieten auch Notdienst in {bezirk} an. Bei Heizungsausfällen im Winter erreichen Sie uns telefonisch und wir versuchen, schnellstmöglich bei Ihnen in {bezirk} zu sein.",
      },
    ],
    keywordTemplates: [
      "Heizungsinstallateur {bezirk}",
      "Heizungsbauer {bezirk}",
      "Heizungsfirma {bezirk}",
      "Heizungsmonteur {bezirk}",
      "Heizung installieren {bezirk}",
    ],
    relatedServices: ["waermepumpe", "gastherme", "wartung-heizung"],
  },
  {
    id: "gastherme",
    slug: "gastherme",
    name: "Gastherme",
    shortName: "Gastherme",
    icon: Flame,
    priority: 2,
    titleTemplate: "Gastherme {bezirk} | Austausch & Wartung vom Profi",
    metaDescriptionTemplate:
      "Gastherme in {bezirk} austauschen oder warten lassen ✓ Moderne Brennwerttechnik ✓ Alle Marken ✓ Faire Preise. Jetzt Termin in {bezirk} vereinbaren!",
    h1Template: "Gastherme in {bezirk}",
    introTemplate:
      "Ihre Gastherme in {bezirk} ist in die Jahre gekommen? Wir beraten Sie zum Austausch gegen ein modernes Brennwertgerät oder zum Umstieg auf eine Wärmepumpe. Auch Wartung und Reparatur Ihrer Gastherme in {bezirk} übernehmen wir zuverlässig.",
    benefits: [
      "Bis zu 30% Energieeinsparung",
      "Schnelle Terminvergabe",
      "Alle Marken",
      "Festpreisangebote",
      "Umstiegsberatung Wärmepumpe",
    ],
    features: [
      "Gasthermen-Austausch",
      "Brennwerttherme Installation",
      "Regelmäßige Wartung",
      "Störungsbehebung",
      "Abgasmessung",
      "Energieberatung",
    ],
    faqTemplates: [
      {
        questionTemplate:
          "Sollte ich meine Gastherme in {bezirk} austauschen oder auf Wärmepumpe umsteigen?",
        answerTemplate:
          "Das hängt von Ihrem Gebäude in {bezirk} ab. Wenn Ihre Gastherme älter als 15 Jahre ist, lohnt sich oft der Umstieg auf eine Wärmepumpe – besonders wegen der hohen Förderung. Wir beraten Sie vor Ort in {bezirk} zu beiden Optionen.",
      },
      {
        questionTemplate: "Was kostet eine neue Gastherme in {bezirk}?",
        answerTemplate:
          "Eine moderne Brennwerttherme kostet in {bezirk} zwischen 3.000€ und 6.000€ inkl. Installation. Im Vergleich: Eine Wärmepumpe kostet mehr, spart aber langfristig Heizkosten und erhält bis zu 70% Förderung.",
      },
    ],
    keywordTemplates: [
      "Gastherme {bezirk}",
      "Gastherme austauschen {bezirk}",
      "Gastherme Wartung {bezirk}",
      "Brennwerttherme {bezirk}",
      "Gastherme Kosten {bezirk}",
    ],
    relatedServices: ["waermepumpe", "wartung-heizung", "heizungsinstallateur"],
  },
  {
    id: "hydraulischer-abgleich",
    slug: "hydraulischer-abgleich",
    name: "Hydraulischer Abgleich",
    shortName: "Hydr. Abgleich",
    icon: Settings,
    priority: 2,
    titleTemplate: "Hydraulischer Abgleich {bezirk} | Pflicht & Förderung",
    metaDescriptionTemplate:
      "Hydraulischer Abgleich in {bezirk} ✓ Seit 2024 Pflicht für Förderung ✓ Bis 15% Energiesparen ✓ Verfahren A & B. Jetzt Termin in {bezirk} buchen!",
    h1Template: "Hydraulischer Abgleich in {bezirk}",
    introTemplate:
      "Der hydraulische Abgleich ist seit 2024 Pflicht für die Heizungsförderung. Als Fachbetrieb führen wir den hydraulischen Abgleich in {bezirk} nach Verfahren B durch und erstellen die förderfähige Dokumentation. So sparen Sie bis zu 15% Energie und erfüllen alle Voraussetzungen.",
    benefits: [
      "Bis zu 15% Energieeinsparung",
      "Pflicht für Förderung",
      "Gleichmäßige Wärmeverteilung",
      "Keine Strömungsgeräusche",
      "Optimale Wärmepumpen-Effizienz",
    ],
    features: [
      "Bestandsaufnahme vor Ort",
      "Berechnung nach Verfahren B",
      "Ventileinstellung",
      "Pumpenoptimierung",
      "Förderfähige Dokumentation",
      "Einregulierung",
    ],
    faqTemplates: [
      {
        questionTemplate: "Ist der hydraulische Abgleich in {bezirk} Pflicht?",
        answerTemplate:
          "Ja, seit 2024 ist der hydraulische Abgleich nach Verfahren B Voraussetzung für die Heizungsförderung. Wenn Sie in {bezirk} eine neue Heizung planen und Förderung beantragen möchten, führen wir den Abgleich fachgerecht durch.",
      },
      {
        questionTemplate:
          "Was kostet ein hydraulischer Abgleich in {bezirk}?",
        answerTemplate:
          "Die Kosten für einen hydraulischen Abgleich in {bezirk} liegen je nach Gebäudegröße zwischen 400€ und 1.200€. Die Investition lohnt sich durch Energieeinsparungen von bis zu 15% und ist Voraussetzung für Fördermittel.",
      },
    ],
    keywordTemplates: [
      "Hydraulischer Abgleich {bezirk}",
      "Hydraulischer Abgleich Kosten {bezirk}",
      "Hydraulischer Abgleich Pflicht {bezirk}",
      "Heizung optimieren {bezirk}",
      "Verfahren B {bezirk}",
    ],
    relatedServices: ["waermepumpe", "heizlastberechnung", "wartung-heizung"],
  },
  {
    id: "fussbodenheizung",
    slug: "fussbodenheizung",
    name: "Fußbodenheizung",
    shortName: "Fußbodenheizung",
    icon: Thermometer,
    priority: 3,
    titleTemplate: "Fußbodenheizung {bezirk} | Wartung & Reinigung",
    metaDescriptionTemplate:
      "Fußbodenheizung in {bezirk} reinigen & warten lassen ✓ Professionelle Spülung ✓ Bis 50% bessere Heizleistung ✓ Schneller Service. Jetzt anfragen!",
    h1Template: "Fußbodenheizung in {bezirk}",
    introTemplate:
      "Ihre Fußbodenheizung in {bezirk} heizt nicht mehr richtig? Eine verschlammte Fußbodenheizung verliert bis zu 50% ihrer Leistung. Mit unserer professionellen Spülung und Reinigung stellen wir die volle Effizienz wieder her – schnell und sauber.",
    benefits: [
      "Bis zu 50% bessere Heizleistung",
      "Niedrigere Heizkosten",
      "Gleichmäßige Wärmeverteilung",
      "Verlängerte Lebensdauer",
      "Keine Bauarbeiten nötig",
    ],
    features: [
      "Heizkreisspülung",
      "Schlammentsorgung",
      "Korrosionsschutz",
      "Durchflussmessung",
      "Hydraulischer Abgleich",
      "Systemoptimierung",
    ],
    faqTemplates: [
      {
        questionTemplate:
          "Wann sollte die Fußbodenheizung in {bezirk} gereinigt werden?",
        answerTemplate:
          "Wenn Ihre Fußbodenheizung in {bezirk} ungleichmäßig heizt oder die Leistung nachlässt, ist eine Reinigung sinnvoll. Wir empfehlen eine Spülung alle 10-15 Jahre oder bei deutlichem Leistungsverlust.",
      },
      {
        questionTemplate:
          "Was kostet eine Fußbodenheizungs-Spülung in {bezirk}?",
        answerTemplate:
          "Die Kosten für eine Fußbodenheizungs-Spülung in {bezirk} liegen je nach Größe zwischen 400€ und 1.500€. Durch die verbesserte Effizienz amortisiert sich die Investition oft innerhalb weniger Heizsaisons.",
      },
    ],
    keywordTemplates: [
      "Fußbodenheizung {bezirk}",
      "Fußbodenheizung reinigen {bezirk}",
      "Fußbodenheizung Wartung {bezirk}",
      "Fußbodenheizung Spülung {bezirk}",
      "Heizkreis spülen {bezirk}",
    ],
    relatedServices: [
      "hydraulischer-abgleich",
      "wartung-heizung",
      "waermepumpe",
    ],
  },
  {
    id: "heizlastberechnung",
    slug: "heizlastberechnung",
    name: "Heizlastberechnung",
    shortName: "Heizlast",
    icon: Calculator,
    priority: 3,
    titleTemplate: "Heizlastberechnung {bezirk} | DIN EN 12831",
    metaDescriptionTemplate:
      "Heizlastberechnung in {bezirk} nach DIN EN 12831 ✓ Basis für optimale Heizung ✓ Förderfähig ✓ Vom Fachbetrieb. Jetzt Berechnung für {bezirk} anfragen!",
    h1Template: "Heizlastberechnung in {bezirk}",
    introTemplate:
      "Eine präzise Heizlastberechnung nach DIN EN 12831 ist die Grundlage für die optimale Dimensionierung Ihrer neuen Heizung in {bezirk}. Wir ermitteln den exakten Wärmebedarf Ihres Gebäudes und erstellen die förderfähige Dokumentation.",
    benefits: [
      "Optimale Anlagendimensionierung",
      "Keine Überdimensionierung",
      "Förderfähige Dokumentation",
      "Basis für hydraulischen Abgleich",
      "Langfristige Kosteneinsparung",
    ],
    features: [
      "Berechnung nach DIN EN 12831",
      "Raumweise Heizlastermittlung",
      "U-Wert Bestimmung",
      "Lüftungsverluste",
      "Auslegungsempfehlung",
      "Förderdokumentation",
    ],
    faqTemplates: [
      {
        questionTemplate:
          "Warum brauche ich eine Heizlastberechnung in {bezirk}?",
        answerTemplate:
          "Die Heizlastberechnung stellt sicher, dass Ihre neue Heizung in {bezirk} weder über- noch unterdimensioniert ist. Eine zu große Anlage kostet mehr und arbeitet ineffizient, eine zu kleine kann nicht ausreichend heizen. Für die Förderung ist sie oft Pflicht.",
      },
      {
        questionTemplate:
          "Was kostet eine Heizlastberechnung in {bezirk}?",
        answerTemplate:
          "Eine Heizlastberechnung für Ihr Objekt in {bezirk} kostet je nach Größe zwischen 200€ und 600€. Bei einem kompletten Heizungsprojekt ist sie oft im Angebot enthalten.",
      },
    ],
    keywordTemplates: [
      "Heizlastberechnung {bezirk}",
      "Heizlast berechnen {bezirk}",
      "Wärmebedarf berechnen {bezirk}",
      "DIN 12831 {bezirk}",
      "Heizungsauslegung {bezirk}",
    ],
    relatedServices: [
      "waermepumpe",
      "hydraulischer-abgleich",
      "heizungsinstallateur",
    ],
  },
  {
    id: "wartung-heizung",
    slug: "wartung-heizung",
    name: "Heizungswartung",
    shortName: "Wartung",
    icon: Wrench,
    priority: 3,
    titleTemplate: "Heizungswartung {bezirk} | Alle Systeme",
    metaDescriptionTemplate:
      "Heizungswartung in {bezirk} ✓ Wärmepumpen ✓ Gasthermen ✓ Fußbodenheizung ✓ Wartungsvertrag möglich. Jetzt Wartungstermin in {bezirk} buchen!",
    h1Template: "Heizungswartung in {bezirk}",
    introTemplate:
      "Regelmäßige Wartung hält Ihre Heizung in {bezirk} effizient und zuverlässig. Wir warten Wärmepumpen, Gasthermen und komplette Heizungsanlagen – mit oder ohne Wartungsvertrag. Buchen Sie jetzt Ihren Wartungstermin in {bezirk}.",
    benefits: [
      "Längere Lebensdauer",
      "Optimale Effizienz",
      "Herstellergarantie erhalten",
      "Planbare Kosten",
      "Bevorzugte Terminvergabe",
    ],
    features: [
      "Jährliche Inspektion",
      "Brennerwartung",
      "Wärmepumpen-Check",
      "Sicherheitsprüfung",
      "Effizienzoptimierung",
      "Wartungsvertrag",
    ],
    faqTemplates: [
      {
        questionTemplate: "Wie oft sollte die Heizung in {bezirk} gewartet werden?",
        answerTemplate:
          "Wir empfehlen eine jährliche Wartung Ihrer Heizung in {bezirk}. Bei Gasthermen ist dies oft vorgeschrieben, bei Wärmepumpen sichert es die Herstellergarantie und optimale Effizienz.",
      },
      {
        questionTemplate: "Was kostet eine Heizungswartung in {bezirk}?",
        answerTemplate:
          "Eine Heizungswartung in {bezirk} kostet je nach Anlage zwischen 150€ und 350€. Mit einem Wartungsvertrag erhalten Sie Rabatte und bevorzugte Termine.",
      },
    ],
    keywordTemplates: [
      "Heizungswartung {bezirk}",
      "Heizung warten {bezirk}",
      "Wartung Heizung {bezirk}",
      "Wärmepumpe Wartung {bezirk}",
      "Gastherme Wartung {bezirk}",
    ],
    relatedServices: ["waermepumpe", "gastherme", "fussbodenheizung"],
  },
  {
    id: "heizung-erneuern",
    slug: "heizung-erneuern",
    name: "Heizung erneuern",
    shortName: "Heizungstausch",
    icon: RefreshCw,
    priority: 2,
    titleTemplate: "Heizung erneuern {bezirk} | Austausch & Modernisierung",
    metaDescriptionTemplate:
      "Heizung in {bezirk} erneuern ✓ Wärmepumpe oder Brennwert ✓ Bis 70% Förderung ✓ Komplettservice. Jetzt alte Heizung in {bezirk} austauschen!",
    h1Template: "Heizung erneuern in {bezirk}",
    introTemplate:
      "Sie möchten Ihre alte Heizung in {bezirk} erneuern? Der Wechsel zu einer modernen Wärmepumpe oder Brennwerttherme spart Energie und schont die Umwelt. Wir begleiten Sie von der Beratung über die Förderung bis zur Installation.",
    benefits: [
      "Bis zu 70% Förderung",
      "Bis zu 50% weniger Heizkosten",
      "Klimafreundlich heizen",
      "Wertsteigerung Immobilie",
      "Komplettservice",
    ],
    features: [
      "Beratung vor Ort",
      "Heizlastberechnung",
      "Förderantrag",
      "Demontage Altanlage",
      "Installation Neuanlage",
      "Inbetriebnahme",
    ],
    faqTemplates: [
      {
        questionTemplate: "Wann sollte ich meine Heizung in {bezirk} erneuern?",
        answerTemplate:
          "Wenn Ihre Heizung in {bezirk} älter als 15-20 Jahre ist, häufig repariert werden muss oder hohe Energiekosten verursacht, lohnt sich ein Austausch. Aktuell gibt es besonders attraktive Förderungen für den Umstieg auf Wärmepumpen.",
      },
      {
        questionTemplate: "Was kostet es, die Heizung in {bezirk} zu erneuern?",
        answerTemplate:
          "Die Kosten für eine neue Heizung in {bezirk} variieren: Brennwerttherme ab ca. 5.000€, Wärmepumpe ab ca. 15.000€. Durch Förderung von bis zu 70% sinken die tatsächlichen Kosten erheblich.",
      },
    ],
    keywordTemplates: [
      "Heizung erneuern {bezirk}",
      "Heizung austauschen {bezirk}",
      "Neue Heizung {bezirk}",
      "Heizungsmodernisierung {bezirk}",
      "Heizungstausch {bezirk}",
    ],
    relatedServices: [
      "waermepumpe",
      "gastherme",
      "heizlastberechnung",
      "hydraulischer-abgleich",
    ],
  },
];

export const getSEOServiceBySlug = (slug: string): SEOService | undefined => {
  return seoServices.find((service) => service.slug === slug);
};

export const getAllSEOServiceSlugs = (): string[] => {
  return seoServices.map((service) => service.slug);
};
