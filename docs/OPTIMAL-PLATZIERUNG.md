# Optimale Platzierung: Mannhold Haustechnik – Tool-Übersicht & Workflow

Dieses Dokument beschreibt, welche Tools für die SEO-Platzierung genutzt werden und wie sie zusammenspielen.

---

## Verfügbare Tools

### 1. DataForSEO (DFS MCP)

**Server:** `dfs`

| Tool | Nutzen für uns |
|------|-----------------|
| **dataforseo_labs_google_domain_rank_overview** | Aktuelle Sichtbarkeit: Wie viele Keywords, in welchen Positionen, geschätzter Traffic. |
| **dataforseo_labs_google_historical_rank_overview** | Verlauf über Monate: Steigen oder sinken Rankings? |
| **dataforseo_labs_google_ranked_keywords** | Konkret: Für welche Suchbegriffe ranken wir (und auf welcher Position)? |
| **serp_organic_live_advanced** | Live-Check: Wo stehen wir (und die Konkurrenz) für ein Keyword z. B. „Wärmepumpe Berlin“? |
| **dataforseo_labs_google_serp_competitors** | Wer rankt für unsere Ziel-Keywords? Wettbewerbsanalyse. |

**Typische Parameter:**  
`target: "mannhold-haustechnik.de"`, `location_name: "Germany"`, `language_code: "de"`

---

### 2. Google Search Console (GSC MCP)

**Server:** `gsc`

| Tool | Nutzen für uns |
|------|-----------------|
| **list_sites** | Welche Property nutzen wir? (z. B. `sc-domain:mannhold-haustechnik.de` oder URL-Präfix) |
| **list_sitemaps** | Werden unsere Sitemaps erkannt? Wie viele URLs eingereicht vs. indexiert? |
| **get_sitemap** | Details zu einer Sitemap. |
| **submit_sitemap** | Sitemap erneut einreichen (z. B. nach 403-Behebung). |
| **index_inspect** | Eine URL prüfen: indexiert? Wenn nicht: Grund (403, Crawl-Fehler, Duplicate, etc.). |
| **search_analytics** | Echte GSC-Daten: Klicks, Impressionen, CTR, Position nach Query/Seite/Zeitraum. |
| **enhanced_search_analytics** | Wie search_analytics, mit mehr Zeilen und optional Quick-Wins. |
| **detect_quick_wins** | Queries mit vielen Impressionen, aber niedrigem CTR (Position 4–10) → Optimierungspotenzial. |

**Hinweis:** Damit die GSC-Tools funktionieren, muss die OAuth-Client-Secret-Datei für den GSC-MCP-Server erreichbar sein. Aktuell meldet der Server:  
`ENOENT: no such file or directory, open '...|client_secret_...json'`.  
Die Datei liegt im Projekt unter  
`client_secret_813398736295-gcnge91vgujcb4kqtennkfdp3spfjrgo.apps.googleusercontent.com.json`.  
In der MCP-Konfiguration des GSC-Servers den **Pfad zu dieser Datei** korrekt setzen (absoluter Pfad ohne Sonderzeichen wie `|`).

---

## Empfohlener Workflow

### Monatlich / nach größeren Änderungen

1. **DFS: Domain Rank Overview**  
   → Ist die Gesamtsichtbarkeit (Anzahl Keywords, ETV) gestiegen oder gefallen?

2. **DFS: Ranked Keywords**  
   → Für welche Begriffe ranken wir? Neue dabei? Positionen verbessert?

3. **GSC: search_analytics** (z. B. letzte 28 Tage)  
   → Top-Queries, Top-Seiten, Klicks/Impressionen (sobald GSC-MCP läuft).

4. **GSC: detect_quick_wins**  
   → Welche Queries haben Potenzial (viele Impressionen, Position 4–10, niedriger CTR)?

### Nach technischen Fixes (z. B. 403 behoben)

1. **GSC: list_sitemaps**  
   → Sitemap-Status prüfen.

2. **GSC: submit_sitemap**  
   → Sitemap ggf. erneut einreichen.

3. **GSC: index_inspect** für 2–3 zuvor betroffene URLs  
   → Indexierung anstoßen und Status prüfen.

4. **DFS: Domain Rank Overview** einige Wochen später  
   → Erholung der Sichtbarkeit?

### Bei gezielter Keyword-Strategie

1. **DFS: serp_organic_live_advanced** für Ziel-Keyword (z. B. „Wärmepumpe Berlin“)  
   → Wer steht vor uns? Welche Titel/Descriptions haben die Top-3?

2. **DFS: google_serp_competitors** mit Liste der Ziel-Keywords  
   → Welche Domains dominieren? Wo liegen wir?

3. On-Page und Content anpassen (Titles, H1, Absätze) – siehe **SEO-ROADMAP.md**.

---

## Bereits umgesetzt (Code & Struktur)

- **SEO-ROADMAP.md:** Prioritäten, 403, Sitemap, On-Page, Local, Backlinks, Monitoring.
- **Leistungsseiten:** Canonical, OpenGraph, Twitter-Card, keywordstarke Titles/Descriptions **und H1** (Wärmepumpe Berlin, Vaillant, OVUM, Wartung, Gastherme).
- **Standort-Seiten:** Canonical, OpenGraph, Twitter-Card.
- **Stadtteil-Seiten:** Canonical, OpenGraph (inkl. url, siteName), Twitter-Card.
- **Redirects:** Legacy-URLs (/blog, /service, /rohrreinigung-berlin) → passende Ziele.
- **Homepage:** Bereits auf „Wärmepumpe Berlin“ ausgerichtet (Title, H1, Description).

---

## Nächste Schritte (manuell / Hosting)

1. **403 beheben:** Vercel Firewall/Bot Protection so einstellen, dass Googlebot nicht blockiert wird.
2. **GSC MCP:** Pfad zur `client_secret_*.json` in der MCP-Konfiguration korrigieren (bzw. bei Nutzung von `credential.json`/GOOGLE_APPLICATION_CREDENTIALS prüfen). Server-Name in Cursor: **`gsc`**. Danach GSC-Tools (list_sites, list_sitemaps, index_inspect, search_analytics, detect_quick_wins) nutzen.
3. **Google Business Profile:** Vollständig pflegen, Beschreibung mit Kern-Keywords, regelmäßige Posts.
4. **Content:** Auf starken Programmseiten 1–2 Absätze einzigartiger Text (Bezirke/Lokalbezug).

---

*Mit DFS haben wir die aktuelle Platzierung und den Verlauf; mit GSC (nach Konfiguration) die genauen Performance- und Indexierungsdaten. Beide zusammen ermöglichen eine optimale Platzierung und Nachsteuerung.*
