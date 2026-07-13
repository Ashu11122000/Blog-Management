/**
 * ==========================================================
 * Application Routes
 * ==========================================================
 *
 * Centralized route definitions used throughout the application.
 *
 * Benefits:
 * - Avoids hardcoded route strings
 * - Improves maintainability
 * - Provides autocomplete and type safety
 * - Keeps navigation, middleware, and redirects consistent
 */

export const ROUTES = {
  // Public Pages
  HOME: "/",
  ABOUT: "/about",
  BLOG: "/blog",
  CONTACT: "/contact",
  GALLERY: "/gallery",
  SEARCH: "/search",

  // Authentication
  LOGIN: "/login",
  LOGOUT: "/logout",

  // Dashboard
  DASHBOARD: "/dashboard",
  DASHBOARD_POSTS: "/dashboard/posts",
  DASHBOARD_CATEGORIES: "/dashboard/categories",
  DASHBOARD_GALLERY: "/dashboard/gallery",
  DASHBOARD_PROFILE: "/dashboard/profile",
  DASHBOARD_SETTINGS: "/dashboard/settings",
} as const;

/**
 * Routes accessible without authentication.
 */
export const PUBLIC_ROUTES = [
  ROUTES.HOME,
  ROUTES.ABOUT,
  ROUTES.BLOG,
  ROUTES.CONTACT,
  ROUTES.GALLERY,
  ROUTES.SEARCH,
  ROUTES.LOGIN,
] as const;

/**
 * Routes that require authentication.
 */
export const PROTECTED_ROUTES = [
  ROUTES.DASHBOARD,
  ROUTES.DASHBOARD_POSTS,
  ROUTES.DASHBOARD_CATEGORIES,
  ROUTES.DASHBOARD_GALLERY,
  ROUTES.DASHBOARD_PROFILE,
  ROUTES.DASHBOARD_SETTINGS,
] as const;

/**
 * Authentication-related routes.
 * Authenticated users should typically be redirected away from these.
 */
export const AUTH_ROUTES = [ROUTES.LOGIN] as const;

/**
 * Default redirect destinations.
 */
export const DEFAULT_REDIRECTS = {
  AFTER_LOGIN: ROUTES.DASHBOARD,
  AFTER_LOGOUT: ROUTES.LOGIN,
  UNAUTHORIZED: ROUTES.LOGIN,
} as const;