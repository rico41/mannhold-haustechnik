import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

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
  if (shouldRedirect) {
    return NextResponse.redirect(url, 301);
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
