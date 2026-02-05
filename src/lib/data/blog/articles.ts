export type BlogArticle = {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  lastUpdated: string;
  readingTime: number;
  category: string;
  tags: string[];
  keywords: string[];
  featuredImage: string;
  featuredImageAlt: string;
  relatedArticles: string[];
  relatedServices: string[];
};

export const blogArticles: BlogArticle[] = [
  {
    id: "waermepumpe-altbau",
    slug: "waermepumpe-altbau-ohne-fussbodenheizung",
    title: "Wärmepumpe im Altbau – Funktioniert das wirklich?",
    metaTitle: "Wärmepumpe im Altbau ohne Fußbodenheizung | So geht's ✓",
    metaDescription:
      "Funktioniert eine Wärmepumpe im Altbau? ✓ Ohne Fußbodenheizung ✓ Kosten & Förderung ✓ Praxistipps vom Berliner Fachbetrieb. Jetzt informieren!",
    excerpt:
      "Sie besitzen einen Altbau und fragen sich, ob eine Wärmepumpe funktioniert – vielleicht sogar ohne Fußbodenheizung? Die gute Nachricht: In den meisten Fällen ja!",
    author: "Mannhold Haustechnik",
    publishDate: "2025-09-12",
    lastUpdated: "2025-09-28",
    readingTime: 8,
    category: "Wärmepumpen",
    tags: ["Wärmepumpe", "Altbau", "Fußbodenheizung", "Heizungsmodernisierung"],
    keywords: [
      "wärmepumpe altbau",
      "wärmepumpe ohne fußbodenheizung",
      "wärmepumpe altbau kosten",
      "luftwärmepumpe altbau",
    ],
    // Bild: Modernes Haus / Renovierung / Architektur
    featuredImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
    featuredImageAlt: "Modernes Wohnhaus, geeignet für Wärmepumpen",
    relatedArticles: ["foerderung-waermepumpe-2026", "gasheizung-vs-waermepumpe"],
    relatedServices: ["waermepumpe", "heizlastberechnung"],
    content: `## Das Wichtigste in Kürze

- ✅ Wärmepumpen funktionieren auch im Altbau – oft besser als gedacht
- ✅ Fußbodenheizung ist NICHT zwingend erforderlich
- ✅ Moderne Niedertemperatur-Heizkörper sind eine Alternative
- ✅ Die Heizlastberechnung zeigt, ob Ihr Haus geeignet ist
- ✅ Förderung bis zu 70% macht den Umstieg attraktiv

## Mythos #1: "Im Altbau funktioniert keine Wärmepumpe"

Diesen Satz hören wir fast täglich – und er stimmt so pauschal nicht. Die entscheidende Frage ist nicht das Baujahr, sondern:

1. **Wie hoch ist der Wärmebedarf?** (Heizlastberechnung)
2. **Welche Vorlauftemperatur braucht das System?**
3. **Wie gut ist die Dämmung?**

Ein sanierter Altbau aus den 1960ern kann bessere Werte haben als ein unsanierter Neubau aus den 1990ern.

## Brauche ich eine Fußbodenheizung?

**Nein, nicht unbedingt.** Die Fußbodenheizung ist ideal, weil sie mit niedrigen Vorlauftemperaturen (30-35°C) arbeitet. Aber es gibt Alternativen:

### Alternative 1: Niedertemperatur-Heizkörper

Moderne Heizkörper mit großer Oberfläche arbeiten effizient mit 45-50°C Vorlauf. Oft reicht der Austausch weniger kritischer Heizkörper.

### Alternative 2: Hochtemperatur-Wärmepumpen

Die neue Generation von Wärmepumpen (z.B. Vaillant aroTHERM plus) erreicht bis zu 75°C Vorlauf – perfekt für Altbau-Heizkörper.

### Alternative 3: Hybridlösung

Wärmepumpe + Gastherme als Backup für sehr kalte Tage. Die Wärmepumpe übernimmt 80-90% der Heizlast.

## Kosten im Altbau: Was kommt auf Sie zu?

| Position | Kosten (ca.) |
|----------|-------------|
| Wärmepumpe (Luft-Wasser) | 20.000 - 28.000 € |
| Installation & Verrohrung | 4.000 - 8.000 € |
| Ggf. neue Heizkörper | 2.000 - 5.000 € |
| Hydraulischer Abgleich | 600 - 1.200 € |
| **Gesamt vor Förderung** | **26.600 - 41.200 €** |
| **Nach 70% Förderung** | **7.980 - 12.360 €** |

## Praxisbeispiel: Altbau in Berlin-Steglitz

**Objekt:** Reihenhaus Baujahr 1965, 140 m², teilsaniert  
**Alte Heizung:** Gasbrennwertkessel (22 Jahre alt)  
**Neue Heizung:** Vaillant aroTHERM plus 10 kW  

**Ergebnis nach 1 Jahr:**
- Heizkosten vorher (Gas): 2.800 €/Jahr
- Heizkosten nachher (Strom): 1.400 €/Jahr
- **Ersparnis: 1.400 €/Jahr**

Bei Investitionskosten von ca. 8.000 - 12.000 € (nach Förderung) amortisiert sich die Anlage in unter 6 Jahren.

## So prüfen wir, ob Ihr Altbau geeignet ist

1. **Kostenlose Erstberatung** – Wir besprechen Ihre Situation
2. **Vor-Ort-Termin** – Aufnahme der Gebäudedaten
3. **Heizlastberechnung nach DIN 12831** – Exakte Bedarfsermittlung
4. **Angebotserstellung** – Transparent mit allen Kosten und Förderung
5. **Förderantrag** – Wir geben Ihnen Hilfestellung beim Antrag

## Fazit: Altbau und Wärmepumpe – es geht!

Die pauschale Aussage "Im Altbau funktioniert keine Wärmepumpe" ist überholt. Mit der richtigen Planung, einer Heizlastberechnung und ggf. kleineren Anpassungen am System ist der Umstieg in den meisten Fällen möglich – und wirtschaftlich sinnvoll.`,
  },
  {
    id: "foerderung-waermepumpe-2026",
    slug: "foerderung-waermepumpe-2026-kfw-bafa",
    title: "KfW & BAFA Förderung 2026: So bekommst du bis zu 70% Zuschuss",
    metaTitle: "Förderung Wärmepumpe 2026 | Bis 70% KfW & BAFA Zuschuss",
    metaDescription:
      "Wärmepumpen-Förderung 2026: ✓ Bis 70% Zuschuss ✓ KfW & BAFA ✓ Schritt-für-Schritt Anleitung ✓ Rechenbeispiel. Jetzt maximale Förderung sichern!",
    excerpt:
      "Die Förderung für den Heizungstausch ist 2026 so attraktiv wie nie. Bis zu 70% der Kosten übernimmt der Staat – wenn du die Regeln kennst.",
    author: "Mannhold Haustechnik",
    publishDate: "2025-10-05",
    lastUpdated: "2025-11-10",
    readingTime: 10,
    category: "Förderung",
    tags: ["Förderung", "KfW", "BAFA", "Wärmepumpe", "Zuschuss"],
    keywords: [
      "förderung wärmepumpe 2026",
      "kfw förderung heizung",
      "bafa zuschuss wärmepumpe",
      "heizungsförderung beantragen",
    ],
    // Bild: Beratung / Dokumente / Planung
    featuredImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
    featuredImageAlt: "Beratungsgespräch zur Heizungsförderung",
    relatedArticles: ["waermepumpe-altbau", "heizungstausch-geg-2026"],
    relatedServices: ["waermepumpe", "heizung-erneuern"],
    content: `## Die Förderstruktur 2026 im Überblick

| Förderkomponente | Zuschuss | Bedingung |
|------------------|----------|-----------|
| **Grundförderung** | 30% | Einbau einer Wärmepumpe |
| **Klimageschwindigkeitsbonus** | 20% | Austausch funktionierende Gas-/Ölheizung |
| **Einkommensbonus** | 30% | Haushaltseinkommen < 40.000 €/Jahr |
| **Effizienzbonus** | 5% | Natürliches Kältemittel (R290) |
| **Maximum** | **70%** | Kumulierbar bis 70% |

**Wichtig:** Die maximale Fördersumme beträgt 30.000 € für das erste Wohngebäude. Bei 70% Förderung sind das bis zu 21.000 € Zuschuss!

## Schritt-für-Schritt: So beantragst du die Förderung

### Schritt 1: Fachbetrieb beauftragen (VORHER!)

⚠️ **Wichtig:** Der Antrag muss VOR Beauftragung gestellt werden. Wir als Fachbetrieb erstellen einen Kostenvoranschlag und geben Ihnen Hilfestellung beim Antrag.

### Schritt 2: Online-Antrag bei der KfW

1. Registrierung im KfW-Portal
2. Antrag "Heizungsförderung für Privatpersonen (458)" auswählen
3. Kostenvoranschlag hochladen
4. Einkommensnachweise (für Einkommensbonus)

### Schritt 3: Zuwendungsbescheid abwarten

Die Bearbeitungszeit beträgt aktuell 4-8 Wochen. Erst nach Erhalt darfst du beauftragen!

### Schritt 4: Installation durchführen

Jetzt beauftragst du uns offiziell und wir installieren deine neue Wärmepumpe.

### Schritt 5: Verwendungsnachweis einreichen

Nach Abschluss lädst du die Rechnung und den Nachweis (BzA) im Portal hoch.

### Schritt 6: Auszahlung

Der Zuschuss wird auf dein Konto überwiesen – meist innerhalb von 4 Wochen.

## Praxisbeispiel: Familie Müller aus Berlin-Tempelhof

**Ausgangssituation:**
- Einfamilienhaus, 160 m²
- Alte Gastherme (18 Jahre)
- Haushaltseinkommen: 65.000 €/Jahr

**Neue Heizung:**
- Vaillant aroTHERM plus (R290 Kältemittel)
- Inklusive Hydraulischer Abgleich
- Gesamtkosten: 28.000 €

**Förderberechnung:**

| Komponente | Prozent | Betrag |
|------------|---------|--------|
| Grundförderung | 30% | 8.400 € |
| Klimageschwindigkeitsbonus | 20% | 5.600 € |
| Effizienzbonus (R290) | 5% | 1.400 € |
| **Gesamt** | **55%** | **15.400 €** |

**Eigenanteil Familie Müller: 12.600 €**

## Häufige Fehler vermeiden

❌ **Fehler 1:** Auftrag erteilen VOR Antragstellung  
→ Förderfähigkeit verloren!

❌ **Fehler 2:** Einkommensbonus vergessen  
→ Bis zu 30% verschenkt!

❌ **Fehler 3:** Alte Heizung nicht korrekt dokumentiert  
→ Klimabonus abgelehnt!

❌ **Fehler 4:** Falschen Antragszeitraum wählen  
→ Budget ausgeschöpft!

## Wir geben Ihnen Hilfestellung beim Antrag

Bei Mannhold Haustechnik begleiten wir Sie durch den gesamten Prozess:

✅ Kostenvoranschlag für Ihren Antrag  
✅ Beratung zur optimalen Förderkombination  
✅ Hilfestellung bei der Antragstellung  
✅ Erstellung aller Nachweise (BzA)`,
  },
  {
    id: "hydraulischer-abgleich-pflicht",
    slug: "hydraulischer-abgleich-pflicht-kosten-2026",
    title: "Hydraulischer Abgleich: Pflicht, Kosten & warum er sich lohnt",
    metaTitle: "Hydraulischer Abgleich Pflicht 2026 | Kosten & Förderung",
    metaDescription:
      "Hydraulischer Abgleich 2026: ✓ Wann Pflicht? ✓ Kosten 400-1.500€ ✓ Bis 15% Energie sparen ✓ Förderfähig. Alle Infos vom Fachbetrieb!",
    excerpt:
      "Der hydraulische Abgleich ist seit 2024 Pflicht für die Heizungsförderung – aber was genau passiert dabei? Und lohnt sich das auch ohne Förderung?",
    author: "Mannhold Haustechnik",
    publishDate: "2025-10-22",
    lastUpdated: "2025-11-05",
    readingTime: 7,
    category: "Heizungsoptimierung",
    tags: ["Hydraulischer Abgleich", "Heizungsoptimierung", "Energiesparen", "Förderung"],
    keywords: [
      "hydraulischer abgleich pflicht",
      "hydraulischer abgleich kosten",
      "hydraulischer abgleich förderung",
      "verfahren b hydraulischer abgleich",
    ],
    // Bild: Techniker bei der Arbeit / Heizkörperventil
    featuredImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&q=80&w=1200",
    featuredImageAlt: "Fachmann beim Einstellen eines Heizkörperventils",
    relatedArticles: ["foerderung-waermepumpe-2026", "waermepumpe-altbau"],
    relatedServices: ["hydraulischer-abgleich", "heizlastberechnung"],
    content: `## Was ist ein hydraulischer Abgleich?

Stellen Sie sich Ihr Heizsystem wie ein Wasserverteilungsnetz vor: Ohne Regulierung bekommen die Heizkörper nahe am Kessel zu viel Wasser, die entfernten zu wenig. Das Ergebnis:

- 🔥 Überhitzte Räume in Kesselnähe
- ❄️ Kalte Räume am Ende der Leitung
- 🔊 Strömungsgeräusche in den Leitungen
- 💸 Unnötig hohe Heizkosten

Der hydraulische Abgleich sorgt dafür, dass jeder Heizkörper genau die richtige Wassermenge bekommt.

## Ist der hydraulische Abgleich Pflicht?

**Ja, in bestimmten Fällen:**

| Situation | Pflicht? |
|-----------|----------|
| Heizungsförderung beantragen | ✅ Ja (Verfahren B) |
| Gasheizung > 10 Wohneinheiten | ✅ Ja (seit 2023) |
| Neubau | ✅ Ja (EnEV/GEG) |
| Bestandsheizung ohne Förderung | ❌ Nicht Pflicht, aber sinnvoll |

## Verfahren A vs. Verfahren B

| | Verfahren A | Verfahren B |
|--|-------------|-------------|
| **Aufwand** | Gering | Höher |
| **Genauigkeit** | Schätzwerte | Exakte Berechnung |
| **Förderfähig** | ❌ Nein | ✅ Ja |
| **Kosten** | 300-600 € | 600-1.500 € |
| **Empfohlen für** | Ältere Anlagen ohne Förderung | Neue Heizung mit Förderung |

**Für die Förderung ist Verfahren B zwingend erforderlich!**

## Was kostet der hydraulische Abgleich?

| Objektgröße | Kosten (Verfahren B) |
|-------------|---------------------|
| Wohnung (bis 80 m²) | 400 - 700 € |
| Einfamilienhaus | 600 - 1.200 € |
| Mehrfamilienhaus (6 WE) | 1.500 - 2.500 € |
| Großes MFH (12+ WE) | 2.500 - 4.000 € |

## So läuft der hydraulische Abgleich ab

### 1. Datenaufnahme (vor Ort)

- Alle Heizkörper werden vermessen
- Raumgrößen und Fenster erfasst
- Rohrleitungsverläufe dokumentiert

### 2. Berechnung (im Büro)

- Heizlast pro Raum nach DIN EN 12831
- Erforderliche Wassermenge pro Heizkörper
- Pumpenleistung und Ventileinstellungen

### 3. Einstellung (vor Ort)

- Thermostatventile voreingestellt
- Pumpe optimiert (oft gedrosselt!)
- System gespült

### 4. Dokumentation

- Protokoll für Förderantrag
- Einstellwerte für spätere Wartung

## Einsparpotenzial: Lohnt sich das?

**Typische Einsparungen:**

| Ausgangssituation | Einsparung |
|-------------------|------------|
| Ältere Heizung, nie abgeglichen | 10-15% |
| Jüngere Heizung, nur Verfahren A | 5-8% |
| Wärmepumpe (Effizienzsteigerung) | 8-12% |

**Rechenbeispiel:**
- Heizkosten vorher: 2.000 €/Jahr
- Einsparung: 12% = 240 €/Jahr
- Kosten Abgleich: 800 €
- **Amortisation: 3,3 Jahre**

## Fazit

Der hydraulische Abgleich ist keine bürokratische Pflichtübung, sondern eine sinnvolle Investition. Gerade bei neuen Wärmepumpen ist er essentiell für die Effizienz – und für die Förderung sowieso Pflicht.`,
  },
  {
    id: "gasheizung-vs-waermepumpe",
    slug: "gasheizung-vs-waermepumpe-kostenvergleich",
    title: "Gasheizung vs. Wärmepumpe: Der ehrliche Kostenvergleich 2026",
    metaTitle: "Gasheizung vs. Wärmepumpe 2026 | Ehrlicher Kostenvergleich",
    metaDescription:
      "Gasheizung oder Wärmepumpe? ✓ Anschaffungskosten ✓ Betriebskosten ✓ CO2-Abgabe ✓ Förderung. Unser ehrlicher Vergleich hilft bei der Entscheidung!",
    excerpt:
      "Soll ich meine Gasheizung behalten oder auf Wärmepumpe umsteigen? Diese Frage beschäftigt aktuell tausende Hausbesitzer. Wir machen den ehrlichen Vergleich.",
    author: "Mannhold Haustechnik",
    publishDate: "2025-11-08",
    lastUpdated: "2025-12-01",
    readingTime: 9,
    category: "Vergleich",
    tags: ["Gasheizung", "Wärmepumpe", "Kostenvergleich", "Heizungstausch"],
    keywords: [
      "gasheizung oder wärmepumpe",
      "wärmepumpe kosten vergleich gas",
      "heizung austauschen was lohnt sich",
      "betriebskosten wärmepumpe vs gas",
    ],
    featuredImage: "/images/gasheizung-waermepumpe-kostenvergleich.png",
    featuredImageAlt: "Vergleich Gasheizung und Wärmepumpe – Kostenvergleich für Hausbesitzer",
    relatedArticles: ["waermepumpe-altbau", "heizungstausch-geg-2026"],
    relatedServices: ["waermepumpe", "gastherme", "heizung-erneuern"],
    content: `## Die nackte Wahrheit: Anschaffungskosten

| Kriterium | Gasheizung | Wärmepumpe |
|-----------|------------|------------|
| Gerät | 4.000 - 8.000 € | 20.000 - 28.000 € |
| Installation | 2.000 - 4.000 € | 4.000 - 8.000 € |
| Schornstein/Außengerät | 500 - 1.500 € | 0 - 2.000 € |
| **Gesamt** | **6.500 - 13.500 €** | **24.000 - 38.000 €** |
| **Nach Förderung (55%)** | – | **10.800 - 17.100 €** |

**Erkenntnis:** Nach Förderung liegen beide Systeme oft gleichauf!

## Betriebskosten: Hier wird's spannend

**Annahmen für einen 150 m² Altbau:**
- Wärmebedarf: 20.000 kWh/Jahr
- Gaspreis: 0,12 €/kWh (inkl. CO2-Abgabe)
- Strompreis: 0,35 €/kWh
- Wärmepumpen-COP: 3,5 (Jahresarbeitszahl)

| Kriterium | Gasheizung | Wärmepumpe |
|-----------|------------|------------|
| Verbrauch | 22.000 kWh Gas | 5.700 kWh Strom |
| Kosten | **2.640 €/Jahr** | **1.995 €/Jahr** |
| Wartung | 150 €/Jahr | 100 €/Jahr |
| Schornsteinfeger | 80 €/Jahr | 0 € |
| **Gesamt/Jahr** | **2.870 €** | **2.095 €** |
| **Ersparnis/Jahr** | – | **775 €** |

## Die CO2-Abgabe: Der stille Kostentreiber

Was viele vergessen: Die CO2-Abgabe auf Gas steigt jährlich:

| Jahr | CO2-Preis | Aufschlag/kWh Gas |
|------|-----------|-------------------|
| 2024 | 45 €/t | 0,9 Cent |
| 2025 | 55 €/t | 1,1 Cent |
| 2026 | 65 €/t | 1,3 Cent |
| 2030 | ~150 €/t (Prognose) | 3,0 Cent |

**Bei 22.000 kWh Gasverbrauch:**
- 2024: +198 €/Jahr
- 2030: +660 €/Jahr (Prognose)

Die Wärmepumpe wird mit jedem Jahr wirtschaftlicher!

## Wann lohnt sich was?

### Wärmepumpe lohnt sich bei:

✅ Haus ist halbwegs gedämmt (ab 1980er Baujahr)  
✅ Sie können Förderung nutzen  
✅ Vorlauftemperatur < 55°C möglich  
✅ Platz für Außengerät vorhanden  
✅ Langfristig denken (10+ Jahre Horizont)

### Gasheizung kann Sinn machen bei:

✅ Sehr alter, unsanierter Altbau  
✅ Keine Förderung möglich  
✅ Gasanschluss vorhanden, Wärmepumpe baulich schwierig  
✅ Kurzfristiger Horizont (< 5 Jahre)

## Unser Fazit als Fachbetrieb

Wir installieren beides – Gas und Wärmepumpe. Unsere ehrliche Einschätzung:

> **In 8 von 10 Fällen ist die Wärmepumpe heute die bessere Wahl.** Die Kombination aus Förderung, sinkenden Betriebskosten und steigender CO2-Abgabe macht sie langfristig wirtschaftlicher – auch im Altbau.

Aber: Es gibt Fälle, wo eine neue Gastherme (noch) Sinn macht. Das klären wir gerne in einem persönlichen Gespräch.`,
  },
  {
    id: "heizungstausch-geg-2026",
    slug: "heizungstausch-geg-pflicht-2026",
    title: "Heizungstausch 2026: Was das GEG für Hausbesitzer bedeutet",
    metaTitle: "Heizungstausch Pflicht 2026 | GEG Heizungsgesetz erklärt",
    metaDescription:
      "GEG Heizungsgesetz 2026: ✓ Wann muss ich tauschen? ✓ Welche Heizung ist erlaubt? ✓ Übergangsfristen. Alle Fakten ohne Panik!",
    excerpt:
      "Das Gebäudeenergiegesetz (GEG) sorgt für Verunsicherung: Muss ich meine Heizung jetzt austauschen? Wir räumen mit Mythen auf.",
    author: "Mannhold Haustechnik",
    publishDate: "2025-11-25",
    lastUpdated: "2025-12-18",
    readingTime: 8,
    category: "Gesetzgebung",
    tags: ["GEG", "Heizungsgesetz", "Heizungstausch", "Pflicht"],
    keywords: [
      "heizungstausch pflicht 2026",
      "geg heizungsgesetz",
      "gasheizung verbot",
      "welche heizung ist erlaubt",
    ],
    // Bild: Gesetzbuch / Hausmodell / Waage
    featuredImage: "https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&q=80&w=1200",
    featuredImageAlt: "Hausmodell auf Plänen, Symbol für GEG Gesetzgebung",
    relatedArticles: ["gasheizung-vs-waermepumpe", "foerderung-waermepumpe-2026"],
    relatedServices: ["waermepumpe", "heizung-erneuern", "gastherme"],
    content: `## Mythos vs. Realität

| Mythos | Realität |
|--------|----------|
| "Gasheizungen sind verboten" | ❌ Falsch – Bestandsschutz gilt |
| "Ich muss sofort tauschen" | ❌ Falsch – lange Übergangsfristen |
| "Nur Wärmepumpe erlaubt" | ❌ Falsch – mehrere Optionen |
| "Keine Förderung für Gas" | ✅ Richtig – nur für erneuerbare |

## Was gilt wirklich ab 2026?

### Für Bestandsheizungen:

✅ **Bestandsschutz:** Funktionierende Heizungen dürfen weiterlaufen  
✅ **Reparatur erlaubt:** Auch defekte Heizungen dürfen repariert werden  
⚠️ **30-Jahre-Regel:** Konstanttemperaturkessel > 30 Jahre müssen getauscht werden

### Für neue Heizungen (ab 2024):

Das GEG schreibt vor: **65% erneuerbare Energien** bei Neuinstallation

**Diese Optionen erfüllen die 65%-Regel:**

1. Wärmepumpe (elektrisch)
2. Fernwärme (wo vorhanden)
3. Holz-/Pelletheizung
4. Solarthermie (als Hybridlösung)
5. Wasserstoff-ready Gasheizung*
6. Biogas/Biomethan*

*Mit Auflagen und Nachweispflichten

## Der Zeitplan im Überblick

| Frist | Was passiert |
|-------|-------------|
| **Ab 2024** | 65%-Regel für Neubauten in Neubaugebieten |
| **Ab 2026** | 65%-Regel in Großstädten (> 100.000 EW) |
| **Ab 2028** | 65%-Regel in allen Kommunen |
| **Bis 2045** | Alle Heizungen klimaneutral |

**Für Berlin gilt:** Ab Mitte 2026 die 65%-Regel für neue Heizungen

## Was bedeutet das konkret?

### Szenario 1: Ihre Heizung funktioniert

→ **Kein Handlungsbedarf.** Sie können sie weiterbetreiben.

### Szenario 2: Ihre Heizung ist defekt (ab 2026)

→ Bei irreparablem Defekt: Neue Heizung muss 65%-Regel erfüllen  
→ **Übergangsfrist:** 5 Jahre Zeit für endgültige Lösung

### Szenario 3: Sie planen proaktiv zu tauschen

→ **Beste Situation:** Sie nutzen die volle Förderung und wählen frei

## Unsere Empfehlung

> **Warten Sie nicht auf den Defekt.** Wer proaktiv tauscht, profitiert von:
> - Maximaler Förderung (aktuell bis 70%)
> - Planungssicherheit (kein Stress im Winter)
> - Freier Terminwahl (nicht in der Hochphase)

Die Übergangsfristen sind großzügig – aber die Förderung wird nicht ewig so hoch bleiben.`,
  },
  {
    id: "waermepumpe-kosten-2026",
    slug: "waermepumpe-kosten-2026-einfamilienhaus-foerderung-berlin",
    title: "Was kostet eine Wärmepumpe 2026? Kosten Einfamilienhaus, Förderung & was Berliner wissen müssen",
    metaTitle: "Wärmepumpe Kosten 2026: Komplettpreis Einfamilienhaus in Berlin",
    metaDescription:
      "Was kostet eine Wärmepumpe 2026? ✓ Kosten Einfamilienhaus ✓ Mit & ohne Förderung ✓ Luft-Wasser Preise ✓ Berlin. Transparente Übersicht – Jetzt Beratung sichern!",
    excerpt:
      "Eine Wärmepumpe fürs Einfamilienhaus: Mit welchen Kosten müssen Sie 2026 rechnen – und wie viel bleibt nach der Förderung? Die klaren Zahlen für Berlin und Umgebung.",
    author: "Mannhold Haustechnik",
    publishDate: "2025-12-10",
    lastUpdated: "2026-01-08",
    readingTime: 9,
    category: "Wärmepumpen",
    tags: ["Wärmepumpe", "Kosten", "Förderung", "Einfamilienhaus", "Berlin"],
    keywords: [
      "wärmepumpe kosten 2026",
      "was kostet eine wärmepumpe",
      "wärmepumpe kosten einfamilienhaus",
      "wärmepumpe installation kosten",
      "wärmepumpe kosten berlin",
      "luft wärmepumpe kosten",
      "wärmepumpe preis einfamilienhaus",
      "kosten wärmepumpe altbau",
      "wärmepumpe mit förderung kosten",
    ],
    featuredImage: "https://images.unsplash.com/photo-1631545914468-fc41f53d0112?auto=format&fit=crop&q=80&w=1200",
    featuredImageAlt: "Luft-Wasser-Wärmepumpe am Einfamilienhaus – Wärmepumpe Kosten 2026",
    relatedArticles: [
      "foerderung-waermepumpe-2026-kfw-bafa",
      "waermepumpe-altbau-ohne-fussbodenheizung",
      "gasheizung-vs-waermepumpe-kostenvergleich",
    ],
    relatedServices: ["waermepumpe", "heizung-erneuern"],
    content: `## Das Wichtigste in Kürze

- ✅ **Wärmepumpe Kosten 2026:** Luft-Wasser für ein Einfamilienhaus ca. 25.000–45.000 € Gesamtkosten (Anlage + Installation)
- ✅ **Mit Förderung:** Bis zu 70 % Zuschuss – nach Förderung oft nur **7.500–13.500 €** Eigenanteil
- ✅ **Kosten hängen ab von:** Gebäudegröße, Heizlast, Marke (z. B. Vaillant, OVUM) und Aufwand der Installation
- ✅ **Berlin:** In Berlin und Umgebung liegen die Installationskosten typischerweise im genannten Rahmen – eine kostenlose Beratung lohnt sich

## Was kostet eine Wärmepumpe 2026? Die Kernfrage

Wer mit dem Gedanken spielt, von Gas oder Öl auf eine Wärmepumpe umzusteigen, fragt sich zuerst: **Was kostet eine Wärmepumpe** – und was kommt auf mich wirklich zu? Die gute Nachricht: Die Zahlen sind 2026 transparenter denn je, und mit der aktuellen **Förderung** sinkt Ihr Eigenanteil deutlich.

In diesem Ratgeber zeigen wir Ihnen die **Wärmepumpe Kosten** für ein typisches Einfamilienhaus, was die **Wärmepumpe Installation kostet** und wie viel nach Abzug der Förderung übrig bleibt. Plus: was Berliner Hausbesitzer konkret wissen müssen.

## Wärmepumpe Kosten Einfamilienhaus: Die Kostentabelle

Die **Wärmepumpe Kosten** setzen sich aus der Anlage selbst, der Installation, eventuellen Anpassungen am Heizsystem (z. B. hydraulischer Abgleich) und der Förderberatung zusammen. Hier eine realistische **Wärmepumpe Preis**-Übersicht für ein **Einfamilienhaus** (ca. 120–150 m², Luft-Wasser-Wärmepumpe):

| Position | Kosten (Richtwert) |
|----------|-------------------|
| Luft-Wasser-Wärmepumpe (Anlage, 8–12 kW) | 15.000 – 25.000 € |
| Installation & Verrohrung | 5.000 – 10.000 € |
| Hydraulischer Abgleich, ggf. Heizkörper | 1.000 – 4.000 € |
| Elektroarbeiten, Förderantrag-Service | 1.500 – 3.000 € |
| **Gesamt vor Förderung** | **22.500 – 42.000 €** |
| **Nach 70 % Förderung** | **6.750 – 12.600 €** |

*Die Förderung (bis zu 70 %) setzt voraus, dass Sie die [Förderbedingungen 2026](/ratgeber/foerderung-waermepumpe-2026-kfw-bafa) erfüllen – z. B. Austausch einer alten Öl- oder Gasheizung. Details dazu finden Sie in unserem Ratgeber zur [Förderung Wärmepumpe 2026](/ratgeber/foerderung-waermepumpe-2026-kfw-bafa).*

### Wärmepumpe Komplettpreis Installation: Was ist drin?

Unter **Wärmepumpe Komplettpreis Installation** verstehen wir: Anlage, Montage, Anschluss, Inbetriebnahme und in der Regel die Unterstützung beim Förderantrag. Ein Pauschalpreis „von der Stange“ ist schwer zu nennen – je nach Gebäude (Altbau, [Wärmepumpe Altbau](/ratgeber/waermepumpe-altbau-ohne-fussbodenheizung), Dämmung, Heizkörper) kann der Aufwand variieren. Ein detailliertes Angebot nach Vor-Ort-Termin gibt Ihnen Planungssicherheit.

## Wärmepumpe Kosten Berlin: Was Sie in der Region erwarten können

**Wärmepumpe Kosten Berlin** und Umgebung bewegen sich in der Regel im bundesweiten Mittelfeld. In Berlin und Umgebung liegen die Installationskosten typischerweise bei **ca. 5.000–10.000 €** für die Montage und Anbindung – abhängig von Zugänglichkeit, vorhandener Heizungsanlage und gewählter Marke (z. B. Vaillant, OVUM). Entscheidend ist eine saubere Planung: [Heizlastberechnung](/leistungen/waermepumpe), Förderantrag vor Beginn der Maßnahme und ein fachgerechter Einbau. Wir beraten Sie gerne unverbindlich zu den [Wärmepumpe Kosten für Ihr Projekt](/kontakt).

## Luft-Wärmepumpe Kosten: Warum Luft-Wasser die häufigste Wahl ist

Die **Luft-Wärmepumpe** (Luft-Wasser) ist in Ein- und Zweifamilienhäusern am weitesten verbreitet – kein Erdbohrung nötig, vergleichsweise geringer Platzbedarf. Die **Luft Wärmepumpe Kosten** liegen wie in der Tabelle oben: Anlage plus Installation meist zwischen 25.000 und 45.000 € brutto, mit Förderung reduziert sich Ihr Anteil auf oft **unter 15.000 €**. Für **Wärmepumpe Preis Einfamilienhaus**-Vergleiche lohnt sich auch ein Blick in unseren Artikel [Gasheizung vs. Wärmepumpe](/ratgeber/gasheizung-vs-waermepumpe-kostenvergleich) – dort sehen Sie die Gesamtkosten (Anschaffung + Betrieb) im Vergleich.

## Kosten Wärmepumpe Altbau: Geht das ins Geld?

**Kosten Wärmepumpe Altbau** können etwas höher ausfallen, wenn z. B. Heizkörper getauscht oder die Vorlauftemperatur angepasst werden muss. Trotzdem: Auch im Altbau ist die Wärmepumpe oft wirtschaftlich – vor allem mit Förderung. Ausführlich dazu: [Wärmepumpe im Altbau](/ratgeber/waermepumpe-altbau-ohne-fussbodenheizung).

## Wärmepumpe mit Förderung Kosten: Vorher / Nachher

| Szenario | Ohne Förderung | Mit 70 % Förderung |
|----------|-----------------|---------------------|
| Einfamilienhaus, Luft-Wasser, Standard | ca. 32.000 € | **ca. 9.600 €** |
| Einfamilienhaus, höherer Aufwand (Altbau) | ca. 40.000 € | **ca. 12.000 €** |

*Förderung vor Beginn beantragen – wir unterstützen Sie dabei. Alle Schritte erklärt unser Ratgeber [Förderung Wärmepumpe 2026](/ratgeber/foerderung-waermepumpe-2026-kfw-bafa).*

## Was kostet eine Wärmepumpe für 120 Quadratmeter?

Für **ca. 120 m²** Wohnfläche reicht in vielen Fällen eine Luft-Wasser-Wärmepumpe mit **8–10 kW** Heizleistung. **Wärmepumpe Kosten** inkl. Installation: grob **25.000–35.000 €** vor Förderung, **Wärmepumpe Einfamilienhaus Kosten mit Förderung** oft **7.500–10.500 €**. Die exakte Dimensionierung erfolgt über eine Heizlastberechnung – nur so vermeiden Sie Unter- oder Überdimensionierung.

## Kurz-FAQ: Wärmepumpe Kosten

**Was kostet eine Wärmepumpe 2026 ungefähr?**  
Luft-Wasser für ein Einfamilienhaus: ca. 25.000–45.000 € Gesamtkosten. Mit bis zu 70 % Förderung: oft nur 7.500–13.500 € Eigenanteil.

**Sind die Wärmepumpe Installation Kosten in Berlin anders?**  
In Berlin und Umgebung bewegen sich die Installationskosten im üblichen Rahmen (ca. 5.000–10.000 € für Montage/Anschluss). Entscheidend sind Objekt und gewählte Technik.

**Wärmepumpe Komplettpreis Installation – was ist enthalten?**  
Anlage, Montage, Anschluss, Inbetriebnahme und in der Regel Beratung zum Förderantrag. Einzelpositionen können je nach Anbieter variieren.

## Nächster Schritt: Kostenlos beraten lassen

Die **Wärmepumpe Kosten** hängen von Ihrem Gebäude, Ihrer Heizlast und der gewünschten Ausstattung ab. Statt pauschal zu schätzen, empfehlen wir eine **kostenlose Beratung** mit Vor-Ort-Termin: Dann erhalten Sie ein klares Angebot inkl. Förderoptionen. Wir sind Ihr Ansprechpartner für [Wärmepumpe Berlin](/leistungen/waermepumpe) und Umgebung – von der Planung bis zur Installation.

**[Jetzt Beratung anfragen](/kontakt)** – unverbindlich und auf Ihr Objekt zugeschnitten.`,
  },
];

