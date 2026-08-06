import type { ID } from "./common";

/**
 * Supported authentication providers.
 */
export type AuthProvider = "credentials" | "google" | "github";

/**
 * Authentication status.
 */
export type AuthStatus = "authenticated" | "unauthenticated" | "loading";

/**
 * User roles.
 */
export type UserRole = "ADMIN" | "AUTHOR" | "USER";

/**
 * User permissions.
 *
 * These should align with your RBAC implementation.
 */
export type Permission =
  | "posts:create"
  | "posts:read"
  | "posts:update"
  | "posts:delete"
  | "categories:create"
  | "categories:update"
  | "categories:delete"
  | "comments:moderate"
  | "users:manage"
  | "dashboard:access";

/**
 * JWT payload.
 */
export interface JwtPayload {
  readonly sub: ID;
  readonly email: string;
  readonly role: UserRole;
  readonly permissions: readonly Permission[];
  readonly iat?: number;
  readonly exp?: number;
}

/**
 * Authenticated user.
 */
export interface AuthUser {
  readonly id: ID;
  readonly name: string;
  readonly email: string;
  readonly image?: string | null;
  readonly role: UserRole;
  readonly permissions: readonly Permission[];
}

/**
 * Login credentials.
 */
export interface LoginCredentials {
  readonly email: string;
  readonly password: string;
  readonly rememberMe?: boolean;
}

/**
 * User registration.
 */
export interface RegisterCredentials {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly confirmPassword: string;
}

/**
 * Forgot password request.
 */
export interface ForgotPasswordRequest {
  readonly email: string;
}

/**
 * Password reset request.
 */
export interface ResetPasswordRequest {
  readonly token: string;
  readonly password: string;
  readonly confirmPassword: string;
}

/**
 * Email verification request.
 */
export interface VerifyEmailRequest {
  readonly token: string;
}

/**
 * Change password request.
 */
export interface ChangePasswordRequest {
  readonly currentPassword: string;
  readonly newPassword: string;
  readonly confirmPassword: string;
}

/**
 * Authentication session.
 */
export interface AuthSession {
  readonly user: AuthUser;
  readonly accessToken: string;
  readonly refreshToken?: string;
  readonly expiresAt: string;
}

/**
 * Authentication tokens.
 */
export interface AuthTokens {
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly expiresIn: number;
}

/**
 * Refresh token request.
 */
export interface RefreshTokenRequest {
  readonly refreshToken: string;
}
