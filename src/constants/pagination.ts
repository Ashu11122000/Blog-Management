/**
 * =============================================================================
 * Pagination Constants
 * =============================================================================
 *
 * Shared pagination configuration used throughout the application.
 *
 * Responsibilities:
 * - Default pagination values
 * - Maximum page size
 * - Allowed page size options
 * - Pagination limits
 * =============================================================================
 */

export const PAGINATION = {
  /**
   * Default Values
   */
  DEFAULT_PAGE: 1,

  DEFAULT_PAGE_SIZE: 10,

  /**
   * Limits
   */
  MIN_PAGE_SIZE: 5,

  MAX_PAGE_SIZE: 100,

  /**
   * Available Options
   */
  PAGE_SIZE_OPTIONS: [10, 20, 50, 100] as const,

  /**
   * UI
   */
  MAX_VISIBLE_PAGE_BUTTONS: 5,

  /**
   * Infinite Scroll
   */
  DEFAULT_CURSOR_LIMIT: 20,
} as const;

export type PaginationConstants = typeof PAGINATION;

export default PAGINATION;
