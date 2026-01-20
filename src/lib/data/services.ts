import {
  Flame,
  Wind,
  Thermometer,
  Settings,
  Calculator,
  Wrench,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  features: string[];
  benefits: string[];
  keywords: string[];
  image: string;
};

export const services: Service[] = [
  {
    id: "waermepumpe",
    slug: "waermepumpe",
    title: "Wärmepumpen-Installation",
    shortTitle: "Wärmepumpe",
    description:
      "Professionelle Installation von Vaillant und OVUM Premium Wärmepumpen für eine nachhaltige und effiziente Heizlösung.",
    longDescription:
      "Als zertifizierter Partner von Vaillant und OVUM installieren wir hochwertige Wärmepumpen, die optimal auf Ihre Bedürfnisse abgestimmt sind. Von der Beratung über die Planung bis zur fachgerechten Montage – wir begleiten Sie durch den gesamten Prozess. Bis zu 70% Förderung sind möglich – wir unterstützen Sie bei Förderanträgen und senken Sie Ihre Heizkosten nachhaltig.",
    icon: Wind,
    features: [
      "Luft-Wasser-Wärmepumpen",
      "Sole-Wasser-Wärmepumpen",
      "Vaillant aroTHERM plus",
      "OVUM Premium Wärmepumpen",
      "Hybridlösungen",
      "Hilfestellung bei Förderungen",
    ],
    benefits: [
      "Bis zu 70% Förderung möglich",
      "Bis zu 50% Energiekostenersparnis",
      "CO2-neutrales Heizen",
      "Wertsteigerung der Immobilie",
      "Unabhängig von Gaspreisen",
    ],
    keywords: [
      "Wärmepumpe Berlin",
      "Wärmepumpe installieren",
      "Vaillant Wärmepumpe",
      "OVUM Wärmepumpe",
      "Luft-Wasser-Wärmepumpe",
    ],
    image: "https://images.unsplash.com/photo-1599818820498-8959f6498776?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "vaillant",
    slug: "waermepumpe/vaillant",
    title: "Vaillant Wärmepumpen",
    shortTitle: "Vaillant",
    description:
      "Als offizieller Vaillant Partner installieren wir die bewährten aroTHERM plus Wärmepumpen für maximale Effizienz.",
    longDescription:
      "Vaillant steht für deutsche Qualität und Innovation. Die aroTHERM plus Serie überzeugt durch höchste Effizienz, flüsterleisen Betrieb und intelligente Vernetzung. Als zertifizierter Vaillant Partner garantieren wir Ihnen eine fachgerechte Installation und umfassenden Service.",
    icon: Wind,
    features: [
      "aroTHERM plus Serie",
      "Natürliches Kältemittel R290",
      "Vorlauftemperaturen bis 75°C",
      "Flüsterleiser Betrieb",
      "myVAILLANT App-Steuerung",
      "5 Jahre Garantie",
    ],
    benefits: [
      "Deutsche Markenqualität",
      "Höchste Effizienzklasse A+++",
      "Smart Home kompatibel",
      "Bewährte Technik seit 1874",
      "Deutschlandweites Servicenetz",
    ],
    keywords: [
      "Vaillant Wärmepumpe Berlin",
      "aroTHERM plus Installation",
      "Vaillant Partner Berlin",
    ],
    image: "https://images.unsplash.com/photo-1635334235472-8820986161b4?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "ovum",
    slug: "waermepumpe/ovum",
    title: "OVUM Premium Wärmepumpen",
    shortTitle: "OVUM",
    description:
      "OVUM Premium Wärmepumpen aus Österreich – kompakt, effizient und besonders leise für anspruchsvolle Kunden.",
    longDescription:
      "OVUM steht für österreichische Ingenieurskunst und Premium-Qualität. Die kompakten Wärmepumpen überzeugen durch höchste Effizienz, minimale Geräuschemission und innovative Technik. Ideal für Neubauten und anspruchsvolle Sanierungen.",
    icon: Wind,
    features: [
      "Kompakte Bauweise",
      "Extrem leise < 35 dB(A)",
      "Hohe Vorlauftemperaturen",
      "Integrierter Pufferspeicher",
      "Made in Austria",
      "Premium-Qualität",
    ],
    benefits: [
      "Platzsparende Installation",
      "Ideal für Wohngebiete",
      "Höchste Verarbeitungsqualität",
      "Lange Lebensdauer",
      "Persönlicher Herstellersupport",
    ],
    keywords: [
      "OVUM Wärmepumpe Berlin",
      "OVUM Premium Installation",
      "Premium Wärmepumpe kaufen",
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "gastherme",
    slug: "gastherme",
    title: "Gasthermen-Service",
    shortTitle: "Gasthermen",
    description:
      "Professioneller Austausch, Wartung und Reparatur von Gasthermen – schnell, zuverlässig und fachgerecht.",
    longDescription:
      "Ob Austausch einer alten Gastherme oder regelmäßige Wartung – wir sorgen für effizientes und sicheres Heizen. Mit modernen Brennwertgeräten sparen Sie bis zu 30% Energie. Wir beraten Sie auch gerne zum Umstieg auf eine Wärmepumpe.",
    icon: Flame,
    features: [
      "Gasthermen-Austausch",
      "Brennwertgeräte-Installation",
      "Regelmäßige Wartung",
      "Störungsbehebung",
      "Abgasmessung",
      "Energieberatung",
    ],
    benefits: [
      "Schnelle Terminvergabe",
      "Festpreisangebote",
      "Alle Marken",
      "Umstiegsberatung Wärmepumpe",
    ],
    keywords: [
      "Gastherme austauschen Berlin",
      "Gasthermen Service",
      "Gastherme Wartung",
      "Brennwerttherme Installation",
    ],
    image: "https://images.unsplash.com/photo-1629806498967-d864197c366e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "fussbodenheizung",
    slug: "fussbodenheizung",
    title: "Fußbodenheizung",
    shortTitle: "Fußbodenheizung",
    description:
      "Wartung, Reinigung und Spülung von Fußbodenheizungen für optimale Wärmeverteilung und Energieeffizienz.",
    longDescription:
      "Eine verschlammte Fußbodenheizung verliert bis zu 50% ihrer Heizleistung. Mit unserer professionellen Spülung und Reinigung stellen wir die volle Effizienz wieder her. Wir entfernen Ablagerungen, Korrosionsrückstände und Biofilm schonend und gründlich.",
    icon: Thermometer,
    features: [
      "Heizkreisspülung",
      "Schlammentsorgung",
      "Korrosionsschutz",
      "Hydraulischer Abgleich",
      "Durchflussmessung",
      "Systemoptimierung",
    ],
    benefits: [
      "Bis zu 50% bessere Heizleistung",
      "Niedrigere Heizkosten",
      "Gleichmäßige Wärmeverteilung",
      "Verlängerte Lebensdauer",
      "Keine Bauarbeiten nötig",
    ],
    keywords: [
      "Fußbodenheizung reinigen Berlin",
      "Fußbodenheizung Wartung",
      "Heizkreisspülung",
      "Fußbodenheizung Probleme",
    ],
    image: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "hydraulischer-abgleich",
    slug: "hydraulischer-abgleich",
    title: "Hydraulischer Abgleich",
    shortTitle: "Hydraulischer Abgleich",
    description:
      "Optimierung Ihrer Heizungsanlage durch fachgerechten hydraulischen Abgleich – gesetzlich vorgeschrieben und förderfähig.",
    longDescription:
      "Der hydraulische Abgleich sorgt dafür, dass alle Heizkörper optimal mit Wärme versorgt werden. Seit 2024 ist er bei vielen Förderungen Pflicht. Wir berechnen die optimalen Einstellungen und stellen Ihre Anlage so ein, dass Sie bis zu 15% Energie sparen.",
    icon: Settings,
    features: [
      "Bestandsaufnahme",
      "Wärmebedarfsberechnung",
      "Ventileinstellung",
      "Pumpenoptimierung",
      "Dokumentation für Förderung",
      "Verfahren A und B",
    ],
    benefits: [
      "Bis zu 15% Energieeinsparung",
      "Voraussetzung für Förderung",
      "Gleichmäßige Wärmeverteilung",
      "Keine Strömungsgeräusche",
      "Optimale Wärmepumpen-Effizienz",
    ],
    keywords: [
      "Hydraulischer Abgleich Berlin",
      "Hydraulischer Abgleich Pflicht",
      "Hydraulischer Abgleich Kosten",
      "Verfahren B",
    ],
    image: "https://images.unsplash.com/photo-1581093450065-2a2b45053074?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "heizlastberechnung",
    slug: "heizlastberechnung",
    title: "Heizlastberechnung",
    shortTitle: "Heizlastberechnung",
    description:
      "Präzise Heizlastberechnung nach DIN EN 12831 als Grundlage für die optimale Dimensionierung Ihrer neuen Heizung.",
    longDescription:
      "Eine korrekte Heizlastberechnung ist die Basis für jede Heizungsplanung. Wir ermitteln den exakten Wärmebedarf Ihres Gebäudes nach DIN EN 12831 und dimensionieren Ihre neue Heizung optimal. So vermeiden Sie überdimensionierte Anlagen und sparen langfristig Kosten.",
    icon: Calculator,
    features: [
      "Berechnung nach DIN EN 12831",
      "Raumweise Heizlastermittlung",
      "U-Wert Bestimmung",
      "Berücksichtigung Lüftungsverluste",
      "Förderfähige Dokumentation",
      "Auslegungsempfehlung",
    ],
    benefits: [
      "Optimale Anlagendimensionierung",
      "Vermeidung von Überdimensionierung",
      "Förderfähige Dokumentation",
      "Basis für Hydraulischen Abgleich",
      "Langfristige Kosteneinsparung",
    ],
    keywords: [
      "Heizlastberechnung Berlin",
      "Heizlast berechnen lassen",
      "DIN EN 12831",
      "Wärmebedarf ermitteln",
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "wartung",
    slug: "wartung",
    title: "Wartung & Service",
    shortTitle: "Wartung",
    description:
      "Regelmäßige Wartung Ihrer Heizungsanlage für optimale Effizienz, Sicherheit und lange Lebensdauer.",
    longDescription:
      "Eine regelmäßig gewartete Heizung arbeitet effizienter, sicherer und hält länger. Wir bieten Wartungsverträge für Wärmepumpen, Gasthermen und komplette Heizungsanlagen. Mit unserer jährlichen Inspektion vermeiden Sie teure Reparaturen und hohe Energiekosten.",
    icon: Wrench,
    features: [
      "Jährliche Inspektion",
      "Brennerwartung",
      "Wärmepumpen-Check",
      "Sicherheitsprüfung",
      "Effizienzoptimierung",
      "Wartungsvertrag",
    ],
    benefits: [
      "Längere Lebensdauer",
      "Optimale Effizienz",
      "Herstellergarantie erhalten",
      "Planbare Kosten",
      "Bevorzugte Terminvergabe",
    ],
    keywords: [
      "Heizungswartung Berlin",
      "Wärmepumpe Wartung",
      "Gastherme Wartung",
      "Heizung Service",
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "heizung-erneuern",
    slug: "heizung-erneuern",
    title: "Heizung erneuern",
    shortTitle: "Heizung erneuern",
    description:
      "Komplettservice für den Heizungsaustausch: Von der Beratung über Förderung bis zur Installation – alles aus einer Hand.",
    longDescription:
      "Sie möchten Ihre alte Heizung erneuern? Der Wechsel zu einer modernen Wärmepumpe oder Brennwerttherme spart Energie und schont die Umwelt. Mit bis zu 70% Förderung ist der Umstieg jetzt besonders attraktiv! Wir begleiten Sie von der Beratung bis zur Installation und geben Ihnen Hilfestellung bei Förderanträgen – alles aus einer Hand.",
    icon: RefreshCw,
    features: [
      "Kostenlose Erstberatung",
      "Heizlastberechnung",
      "Hilfestellung bei Förderanträgen",
      "Wärmepumpe oder Brennwerttherme",
      "Komplette Installation",
      "Einweisung & Übergabe",
    ],
    benefits: [
      "Bis zu 70% Förderung möglich",
      "Bis zu 50% Energieeinsparung",
      "Alles aus einer Hand",
      "Hilfestellung bei Förderungen",
      "Planbare Kosten",
    ],
    keywords: [
      "Heizung erneuern Berlin",
      "Heizungsaustausch",
      "Heizung erneuern lassen",
      "Alte Heizung austauschen",
      "Heizung erneuern Förderung",
    ],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug);
};

export const getMainServices = (): Service[] => {
  return services.filter(
    (service) => !service.slug.includes("/")
  );
};
