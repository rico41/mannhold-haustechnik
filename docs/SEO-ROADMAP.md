# SEO-Roadmap: Mannhold Haustechnik – Sichtbarkeit bei Google

Stand: Februar 2026 | Basierend auf DataForSEO-Auswertung und technischer Analyse.

---

## Aktuelle Analyse (Feb 2026 – SEO-Spezialist)

### DataForSEO

- **Domain Rank Overview:** 3 Keywords in Position 31–60 (ETV ~0,3), **kein Top-30-Ranking**.
- **Ranked Keywords:** Nur Ratgeber-URLs („wie lange darf ich meine gasheizung noch betreiben“, „wie alt darf eine heizung sein“) auf Position 43–59. **Keine kommerziellen Berlin-Keywords** in den Rankings.
- **SERP „Wärmepumpe Berlin“:** mannhold-haustechnik.de **erscheint nicht in den Top 20**. Vor uns: Local Pack (waermepumpe-installateur.de, waermepumpeberlin.com, GEP, Heizhelden, thermondo), dann Organic (energie-experten.org, jaenichen-gmbh.de, hansetherm, enpal, gasag, waermepumpeberlin.com, …).
- **Wettbewerber für „Wärmepumpe Berlin“:** energie-experten.org (Platz 1), jaenichen-gmbh.de (2), chip.de, hansetherm, enpal, gasag, viessmann, waermepumpeberlin.com, gondzik-waermepumpen.de, galvany.de.

### Google Search Console

- **Quick Wins (umgesetzt):** „mannhold“ (Pos 4,1, 52 Imp, 0 Klicks) und „heiztechnik“ (Pos 8,4, 20 Imp, 0 Klicks) → **Homepage-Title und Description angepasst** (Mannhold Haustechnik + Heiztechnik im Title, klarer Snippet mit CTA).
- **Starke Queries mit 0 CTR:** haustechnik (65 Imp, Pos 10,6), heizung reparatur berlin (Pos 1,5), heizungsmonteur (Pos 5,3), gastherme vaillant wartung (Pos 10,2) → weitere Title/Description-Optimierungen möglich.
- **„berlin wärmepumpe“:** 2 Impressionen, Position 21 – kaum Sichtbarkeit bis 403 behoben und GBP gestärkt ist.

### Wichtigste Hebel für Platz 1 lokal

1. **403 beheben (Vercel)** – ohne Indexierung keine Rankings.
2. **Google Business Profile** – für „Wärmepumpe Berlin“ dominiert das Local Pack; GBP vollständig pflegen (Kategorie, Beschreibung, Bewertungen, Posts).
3. **On-Page (erledigt):** Homepage Title/Description für Quick Wins; Kontakt-Seite mit NAP in Description.
4. **NAP & Schema:** Einheitlich (Footer, Kontakt, Impressum, company.ts); HVACBusiness-Schema auf Homepage mit areaServed, Adresse, Angebotskatalog.

---

## Ausgangslage (DataForSEO)

- **Aktuell:** Nur 3 Keywords in den Rängen 31–60, kein Top-30-Ranking.
- **Kern-Keyword „Wärmepumpe Berlin“:** Domain erscheint nicht in den Top 30.
- **Historisch:** Starker Rückgang von ~30 Keywords (Okt 2025) auf 3 (Jan 2026).
- **Technisch:** 33 URLs mit 403 (Zugriffsverbot) in der Google Search Console.

---

## Priorität 1: Technik (sofort)

### 1.1 403-Fehler beheben (Hosting/Vercel)

**Problem:** 33 Seiten werden von Google mit „Zugriffsverbot (403)“ blockiert.

**Detaillierte Anleitung (inkl. curl-Test):** [docs/VERCEL-403-BEHEBEN.md](./VERCEL-403-BEHEBEN.md)

**Maßnahmen (Schritt für Schritt):**

