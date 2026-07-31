/**
 * =============================================================================
 * Email Configuration
 * =============================================================================
 *
 * Centralized email configuration.
 *
 * Responsibilities:
 * - Email sender information
 * - Email verification settings
 * - Token expiration
 * - Retry configuration
 * - Rate limiting
 *
 * NOTE:
 * This file does NOT send emails.
 * Email providers and templates belong elsewhere.
 * =============================================================================
 */

import { env } from "@/config/env";

export const EMAIL_CONFIG = {
  /**
   * Default sender
   */
  sender: {
    name: env.EMAIL_FROM_NAME,
    address: env.EMAIL_FROM_ADDRESS,
  },

  /**
   * Email verification
   */
  verification: {
    tokenExpiry: 60 * 60, // 1 hour
  },

  /**
   * Password reset
   */
  passwordReset: {
    tokenExpiry: 30 * 60, // 30 minutes
  },

  /**
   * Rate limiting
   */
  rateLimit: {
    maxEmailsPerHour: 10,
  },

  /**
   * Retry policy
   */
  retry: {
    attempts: 3,
    delay: 1_000, // ms
  },

  /**
   * Queue (for future background processing)
   */
  queue: {
    enabled: true,
  },
} as const;

export type EmailConfig = typeof EMAIL_CONFIG;

export default EMAIL_CONFIG;
