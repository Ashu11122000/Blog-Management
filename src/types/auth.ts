/**
 * ==========================================================
 * Authentication Types
 * ==========================================================
 *
 * Shared authentication models used throughout the application.
 *
 * These interfaces provide strong typing for:
 * - Login forms
 * - Session management
 * - Server Actions
 * - Middleware
 * - Protected routes
 * - User authentication state
 */

/**
 * Supported user roles.
 *
 * Extend this union as your application grows.
 */
export type UserRole = "admin" | "editor" | "author";

/**
 * Authenticated user information.
 */
export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

/**
 * User session stored after authentication.
 */
export interface Session {
  user: AuthUser;
  expiresAt: string;
}

/**
 * Login form payload.
 */
export interface LoginCredentials {
  email: string;
  password: string;
}

/**
 * Authentication state returned by Server Actions.
 */
export interface AuthState {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof LoginCredentials, string>>;
}

/**
 * Cookie payload used to persist authentication.
 *
 * In a production application this would typically
 * contain a signed or encrypted token instead of
 * the complete user object.
 */
export interface SessionCookie {
  sessionId: string;
  expiresAt: string;
}