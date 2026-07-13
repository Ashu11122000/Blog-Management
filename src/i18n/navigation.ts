import { createNavigation } from "next-intl/navigation";

import { routing } from "./routing";

/**
 * ==========================================================
 * Internationalized Navigation
 * ==========================================================
 *
 * Creates locale-aware navigation helpers based on the
 * routing configuration.
 *
 * Exports
 * -------
 * ✓ Link
 * ✓ redirect
 * ✓ permanentRedirect
 * ✓ useRouter
 * ✓ usePathname
 * ✓ getPathname
 *
 * These helpers automatically work with your configured
 * locales and localized routes.
 */

export const {
  Link,
  redirect,
  permanentRedirect,
  usePathname,
  useRouter,
  getPathname,
} = createNavigation(routing);