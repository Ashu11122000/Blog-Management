"use client";

import { Globe } from "lucide-react";
import { useLocale } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";

import { routing } from "@/i18n/routing";

/**
 * ==========================================================
 * Language Switcher
 * ==========================================================
 *
 * Features
 * --------
 * ✓ English / Hindi
 * ✓ Preserves current page
 * ✓ Works with next-intl routing
 * ✓ Accessible
 */

export default function LanguageSwitcher() {
  const locale = useLocale();

  const pathname = usePathname();

  const router = useRouter();

  function changeLanguage(nextLocale: string) {
    router.replace(pathname, {
      locale: nextLocale,
    });
  }

  return (
    <div className="flex items-center gap-2 rounded-lg border border-(--border) px-3 py-2">
      <Globe className="h-4 w-4" />

      <select
        value={locale}
        onChange={(event) =>
          changeLanguage(event.target.value)
        }
        className="bg-transparent text-sm outline-none"
        aria-label="Select Language"
      >
        {routing.locales.map((localeOption) => (
          <option
            key={localeOption}
            value={localeOption}
          >
            {localeOption === "en"
              ? "English"
              : "हिन्दी"}
          </option>
        ))}
      </select>
    </div>
  );
}