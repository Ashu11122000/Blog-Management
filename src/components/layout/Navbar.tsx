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
 * Premium Navbar
 * ==========================================================
 *
 * Features
 * ----------
 * ✓ Floating Glass Navbar
 * ✓ Sticky Navigation
 * ✓ React 19 Compatible
 * ✓ Next.js 16 Compatible
 * ✓ Locale-aware Navigation
 * ✓ Active Navigation
 * ✓ Premium Glassmorphism
 * ✓ Responsive
 * ✓ Mobile Navigation
 * ✓ Dark Mode
 * ✓ Accessible
 */

export default function Navbar() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Navigation");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /**
   * ----------------------------------------------------------
   * Lock body scrolling while mobile navigation is open.
   * ----------------------------------------------------------
   */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  /**
   * ----------------------------------------------------------
   * Floating Navbar Shadow
   * ----------------------------------------------------------
   *
   * React 19 Safe
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50",
        "transition-all duration-300"
      )}
    >
      <Container className="py-4">
        <nav
          className={cn(
            "relative flex items-center justify-between",
            "overflow-hidden",
            "rounded-3xl",
            "border border-border/60",
            "bg-background/75",
            "px-6 py-4",
            "backdrop-blur-2xl",
            "transition-all duration-300",
            scrolled
              ? "shadow-2xl shadow-black/10 dark:shadow-black/40"
              : "shadow-lg shadow-black/5 dark:shadow-black/20"
          )}
        >
          {/* ================================================ */}
          {/* Decorative Background */}
          {/* ================================================ */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-0 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />

            <div className="absolute -right-24 bottom-0 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
          </div>

          {/* ================================================ */}
          {/* Logo */}
          {/* ================================================ */}

          <Link
            href="/"
            locale={locale}
            onClick={() => setMobileMenuOpen(false)}
            className={cn(
              "group relative z-10",
              "flex items-center gap-4",
              "transition-all duration-300",
              "hover:scale-[1.02]"
            )}
          >
            <div
              className={cn(
                "flex h-12 w-12 items-center justify-center",
                "rounded-2xl",
                "bg-gradient-to-br",
                "from-blue-600",
                "via-blue-600",
                "to-indigo-600",
                "text-white",
                "shadow-lg shadow-blue-500/25",
                "transition-all duration-300",
                "group-hover:scale-105",
                "group-hover:shadow-xl",
                "group-hover:shadow-blue-500/30"
              )}
            >
              <PenSquare className="h-6 w-6" />
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-lg font-extrabold tracking-tight text-foreground">
                {SITE_CONFIG.name}
              </span>

              <span className="mt-1 text-xs font-medium tracking-wide text-muted-foreground">
                Modern Publishing Platform
              </span>
            </div>
          </Link>

          {/* ================================================ */}
          {/* Desktop Navigation */}
          {/* ================================================ */}

          <div className="relative z-10 hidden lg:block">
            <div
              className={cn(
                "flex items-center gap-2",
                "rounded-2xl",
                "border border-border/50",
                "bg-muted/30",
                "p-1.5",
                "backdrop-blur-xl"
              )}
            >
              {MAIN_NAVIGATION.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    locale={locale}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative rounded-xl px-5 py-2.5",
                      "text-sm font-semibold",
                      "transition-all duration-300",
                      "focus-visible:outline-none",
                      "focus-visible:ring-2",
                      "focus-visible:ring-blue-500/40",
                      isActive
                        ? [
                            "bg-gradient-to-r",
                            "from-blue-600",
                            "to-indigo-600",
                            "text-white",
                            "shadow-lg",
                            "shadow-blue-500/25",
                          ]
                        : [
                            "text-muted-foreground",
                            "hover:bg-background/80",
                            "hover:text-foreground",
                          ]
                    )}
                  >
                    {t(item.key)}
                  </Link>
                );
              })}
            </div>
          </div>

                <div className="relative z-10 hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />

            <ThemeToggle />
          </div>

          {/* ================================================ */}
          {/* Mobile Actions */}
          {/* ================================================ */}

          <div className="relative z-10 flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <LanguageSwitcher />

            <Button
              variant="ghost"
              size="icon"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() =>
                setMobileMenuOpen((previous) => !previous)
              }
              className={cn(
                "h-11 w-11 rounded-2xl",
                "border border-border/60",
                "bg-background/70",
                "backdrop-blur-xl",
                "shadow-lg shadow-black/5",
                "transition-all duration-300",
                "hover:scale-105",
                "hover:border-primary/30",
                "hover:bg-muted/70",
                "hover:shadow-xl hover:shadow-primary/10",
                "active:scale-95"
              )}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </nav>

        {/* ================================================ */}
        {/* Premium Mobile Navigation */}
        {/* ================================================ */}

        <div
          id="mobile-navigation"
          className={cn(
            "overflow-hidden transition-all duration-300 ease-out lg:hidden",
            mobileMenuOpen
              ? "mt-4 max-h-[800px] opacity-100"
              : "max-h-0 opacity-0"
          )}
        >
          <div
            className={cn(
              "relative overflow-hidden rounded-3xl",
              "border border-border/60",
              "bg-background/85",
              "backdrop-blur-2xl",
              "shadow-2xl shadow-black/10",
              "dark:shadow-black/40"
            )}
          >
            {/* Decorative Background */}

            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 top-0 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />

              <div className="absolute -right-24 bottom-0 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
            </div>

            <div className="relative z-10 p-6">
              {/* Mobile Links */}

              <div className="flex flex-col gap-2">
                {MAIN_NAVIGATION.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      locale={locale}
                      onClick={() =>
                        setMobileMenuOpen(false)
                      }
                      aria-current={
                        isActive ? "page" : undefined
                      }
                      className={cn(
                        "group relative overflow-hidden rounded-2xl",
                        "px-5 py-4",
                        "text-sm font-semibold",
                        "transition-all duration-300",
                        "focus-visible:outline-none",
                        "focus-visible:ring-2",
                        "focus-visible:ring-blue-500/40",
                        isActive
                          ? [
                              "bg-gradient-to-r",
                              "from-blue-600",
                              "to-indigo-600",
                              "text-white",
                              "shadow-lg",
                              "shadow-blue-500/25",
                            ]
                          : [
                              "text-muted-foreground",
                              "hover:bg-muted/70",
                              "hover:text-foreground",
                              "hover:translate-x-1",
                            ]
                      )}
                    >
                      <span className="relative z-10">
                        {t(item.key)}
                      </span>

                      {!isActive && (
                        <span
                          className={cn(
                            "absolute inset-y-0 left-0",
                            "w-1 rounded-r-full",
                            "bg-primary",
                            "opacity-0 transition-opacity duration-300",
                            "group-hover:opacity-100"
                          )}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Divider */}

              <div className="my-6 h-px bg-border/60" />

              {/* Premium Info */}

              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-foreground">
                  Welcome 👋
                </h3>

                <p className="text-sm leading-6 text-muted-foreground">
                  Explore premium articles, in-depth tutorials,
                  modern technologies, AI insights, web
                  development, backend engineering, and
                  production-ready coding guides.
                </p>
              </div>

              {/* Premium Statistics */}

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div
                  className={cn(
                    "rounded-2xl",
                    "border border-border/50",
                    "bg-muted/30",
                    "p-4 text-center",
                    "transition-all duration-300",
                    "hover:border-primary/30",
                    "hover:bg-muted/50"
                  )}
                >
                  <p className="text-2xl font-bold text-primary">
                    150+
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Articles
                  </p>
                </div>

                <div
                  className={cn(
                    "rounded-2xl",
                    "border border-border/50",
                    "bg-muted/30",
                    "p-4 text-center",
                    "transition-all duration-300",
                    "hover:border-primary/30",
                    "hover:bg-muted/50"
                  )}
                >
                  <p className="text-2xl font-bold text-primary">
                    25+
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Topics
                  </p>
                </div>

                <div
                  className={cn(
                    "rounded-2xl",
                    "border border-border/50",
                    "bg-muted/30",
                    "p-4 text-center",
                    "transition-all duration-300",
                    "hover:border-primary/30",
                    "hover:bg-muted/50"
                  )}
                >
                  <p className="text-2xl font-bold text-primary">
                    5K+
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Readers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </header>
  );
}