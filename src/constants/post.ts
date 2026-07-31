/**
 * =============================================================================
 * Blog Constants
 * =============================================================================
 *
 * Centralized blog-related constants.
 *
 * Responsibilities:
 * - Blog status
 * - Visibility
 * - Sorting
 * - Pagination
 * - Reading time
 * - Slug
 * - SEO
 * =============================================================================
 */

export const BLOG = {
  /**
   * Publication Status
   */
  STATUS: {
    DRAFT: "DRAFT",
    PUBLISHED: "PUBLISHED",
    ARCHIVED: "ARCHIVED",
  },

  /**
   * Visibility
   */
  VISIBILITY: {
    PUBLIC: "PUBLIC",
    PRIVATE: "PRIVATE",
    PASSWORD_PROTECTED: "PASSWORD_PROTECTED",
  },

  /**
   * Sorting
   */
  SORT: {
    NEWEST: "newest",
    OLDEST: "oldest",
    TITLE_ASC: "title_asc",
    TITLE_DESC: "title_desc",
    MOST_VIEWED: "most_viewed",
    MOST_COMMENTED: "most_commented",
  },

  /**
   * Pagination
   */
  PAGINATION: {
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 10,
    MAX_LIMIT: 100,
  },

  /**
   * Slug
   */
  SLUG: {
    MAX_LENGTH: 120,
  },

  /**
   * Reading Time
   */
  READING_TIME: {
    WORDS_PER_MINUTE: 200,
    MINIMUM_MINUTES: 1,
  },

  /**
   * Excerpt
   */
  EXCERPT: {
    MAX_LENGTH: 200,
  },

  /**
   * SEO
   */
  SEO: {
    TITLE_MAX_LENGTH: 60,
    DESCRIPTION_MAX_LENGTH: 160,
  },

  /**
   * Featured Image
   */
  FEATURED_IMAGE: {
    ALT_MAX_LENGTH: 150,
  },
} as const;

export type BlogConstants = typeof BLOG;

export default BLOG;
