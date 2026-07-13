import { cookies } from "next/headers";

import type { AuthUser, Session } from "@/types/auth";

/**
 * ==========================================================
 * Session Helpers
 * ==========================================================
 *
 * Utilities for creating, retrieving, validating, and
 * destroying the user's authenticated session.
 *
 * Currently this project uses a cookie-based session for
 * demonstration purposes. In a production application,
 * replace this with a secure session store or authentication
 * provider.
 */

const SESSION_COOKIE_NAME = "blog-management-session";

/**
 * Creates a new authenticated session.
 */
export async function createSession(user: AuthUser): Promise<void> {
  const cookieStore = await cookies();

  const session: Session = {
    user,
    expiresAt: new Date(
      Date.now() + 1000 * 60 * 60 * 24 * 7, // 7 days
    ).toISOString(),
  };

  cookieStore.set(SESSION_COOKIE_NAME, JSON.stringify(session), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: new Date(session.expiresAt),
  });
}

/**
 * Returns the current session if it exists.
 */
export async function getSession(): Promise<Session | null> {
  const cookieStore = await cookies();

  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);

  if (!sessionCookie) {
    return null;
  }

  try {
    return JSON.parse(sessionCookie.value) as Session;
  } catch {
    return null;
  }
}

/**
 * Determines whether the current session is valid.
 */
export async function verifySession(): Promise<boolean> {
  const session = await getSession();

  if (!session) {
    return false;
  }

  return new Date(session.expiresAt) > new Date();
}

/**
 * Returns the authenticated user.
 */
export async function getCurrentUser(): Promise<AuthUser | null> {
  const session = await getSession();

  if (!session) {
    return null;
  }

  return session.user;
}

/**
 * Deletes the current authenticated session.
 */
export async function deleteSession(): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.delete(SESSION_COOKIE_NAME);
}