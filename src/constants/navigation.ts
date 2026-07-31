/**
 * =============================================================================
 * Navigation Constants
 * =============================================================================
 *
 * Centralized navigation configuration.
 *
 * Responsibilities:
 * - Main navigation
 * - Dashboard navigation
 * - Footer navigation
 * - External links
 *
 * NOTE:
 * Do NOT import React components or icons here.
 * Keep this file framework-agnostic.
 * =============================================================================
 */

export const NAVIGATION = {
  /**
   * Public Navigation
   */
  MAIN: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Categories",
      href: "/categories",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  /**
   * Dashboard Navigation
   */
  DASHBOARD: [
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Posts",
      href: "/dashboard/posts",
    },
    {
      label: "Categories",
      href: "/dashboard/categories",
    },
    {
      label: "Tags",
      href: "/dashboard/tags",
    },
    {
      label: "Comments",
      href: "/dashboard/comments",
    },
    {
      label: "Users",
      href: "/dashboard/users",
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
    },
  ],

  /**
   * Footer Navigation
   */
  FOOTER: [
    {
      label: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      label: "Terms of Service",
      href: "/terms-of-service",
    },
    {
      label: "Cookie Policy",
      href: "/cookie-policy",
    },
  ],

  /**
   * External Links
   */
  EXTERNAL: {
    GITHUB: "https://github.com",
    LINKEDIN: "https://linkedin.com",
  },
} as const;

export type NavigationConstants = typeof NAVIGATION;

export default NAVIGATION;
