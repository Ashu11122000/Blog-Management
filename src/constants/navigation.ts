/**
 * ==========================================================
 * Navigation Types
 * ==========================================================
 */

export interface NavigationItem {
  /**
   * Translation key from messages/*.json
   */
  key: string;

  /**
   * Route path.
   */
  href: string;

  /**
   * Whether the link should be highlighted as primary.
   */
  primary?: boolean;
}

/**
 * ==========================================================
 * Main Navigation
 * ==========================================================
 */

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    key: "home",
    href: "/",
  },
  {
    key: "blog",
    href: "/blog",
  },
  {
    key: "gallery",
    href: "/gallery",
  },
  {
    key: "search",
    href: "/search",
  },
  {
    key: "about",
    href: "/about",
  },
  {
    key: "contact",
    href: "/contact",
  },
];

/**
 * ==========================================================
 * Dashboard Navigation
 * ==========================================================
 */

export const DASHBOARD_NAVIGATION: NavigationItem[] = [
  {
    key: "dashboard",
    href: "/dashboard",
  },
  {
    key: "posts",
    href: "/dashboard/posts",
  },
  {
    key: "categories",
    href: "/dashboard/categories",
  },
  {
    key: "gallery",
    href: "/dashboard/gallery",
  },
  {
    key: "profile",
    href: "/dashboard/profile",
  },
  {
    key: "settings",
    href: "/dashboard/settings",
  },
];

/**
 * ==========================================================
 * Footer Navigation
 * ==========================================================
 */

export const FOOTER_NAVIGATION: NavigationItem[] = [
  {
    key: "privacyPolicy",
    href: "/privacy",
  },
  {
    key: "termsOfService",
    href: "/terms",
  },
  {
    key: "contact",
    href: "/contact",
  },
];