// Redaktionsplan für zukünftige Artikel
export const upcomingArticles = [
  {
    title: "Stromverbrauch Wärmepumpe: Realistische Zahlen aus der Praxis",
    plannedDate: "2026-04-07",
    keyword: "wärmepumpe stromverbrauch pro jahr",
  },
  {
    title: "Wärmepumpe + Solar: Die perfekte Kombination?",
    plannedDate: "2026-04-21",
    keyword: "wärmepumpe solar kombination",
  },
  {
    title: "Heizlastberechnung erklärt: Basis für die richtige Wärmepumpe",
    plannedDate: "2026-05-05",
    keyword: "heizlastberechnung altbau",
  },
  {
    title: "Fußbodenheizung reinigen: Wann und warum es nötig ist",
    plannedDate: "2026-05-19",
    keyword: "fußbodenheizung reinigen kosten",
  },
  {
    title: "Vaillant aroTHERM plus: Unsere Erfahrungen nach 2 Jahren",
    plannedDate: "2026-06-02",
    keyword: "vaillant wärmepumpe erfahrungen",
  },
];

export const getArticleBySlug = (slug: string): BlogArticle | undefined => {
  return blogArticles.find((article) => article.slug === slug);
};

export const getPublishedArticles = (): BlogArticle[] => {
  const today = new Date().toISOString().split("T")[0];
  return blogArticles
    .filter((article) => article.publishDate <= today)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
};

export const getAllArticleSlugs = (): string[] => {
  return blogArticles.map((article) => article.slug);
};

export const getArticlesByCategory = (category: string): BlogArticle[] => {
  return blogArticles.filter((article) => article.category === category);
};

export const getRelatedArticles = (currentSlug: string, limit: number = 3): BlogArticle[] => {
  const current = getArticleBySlug(currentSlug);
  if (!current) return [];
  
  return blogArticles
    .filter((article) => 
      article.slug !== currentSlug && 
      current.relatedArticles.includes(article.id)
    )
    .slice(0, limit);
};
