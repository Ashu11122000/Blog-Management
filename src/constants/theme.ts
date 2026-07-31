/**
 * =============================================================================
 * Theme Constants
 * =============================================================================
 *
 * Shared theme constants used throughout the application.
 *
 * Responsibilities:
 * - Supported themes
 * - Default theme
 * - Theme storage key
 * - Theme colors
 * =============================================================================
 */

export const THEME = {
  /**
   * Available Themes
   */
  MODES: {
    LIGHT: "light",
    DARK: "dark",
    SYSTEM: "system",
  },

  /**
   * Default Theme
   */
  DEFAULT: "system",

  /**
   * Storage Key
   */
  STORAGE_KEY: "blog-management-theme",

  /**
   * HTML Attribute
   */
  ATTRIBUTE: "class",

  /**
   * Theme Color
   */
  COLOR: {
    LIGHT: "#ffffff",
    DARK: "#09090b",
  },

  /**
   * Transition
   */
  TRANSITION: {
    DISABLE_ON_CHANGE: true,
  },
} as const;

export type ThemeConstants = typeof THEME;

export default THEME;
