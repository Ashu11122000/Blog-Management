import { NextRequest, NextResponse } from "next/server";

/**
 * ==========================================================
 * Middleware
 * ==========================================================
 *
 * Global middleware for the Blog Management System.
 *
 * Current Responsibilities
 * ------------------------
 * ✓ Allow all public routes
 * ✓ Apply common security headers
 * ✓ Centralized request handling
 *
 * Future Enhancements
 * -------------------
 * • Authentication & Authorization
 * • Internationalization (next-intl)
 * • Analytics
 * • URL rewrites
 * • Redirect rules
 * • Rate limiting
 * • Maintenance mode
 */

export function middleware(request: NextRequest) {
  /**
   * ----------------------------------------------------------
   * Continue Request
   * ----------------------------------------------------------
   */

  const response = NextResponse.next();

  /**
   * ----------------------------------------------------------
   * Security Headers
   * ----------------------------------------------------------
   */

  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set(
    "Referrer-Policy",
    "strict-origin-when-cross-origin"
  );

  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );

  return response;
}

/**
 * ==========================================================
 * Matcher
 * ==========================================================
 *
 * Run middleware for all application routes while excluding:
 * - API routes
 * - Next.js internals
 * - Static assets
 * - Favicon
 * - Images
 */

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*).*)",
  ],
};