import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * ==========================================================
 * Skeleton Variants
 * ==========================================================
 */

const skeletonVariants = cva(
  ["animate-pulse", "bg-slate-200", "dark:bg-slate-800"].join(" "),
  {
    variants: {
      variant: {
        default: "rounded-lg",

        rounded: "rounded-xl",

        circle: "rounded-full",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);

/**
 * ==========================================================
 * Skeleton Props
 * ==========================================================
 */

export interface SkeletonProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  /**
   * Skeleton width.
   *
   * Example:
   * "100%"
   * "250px"
   */
  width?: number | string;

  /**
   * Skeleton height.
   *
   * Example:
   * "24px"
   */
  height?: number | string;
}

/**
 * ==========================================================
 * Skeleton Component
 * ==========================================================
 *
 * Features
 * ----------
 * ✓ Loading Placeholder
 * ✓ Pulse Animation
 * ✓ Rectangle
 * ✓ Circle
 * ✓ Responsive
 * ✓ Dark Mode
 */

export default function Skeleton({
  className,
  variant,
  width,
  height,
  style,
  ...props
}: Readonly<SkeletonProps>) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        skeletonVariants({
          variant,
        }),
        className,
      )}
      style={{
        width,
        height,
        ...style,
      }}
      {...props}
    />
  );
}
