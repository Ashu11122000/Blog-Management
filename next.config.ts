import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

/**
 * ==========================================================
 * Next-Intl Plugin
 * ==========================================================
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
  images: {
    remotePatterns: [
      // Unsplash
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },

      // Random User avatars
      {
        protocol: "https",
        hostname: "randomuser.me",
      },

      // Picsum Photos
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default withNextIntl(nextConfig);