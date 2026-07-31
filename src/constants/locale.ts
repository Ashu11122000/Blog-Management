/**
 * =============================================================================
 * Locale Constants
 * =============================================================================
 *
 * Shared locale and internationalization constants.
 *
 * Responsibilities:
 * - Supported locales
 * - Default locale
 * - Time zone
 * - Date/time formats
 * =============================================================================
 */

export const LOCALE = {
  /**
   * Default Locale
   */
  DEFAULT: "en",

  /**
   * Fallback Locale
   */
  FALLBACK: "en",

  /**
   * Supported Locales
   */
  SUPPORTED: [
    "en",
    // "hi",
    // "fr",
    // "de",
    // "es",
  ] as const,

  /**
   * Language Tags
   */
  LANGUAGE_TAGS: {
    ENGLISH: "en-US",
    // HINDI: "hi-IN",
    // FRENCH: "fr-FR",
  },

  /**
   * Default Time Zone
   */
  TIME_ZONE: "UTC",

  /**
   * Date Formatting
   */
  DATE: {
    SHORT: "MMM d, yyyy",
    LONG: "MMMM d, yyyy",
    DATE_TIME: "MMM d, yyyy HH:mm",
  },

  /**
   * Number Formatting
   */
  NUMBER: {
    MAXIMUM_FRACTION_DIGITS: 2,
  },
} as const;

export type SupportedLocale = (typeof LOCALE.SUPPORTED)[number];

export default LOCALE;
