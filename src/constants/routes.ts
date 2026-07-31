/**
 * =============================================================================
 * Route Constants
 * =============================================================================
 *
 * Centralized application routes.
 *
 * Responsibilities:
 * - Public routes
 * - Authentication routes
 * - Dashboard routes
 * - API routes
 * - Utility helpers
 *
 * =============================================================================
 */

export const ROUTES = {
  /**
   * Public Routes
   */
  PUBLIC: {
    HOME: "/",
    BLOG: "/blog",
    BLOG_DETAILS: "/blog",
    CATEGORIES: "/categories",
    TAGS: "/tags",
    ABOUT: "/about",
    CONTACT: "/contact",
    SEARCH: "/search",
    PRIVACY_POLICY: "/privacy-policy",
    TERMS_OF_SERVICE: "/terms-of-service",
    COOKIE_POLICY: "/cookie-policy",
    NOT_FOUND: "/not-found",
  },

  /**
   * Authentication
   */
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
    LOGOUT: "/logout",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",
    VERIFY_EMAIL: "/verify-email",
    ERROR: "/auth/error",
  },

  /**
   * Dashboard
   */
  DASHBOARD: {
    HOME: "/dashboard",

    POSTS: "/dashboard/posts",
    CREATE_POST: "/dashboard/posts/create",

    CATEGORIES: "/dashboard/categories",
    CREATE_CATEGORY: "/dashboard/categories/create",

    TAGS: "/dashboard/tags",
    CREATE_TAG: "/dashboard/tags/create",

    COMMENTS: "/dashboard/comments",

    USERS: "/dashboard/users",

    PROFILE: "/dashboard/profile",

    SETTINGS: "/dashboard/settings",
  },

  /**
   * API
   */
  API: {
    ROOT: "/api",
    V1: "/api/v1",
    UPLOAD: "/api/uploadthing",
    AUTH: "/api/auth",
  },
} as const;

export type Routes = typeof ROUTES;

export default ROUTES;
