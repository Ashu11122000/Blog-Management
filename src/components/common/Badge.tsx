import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * ==========================================================
 * Badge Variants
 * ==========================================================
 */

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full",
    "border",
    "px-2.5 py-0.5",
    "text-xs font-semibold",
    "transition-colors duration-200",
    "select-none",
    "whitespace-nowrap",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "border-transparent bg-blue-600 text-white",

        secondary:
          "border-transparent bg-slate-200 text-slate-900 dark:bg-slate-700 dark:text-slate-100",

        success: "border-transparent bg-emerald-600 text-white",

        warning: "border-transparent bg-amber-500 text-white",

        destructive: "border-transparent bg-red-600 text-white",

        outline:
          "border-[var(--border)] bg-transparent text-[var(--foreground)]",

        ghost: "border-transparent bg-transparent text-[var(--foreground)]",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);

/**
 * ==========================================================
 * Badge Props
 * ==========================================================
 */

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

/**
 * ==========================================================
 * Badge Component
 * ==========================================================
 *
 * Features
 * ----------
 * ✓ CVA Variants
 * ✓ Dark Mode
 * ✓ Accessible
 * ✓ Reusable
 */

export default function Badge({
  className,
  variant,
  ...props
}: Readonly<BadgeProps>) {
  return (
    <span
      className={cn(
        badgeVariants({
          variant,
        }),
        className,
      )}
      {...props}
    />
  );
}
