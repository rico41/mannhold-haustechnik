import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host") || "";

  // Prüfe ob die Anfrage mit "www." beginnt
  if (hostname.startsWith("www.")) {
    // Entferne "www." und leite auf die kanonische Domain um
    const newHostname = hostname.replace(/^www\./, "");
    url.hostname = newHostname;
    
    // 301 Permanent Redirect für SEO
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
