import {
  Wind,
  Flame,
  Thermometer,
  Settings,
  Calculator,
  Wrench,
  Home,
  RefreshCw,
  AlertTriangle,
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
  // Keywords - erweitert mit Marken, Intent, Long-Tail, Vergleichs-Keywords
  keywordTemplates: string[];
  // Related Services
  relatedServices: string[];
  // NEU: Preis-Info für Content
  priceRange?: {
    min: number;
    max: number;
    unit: string;
  };
  // NEU: Förderung-Info
  foerderung?: {
    maxPercent: number;
    info: string;
  };
};

export const seoServices: SEOService[] = [
  {
    id: "waermepumpe",
    slug: "waermepumpe",
    name: "Wärmepumpe",
    shortName: "Wärmepumpe",
    icon: Wind,
    priority: 1,
    titleTemplate: "Wärmepumpe {bezirk} | Installation & Wartung | Mannhold",
    metaDescriptionTemplate:
      "Wärmepumpe in {bezirk} ✓ {distanceInfo} ✓ Vaillant & OVUM Partner ✓ Bis 70% Förderung ✓ Altbau-Spezialist ✓ Jetzt beraten lassen!",
    h1Template: "Wärmepumpe {bezirk}: Installation & Wartung vom Profi",
    introTemplate:
      "Sie suchen einen zuverlässigen Partner für die Installation einer Wärmepumpe in {bezirk}? Als zertifizierter Vaillant und OVUM Partner sind wir Ihr lokaler Experte für moderne Heiztechnik. Ob Sie eine Wärmepumpe kaufen, installieren lassen oder eine Beratung benötigen – von unserem Standort in Berlin-Schöneberg erreichen wir Sie in {bezirk} schnell und unkompliziert. Wir unterstützen Sie auch bei der Förderung und dem Antrag.",
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
      {
        questionTemplate: "Ist eine Wärmepumpe im Altbau in {bezirk} sinnvoll?",
        answerTemplate:
          "Ja, auch im Altbau in {bezirk} kann eine Wärmepumpe sehr effizient arbeiten. Wichtig sind eine gute Dämmung und passende Heizkörper. Wir prüfen Ihr Gebäude vor Ort und beraten Sie, ob eine Wärmepumpe die richtige Wahl ist.",
      },
      {
        questionTemplate: "Wärmepumpe oder Gastherme in {bezirk} – was ist besser?",
        answerTemplate:
          "In {bezirk} empfehlen wir aufgrund der hohen Förderung (bis 70%) meist den Umstieg auf eine Wärmepumpe. Sie ist langfristig günstiger, unabhängig von Gaspreisen und klimafreundlich. Bei bestimmten Gebäudetypen kann aber eine moderne Gastherme sinnvoller sein – wir beraten Sie individuell.",
      },
      {
        questionTemplate: "Welche Förderung gibt es für Wärmepumpen in {bezirk}?",
        answerTemplate:
          "Für Wärmepumpen in {bezirk} gibt es bis zu 70% Förderung durch die BAFA/KfW. Die genaue Höhe hängt von Ihrem Haushalt und der Art des Austauschs ab. Wir helfen Ihnen beim Antrag und stellen sicher, dass Sie alle Voraussetzungen erfüllen.",
      },
      {
        questionTemplate: "Wie hoch ist die Jahresarbeitszahl einer Wärmepumpe in {bezirk}?",
        answerTemplate:
          "Eine gut dimensionierte Luft-Wasser-Wärmepumpe erreicht in {bezirk} eine Jahresarbeitszahl (JAZ) von 3,5 bis 4,5. Das bedeutet: Aus 1 kWh Strom werden 3,5-4,5 kWh Wärme. Moderne Vaillant und OVUM Wärmepumpen sind besonders effizient.",
      },
    ],
    keywordTemplates: [
      // Haupt-Keywords
      "Wärmepumpe {bezirk}",
      "Wärmepumpe installieren {bezirk}",
      "Wärmepumpe kaufen {bezirk}",
      "Luft Wärmepumpe {bezirk}",
      "Wärmepumpe Kosten {bezirk}",
      // Marken-Keywords
      "Vaillant Wärmepumpe {bezirk}",
      "OVUM Wärmepumpe {bezirk}",
      "Vaillant aroTHERM {bezirk}",
      "OVUM Premium Wärmepumpe {bezirk}",
      // Intent-Keywords
      "Wärmepumpe installieren lassen {bezirk}",
      "Wärmepumpe Beratung {bezirk}",
      "Wärmepumpe Angebot {bezirk}",
      "Wärmepumpe Förderung {bezirk}",
      // Long-Tail Keywords
      "Wärmepumpe Altbau {bezirk}",
      "Wärmepumpe Einfamilienhaus {bezirk}",
      "Luft-Wasser-Wärmepumpe {bezirk}",
      "Wärmepumpe Jahresarbeitszahl {bezirk}",
      "Wärmepumpe Fußbodenheizung {bezirk}",
      // Vergleichs-Keywords
      "Wärmepumpe oder Gastherme {bezirk}",
      "Wärmepumpe vs Gasheizung {bezirk}",
    ],
    relatedServices: [
      "heizlastberechnung",
      "hydraulischer-abgleich",
      "fussbodenheizung",
    ],
    priceRange: {
      min: 15000,
      max: 35000,
      unit: "€",
    },
    foerderung: {
      maxPercent: 70,
      info: "Bis zu 70% Förderung durch BAFA/KfW möglich",
    },
  },
  {
    id: "heizungsinstallateur",
    slug: "heizungsinstallateur",
    name: "Heizungsinstallateur",
    shortName: "Heizungsinstallateur",
    icon: Home,
    priority: 1,
    titleTemplate: "Heizungsinstallateur {bezirk} | Wärmepumpen & Gasthermen | Mannhold",
    metaDescriptionTemplate:
      "Heizungsinstallateur in {bezirk} ✓ {distanceInfo} ✓ Wärmepumpen ✓ Gasthermen ✓ Fußbodenheizung ✓ Notdienst. Mannhold Haustechnik – Ihr Meisterbetrieb!",
    h1Template: "Heizungsinstallateur {bezirk}: Wärmepumpen & Gasthermen vom Profi",
    introTemplate:
      "Als erfahrener Heizungsinstallateur in {bezirk} bieten wir Ihnen das komplette Spektrum moderner Heiztechnik. Ob Wärmepumpe von Vaillant oder OVUM, Gastherme oder Fußbodenheizung – unser Fachteam ist schnell bei Ihnen vor Ort in {bezirk}. Bei Notfällen sind wir auch kurzfristig erreichbar. Lassen Sie sich jetzt beraten!",
    benefits: [
      "Lokaler Meisterbetrieb",
      "Schnelle Terminvergabe",
      "Faire Festpreise",
      "Alle Heizsysteme",
      "Förderberatung inklusive",
      "Notdienst verfügbar",
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
      {
        questionTemplate: "Was kostet ein Heizungsinstallateur in {bezirk}?",
        answerTemplate:
          "Die Kosten für einen Heizungsinstallateur in {bezirk} hängen von der Leistung ab. Eine Beratung ist bei uns kostenlos, Wartungen starten ab 150€, Installationen werden individuell kalkuliert. Wir bieten transparente Festpreise.",
      },
      {
        questionTemplate: "Welche Heizungssysteme installieren Sie in {bezirk}?",
        answerTemplate:
          "Als Heizungsinstallateur in {bezirk} installieren wir Wärmepumpen (Vaillant, OVUM), Gasthermen, Brennwertgeräte, Fußbodenheizungen und Hybridlösungen. Wir beraten Sie, welches System für Ihr Gebäude am besten geeignet ist.",
      },
      {
        questionTemplate: "Wie schnell können Sie einen Termin in {bezirk} machen?",
        answerTemplate:
          "Für Beratungstermine in {bezirk} haben wir meist innerhalb einer Woche freie Kapazitäten. Bei dringenden Reparaturen oder Notfällen versuchen wir, noch am selben Tag zu kommen. Rufen Sie uns einfach an!",
      },
    ],
    keywordTemplates: [
      // Haupt-Keywords
      "Heizungsinstallateur {bezirk}",
      "Heizungsbauer {bezirk}",
      "Heizungsfirma {bezirk}",
      "Heizungsmonteur {bezirk}",
      "Heizung installieren {bezirk}",
      // Intent-Keywords
      "Heizungsinstallateur finden {bezirk}",
      "Heizungsinstallateur Notdienst {bezirk}",
      "Heizungsinstallateur in der Nähe {bezirk}",
      "Heizungsinstallateur Beratung {bezirk}",
      // Marken-Keywords
      "Vaillant Installateur {bezirk}",
      "Vaillant Partner {bezirk}",
      // Long-Tail Keywords
      "Heizungsinstallateur Meisterbetrieb {bezirk}",
      "Heizungsinstallateur Wärmepumpe {bezirk}",
      "Heizungsinstallateur Gastherme {bezirk}",
      "Heizungsinstallateur Fußbodenheizung {bezirk}",
      // Service-Keywords
      "Heizung reparieren {bezirk}",
      "Heizung warten {bezirk}",
      "Heizung Notdienst {bezirk}",
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
      "Gastherme in {bezirk} austauschen oder warten lassen ✓ Moderne Brennwerttechnik ✓ Alle Marken ✓ Faire Preise ✓ Umstieg auf Wärmepumpe. Jetzt beraten lassen!",
    h1Template: "Gastherme in {bezirk}: Austausch, Wartung & Beratung",
    introTemplate:
      "Ihre Gastherme in {bezirk} ist in die Jahre gekommen? Wir beraten Sie zum Austausch gegen ein modernes Brennwertgerät oder zum Umstieg auf eine Wärmepumpe mit bis zu 70% Förderung. Auch Wartung und Reparatur Ihrer Gastherme in {bezirk} übernehmen wir zuverlässig. Holen Sie sich jetzt ein Angebot!",
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
          "Das hängt von Ihrem Gebäude in {bezirk} ab. Wenn Ihre Gastherme älter als 15 Jahre ist, lohnt sich oft der Umstieg auf eine Wärmepumpe – besonders wegen der hohen Förderung von bis zu 70%. Wir beraten Sie vor Ort in {bezirk} zu beiden Optionen.",
      },
      {
        questionTemplate: "Was kostet eine neue Gastherme in {bezirk}?",
        answerTemplate:
          "Eine moderne Brennwerttherme kostet in {bezirk} zwischen 3.000€ und 6.000€ inkl. Installation. Im Vergleich: Eine Wärmepumpe kostet mehr, spart aber langfristig Heizkosten und erhält bis zu 70% Förderung.",
      },
      {
        questionTemplate: "Wie oft sollte die Gastherme in {bezirk} gewartet werden?",
        answerTemplate:
          "Ihre Gastherme in {bezirk} sollte jährlich gewartet werden. Das ist nicht nur für die Sicherheit wichtig, sondern oft auch Voraussetzung für die Herstellergarantie. Wir bieten auch Wartungsverträge mit Festpreisen.",
      },
      {
        questionTemplate: "Gibt es Förderung für Gasthermen in {bezirk}?",
        answerTemplate:
          "Für reine Gasthermen gibt es aktuell keine Förderung mehr in {bezirk}. Daher empfehlen wir den Umstieg auf eine Wärmepumpe mit bis zu 70% Förderung. Wir beraten Sie gerne zu Ihren Optionen.",
      },
      {
        questionTemplate: "Gastherme oder Wärmepumpe in {bezirk} – was ist günstiger?",
        answerTemplate:
          "Kurzfristig ist eine Gastherme in {bezirk} günstiger (3.000-6.000€). Langfristig ist eine Wärmepumpe (15.000-35.000€ vor Förderung) oft günstiger, da sie bis zu 50% Heizkosten spart und bis zu 70% Förderung erhält. Wir rechnen das für Ihr Objekt durch.",
      },
    ],
    keywordTemplates: [
      // Haupt-Keywords
      "Gastherme {bezirk}",
      "Gastherme austauschen {bezirk}",
      "Gastherme Wartung {bezirk}",
      "Brennwerttherme {bezirk}",
      "Gastherme Kosten {bezirk}",
      // Intent-Keywords
      "Gastherme reparieren {bezirk}",
      "Gastherme erneuern {bezirk}",
      "Gastherme installieren lassen {bezirk}",
      "Gastherme Angebot {bezirk}",
      // Long-Tail Keywords
      "Gastherme defekt {bezirk}",
      "Gastherme tropft {bezirk}",
      "Gastherme Notdienst {bezirk}",
      "Neue Gastherme {bezirk}",
      // Vergleichs-Keywords
      "Gastherme oder Wärmepumpe {bezirk}",
      "Gastherme vs Wärmepumpe {bezirk}",
      // Marken
      "Vaillant Gastherme {bezirk}",
      "Viessmann Gastherme {bezirk}",
    ],
    relatedServices: ["waermepumpe", "wartung-heizung", "heizungsinstallateur"],
    priceRange: {
      min: 3000,
      max: 6000,
      unit: "€",
    },
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
      "Hydraulischer Abgleich in {bezirk} ✓ Seit 2024 Pflicht für Förderung ✓ Bis 15% Energiesparen ✓ Verfahren B ✓ Förderdokumentation. Jetzt Termin buchen!",
    h1Template: "Hydraulischer Abgleich in {bezirk}: Pflicht, Kosten & Förderung",
    introTemplate:
      "Der hydraulische Abgleich ist seit 2024 Pflicht für die Heizungsförderung in {bezirk}. Als Fachbetrieb führen wir den hydraulischen Abgleich nach Verfahren B durch und erstellen die förderfähige Dokumentation. So sparen Sie bis zu 15% Energie, erfüllen alle Voraussetzungen und optimieren Ihre Heizung. Jetzt Angebot anfordern!",
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
      {
        questionTemplate: "Was ist der Unterschied zwischen Verfahren A und B?",
        answerTemplate:
          "Verfahren A ist eine vereinfachte Methode, Verfahren B ist die genauere raumweise Berechnung. Für die Förderung in {bezirk} ist seit 2024 Verfahren B Pflicht. Wir führen ausschließlich Verfahren B durch und erstellen die entsprechende Dokumentation.",
      },
      {
        questionTemplate: "Wie lange dauert ein hydraulischer Abgleich in {bezirk}?",
        answerTemplate:
          "Ein hydraulischer Abgleich in {bezirk} dauert je nach Gebäudegröße 1-2 Tage. Zuerst erfassen wir alle Daten vor Ort, dann erfolgt die Berechnung und anschließend die Einstellung aller Ventile.",
      },
      {
        questionTemplate: "Brauche ich einen hydraulischen Abgleich für meine Wärmepumpe in {bezirk}?",
        answerTemplate:
          "Ja, ein hydraulischer Abgleich ist besonders wichtig für Wärmepumpen in {bezirk}. Er sorgt für optimale Effizienz und ist Voraussetzung für die Förderung. Wir führen den Abgleich meist direkt bei der Wärmepumpen-Installation durch.",
      },
    ],
    keywordTemplates: [
      // Haupt-Keywords
      "Hydraulischer Abgleich {bezirk}",
      "Hydraulischer Abgleich Kosten {bezirk}",
      "Hydraulischer Abgleich Pflicht {bezirk}",
      "Heizung optimieren {bezirk}",
      "Verfahren B {bezirk}",
      // Intent-Keywords
      "Hydraulischer Abgleich durchführen lassen {bezirk}",
      "Hydraulischer Abgleich Angebot {bezirk}",
      "Hydraulischer Abgleich Fachbetrieb {bezirk}",
      // Long-Tail Keywords
      "Hydraulischer Abgleich Wärmepumpe {bezirk}",
      "Hydraulischer Abgleich Förderung {bezirk}",
      "Hydraulischer Abgleich Altbau {bezirk}",
      "Hydraulischer Abgleich Fußbodenheizung {bezirk}",
      // Technische Keywords
      "Heizung einregulieren {bezirk}",
      "Heizkörper abgleichen {bezirk}",
      "Heizung Energie sparen {bezirk}",
    ],
    relatedServices: ["waermepumpe", "heizlastberechnung", "wartung-heizung"],
    priceRange: {
      min: 400,
      max: 1200,
      unit: "€",
    },
    foerderung: {
      maxPercent: 15,
      info: "Bis zu 15% staatlich gefördert als Teil der Heizungsförderung",
    },
  },
  {
    id: "fussbodenheizung",
    slug: "fussbodenheizung",
    name: "Fußbodenheizung",
    shortName: "Fußbodenheizung",
    icon: Thermometer,
    priority: 3,
    titleTemplate: "Fußbodenheizung {bezirk} | Wartung, Reinigung & Spülung",
    metaDescriptionTemplate:
      "Fußbodenheizung in {bezirk} reinigen & warten lassen ✓ Professionelle Spülung ✓ Bis 50% bessere Heizleistung ✓ Schneller Service ✓ Festpreise. Jetzt anfragen!",
    h1Template: "Fußbodenheizung in {bezirk}: Wartung, Reinigung & Spülung",
    introTemplate:
      "Ihre Fußbodenheizung in {bezirk} heizt nicht mehr richtig? Eine verschlammte Fußbodenheizung verliert bis zu 50% ihrer Leistung. Mit unserer professionellen Spülung und Reinigung stellen wir die volle Effizienz wieder her – schnell, sauber und zu fairen Festpreisen. Kombiniert mit einem hydraulischen Abgleich holen wir das Maximum aus Ihrer Fußbodenheizung!",
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
      {
        questionTemplate: "Ist eine Fußbodenheizung für Wärmepumpen in {bezirk} geeignet?",
        answerTemplate:
          "Ja, eine Fußbodenheizung ist ideal für Wärmepumpen in {bezirk}! Durch die niedrigen Vorlauftemperaturen arbeitet die Wärmepumpe besonders effizient. Wir kombinieren oft Wärmepumpen-Installation mit Fußbodenheizungs-Optimierung.",
      },
      {
        questionTemplate: "Warum heizt meine Fußbodenheizung in {bezirk} nicht gleichmäßig?",
        answerTemplate:
          "Ungleichmäßige Erwärmung der Fußbodenheizung in {bezirk} kann durch Verschlammung, fehlenden hydraulischen Abgleich oder defekte Ventile entstehen. Wir analysieren das Problem und beheben es professionell.",
      },
      {
        questionTemplate: "Wie lange dauert eine Fußbodenheizungs-Spülung in {bezirk}?",
        answerTemplate:
          "Eine Fußbodenheizungs-Spülung in {bezirk} dauert in der Regel 1 Tag. Bei größeren Anlagen oder starker Verschmutzung kann es auch 2 Tage dauern. Die Heizung ist während der Arbeiten nicht nutzbar.",
      },
    ],
    keywordTemplates: [
      // Haupt-Keywords
      "Fußbodenheizung {bezirk}",
      "Fußbodenheizung reinigen {bezirk}",
      "Fußbodenheizung Wartung {bezirk}",
      "Fußbodenheizung Spülung {bezirk}",
      "Heizkreis spülen {bezirk}",
      // Intent-Keywords
      "Fußbodenheizung reparieren {bezirk}",
      "Fußbodenheizung optimieren {bezirk}",
      "Fußbodenheizung Probleme {bezirk}",
      // Long-Tail Keywords
      "Fußbodenheizung heizt nicht {bezirk}",
      "Fußbodenheizung ungleichmäßig {bezirk}",
      "Fußbodenheizung verschlammt {bezirk}",
      "Fußbodenheizung Wärmepumpe {bezirk}",
      // Kosten-Keywords
      "Fußbodenheizung Spülung Kosten {bezirk}",
      "Fußbodenheizung Wartung Kosten {bezirk}",
      // Technische Keywords
      "Fußbodenheizung hydraulischer Abgleich {bezirk}",
    ],
    relatedServices: [
      "hydraulischer-abgleich",
      "wartung-heizung",
      "waermepumpe",
    ],
    priceRange: {
      min: 400,
      max: 1500,
      unit: "€",
    },
  },
  {
    id: "heizlastberechnung",
    slug: "heizlastberechnung",
    name: "Heizlastberechnung",
    shortName: "Heizlast",
    icon: Calculator,
    priority: 3,
    titleTemplate: "Heizlastberechnung {bezirk} | DIN EN 12831 | Förderfähig",
    metaDescriptionTemplate:
      "Heizlastberechnung in {bezirk} nach DIN EN 12831 ✓ Basis für optimale Heizung ✓ Förderfähig ✓ Vom Fachbetrieb ✓ Festpreis. Jetzt Berechnung anfragen!",
    h1Template: "Heizlastberechnung in {bezirk}: DIN EN 12831 & Förderung",
    introTemplate:
      "Eine präzise Heizlastberechnung nach DIN EN 12831 ist die Grundlage für die optimale Dimensionierung Ihrer neuen Heizung in {bezirk}. Wir ermitteln den exakten Wärmebedarf Ihres Gebäudes und erstellen die förderfähige Dokumentation. So vermeiden Sie Überdimensionierung und sparen langfristig Kosten. Meist ist die Heizlastberechnung im Heizungsprojekt enthalten!",
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
      {
        questionTemplate: "Was ist DIN EN 12831?",
        answerTemplate:
          "DIN EN 12831 ist die europäische Norm für die Berechnung der Heizlast von Gebäuden. Sie stellt sicher, dass Ihre Heizung in {bezirk} korrekt dimensioniert wird – nicht zu groß und nicht zu klein. Wir führen alle Berechnungen nach dieser Norm durch.",
      },
      {
        questionTemplate: "Ist eine Heizlastberechnung für die Förderung in {bezirk} Pflicht?",
        answerTemplate:
          "Ja, für die Heizungsförderung in {bezirk} ist eine Heizlastberechnung nach DIN EN 12831 meist Voraussetzung. Wir erstellen die förderfähige Dokumentation und reichen sie für Sie ein.",
      },
      {
        questionTemplate: "Wie lange dauert eine Heizlastberechnung in {bezirk}?",
        answerTemplate:
          "Die Datenaufnahme vor Ort in {bezirk} dauert 1-2 Stunden. Die eigentliche Berechnung und Dokumentation erfolgt dann bei uns im Büro. In der Regel haben Sie das Ergebnis innerhalb einer Woche.",
      },
    ],
    keywordTemplates: [
      // Haupt-Keywords
      "Heizlastberechnung {bezirk}",
      "Heizlast berechnen {bezirk}",
      "Wärmebedarf berechnen {bezirk}",
      "DIN 12831 {bezirk}",
      "Heizungsauslegung {bezirk}",
      // Intent-Keywords
      "Heizlastberechnung durchführen lassen {bezirk}",
      "Heizlastberechnung Angebot {bezirk}",
      "Heizlastberechnung Fachbetrieb {bezirk}",
      // Long-Tail Keywords
      "Heizlastberechnung Wärmepumpe {bezirk}",
      "Heizlastberechnung Altbau {bezirk}",
      "Heizlastberechnung Einfamilienhaus {bezirk}",
      "Heizlastberechnung Förderung {bezirk}",
      // Kosten-Keywords
      "Heizlastberechnung Kosten {bezirk}",
      "Heizlastberechnung Preis {bezirk}",
      // Technische Keywords
      "Heizlast Einfamilienhaus {bezirk}",
      "Heizlast pro qm {bezirk}",
    ],
    relatedServices: [
      "waermepumpe",
      "hydraulischer-abgleich",
      "heizungsinstallateur",
    ],
    priceRange: {
      min: 200,
      max: 600,
      unit: "€",
    },
  },
  {
    id: "wartung-heizung",
    slug: "wartung-heizung",
    name: "Heizungswartung",
    shortName: "Wartung",
    icon: Wrench,
    priority: 3,
    titleTemplate: "Heizungswartung {bezirk} | Wärmepumpe, Gastherme & mehr",
    metaDescriptionTemplate:
      "Heizungswartung in {bezirk} ✓ Wärmepumpen ✓ Gasthermen ✓ Fußbodenheizung ✓ Wartungsvertrag ✓ Festpreise. Jetzt Wartungstermin in {bezirk} buchen!",
    h1Template: "Heizungswartung in {bezirk}: Alle Systeme, faire Preise",
    introTemplate:
      "Regelmäßige Wartung hält Ihre Heizung in {bezirk} effizient und zuverlässig. Wir warten Wärmepumpen (Vaillant, OVUM), Gasthermen und komplette Heizungsanlagen – mit oder ohne Wartungsvertrag. Mit einem Wartungsvertrag sichern Sie sich Festpreise und bevorzugte Termine. Buchen Sie jetzt Ihren Wartungstermin in {bezirk}!",
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
      {
        questionTemplate: "Warten Sie auch Wärmepumpen in {bezirk}?",
        answerTemplate:
          "Ja, als Vaillant und OVUM Partner sind wir spezialisiert auf Wärmepumpen-Wartung in {bezirk}. Die jährliche Wartung ist wichtig für die Effizienz und den Erhalt der Herstellergarantie.",
      },
      {
        questionTemplate: "Was beinhaltet ein Wartungsvertrag in {bezirk}?",
        answerTemplate:
          "Ein Wartungsvertrag in {bezirk} beinhaltet die jährliche Wartung zum Festpreis, bevorzugte Terminvergabe, und je nach Vertrag auch Rabatte auf Ersatzteile und Notdienst-Priorität.",
      },
      {
        questionTemplate: "Wann ist der beste Zeitpunkt für die Heizungswartung in {bezirk}?",
        answerTemplate:
          "Der beste Zeitpunkt für die Heizungswartung in {bezirk} ist im Sommer oder frühen Herbst – vor Beginn der Heizsaison. So ist Ihre Heizung rechtzeitig für den Winter fit.",
      },
    ],
    keywordTemplates: [
      // Haupt-Keywords
      "Heizungswartung {bezirk}",
      "Heizung warten {bezirk}",
      "Wartung Heizung {bezirk}",
      "Wärmepumpe Wartung {bezirk}",
      "Gastherme Wartung {bezirk}",
      // Intent-Keywords
      "Heizungswartung Termin {bezirk}",
      "Heizungswartung buchen {bezirk}",
      "Wartungsvertrag Heizung {bezirk}",
      // Long-Tail Keywords
      "Vaillant Wartung {bezirk}",
      "OVUM Wartung {bezirk}",
      "Heizung jährliche Wartung {bezirk}",
      "Heizung Wartung Kosten {bezirk}",
      // Service-Keywords
      "Heizung Inspektion {bezirk}",
      "Heizung Service {bezirk}",
      "Heizung Kundendienst {bezirk}",
    ],
    relatedServices: ["waermepumpe", "gastherme", "fussbodenheizung"],
    priceRange: {
      min: 150,
      max: 350,
      unit: "€",
    },
  },
  {
    id: "heizung-erneuern",
    slug: "heizung-erneuern",
    name: "Heizung erneuern",
    shortName: "Heizungstausch",
    icon: RefreshCw,
    priority: 2,
    titleTemplate: "Heizung erneuern {bezirk} | Austausch mit bis zu 70% Förderung",
    metaDescriptionTemplate:
      "Heizung in {bezirk} erneuern ✓ Wärmepumpe oder Brennwert ✓ Bis 70% Förderung ✓ Komplettservice ✓ Beratung. Jetzt alte Heizung in {bezirk} austauschen!",
    h1Template: "Heizung erneuern in {bezirk}: Austausch, Förderung & Beratung",
    introTemplate:
      "Sie möchten Ihre alte Heizung in {bezirk} erneuern? Der Wechsel zu einer modernen Wärmepumpe oder Brennwerttherme spart Energie und schont die Umwelt. Mit bis zu 70% Förderung ist der Umstieg jetzt besonders attraktiv! Wir begleiten Sie von der Beratung über den Förderantrag bis zur Installation – alles aus einer Hand.",
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
      {
        questionTemplate: "Welche Förderung gibt es für die Heizungserneuerung in {bezirk}?",
        answerTemplate:
          "Für die Heizungserneuerung in {bezirk} gibt es bis zu 70% Förderung durch BAFA/KfW – besonders beim Umstieg auf eine Wärmepumpe. Wir helfen Ihnen beim Antrag und stellen sicher, dass alle Voraussetzungen erfüllt sind.",
      },
      {
        questionTemplate: "Wie lange dauert der Heizungsaustausch in {bezirk}?",
        answerTemplate:
          "Der eigentliche Heizungsaustausch in {bezirk} dauert 2-5 Tage je nach System. Inklusive Planung, Förderantrag und Terminierung rechnen Sie mit 4-12 Wochen vom Erstkontakt bis zur fertigen Anlage.",
      },
      {
        questionTemplate: "Heizung erneuern: Wärmepumpe oder Gastherme in {bezirk}?",
        answerTemplate:
          "In {bezirk} empfehlen wir meist den Umstieg auf eine Wärmepumpe – wegen der hohen Förderung von bis zu 70% und der langfristigen Kostenersparnis. Bei bestimmten Gebäudetypen kann aber eine moderne Gastherme sinnvoller sein. Wir beraten Sie individuell.",
      },
      {
        questionTemplate: "Übernehmen Sie auch die Entsorgung der alten Heizung in {bezirk}?",
        answerTemplate:
          "Ja, bei der Heizungserneuerung in {bezirk} demontieren und entsorgen wir Ihre alte Anlage fachgerecht. Das ist im Komplettpaket enthalten. Sie müssen sich um nichts kümmern.",
      },
    ],
    keywordTemplates: [
      // Haupt-Keywords
      "Heizung erneuern {bezirk}",
      "Heizung austauschen {bezirk}",
      "Neue Heizung {bezirk}",
      "Heizungsmodernisierung {bezirk}",
      "Heizungstausch {bezirk}",
      // Intent-Keywords
      "Alte Heizung ersetzen {bezirk}",
      "Heizung erneuern lassen {bezirk}",
      "Heizung erneuern Beratung {bezirk}",
      "Heizung erneuern Angebot {bezirk}",
      // Förderungs-Keywords
      "Heizung erneuern Förderung {bezirk}",
      "Heizung erneuern BAFA {bezirk}",
      "Heizung erneuern KfW {bezirk}",
      // Long-Tail Keywords
      "Heizung erneuern Altbau {bezirk}",
      "Heizung erneuern Einfamilienhaus {bezirk}",
      "Heizung erneuern Kosten {bezirk}",
      // Vergleichs-Keywords
      "Heizung erneuern Wärmepumpe oder Gastherme {bezirk}",
      "Heizung erneuern welches System {bezirk}",
    ],
    relatedServices: [
      "waermepumpe",
      "gastherme",
      "heizlastberechnung",
      "hydraulischer-abgleich",
    ],
    priceRange: {
      min: 5000,
      max: 35000,
      unit: "€",
    },
    foerderung: {
      maxPercent: 70,
      info: "Bis zu 70% Förderung durch BAFA/KfW beim Umstieg auf Wärmepumpe",
    },
  },
  {
    id: "heizungsnotdienst",
    slug: "heizungsnotdienst",
    name: "Heizungsnotdienst",
    shortName: "Notdienst",
    icon: AlertTriangle,
    priority: 1,
    titleTemplate: "Heizungsnotdienst {bezirk} | Schnelle Hilfe bei Heizungsausfall",
    metaDescriptionTemplate:
      "Heizungsnotdienst in {bezirk} ✓ Schnelle Hilfe bei Heizungsausfall ✓ Wärmepumpe & Gastherme ✓ Erreichbar auch am Wochenende. Jetzt anrufen!",
    h1Template: "Heizungsnotdienst {bezirk}: Schnelle Hilfe bei Heizungsausfall",
    introTemplate:
      "Ihre Heizung in {bezirk} ist ausgefallen? Unser Heizungsnotdienst ist für Sie da – auch kurzfristig. Ob Wärmepumpe, Gastherme oder Fußbodenheizung – wir diagnostizieren das Problem schnell und beheben es, damit Sie nicht frieren müssen. Rufen Sie uns jetzt an!",
    benefits: [
      "Schnelle Reaktionszeit",
      "Erfahrene Techniker",
      "Alle Heizsysteme",
      "Transparente Preise",
      "Ersatzteilversorgung",
    ],
    features: [
      "Fehlerdiagnose",
      "Sofortreparatur",
      "Ersatzteilbeschaffung",
      "Provisorische Lösungen",
      "Folgetermin bei Bedarf",
      "Telefonische Beratung",
    ],
    faqTemplates: [
      {
        questionTemplate: "Was tun bei Heizungsausfall in {bezirk}?",
        answerTemplate:
          "Bei Heizungsausfall in {bezirk} rufen Sie uns zuerst an. Wir versuchen telefonisch zu helfen und schicken bei Bedarf schnellstmöglich einen Techniker. Prüfen Sie vorab: Ist Strom/Gas vorhanden? Ist der Thermostat eingestellt?",
      },
      {
        questionTemplate: "Was kostet der Heizungsnotdienst in {bezirk}?",
        answerTemplate:
          "Die Kosten für den Heizungsnotdienst in {bezirk} hängen von der Uhrzeit und dem Problem ab. Wir nennen Ihnen am Telefon einen Orientierungspreis. Die Anfahrt und Fehlerdiagnose werden transparent berechnet.",
      },
      {
        questionTemplate: "Reparieren Sie alle Heizungsmarken in {bezirk}?",
        answerTemplate:
          "Ja, unser Heizungsnotdienst in {bezirk} repariert alle gängigen Marken – Vaillant, Viessmann, Buderus, Wolf und mehr. Bei Wärmepumpen sind wir als Vaillant und OVUM Partner besonders spezialisiert.",
      },
      {
        questionTemplate: "Wie schnell sind Sie bei Heizungsausfall in {bezirk}?",
        answerTemplate:
          "Bei akutem Heizungsausfall in {bezirk} versuchen wir, noch am selben Tag zu kommen. Je nach Auslastung und Uhrzeit kann es einige Stunden dauern. Im Winter haben Notfälle Priorität.",
      },
      {
        questionTemplate: "Was wenn die Reparatur länger dauert in {bezirk}?",
        answerTemplate:
          "Wenn die Heizungsreparatur in {bezirk} länger dauert (z.B. weil Ersatzteile bestellt werden müssen), suchen wir nach provisorischen Lösungen. In dringenden Fällen können wir mobile Heizgeräte zur Überbrückung bereitstellen.",
      },
    ],
    keywordTemplates: [
      // Haupt-Keywords
      "Heizungsnotdienst {bezirk}",
      "Heizung Notdienst {bezirk}",
      "Heizung Notfall {bezirk}",
      "Heizungsausfall {bezirk}",
      "Heizung kaputt {bezirk}",
      // Intent-Keywords
      "Heizung reparieren schnell {bezirk}",
      "Heizung reparieren heute {bezirk}",
      "Heizung ausgefallen {bezirk}",
      "Heizung defekt {bezirk}",
      // Long-Tail Keywords
      "Heizung heizt nicht {bezirk}",
      "Heizung macht Geräusche {bezirk}",
      "Heizung verliert Druck {bezirk}",
      "Wärmepumpe Störung {bezirk}",
      "Gastherme Störung {bezirk}",
      // Service-Keywords
      "Heizung 24h Service {bezirk}",
      "Heizung Wochenende {bezirk}",
      "Heizung Sofort Hilfe {bezirk}",
    ],
    relatedServices: ["wartung-heizung", "waermepumpe", "gastherme"],
  },
];

export const getSEOServiceBySlug = (slug: string): SEOService | undefined => {
  return seoServices.find((service) => service.slug === slug);
};

export const getAllSEOServiceSlugs = (): string[] => {
  return seoServices.map((service) => service.slug);
};

// NEU: Hilfsfunktion für Preisinformation
export const getServicePriceInfo = (serviceId: string): string | null => {
  const service = seoServices.find((s) => s.id === serviceId);
  if (!service?.priceRange) return null;
  return `${service.priceRange.min.toLocaleString("de-DE")}${service.priceRange.unit} - ${service.priceRange.max.toLocaleString("de-DE")}${service.priceRange.unit}`;
};

// NEU: Hilfsfunktion für Förderungsinformation
export const getServiceFoerderungInfo = (serviceId: string): { maxPercent: number; info: string } | null => {
  const service = seoServices.find((s) => s.id === serviceId);
  return service?.foerderung || null;
};
