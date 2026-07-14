import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * ==========================================================
 * Premium Skeleton Variants
 * ==========================================================
 */

const skeletonVariants = cva(
  [
    "animate-pulse",
    "bg-muted",
    "transition-all duration-300",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "rounded-xl",

        rounded: "rounded-2xl",

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
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  /**
   * Skeleton width.
   */
  width?: number | string;

  /**
   * Skeleton height.
   */
  height?: number | string;
}

/**
 * ==========================================================
 * Premium Skeleton Component
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
 * ✓ Premium UI
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