import createMiddleware from "next-intl/middleware";

import { routing } from "@/i18n/routing";

/**
 * ==========================================================
 * Internationalization Proxy
 * ==========================================================
 *
 * Handles:
 * --------
 * ✓ Locale detection
 * ✓ Locale-based redirects
 * ✓ Localized routing
 * ✓ Accept-Language header detection
 * ✓ Default locale fallback
 *
 * Example
 * -------
 * /          → /en
 * /about     → /en/about
 * /hi        → Hindi
 * /en/blog   → English Blog
 */

export default createMiddleware(routing);

/**
 * ==========================================================
 * Matcher
 * ==========================================================
 *
 * Execute the proxy for all application routes except:
 *
 * ✓ API routes
 * ✓ Next.js internals
 * ✓ Static assets
 * ✓ Images
 * ✓ Favicon
 */

export const config = {
  matcher: [
    "/",
    "/(en|hi)/:path*",
    "/((?!api|_next|.*\\..*).*)",
  ],
};