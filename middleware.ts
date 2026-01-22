import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getRedirectPath } from "@/lib/redirects";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host") || "";
  let shouldRedirect = false;

  // 1. HTTP → HTTPS Redirect (Sicherheit)
  if (request.nextUrl.protocol === "http:") {
    url.protocol = "https:";
    shouldRedirect = true;
  }

  // 2. www → non-www Redirect (SEO: Duplicate Content vermeiden)
  if (hostname.startsWith("www.")) {
    const newHostname = hostname.replace(/^www\./, "");
    url.hostname = newHostname;
    shouldRedirect = true;
  }

  // Führe Redirect aus falls nötig (301 Permanent Redirect)
  // Wichtig: Nur ein Redirect pro Request, daher prüfen wir hier
  if (shouldRedirect) {
    return NextResponse.redirect(url, 301);
  }

  // 3. Alte URLs → Neue URLs Redirect (SEO: Link-Juice erhalten)
  // Wird NACH HTTP→HTTPS und www→non-www Checks ausgeführt
  const pathname = request.nextUrl.pathname;
  const redirectPath = getRedirectPath(pathname);

  if (redirectPath) {
    // Erstelle neue URL mit dem Redirect-Pfad
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = redirectPath;
    // Query-Parameter beibehalten (z.B. ?utm_source=...)
    // nextUrl.clone() behält bereits Query-Parameter bei
    
    return NextResponse.redirect(newUrl, 301);
  }

  return NextResponse.next();
}

// Middleware nur auf Anfragen anwenden, die nicht zu statischen Assets gehören
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|images).*)",
  ],
};
