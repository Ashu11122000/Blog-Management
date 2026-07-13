import { defineRouting } from "next-intl/routing";

/**
 * ==========================================================
 * Internationalization Routing
 * ==========================================================
 *
 * Defines the routing configuration for next-intl.
 *
 * Responsibilities
 * ----------------
 * ✓ Supported locales
 * ✓ Default locale
 * ✓ URL localization
 * ✓ Locale prefix behavior
 *
 * Example URLs
 * ------------
 * /en
 * /en/about
 * /en/blog
 *
 * /hi
 * /hi/about
 * /hi/blog
 */

export const routing = defineRouting({
  /**
   * ----------------------------------------------------------
   * Supported Languages
   * ----------------------------------------------------------
   */

  locales: ["en", "hi"],

  /**
   * ----------------------------------------------------------
   * Default Language
   * ----------------------------------------------------------
   */

  defaultLocale: "en",

  /**
   * ----------------------------------------------------------
   * Locale Prefix
   * ----------------------------------------------------------
   *
   * always
   * -------
   * /en
   * /hi
   *
   * This is the recommended option for SEO.
   */

  localePrefix: "always",
});