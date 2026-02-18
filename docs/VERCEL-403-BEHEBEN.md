# 403-Fehler für Google beheben (Vercel Firewall)

Wenn Googlebot beim Crawlen **403 (Zugriffsverbot)** bekommt, werden Seiten nicht indexiert. Die Ursache liegt in der Regel in der **Vercel Firewall / Bot Protection**, nicht im Projektcode.

---

## Schnell-Check: Wird meine Seite blockiert?

Im Terminal (oder in der GSC „URL-Prüfung“):

```bash
# Als Googlebot anfragen – sollte 200 zurückgeben, nicht 403
curl -I -A "Googlebot" https://mannhold-haustechnik.de/kontakt
```

Erwartung: `HTTP/2 200` (oder 301/302 zu einer erlaubten Seite).  
Wenn `403`: Firewall/Bot-Einstellungen auf Vercel anpassen.

---

## Schritte im Vercel Dashboard

1. **Dashboard öffnen**  
   [vercel.com/dashboard](https://vercel.com/dashboard) → Projekt **mannhold-haustechnik** (bzw. dein Projektname) wählen.

2. **Firewall öffnen**  
   Linke Seite: **Settings** → **Firewall** (oder im Projekt: **Firewall**).

3. **Bot Management anpassen**
   - **Attack Challenge Mode:**  
     Wenn aktiviert → auf **Disable** stellen.  
     (Kann sonst auch legitime Crawler wie Googlebot treffen.)
   - **Bot Protection (Managed Ruleset):**  
     Wenn auf **Challenge** → auf **Log** umstellen.  
     Dann werden Crawler nicht mehr mit Challenge/Block beantwortet, sondern nur geloggt.

4. **Custom Rules prüfen**
   - Unter **Firewall** → **Custom Rules** (oder **Rules**) nach Regeln schauen, die **Deny** oder **Challenge** auslösen.
   - Keine Regel sollte Suchmaschinen-Crawler pauschal blockieren.
   - Falls nach User-Agent gefiltert wird: **Bypass-Regel** für Googlebot hinzufügen:
     - Bedingung: **Request** → **User-Agent** → **contains** → `Googlebot`
     - Aktion: **Bypass** (oder **Allow**).

5. **Änderungen speichern**  
   **Review Changes** → **Publish** (oder **Deploy**), falls nötig.

6. **Optional: Weitere Crawler durchlassen**  
   Für Bing, Yandex etc. kannst du weitere Bypass-Regeln anlegen (User-Agent enthält z. B. `Bingbot`, `Yandex`).

---

## Nach der Änderung

- **Test:**  
  `curl -I -A "Googlebot" https://mannhold-haustechnik.de/kontakt` → sollte **200** (oder Redirect) sein.
- **Google Search Console:**  
  Bei zuvor mit 403 gemeldeten URLs **URL-Prüfung** → **Indexierung beantragen** (z. B. Startseite, `/kontakt`, `/leistungen/waermepumpe`).
- **Warten:**  
  Indexierung kann einige Tage dauern. In der GSC unter **Indexierung → Seiten** den Status beobachten.

---

## Wenn du einen Proxy vor Vercel nutzt (z. B. Cloudflare)

- Dort prüfen, ob Bot/Crawler-Schutz oder Challenge-Modus aktiv ist.
- Googlebot (User-Agent `Googlebot`) ggf. von Challenge/Block ausnehmen oder Schutz dort lockern, damit Vercel die Anfragen überhaupt erreicht.

---

## Projektcode (Referenz)

- **Middleware** (`middleware.ts`): Macht nur Redirects (HTTP→HTTPS, www→non-www, alte URLs). Blockiert **keine** User-Agents.
- **robots.txt**: Erlaubt allen Crawlern `/`, verbietet nur `/api/` und `/_next/`.
- **Metadata** (`layout.tsx`): `robots` und `googleBot` mit `index: true`, `follow: true`.

Die 403-Antwort kommt also von Vercel Edge/Firewall, nicht von dieser Next.js-App.
