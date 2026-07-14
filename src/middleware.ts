import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

import { routing } from "@/i18n/routing";

/**
 * ==========================================================
 * Internationalization Middleware
 * ==========================================================
 *
 * Responsibilities
 * ----------------
 * ✓ Locale detection
 * ✓ Redirect "/" → "/en"
 * ✓ Locale-based routing
 * ✓ Security headers
 *
 * Future Enhancements
 * -------------------
 * • Authentication
 * • Authorization
 * • Analytics
 * • Rate limiting
 * • Maintenance mode
 * • URL rewrites
 */

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  /**
   * ----------------------------------------------------------
   * next-intl Middleware
   * ----------------------------------------------------------
   */

  const response = intlMiddleware(request);

  /**
   * ----------------------------------------------------------
   * Security Headers
   * ----------------------------------------------------------
   */

  response.headers.set("X-Frame-Options", "DENY");

  response.headers.set(
    "X-Content-Type-Options",
    "nosniff"
  );

  response.headers.set(
    "Referrer-Policy",
    "strict-origin-when-cross-origin"
  );

  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );

  response.headers.set(
    "X-DNS-Prefetch-Control",
    "on"
  );

  response.headers.set(
    "X-Download-Options",
    "noopen"
  );

  response.headers.set(
    "X-Permitted-Cross-Domain-Policies",
    "none"
  );

  response.headers.set(
    "Cross-Origin-Opener-Policy",
    "same-origin"
  );

  return response;
}

/**
 * ==========================================================
 * Matcher
 * ==========================================================
 *
 * Apply middleware to:
 * ✓ Root route
 * ✓ Locale routes
 * ✓ All application pages
 *
 * Exclude:
 * - API routes
 * - Next.js internals
 * - Static assets
 * - Images
 * - Favicon
 */

export const config = {
  matcher: [
    "/",
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};