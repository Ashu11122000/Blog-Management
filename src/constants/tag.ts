/**
 * =============================================================================
 * Tag Constants
 * =============================================================================
 *
 * Shared constants for tag management.
 *
 * Responsibilities:
 * - Tag validation
 * - Slug rules
 * - Sorting
 * - Limits
 * =============================================================================
 */

export const TAG = {
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
   * Usage
   */
  USAGE: {
    MAX_TAGS_PER_POST: 10,
  },

  /**
   * Sorting
   */
  SORT: {
    NAME_ASC: "name_asc",
    NAME_DESC: "name_desc",
    CREATED_ASC: "created_asc",
    CREATED_DESC: "created_desc",
    MOST_USED: "most_used",
  },

  /**
   * Reserved Tags
   */
  RESERVED: ["admin", "system", "default"] as const,
} as const;

export type TagConstants = typeof TAG;

export default TAG;
