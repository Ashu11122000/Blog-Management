import type { ID } from "./common";

/**
 * Navigation item target.
 */
export type NavigationTarget = "_self" | "_blank";

/**
 * Navigation item.
 */
export interface NavigationItem {
  readonly id: ID;
  readonly label: string;
  readonly href: string;

  readonly icon?: string;

  readonly badge?: string;

  readonly target?: NavigationTarget;

  readonly disabled?: boolean;

  readonly children?: readonly NavigationItem[];
}

/**
 * Breadcrumb item.
 */
export interface BreadcrumbItem {
  readonly label: string;
  readonly href?: string;
}

/**
 * Pagination breadcrumb.
 */
export interface Breadcrumb {
  readonly items: readonly BreadcrumbItem[];
}

/**
 * Navigation group.
 */
export interface NavigationGroup {
  readonly id: ID;
  readonly title: string;
  readonly items: readonly NavigationItem[];
}

/**
 * Footer link.
 */
export interface FooterLink {
  readonly label: string;
  readonly href: string;
}

/**
 * Footer section.
 */
export interface FooterSection {
  readonly title: string;
  readonly links: readonly FooterLink[];
}

/**
 * Social navigation link.
 */
export interface SocialLink {
  readonly id: ID;
  readonly platform: string;
  readonly href: string;
  readonly icon: string;
}

/**
 * Mobile navigation state.
 */
export interface MobileNavigationState {
  readonly isOpen: boolean;
}

/**
 * Sidebar navigation state.
 */
export interface SidebarNavigationState {
  readonly collapsed: boolean;
}
