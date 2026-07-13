import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

/**
 * ==========================================================
 * Next-Intl Plugin
 * ==========================================================
 *
 * Integrates next-intl with the Next.js App Router.
 */

const withNextIntl = createNextIntlPlugin();

/**
 * ==========================================================
 * Next.js Configuration
 * ==========================================================
 *
 * Features
 * --------
 * ✓ next-intl support
 * ✓ Remote image configuration
 * ✓ TypeScript support
 * ✓ App Router compatible
 */

const nextConfig: NextConfig = {
  /**
   * ----------------------------------------------------------
   * Remote Images
   * ----------------------------------------------------------
   */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
};

/**
 * ==========================================================
 * Export Configuration
 * ==========================================================
 */

export default withNextIntl(nextConfig);