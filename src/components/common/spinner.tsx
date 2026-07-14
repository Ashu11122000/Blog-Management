import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * ==========================================================
 * Premium Spinner Variants
 * ==========================================================
 */

const spinnerVariants = cva(
  [
    "animate-spin",
    "rounded-full",
    "border-2",
    "border-current",
    "border-t-transparent",
    "transition-colors duration-300",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-4 w-4",

        default: "h-6 w-6",

        lg: "h-8 w-8",
      },

      variant: {
        primary: "text-blue-600",

        secondary: "text-muted-foreground",
      },
    },

    defaultVariants: {
      size: "default",
      variant: "primary",
    },
  },
);

/**
 * ==========================================================
 * Spinner Props
 * ==========================================================
 */

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  /**
   * Accessible loading label.
   */
  label?: string;
}

/**
 * ==========================================================
 * Premium Spinner Component
 * ==========================================================
 *
 * Features
 * ----------
 * ✓ Multiple Sizes
 * ✓ Multiple Color Variants
 * ✓ Accessible
 * ✓ Dark Mode
 * ✓ Reusable
 * ✓ Premium UI
 */

export default function Spinner({
  className,
  size,
  variant,
  label = "Loading...",
  ...props
}: Readonly<SpinnerProps>) {
  return (
    <div
      role="status"
      aria-label={label}
      className="inline-flex items-center justify-center"
      {...props}
    >
      <div
        className={cn(
          spinnerVariants({
            size,
            variant,
          }),
          className,
        )}
      />

      <span className="sr-only">{label}</span>
    </div>
  );
}