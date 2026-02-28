# 403-URL finden & Prioritätenliste „Indexierung beantragen“

Stand: 2026-02-28 (basierend auf Coverage-Export und Sitemap-Struktur)

---

## 1. Die eine 403-URL in der GSC finden

Der Coverage-Export nennt nur **„1 Seite“** mit **„Wegen Zugriffsverbot (403) blockiert“**. Die genaue URL steht nicht in der CSV.

### So findest du sie in der Google Search Console

1. **GSC öffnen**  
   [search.google.com/search-console](https://search.google.com/search-console) → Property **mannhold-haustechnik.de** (Domain- oder URL-Präfix).

2. **Indexierung → Seiten**  
   Linke Seite: **Indexierung** → **Seiten**.

3. **Problem „Zugriffsverbot (403)“**  
   In der Tabelle unter **„Warum sind die Seiten nicht indexiert?“** (bzw. „Problem“) auf den Eintrag **„Wegen Zugriffsverbot (403) blockiert“** klicken.

4. **URL-Liste anzeigen**  
   Google zeigt dir die betroffenen URLs (in deinem Fall 1).  
   Optional: **„Beispiel-URL prüfen“** oder **„URL-Prüfung“** öffnen, um die genaue Adresse zu sehen.

5. **Nach der 403-Behebung**  
   Dieselbe URL in **URL-Prüfung** eingeben → **„Indexierung beantragen“** (sobald der Server 200 zurückgibt).

### 403 technisch beheben

- Anleitung: **[VERCEL-403-BEHEBEN.md](./VERCEL-403-BEHEBEN.md)**  
- Kurz: Vercel Dashboard → **Firewall** → Bot Protection/Attack Challenge anpassen, Googlebot (User-Agent `Googlebot`) **nicht** blockieren bzw. Bypass-Regel setzen.  
- Test:  
  `curl -I -A "Googlebot" https://mannhold-haustechnik.de/`  
  Erwartung: **HTTP/2 200** (kein 403).

---

## 2. Prioritätenliste für „Indexierung beantragen“

Nach Behebung des 403 (und ggf. nach dem nächsten Crawl) in der GSC unter **URL-Prüfung** die folgende URL eingeben und **„Indexierung beantragen“** wählen.  
Nicht alle auf einmal – lieber **täglich 5–10 URLs**, mit Fokus auf **Priorität 1**.

### Priorität 1 – Statische Kernseiten (zuerst)

| # | URL |
|---|-----|
| 1 | https://mannhold-haustechnik.de/ |
| 2 | https://mannhold-haustechnik.de/leistungen |
| 3 | https://mannhold-haustechnik.de/leistungen/waermepumpe |
| 4 | https://mannhold-haustechnik.de/leistungen/waermepumpe/vaillant |
| 5 | https://mannhold-haustechnik.de/leistungen/waermepumpe/ovum |
| 6 | https://mannhold-haustechnik.de/leistungen/gastherme |
| 7 | https://mannhold-haustechnik.de/standorte |
| 8 | https://mannhold-haustechnik.de/kontakt |
| 9 | https://mannhold-haustechnik.de/ratgeber |
| 10 | https://mannhold-haustechnik.de/ueber-uns |

### Priorität 2 – Weitere Leistungen & wichtige Unterseiten

| # | URL |
|---|-----|
| 11 | https://mannhold-haustechnik.de/leistungen/wartung |
| 12 | https://mannhold-haustechnik.de/leistungen/heizung-erneuern |
| 13 | https://mannhold-haustechnik.de/leistungen/fussbodenheizung |
| 14 | https://mannhold-haustechnik.de/leistungen/hydraulischer-abgleich |
| 15 | https://mannhold-haustechnik.de/leistungen/heizlastberechnung |
| 16 | https://mannhold-haustechnik.de/leistungen/ersttrocknung-rohrbruch |
| 17 | https://mannhold-haustechnik.de/faq |
| 18 | https://mannhold-haustechnik.de/referenzen |

### Priorität 3 – Programmseiten (Wärmepumpe & Heizungsinstallateur, Top-Bezirke)

Diese Slugs sind **Service-Bezirk**-Kombinationen mit höchster SEO-Priorität (Priority 1+1 bzw. 1+2).

| # | URL |
|---|-----|
| 19 | https://mannhold-haustechnik.de/waermepumpe-tempelhof-schoeneberg |
| 20 | https://mannhold-haustechnik.de/waermepumpe-steglitz-zehlendorf |
| 21 | https://mannhold-haustechnik.de/waermepumpe-charlottenburg-wilmersdorf |
| 22 | https://mannhold-haustechnik.de/waermepumpe-potsdam |
| 23 | https://mannhold-haustechnik.de/heizungsinstallateur-tempelhof-schoeneberg |
| 24 | https://mannhold-haustechnik.de/heizungsinstallateur-steglitz-zehlendorf |
| 25 | https://mannhold-haustechnik.de/heizungsinstallateur-charlottenburg-wilmersdorf |
| 26 | https://mannhold-haustechnik.de/heizungsinstallateur-potsdam |
| 27 | https://mannhold-haustechnik.de/gastherme-charlottenburg-wilmersdorf |
| 28 | https://mannhold-haustechnik.de/heizung-erneuern-tempelhof-schoeneberg |
| 29 | https://mannhold-haustechnik.de/heizung-erneuern-steglitz-zehlendorf |
| 30 | https://mannhold-haustechnik.de/heizungsinstallateur-neukoelln |
| 31 | https://mannhold-haustechnik.de/heizungsinstallateur-friedrichshain-kreuzberg |

*(Jede URL in der GSC nur einmal zur Indexierung beantragen.)*

### Priorität 4 – Standorte (Bezirke/Stadtteile)

*(Slugs aus `src/lib/data/locations.ts` – Sitemap verwendet diese Pfade.)*

| # | URL |
|---|-----|
| 31 | https://mannhold-haustechnik.de/standorte/berlin-schoeneberg |
| 32 | https://mannhold-haustechnik.de/standorte/berlin-steglitz |
| 33 | https://mannhold-haustechnik.de/standorte/berlin-zehlendorf |
| 34 | https://mannhold-haustechnik.de/standorte/berlin-tempelhof |
| 35 | https://mannhold-haustechnik.de/standorte/berlin-wilmersdorf |
| 36 | https://mannhold-haustechnik.de/standorte/potsdam |

### Priorität 5 – Ratgeber (starke Inhalte, bereits Impressionen in GSC)

| # | URL |
|---|-----|
| 37 | https://mannhold-haustechnik.de/ratgeber/waermepumpe-altbau-ohne-fussbodenheizung |
| 38 | https://mannhold-haustechnik.de/ratgeber/foerderung-waermepumpe-2026-kfw-bafa |
| 39 | https://mannhold-haustechnik.de/ratgeber/gasheizung-vs-waermepumpe-kostenvergleich |
| 40 | https://mannhold-haustechnik.de/ratgeber/hydraulischer-abgleich-pflicht-kosten-2026 |
| 41 | https://mannhold-haustechnik.de/ratgeber/heizungstausch-geg-pflicht-2026 |
| 42 | https://mannhold-haustechnik.de/ratgeber/waermepumpe-kosten-2026-einfamilienhaus-foerderung-berlin |

---

## 3. Empfohlener Ablauf

1. **403 beheben** (Vercel Firewall, siehe [VERCEL-403-BEHEBEN.md](./VERCEL-403-BEHEBEN.md)).
2. **403-URL in der GSC identifizieren** (Indexierung → Seiten → „Zugriffsverbot (403)“).
3. **Priorität 1** (Startseite + Kern-Leistungen + Kontakt/Ratgeber) in der GSC **URL-Prüfung** → **Indexierung beantragen** (z. B. 5–10 URLs am Stück).
4. Nach einigen Tagen **Priorität 2 und 3** nachziehen, danach Standorte und Ratgeber.
5. **Coverage** im Auge behalten („Indexiert“ sollte steigen, „Gefunden – zurzeit nicht indexiert“ kann sinken).

---

## 4. Rechtliches (nur zur Bestätigung)

- **Impressum:** https://mannhold-haustechnik.de/impressum  
- **Datenschutz:** https://mannhold-haustechnik.de/datenschutz  

Diese können mit niedriger Priorität ebenfalls zur Indexierung eingereicht werden, sobald die wichtigen Seiten laufen.
