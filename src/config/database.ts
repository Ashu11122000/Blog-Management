/**
 * =============================================================================
 * Database Configuration
 * =============================================================================
 *
 * Centralized database configuration shared across the application.
 *
 * Responsibilities:
 * - Database timeouts
 * - Connection settings
 * - Transaction settings
 * - Pagination defaults
 * - Query behavior
 *
 * NOTE:
 * This file DOES NOT create a Prisma client.
 * Prisma initialization belongs in src/lib/prisma.ts.
 * =============================================================================
 */

export const DATABASE_CONFIG = {
  /**
   * Transaction configuration
   */
  transaction: {
    timeout: 15_000,
    maxWait: 10_000,
  },

  /**
   * Query behavior
   */
  query: {
    defaultTake: 10,
    maxTake: 100,
  },

  /**
   * Pagination
   */
  pagination: {
    defaultPage: 1,
    defaultLimit: 10,
    maxLimit: 100,
  },

  /**
   * Retry policy
   */
  retry: {
    attempts: 3,
    delay: 500,
  },

  /**
   * Soft delete
   * (for future implementation if added)
   */
  softDelete: {
    enabled: false,
  },

  /**
   * Audit
   */
  audit: {
    enabled: true,
  },
} as const;

export type DatabaseConfig = typeof DATABASE_CONFIG;

export default DATABASE_CONFIG;
