"use client";

import { Globe } from "lucide-react";
import { useLocale } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

/**
 * ==========================================================
 * Premium Language Switcher
 * ==========================================================
 *
 * Features
 * --------
 * ✓ English / Hindi
 * ✓ Preserves current page
 * ✓ next-intl Routing
 * ✓ Accessible
 * ✓ Glassmorphism UI
 * ✓ Premium Hover Effects
 * ✓ Dark Mode
 * ✓ Responsive
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
    <div
      className={cn(
        "group inline-flex items-center gap-3",
        "rounded-2xl border border-border/60",
        "bg-background/70 px-4 py-2.5",
        "backdrop-blur-xl",
        "shadow-lg shadow-black/5",
        "transition-all duration-300",
        "hover:border-primary/30",
        "hover:shadow-xl hover:shadow-primary/10",
        "dark:bg-card/70 dark:shadow-black/20"
      )}
    >
      <div
        className={cn(
          "flex h-8 w-8 items-center justify-center",
          "rounded-xl",
          "bg-primary/10",
          "text-primary",
          "transition-transform duration-300",
          "group-hover:scale-105"
        )}
      >
        <Globe className="h-4 w-4" />
      </div>

      <select
        value={locale}
        onChange={(event) => changeLanguage(event.target.value)}
        aria-label="Select Language"
        className={cn(
          "cursor-pointer",
          "bg-transparent",
          "text-sm font-medium text-foreground",
          "outline-none",
          "transition-colors duration-200",
          "pr-2"
        )}
      >
        {routing.locales.map((localeOption) => (
          <option
            key={localeOption}
            value={localeOption}
          >
            {localeOption === "en" ? "🇺🇸 English" : "🇮🇳 हिन्दी"}
          </option>
        ))}
      </select>
    </div>
  );
}