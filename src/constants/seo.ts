/**
 * =============================================================================
 * SEO Constants
 * =============================================================================
 *
 * Shared SEO configuration used throughout the application.
 *
 * Responsibilities:
 * - Title limits
 * - Meta description limits
 * - Robots directives
 * - Open Graph defaults
 * - Twitter Card defaults
 * - Sitemap configuration
 * =============================================================================
 */

export const SEO = {
  /**
   * Title
   */
  TITLE: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 60,
  },

  /**
   * Description
   */
  DESCRIPTION: {
    MIN_LENGTH: 50,
    MAX_LENGTH: 160,
  },

  /**
   * Keywords
   */
  KEYWORDS: {
    MAX_COUNT: 10,
  },

  /**
   * Open Graph
   */
  OPEN_GRAPH: {
    TYPE: "website",
    IMAGE_WIDTH: 1200,
    IMAGE_HEIGHT: 630,
    IMAGE_ALT: "Blog Management System",
  },

  /**
   * Twitter
   */
  TWITTER: {
    CARD: "summary_large_image",
  },

  /**
   * Robots
   */
  ROBOTS: {
    INDEX: true,
    FOLLOW: true,
    NOARCHIVE: false,
    NOSNIPPET: false,
    NOIMAGEINDEX: false,
  },

  /**
   * Canonical
   */
  CANONICAL: {
    TRAILING_SLASH: false,
  },

  /**
   * Sitemap
   */
  SITEMAP: {
    CHANGE_FREQUENCY: "weekly",
    PRIORITY: 0.8,
  },
} as const;

export type SeoConstants = typeof SEO;

export default SEO;
