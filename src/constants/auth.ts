/**
 * =============================================================================
 * Authentication Constants
 * =============================================================================
 *
 * Shared authentication constants used throughout the application.
 *
 * Responsibilities:
 * - User roles
 * - Session configuration
 * - Cookie names
 * - Token expiration
 * - Password policy
 * - Login security
 * =============================================================================
 */

export const AUTH = {
  /**
   * User Roles
   */
  ROLES: {
    ADMIN: "ADMIN",
    AUTHOR: "AUTHOR",
    USER: "USER",
  },

  /**
   * Session
   */
  SESSION: {
    MAX_AGE: 60 * 60 * 24 * 7, // 7 days
    UPDATE_AGE: 60 * 60 * 24, // 24 hours
  },

  /**
   * JWT
   */
  JWT: {
    MAX_AGE: 60 * 60 * 24 * 7, // 7 days
  },

  /**
   * Password Policy
   */
  PASSWORD: {
    MIN_LENGTH: 8,
    MAX_LENGTH: 128,
    REQUIRE_UPPERCASE: true,
    REQUIRE_LOWERCASE: true,
    REQUIRE_NUMBER: true,
    REQUIRE_SPECIAL_CHARACTER: true,
  },

  /**
   * Login Security
   */
  LOGIN: {
    MAX_ATTEMPTS: 5,
    LOCKOUT_DURATION: 15 * 60, // seconds
  },

  /**
   * Verification Tokens
   */
  TOKEN: {
    EMAIL_VERIFICATION_EXPIRY: 60 * 60, // 1 hour
    PASSWORD_RESET_EXPIRY: 30 * 60, // 30 minutes
  },

  /**
   * Cookie Names
   *
   * Using "__Secure-" ensures cookies are secure in production.
   */
  COOKIES: {
    SESSION: "__Secure-auth.session-token",
    CSRF: "__Host-auth.csrf-token",
    CALLBACK_URL: "auth.callback-url",
  },

  /**
   * Authentication Routes
   */
  ROUTES: {
    SIGN_IN: "/login",
    SIGN_OUT: "/logout",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",
    VERIFY_EMAIL: "/verify-email",
    ERROR: "/auth/error",
    DASHBOARD: "/dashboard",
  },
} as const;

export type AuthConstants = typeof AUTH;

export default AUTH;
