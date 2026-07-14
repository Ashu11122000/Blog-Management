import * as React from "react";

import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * ==========================================================
 * Premium Button Variants
 * ==========================================================
 *
 * Ultra Premium UI
 * - Softer radius
 * - Better spacing
 * - Premium hover transitions
 * - Improved dark mode
 * - Consistent heights
 */

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap",
    "rounded-xl",
    "font-medium",
    "leading-none",
    "select-none",
    "transition-all duration-300 ease-out",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-blue-500/40",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-background",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "[&_svg]:pointer-events-none",
    "[&_svg]:h-4",
    "[&_svg]:w-4",
    "[&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:shadow-md active:scale-[0.98]",

        secondary:
          "bg-slate-100 text-slate-900 shadow-sm hover:bg-slate-200 hover:shadow-md dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700",

        outline:
          "border border-[var(--border)] bg-background shadow-sm hover:bg-muted hover:shadow-sm",

        ghost:
          "bg-transparent hover:bg-muted",

        destructive:
          "bg-red-600 text-white shadow-sm hover:bg-red-700 hover:shadow-md active:scale-[0.98]",

        link:
          "rounded-none p-0 text-blue-600 underline-offset-4 hover:underline dark:text-blue-400",
      },

      size: {
        sm: "h-9 px-4 text-sm",

        default: "h-11 px-5 text-sm",

        lg: "h-12 px-6 text-base",

        icon: "h-11 w-11 p-0",
      },

      fullWidth: {
        true: "w-full",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/**
 * ==========================================================
 * Button Props
 * ==========================================================
 */

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Render child instead of button.
   * Useful for Next.js Link.
   */
  asChild?: boolean;

  /**
   * Shows loading spinner.
   */
  loading?: boolean;

  /**
   * Icon before text.
   */
  leftIcon?: React.ReactNode;

  /**
   * Icon after text.
   */
  rightIcon?: React.ReactNode;

  /**
   * Stretch to full width.
   */
  fullWidth?: boolean;
}

/**
 * ==========================================================
 * Premium Button Component
 * ==========================================================
 *
 * Features
 * ----------
 * ✓ CVA Variants
 * ✓ Multiple Sizes
 * ✓ Loading State
 * ✓ Left / Right Icons
 * ✓ asChild Support
 * ✓ Accessible
 * ✓ Premium UI Polish
 * ✓ Dark Mode
 * ✓ Reusable
 */

export default function Button({
  className,
  variant,
  size,
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  fullWidth,
  asChild = false,
  children,
  type = "button",
  ...props
}: Readonly<ButtonProps>) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      type={!asChild ? type : undefined}
      disabled={!asChild ? disabled || loading : undefined}
      className={cn(
        buttonVariants({
          variant,
          size,
          fullWidth,
        }),
        className
      )}
      {...props}
    >
      {loading ? (
        <Loader2
          className="h-4 w-4 animate-spin"
          aria-hidden="true"
        />
      ) : (
        leftIcon
      )}

      <Slottable>{children}</Slottable>

      {!loading && rightIcon}
    </Component>
  );
}

/**
 * ==========================================================
 * Export Variants
 * ==========================================================
 */

export { buttonVariants };