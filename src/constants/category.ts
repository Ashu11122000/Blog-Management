/**
 * =============================================================================
 * Category Constants
 * =============================================================================
 *
 * Shared constants for category management.
 *
 * Responsibilities:
 * - Category validation limits
 * - Slug rules
 * - Sorting
 * - Pagination
 * - Reserved categories
 * =============================================================================
 */

export const CATEGORY = {
  /**
   * Name
   */
  NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 50,
  },

  /**
   * Description
   */
  DESCRIPTION: {
    MAX_LENGTH: 300,
  },

  /**
   * Slug
   */
  SLUG: {
    MAX_LENGTH: 60,
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
   * Sorting
   */
  SORT: {
    NAME_ASC: "name_asc",
    NAME_DESC: "name_desc",
    CREATED_ASC: "created_asc",
    CREATED_DESC: "created_desc",
  },

  /**
   * Reserved Categories
   *
   * These names cannot be used by users.
   */
  RESERVED: ["admin", "system", "default", "uncategorized"] as const,
} as const;

export type CategoryConstants = typeof CATEGORY;

export default CATEGORY;
