/**
 * =============================================================================
 * Site Configuration
 * =============================================================================
 *
 * Centralized site metadata.
 *
 * Responsibilities:
 * - Application identity
 * - Branding
 * - Organization information
 * - Contact information
 * - Social profiles
 * =============================================================================
 */

export const SITE_CONFIG = {
  /**
   * Application
   */
  name: "Blog Management System",

  shortName: "Blog Management",

  title: "Blog Management System",

  description:
    "A modern, enterprise-grade Blog Management System built with Next.js 16, React 19, Prisma, PostgreSQL, TypeScript, and Tailwind CSS.",

  url: "http://localhost:3000",

  locale: "en-US",

  language: "en",

  /**
   * Author
   */
  author: {
    name: "Ashish Sharma",
    email: "ashu11vats@gmail.com",
  },

  /**
   * Organization
   */
  organization: {
    name: "Blog Management System",
  },

  /**
   * SEO
   */
  keywords: [
    "Blog Management System",
    "Blog CMS",
    "Next.js",
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Prisma ORM",
    "PostgreSQL",
    "App Router",
  ],

  /**
   * Social Links
   */
  social: {
    github: "https://github.com/Ashu11122000",
    linkedin: "https://www.linkedin.com/in/ashish-sharma-383439191/",
  },

  /**
   * Assets
   */
  images: {
    logo: "/logo.png",
    favicon: "/favicon.ico",
    ogImage: "/images/og-image.png",
  },

  /**
   * Support
   */
  support: {
    email: "ashu11vats@gmail.com",
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;

export default SITE_CONFIG;
