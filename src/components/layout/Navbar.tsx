"use client";

import { useEffect, useState } from "react";

import { Menu, PenSquare, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import Button from "@/components/common/Button";
import Container from "@/components/layout/Container";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import ThemeToggle from "@/components/layout/ThemeToggle";

import { MAIN_NAVIGATION } from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/site";

import { Link, usePathname } from "@/i18n/navigation";

import { cn } from "@/lib/utils";

/**
 * ==========================================================
 * Navbar
 * ==========================================================
 *
 * Features
 * ----------
 * ✓ Sticky Navigation
 * ✓ Responsive
 * ✓ Mobile Menu
 * ✓ Active Links
 * ✓ Theme Toggle
 * ✓ Locale-aware Navigation
 * ✓ next-intl Ready
 */

export default function Navbar() {
  const pathname = usePathname();

  const locale = useLocale();

  console.log("Current locale:", locale);

  const t = useTranslations("Navigation");

  console.log("Translated Home:", t("home"));

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /**
   * ----------------------------------------------------------
   * Prevent body scrolling while the menu is open.
   * ----------------------------------------------------------
   */

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);
  return (
    <header>
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 transition-colors hover:text-blue-600"
          >
            <PenSquare className="h-6 w-6 text-blue-600" />

            <span className="text-lg font-bold tracking-tight">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {MAIN_NAVIGATION.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  locale={locale}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white",
                  )}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <ThemeToggle />

            <Button
              variant="ghost"
              size="icon"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen((previous) => !previous)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="border-t border-(--border) py-6 lg:hidden">
            <div className="flex flex-col gap-2">
              {MAIN_NAVIGATION.map((item) => {
                const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    locale={locale}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
                    )}
                  >
                    {t(item.key)}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}