1. **Vercel Dashboard** öffnen: [vercel.com/dashboard](https://vercel.com/dashboard) → Projekt **mannhold-haustechnik** (oder dein Projektname) wählen.
2. **Firewall-Tab** öffnen (linke Seite: **Firewall**).
3. **Bot Management** prüfen:
   - **Attack Challenge Mode:** Wenn aktiviert → auf **Disable** stellen. (Googlebot wird zwar normalerweise durchgelassen; bei Proxy oder hohem Crawl-Aufkommen können trotzdem 403 entstehen.)
   - **Bot Protection (Managed Ruleset):** Wenn auf **Challenge** steht → auf **Log** umstellen, damit keine Challenges mehr ausgeliefert werden. So werden Crawler nicht mehr blockiert. Später kannst du bei Bedarf wieder auf Challenge gehen.
4. **Regeln-Tab** in der Firewall prüfen:
   - Unter **Custom Rules** nach Regeln schauen, die **Deny** oder **Challenge** für allgemeinen Traffic auslösen. Keine Regel sollte Suchmaschinen-Crawler pauschal blockieren.
   - Falls du eine Regel hast, die z. B. nach User-Agent filtert: **Bypass**-Regel für Googlebot hinzufügen (Match: User Agent enthält „Googlebot“), damit diese Requests durchgelassen werden.
5. **Reverse Proxy:** Wenn vor Vercel ein Proxy liegt (z. B. Cloudflare, eigener CDN), kann Bot-Erkennung fehlschlagen und Googlebot 403 bekommen. Entweder dort Crawler durchlassen oder Attack Challenge Mode / Bot Protection auf Vercel entschärfen (siehe oben).
6. **Änderungen speichern:** In der Firewall **Review Changes** → **Publish** klicken.
7. **Nach der Änderung:** In der **Google Search Console** bei 2–3 zuvor mit 403 gemeldeten URLs **„URL-Prüfung“** → **„Indexierung beantragen“** ausführen.

**Kurz:** Attack Challenge Mode ausschalten, Bot Protection auf **Log** stellen, keine Custom Rules die Googlebot blockieren. Danach in der GSC Indexierung für betroffene URLs anstoßen.

**Verantwortung:** Deployment/Hosting (Vercel-Einstellungen).

---

### 1.2 Canonical & OpenGraph auf allen wichtigen Seiten

- [x] **Leistungsseiten** (`/leistungen/waermepumpe`, etc.): Canonical + OpenGraph + keywordstarke Titles („Wärmepumpe Berlin“, „Gastherme Berlin“, etc.).
- [x] **Standort-Seiten** (`/standorte/[bezirk]`): Canonical + OpenGraph + Twitter-Card ergänzt.
- [x] **Stadtteil-Seiten** (`/stadtteil/[slug]`): openGraph um url + siteName ergänzt.

---

### 1.3 Sitemap & Indexierung

- [x] **GSC geprüft (Feb 2026):** `sitemap.xml` wird gelesen – **288 URLs eingereicht, 0 indexiert** (u. a. wegen 403). Alte `page-sitemap.xml`: 4 Warnungen, 1 Fehler.
- [ ] Nach Behebung der 403: Sitemap erneut einreichen, wichtige URLs „Indexierung beantragen“.
- [ ] Wichtigste URLs manuell prüfen: Startseite, `/leistungen/waermepumpe`, `/kontakt`, `/leistungen/wartung`.

---

## GSC Quick Wins (Stand Feb 2026)

Queries mit **Potenzial** (viele Impressionen, Position 4–15, niedriger CTR). Durch besseren Title/Snippet oder leicht bessere Position mehr Klicks möglich:

| Query | Seite | Position | Impressionen | Klicks | Status |
|-------|--------|----------|--------------|--------|--------|
| **mannhold** | Startseite | 4,1 | 52 | 0 | ✅ **Umgesetzt:** Title mit „Mannhold Haustechnik“ und „Wärmepumpe Berlin – Heiztechnik & Vaillant Partner“, Description mit Marke + CTA. |
| **heiztechnik** | Startseite | 8,4 | 20 | 0 | ✅ **Umgesetzt:** „Heiztechnik“ im Title und in der Description. |
| **haustechnik** | Startseite | 10,6 | 65 | 1 | Title/Description für „Haustechnik“ optional nachziehen (Keywords bereits gesetzt). |
| **vaillant berlin** | Startseite | 6 | 14 | 0 | Vaillant + Berlin im Title/H1; Snippet enthält jetzt „Heiztechnik“ und „Vaillant Partner“. |
| **wärmepumpe berlin steglitz** | /heizungsinstallateur-steglitz-zehlendorf | 6,6 | 11 | 0 | Meta-Description mit „Wärmepumpe Berlin Steglitz“ prüfen. |

**Stärkste Seiten (Klicks/Impressionen):** Startseite (34 Klicks, 804 Imp.), Ratgeber Gasheizung vs. Wärmepumpe (2 Klicks, 224 Imp.), /heizungsinstallateur-tempelhof-schoeneberg (2 Klicks, 40 Imp.). Viele Programmseiten haben Impressionen aber 0 Klicks → Title/Description-Optimierung lohnt sich.

---

## Priorität 2: Kern-Keywords & On-Page

### 2.1 Ziel-Keywords (Berlin, lokaler Fokus)

| Keyword | Intent | Wichtigste Seite(n) |
|--------|--------|----------------------|
| Wärmepumpe Berlin | Kommerziell | Homepage, /leistungen/waermepumpe |
| Wärmepumpe Installation Berlin | Kommerziell | /leistungen/waermepumpe |
| Gastherme Wartung Berlin | Kommerziell | /leistungen/wartung |
| Heizungsinstallateur Berlin | Kommerziell | Homepage, /ueber-uns |
| Vaillant Wärmepumpe Berlin | Kommerziell | /leistungen/waermepumpe/vaillant |

### 2.2 On-Page-Anpassungen (umgesetzt / empfohlen)

- [x] **Leistungsseiten:** Keyword-starke, eindeutige Titles und Descriptions (inkl. „Berlin“ wo sinnvoll).
- [x] **Canonical + OpenGraph** für Leistungsseiten.
- [x] **H1 pro Seite:** Für Kern-Leistungen (Wärmepumpe, Vaillant, OVUM, Wartung, Gastherme) keywordstarker H1 wie im Title („Wärmepumpe Berlin“, „Gastherme Berlin“, etc.).
- [ ] **Ratgeber:** Artikel mit Fokus auf Long-Head-Keywords (z. B. „Wie lange darf ich meine Heizung noch betreiben?“) – bereits rankend; URL zeigt auf Redirect zu `/ratgeber`. Inhaltlich prüfen, ob der Ratgeber-Überblick genug Kontext für diese Keywords bietet.

### 2.3 Content-Tiefe für Programmseiten

- Programmseiten (z. B. `/waermepumpe-berlin-steglitz`) haben Templates mit {bezirk}. Um Duplicate- und „Low value“-Signale zu reduzieren:
- [ ] Pro Seite **mind. 1–2 Absätze einzigartiger Text** (z. B. Bezirks-Besonderheiten, Projektbeispiel, lokale Hinweise).
- [ ] Optional: Starke Programmseiten (z. B. Top-Stadtteile) mit etwas mehr Content ausbauen als der Rest.

---

## Priorität 3: Lokale Sichtbarkeit (Local SEO)

### 3.1 Google Business Profile (GBP)

- [ ] **Eintrag prüfen:** Vollständigkeit (Adresse, Öffnungszeiten, Website, Kategorie „Heizungsinstallateur“ o. ä.).
- [ ] **Beschreibung:** Kern-Keywords natürlich einbinden (Wärmepumpe Berlin, Vaillant, OVUM, Wartung).
- [ ] **Posts:** Regelmäßig (z. B. Angebote, Wartungstipps, Förderung).
- [ ] **Bewertungen:** Kunden um Bewertungen bitten; auf negative sachlich antworten.

### 3.2 NAP & Schema

- [x] **NAP** (Name, Adresse, Telefon) einheitlich in Footer, Kontakt, Impressum und `company.ts` – geprüft, konsistent.
- [x] **LocalBusiness/Service-Schema:** HVACBusiness auf Homepage mit Adresse, areaServed, hasOfferCatalog; Description um „Heiztechnik“ ergänzt.

---

## Priorität 4: Backlinks & Autorität

- [ ] **Lokale Verzeichnisse:** Einträge in Branchenbüchern (z. B. 11880, Das Telefonbuch, KennstDuEinen) prüfen; alle auf **eine** kanonische URL (Homepage oder passende Landingpage) verweisen.
- [ ] **Partner/Hersteller:** Vaillant/OVUM-Partner-Seiten, Handwerkskammer, Innung – Verlinkung prüfen und anfragen.
- [ ] **Ratgeber:** Bestehende Ratgeber-URLs (die bereits ranken) in sozialen Kanälen oder Newsletter teilen, um zusätzliche Signale zu stärken.

---

## Priorität 5: Monitoring & Nachsteuerung

- [ ] **Google Search Console:** Wöchentlich „Performance“ und „Indexierung“ prüfen (Indexstatus, 403, Crawl-Fehler).
- [ ] **DataForSEO (oder anderes Tool):** Monatlich „Ranked Keywords“ und „Domain Rank Overview“ für mannhold-haustechnik.de (Germany, de) auswerten.
- [ ] Nach 403-Behebung: Erwartung ist Anstieg der indexierten URLs und mittelfristig wieder mehr Keywords in den Top 20–30.

---

## Kurz-Checkliste (Sofort)

1. **Vercel:** Firewall/Bot Protection für Googlebot anpassen → **403 beheben** (wichtigster technischer Hebel).
2. **GSC:** Nach 403-Fix Sitemap erneut einreichen, wichtige URLs „Indexierung beantragen“.
3. **On-Page:** Homepage Title/Description für Quick Wins (mannhold, heiztechnik) umgesetzt; Leistungsseiten mit Canonical + OG + keywordstarken Titles (bereits umgesetzt).
4. **GBP:** Profil vervollständigen, Beschreibung & Kategorien (z. B. „Heizungsinstallateur“, „Wärmepumpen-Installation“), Bewertungen und Posts – **entscheidend für Local Pack „Wärmepumpe Berlin“**.
5. **Content:** Auf starken Programmseiten 1–2 Absätze einzigartiger Text ergänzen.

---

**Siehe auch:** [OPTIMAL-PLATZIERUNG.md](./OPTIMAL-PLATZIERUNG.md) – Übersicht aller SEO-Tools (DataForSEO, Google Search Console MCP) und empfohlener Workflow.

*Dieses Dokument kann bei neuen Daten (z. B. erneute DataForSEO-Auswertung oder GSC-Status) aktualisiert werden.*
