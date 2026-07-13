import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";

import { notFound } from "next/navigation";

import { routing } from "./routing";

/**
 * ==========================================================
 * Internationalization Request Configuration
 * ==========================================================
 *
 * Responsible for:
 * ----------------
 * ✓ Resolving the current locale
 * ✓ Validating supported locales
 * ✓ Loading translation messages
 * ✓ Returning request configuration
 */

export default getRequestConfig(async ({ requestLocale }) => {
  /**
   * ----------------------------------------------------------
   * Resolve Current Locale
   * ----------------------------------------------------------
   */

  const locale = await requestLocale;

  /**
   * ----------------------------------------------------------
   * Validate Locale
   * ----------------------------------------------------------
   */

  if (!locale || !hasLocale(routing.locales, locale)) {
    notFound();
  }

  /**
   * ----------------------------------------------------------
   * Load Translation Messages
   * ----------------------------------------------------------
   */

  return {
    locale,

    messages: (
      await import(`../messages/${locale}.json`)
    ).default,
  };
});