"use client";

import { useSyncExternalStore } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

/**
 * ==========================================================
 * Theme Toggle
 * ==========================================================
 *
 * Features
 * ----------
 * ✓ Light Theme
 * ✓ Dark Theme
 * ✓ System Theme
 * ✓ Accessible
 * ✓ Hydration Safe
 * ✓ Glassmorphism UI
 * ✓ Premium Micro Interactions
 * ✓ React 19 Compatible
 * ✓ Next.js 16 Compatible
 */

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const themes = [
    {
      value: "light",
      label: "Light",
      icon: Sun,
    },
    {
      value: "dark",
      label: "Dark",
      icon: Moon,
    },
    {
      value: "system",
      label: "System",
      icon: Monitor,
    },
  ] as const;

  /**
   * Prevent hydration mismatch caused by next-themes.
   */
  if (!mounted) {
    return (
      <div
        className={cn(
          "inline-flex items-center rounded-2xl",
          "border border-border/60",
          "bg-background/70",
          "p-1",
          "backdrop-blur-xl",
          "shadow-xl shadow-black/5 dark:shadow-black/20"
        )}
      >
        <div className="h-11 w-[137px] animate-pulse rounded-xl bg-muted/40" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-2xl",
        "border border-border/60",
        "bg-background/70",
        "p-1",
        "backdrop-blur-xl",
        "shadow-xl shadow-black/5",
        "transition-all duration-300",
        "dark:bg-card/70 dark:shadow-black/25"
      )}
    >
      {themes.map(({ value, label, icon: Icon }) => {
        const active = theme === value;

        return (
          <button
            key={value}
            type="button"
            aria-label={label}
            aria-pressed={active}
            title={label}
            onClick={() => setTheme(value)}
            className={cn(
              "relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl",
              "transition-all duration-300 ease-out",
              "focus-visible:outline-none",
              "focus-visible:ring-2",
              "focus-visible:ring-blue-500/40",
              "focus-visible:ring-offset-2",
              "focus-visible:ring-offset-background",
              active
                ? [
                    "scale-[1.03]",
                    "bg-gradient-to-br",
                    "from-blue-600",
                    "via-blue-600",
                    "to-indigo-600",
                    "text-white",
                    "shadow-lg",
                    "shadow-blue-500/30",
                  ]
                : [
                    "text-muted-foreground",
                    "hover:bg-muted/70",
                    "hover:text-foreground",
                    "hover:scale-[1.02]",
                    "active:scale-95",
                  ]
            )}
          >
            {active && (
              <span
                className={cn(
                  "absolute inset-0 rounded-xl",
                  "bg-gradient-to-br from-white/10 to-transparent"
                )}
              />
            )}

            <Icon
              className={cn(
                "relative z-10 h-5 w-5 transition-all duration-300",
                active ? "scale-110" : "scale-100"
              )}
            />
          </button>
        );
      })}
    </div>
  );
}