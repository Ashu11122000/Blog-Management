/**
 * ============================================================================
 * Authentication Configuration
 * ============================================================================
 *
 * Centralized authentication configuration used throughout the application.
 *
 * Responsibilities:
 * - Session configuration
 * - Cookie configuration
 * - Password policy
 * - Login security
 * - JWT configuration
 * - Protected route configuration
 *
 * NOTE:
 * This file intentionally DOES NOT initialize NextAuth.
 * Authentication implementation belongs in the auth/ folder.
 * ============================================================================
 */

export const AUTH_CONFIG = {
  /**
   * Session
   */
  session: {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 24 hours
  },

  /**
   * JWT
   */
  jwt: {
    maxAge: 60 * 60 * 24 * 7, // 7 days
  },

  /**
   * Cookie
   */
  cookie: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax" as const,
    path: "/",
  },

  /**
   * Password Policy
   */
  password: {
    minLength: 8,
    maxLength: 128,
    requireUppercase: true,
    requireLowercase: true,
    requireNumber: true,
    requireSpecialCharacter: true,
  },

  /**
   * Login Security
   */
  security: {
    maxLoginAttempts: 5,
    lockoutDuration: 15 * 60, // seconds (15 min)
  },

  /**
   * Verification
   */
  verification: {
    emailTokenExpiry: 60 * 60, // 1 hour
    passwordResetTokenExpiry: 60 * 30, // 30 min
  },

  /**
   * Protected Routes
   */
  routes: {
    signIn: "/login",
    signOut: "/logout",
    error: "/auth/error",
    verifyRequest: "/auth/verify",
    newUser: "/dashboard",
  },
} as const;

export type AuthConfig = typeof AUTH_CONFIG;

export default AUTH_CONFIG;
