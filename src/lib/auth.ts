import { redirect } from "next/navigation";

import { ROUTES } from "@/constants/routes";
import type { AuthUser, UserRole } from "@/types/auth";

import {
  deleteSession,
  getCurrentUser,
  getSession,
  verifySession,
} from "./session";

/**
 * ==========================================================
 * Authentication Helpers
 * ==========================================================
 *
 * High-level authentication utilities used throughout
 * the application.
 *
 * Responsibilities:
 * - Get authenticated user
 * - Check authentication
 * - Protect pages
 * - Check roles
 * - Logout helpers
 *
 * These helpers build upon the lower-level session
 * utilities found in session.ts.
 */

/**
 * Returns the currently authenticated user.
 */
export async function auth(): Promise<AuthUser | null> {
  return getCurrentUser();
}

/**
 * Returns whether a user is authenticated.
 */
export async function isAuthenticated(): Promise<boolean> {
  return verifySession();
}

/**
 * Returns the active session.
 */
export async function getAuthSession() {
  return getSession();
}

/**
 * Protects a page or Server Component.
 *
 * Redirects unauthenticated users to the login page.
 */
export async function requireAuth(): Promise<AuthUser> {
  const user = await auth();

  if (!user) {
    redirect(ROUTES.LOGIN);
  }

  return user;
}

/**
 * Ensures the authenticated user has one of the
 * required roles.
 */
export async function requireRole(
  roles: UserRole[],
): Promise<AuthUser> {
  const user = await requireAuth();

  if (!roles.includes(user.role)) {
    redirect(ROUTES.DASHBOARD);
  }

  return user;
}

/**
 * Logs out the current user.
 */
export async function signOut(): Promise<void> {
  await deleteSession();
}