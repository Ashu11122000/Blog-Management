/**
 * =============================================================================
 * Comment Constants
 * =============================================================================
 *
 * Centralized constants for comment management.
 *
 * Responsibilities:
 * - Comment validation
 * - Moderation
 * - Pagination
 * - Sorting
 * - Status
 * =============================================================================
 */

export const COMMENT = {
  /**
   * Content Validation
   */
  CONTENT: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 2_000,
  },

  /**
   * Pagination
   */
  PAGINATION: {
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 20,
    MAX_LIMIT: 100,
  },

  /**
   * Moderation Status
   */
  STATUS: {
    PENDING: "PENDING",
    APPROVED: "APPROVED",
    REJECTED: "REJECTED",
    SPAM: "SPAM",
  },

  /**
   * Sorting
   */
  SORT: {
    NEWEST: "newest",
    OLDEST: "oldest",
    MOST_LIKED: "most_liked",
  },

  /**
   * Nesting
   */
  REPLY: {
    MAX_DEPTH: 5,
  },

  /**
   * Rate Limiting
   */
  LIMITS: {
    MAX_COMMENTS_PER_MINUTE: 10,
  },
} as const;

export type CommentConstants = typeof COMMENT;

export default COMMENT;
