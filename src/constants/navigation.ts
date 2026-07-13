/**
 * ==========================================================
 * Navigation Types
 * ==========================================================
 */

export interface NavigationItem {
  /**
   * Navigation label.
   */
  label: string;

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
    label: "Home",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Search",
    href: "/search",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
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
    label: "Gallery",
    href: "/dashboard/gallery",
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
  },
  {
    label: "Settings",
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
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Terms of Service",
    href: "/terms",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

