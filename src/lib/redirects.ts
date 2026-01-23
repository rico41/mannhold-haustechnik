/**
 * Redirect-Map für alte URLs
 * 
 * Diese Datei enthält alle 301 Permanent Redirects von alten URLs zu neuen URLs.
 * Wird von der Middleware verwendet, um SEO-freundliche Redirects durchzuführen.
 * 
 * Struktur:
 * - Key: Alter URL-Pfad (ohne Domain, mit oder ohne trailing slash)
 * - Value: Neuer URL-Pfad (ohne Domain)
 */

export const redirectMap: Record<string, string> = {
  // ========================================
  // STANDORT REDIRECTS (falsche Slugs)
  // ========================================
  // berlin-schöneberg (mit ö) → berlin-schoeneberg (mit oe)
  "/standorte/berlin-schöneberg": "/standorte/berlin-schoeneberg",
  "/standorte/berlin-schöneberg/": "/standorte/berlin-schoeneberg",
  // berlin-potsdam → potsdam (ohne berlin- Präfix)
  "/standorte/berlin-potsdam": "/standorte/potsdam",
  "/standorte/berlin-potsdam/": "/standorte/potsdam",

  // ========================================
  // STRUKTURELLE REDIRECTS
  // ========================================
  "/services": "/leistungen",
  "/services/": "/leistungen",
  "/blog-list": "/ratgeber",
  "/blog-list/": "/ratgeber",
  "/impressum": "/impressum/",

  // ========================================
  // TAG/CATEGORY REDIRECTS (alle zu Ratgeber)
  // ========================================
  "/tag/energieeffizienz": "/ratgeber",
  "/tag/energieeffizienz/": "/ratgeber",
  "/tag/gasthermenwartung": "/ratgeber",
  "/tag/gasthermenwartung/": "/ratgeber",
  "/tag/wartung-der-gastherme": "/ratgeber",
  "/tag/wartung-der-gastherme/": "/ratgeber",
  "/category/politik": "/ratgeber",
  "/category/politik/": "/ratgeber",

  // ========================================
  // ALTE BLOG-ARTIKEL (nicht mehr vorhanden)
  // ========================================
  "/vaillant-gasthermen-wartung-warum-ist-die-jaehrliche-wartung-der-gastherme-wichtig": "/ratgeber",
  "/vaillant-gasthermen-wartung-warum-ist-die-jaehrliche-wartung-der-gastherme-wichtig/": "/ratgeber",
  "/vaillant-gastherme-waermepumpe-wartung-in-berlin": "/ratgeber",
  "/vaillant-gastherme-waermepumpe-wartung-in-berlin/": "/ratgeber",
  "/waermepumpen-installation-berlin-brandenburg": "/leistungen/waermepumpe",
  "/waermepumpen-installation-berlin-brandenburg/": "/leistungen/waermepumpe",
  "/wie-lange-darf-ich-meine-heizung-noch-betreiben": "/ratgeber",
  "/wie-lange-darf-ich-meine-heizung-noch-betreiben/": "/ratgeber",
  "/gebaeudeenergiegesetz-leitfaden-und-neuerungen": "/ratgeber",
  "/gebaeudeenergiegesetz-leitfaden-und-neuerungen/": "/ratgeber",
  "/weihnachtsgruesse-und-betriebsferien-zeit-fuer-besinnliche-momente": "/ratgeber",
  "/weihnachtsgruesse-und-betriebsferien-zeit-fuer-besinnliche-momente/": "/ratgeber",
};

/**
 * Prüft, ob ein Pfad in der Redirect-Map existiert
 * @param pathname - Der zu prüfende Pfad (z.B. "/services" oder "/services/")
 * @returns Der neue Pfad, falls ein Redirect existiert, sonst null
 */
export function getRedirectPath(pathname: string): string | null {
  // Normalisiere den Pfad (entferne trailing slash für Matching)
  const normalizedPath = pathname.endsWith("/") && pathname !== "/"
    ? pathname.slice(0, -1)
    : pathname;

  // Prüfe zuerst exakte Übereinstimmung (mit trailing slash)
  if (redirectMap[pathname]) {
    return redirectMap[pathname];
  }

  // Prüfe normalisierte Version (ohne trailing slash)
  if (redirectMap[normalizedPath]) {
    return redirectMap[normalizedPath];
  }

  return null;
}
