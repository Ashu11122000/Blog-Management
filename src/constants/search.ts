/**
 * =============================================================================
 * Search Constants
 * =============================================================================
 *
 * Shared search configuration used throughout the application.
 *
 * Responsibilities:
 * - Search query validation
 * - Debounce settings
 * - Result limits
 * - Sorting
 * - Highlighting
 * =============================================================================
 */

export const SEARCH = {
  /**
   * Query
   */
  QUERY: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 100,
  },

  /**
   * Debounce (milliseconds)
   */
  DEBOUNCE: 300,

  /**
   * Results
   */
  RESULTS: {
    DEFAULT_LIMIT: 10,
    MAX_LIMIT: 50,
  },

  /**
   * Search Fields
   */
  FIELDS: {
    TITLE: "title",
    CONTENT: "content",
    EXCERPT: "excerpt",
    CATEGORY: "category",
    TAGS: "tags",
    AUTHOR: "author",
  },

  /**
   * Sorting
   */
  SORT: {
    RELEVANCE: "relevance",
    NEWEST: "newest",
    OLDEST: "oldest",
    TITLE_ASC: "title_asc",
    TITLE_DESC: "title_desc",
  },

  /**
   * Highlight
   */
  HIGHLIGHT: {
    ENABLED: true,
    MAX_SNIPPET_LENGTH: 200,
  },

  /**
   * Suggestions
   */
  SUGGESTIONS: {
    ENABLED: true,
    LIMIT: 5,
  },
} as const;

export type SearchConstants = typeof SEARCH;

export default SEARCH;
