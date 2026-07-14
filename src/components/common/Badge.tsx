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
    "min-h-6",
    "rounded-full",
    "px-3 py-1",
    "text-xs font-medium",
    "leading-none",
    "whitespace-nowrap",
    "select-none",
    "transition-all duration-200 ease-out",
    "ring-1 ring-inset",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white ring-blue-600/20 hover:bg-blue-500",

        secondary:
          "bg-slate-100 text-slate-700 ring-slate-200 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-700",

        success:
          "bg-emerald-600 text-white ring-emerald-600/20 hover:bg-emerald-500",

        warning:
          "bg-amber-500 text-white ring-amber-500/20 hover:bg-amber-400",

        destructive:
          "bg-red-600 text-white ring-red-600/20 hover:bg-red-500",

        outline:
          "bg-transparent text-[var(--foreground)] ring-[var(--border)] hover:bg-[var(--muted)]",

        ghost:
          "bg-transparent text-[var(--foreground)] ring-transparent hover:bg-[var(--muted)]",
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
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

/**
 * ==========================================================
 * Badge Component
 * ==========================================================
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