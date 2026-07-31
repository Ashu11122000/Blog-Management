/**
 * =============================================================================
 * Site Configuration
 * =============================================================================
 *
 * Centralized site metadata used throughout the application.
 *
 * Responsibilities:
 * - Application branding
 * - SEO defaults
 * - Social links
 * - Organization information
 * - Open Graph defaults
 *
 * NOTE:
 * This file should only contain static site metadata.
 * =============================================================================
 */

import { env } from "@/config/env";

export const SITE_CONFIG = {
  /**
   * Basic Information
   */
  name: env.NEXT_PUBLIC_APP_NAME,

  title: "Blog Management System",

  description:
    "A modern, enterprise-grade Blog Management System built with Next.js, Prisma, PostgreSQL, and TypeScript.",

  url: env.NEXT_PUBLIC_APP_URL,

  locale: "en-US",

  language: "en",

  /**
   * Organization
   */
  organization: {
    name: env.NEXT_PUBLIC_APP_NAME,
    email: "support@example.com",
  },

  /**
   * SEO
   */
  seo: {
    titleTemplate: "%s | Blog Management System",
    defaultTitle: "Blog Management System",
    defaultDescription:
      "Enterprise-grade blog management platform built with Next.js 16.",
    keywords: [
      "Blog",
      "CMS",
      "Next.js",
      "React",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS",
    ],
  },

  /**
   * Open Graph
   */
  openGraph: {
    type: "website",
    image: "/images/og-image.png",
    imageWidth: 1200,
    imageHeight: 630,
  },

  /**
   * Social
   */
  social: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
    twitter: "",
  },

  /**
   * Support
   */
  support: {
    email: "support@example.com",
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;

export default SITE_CONFIG;
