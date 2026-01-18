export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category: "waermepumpe" | "gastherme" | "foerderung" | "service" | "allgemein";
};

export const faqItems: FAQItem[] = [
  // Wärmepumpe FAQs
  {
    id: "wp-1",
    question: "Wie viel kostet eine Wärmepumpe inklusive Installation?",
    answer:
      "Die Kosten für eine Wärmepumpe variieren je nach Typ und Gebäude zwischen 15.000 € und 35.000 €. Durch staatliche Förderungen können Sie bis zu 70% der Kosten zurückerhalten. Wir erstellen Ihnen gerne ein individuelles Angebot mit Förderberechnung.",
    category: "waermepumpe",
  },
  {
    id: "wp-2",
    question: "Ist mein Altbau für eine Wärmepumpe geeignet?",
    answer:
      "Viele Altbauten sind durchaus für Wärmepumpen geeignet, besonders wenn bereits eine Fußbodenheizung vorhanden ist oder größere Heizkörper verbaut sind. Wir führen eine Heizlastberechnung durch und prüfen, welche Lösung für Ihr Gebäude optimal ist.",
    category: "waermepumpe",
  },
  {
    id: "wp-3",
    question: "Wie laut ist eine Wärmepumpe?",
    answer:
      "Moderne Wärmepumpen wie die Vaillant aroTHERM plus oder OVUM Premium arbeiten mit unter 40 dB(A) – vergleichbar mit einem leisen Kühlschrank. OVUM Wärmepumpen sind sogar noch leiser mit unter 35 dB(A). Die Aufstellung erfolgt so, dass Nachbarn nicht gestört werden.",
    category: "waermepumpe",
  },
  {
    id: "wp-4",
    question: "Vaillant oder OVUM – welche Wärmepumpe ist besser?",
    answer:
      "Beide Hersteller bieten exzellente Qualität. Vaillant überzeugt durch das große Servicenetz und bewährte Technik. OVUM punktet mit besonders leisem Betrieb und kompakter Bauweise. Wir beraten Sie, welches System zu Ihren Anforderungen passt.",
    category: "waermepumpe",
  },
  // Förderung FAQs
  {
    id: "fo-1",
    question: "Welche Förderung gibt es für Wärmepumpen in Berlin?",
    answer:
      "Aktuell können Sie bis zu 70% Förderung erhalten: 30% Grundförderung + 20% Klimageschwindigkeitsbonus + 20% Einkommensbonus (bei Haushaltseinkommen unter 40.000€). Wir unterstützen Sie bei der Antragstellung und erstellen alle nötigen Unterlagen.",
    category: "foerderung",
  },
  {
    id: "fo-2",
    question: "Ist der hydraulische Abgleich Pflicht für die Förderung?",
    answer:
      "Ja, seit 2024 ist der hydraulische Abgleich (Verfahren B) Voraussetzung für die Heizungsförderung. Wir führen die Berechnung und Dokumentation nach den aktuellen Vorgaben durch, sodass Ihr Förderantrag problemlos genehmigt wird.",
    category: "foerderung",
  },
  // Gastherme FAQs
  {
    id: "gt-1",
    question: "Sollte ich meine Gastherme durch eine Wärmepumpe ersetzen?",
    answer:
      "Der Umstieg auf eine Wärmepumpe lohnt sich langfristig durch niedrigere Betriebskosten und attraktive Förderungen. Wenn Ihre Gastherme noch gut funktioniert, kann auch eine Modernisierung mit einem Brennwertgerät sinnvoll sein. Wir beraten Sie zu beiden Optionen.",
    category: "gastherme",
  },
  {
    id: "gt-2",
    question: "Wie oft sollte eine Gastherme gewartet werden?",
    answer:
      "Wir empfehlen eine jährliche Wartung Ihrer Gastherme. Dies erhält die Effizienz, verlängert die Lebensdauer und ist oft Voraussetzung für die Herstellergarantie. Zudem ist die regelmäßige Abgasmessung gesetzlich vorgeschrieben.",
    category: "gastherme",
  },
  // Service FAQs
  {
    id: "sv-1",
    question: "Wie schnell können Sie einen Termin anbieten?",
    answer:
      "Für Beratungsgespräche und kleinere Arbeiten können wir meist innerhalb einer Woche einen Termin anbieten. Größere Installationen planen wir gemeinsam mit Ihnen – typischerweise mit 2-4 Wochen Vorlauf. Im Notfall sind wir auch kurzfristig für Sie da.",
    category: "service",
  },
  {
    id: "sv-2",
    question: "In welchen Gebieten sind Sie tätig?",
    answer:
      "Unser Einzugsgebiet umfasst ganz Berlin Süd (Schöneberg, Steglitz, Zehlendorf, Tempelhof, Friedenau, Wilmersdorf) sowie Potsdam und Umgebung. Unser Firmensitz ist in Berlin-Schöneberg, von wo aus wir schnell bei Ihnen sind.",
    category: "service",
  },
  // Allgemein FAQs
  {
    id: "al-1",
    question: "Bieten Sie auch Finanzierung an?",
    answer:
      "Ja, wir arbeiten mit verschiedenen Finanzierungspartnern zusammen. Zudem können Sie die KfW-Ergänzungsfinanzierung für den Eigenanteil nutzen. Wir beraten Sie gerne zu den verschiedenen Möglichkeiten.",
    category: "allgemein",
  },
  {
    id: "al-2",
    question: "Wie läuft die Zusammenarbeit ab?",
    answer:
      "1. Kostenlose Erstberatung vor Ort, 2. Individuelle Heizlastberechnung und Angebot, 3. Förderantrag gemeinsam stellen, 4. Terminierte Installation durch unser Fachteam, 5. Einweisung und laufender Service. Wir begleiten Sie durch den gesamten Prozess.",
    category: "allgemein",
  },
];

export const getFAQsByCategory = (category: FAQItem["category"]): FAQItem[] => {
  return faqItems.filter((faq) => faq.category === category);
};

export const getTopFAQs = (count: number = 5): FAQItem[] => {
  return faqItems.slice(0, count);
};
