"use client";

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
 * ✓ Dark Mode
 * ✓ Next.js 16 Compatible
 * ✓ React 19 Compatible
 */

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();

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

  return (
    <div
      className={cn(
        "inline-flex items-center overflow-hidden rounded-xl",
        "border border-(--border)",
        "bg-(--card)",
        "shadow-sm"
      )}
    >
      {themes.map(({ value, label, icon: Icon }) => {
        const active =
          value === "system"
            ? theme === "system"
            : resolvedTheme === value;

        return (
          <button
            key={value}
            type="button"
            aria-label={label}
            aria-pressed={active}
            onClick={() => setTheme(value)}
            className={cn(
              "flex h-10 w-10 items-center justify-center transition-all duration-200",
              active
                ? "bg-blue-600 text-white"
                : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            )}
          >
            <Icon className="h-5 w-5" />
          </button>
        );
      })}
    </div>
  );
}