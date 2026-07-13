"use server";

import { redirect } from "next/navigation";

import {
  DEFAULT_REDIRECTS,
  ROUTES,
} from "@/constants/routes";
import { auth } from "@/lib/auth";
import { createSession, deleteSession } from "@/lib/session";
import type {
  AuthState,
  AuthUser,
  LoginCredentials,
} from "@/types/auth";

/**
 * ==========================================================
 * Authentication Server Actions
 * ==========================================================
 *
 * Responsibilities:
 * - Login
 * - Logout
 * - Session creation
 * - Authentication helpers
 *
 * NOTE:
 * This project currently uses a mock user for learning
 * purposes. Replace the mock authentication with a real
 * database lookup in production.
 */

/**
 * Demo user.
 *
 * Replace this with a database query later.
 */
export const MOCK_USER: AuthUser = {
  id: "1",
  name: "Ashish Sharma",
  email: "admin@example.com",
  role: "admin",
  avatar: "/images/authors/admin.jpg",
};

/**
 * Demo password.
 *
 * Replace this with hashed password verification.
 */
const DEMO_PASSWORD = "admin123";

/**
 * ==========================================================
 * Login
 * ==========================================================
 */
export async function login(
  credentials: LoginCredentials,
): Promise<AuthState> {
  const { email, password } = credentials;

  if (!email || !password) {
    return {
      success: false,
      message: "Email and password are required.",
      errors: {
        email: !email ? "Email is required." : undefined,
        password: !password
          ? "Password is required."
          : undefined,
      },
    };
  }

  if (
    email !== MOCK_USER.email ||
    password !== DEMO_PASSWORD
  ) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  await createSession(MOCK_USER);

  return {
    success: true,
    message: "Login successful.",
  };
}

/**
 * Login and immediately redirect.
 */
export async function loginAndRedirect(
  credentials: LoginCredentials,
): Promise<AuthState> {
  const result = await login(credentials);

  if (result.success) {
    redirect(DEFAULT_REDIRECTS.AFTER_LOGIN);
  }

  return result;
}

/**
 * ==========================================================
 * Logout
 * ==========================================================
 */
export async function logout(): Promise<void> {
  await deleteSession();

  redirect(DEFAULT_REDIRECTS.AFTER_LOGOUT);
}

/**
 * ==========================================================
 * Authentication Helpers
 * ==========================================================
 */

/**
 * Returns the currently authenticated user.
 */
export async function getCurrentAuthUser() {
  return auth();
}

/**
 * Returns whether a user is currently authenticated.
 */
export async function isLoggedIn(): Promise<boolean> {
  const user = await auth();

  return user !== null;
}

/**
 * ==========================================================
 * Development Helpers
 * ==========================================================
 */

/**
 * Validates demo credentials.
 *
 * Replace with database verification later.
 */
export async function validateCredentials(
  credentials: LoginCredentials,
): Promise<boolean> {
  return (
    credentials.email === MOCK_USER.email &&
    credentials.password === DEMO_PASSWORD
  );
}

/**
 * Returns demo credentials.
 *
 * Remove this helper in production.
 */
export async function getDemoCredentials() {
  return {
    email: MOCK_USER.email,
    password: DEMO_PASSWORD,
    loginRoute: ROUTES.LOGIN,
  };
}