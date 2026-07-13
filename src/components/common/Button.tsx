import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * ==========================================================
 * Button Variants
 * ==========================================================
 *
 * Defines all supported visual styles and sizes.
 */

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap rounded-lg",
    "font-medium",
    "transition-all duration-200",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-blue-500",
    "focus-visible:ring-offset-2",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "select-none",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white shadow-sm hover:bg-blue-700 active:bg-blue-800",

        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700",

        outline:
          "border border-[var(--border)] bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800",

        ghost:
          "hover:bg-slate-100 dark:hover:bg-slate-800",

        destructive:
          "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",

        link:
          "p-0 text-blue-600 underline-offset-4 hover:underline dark:text-blue-400",
      },

      size: {
        sm: "h-9 px-3 text-sm",

        default: "h-10 px-4 py-2 text-sm",

        lg: "h-11 px-6 text-base",

        icon: "h-10 w-10 p-0",
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
   * Render the child element instead of a button.
   * Useful for Next.js Link.
   */
  asChild?: boolean;

  /**
   * Shows a loading spinner and disables the button.
   */
  loading?: boolean;

  /**
   * Icon displayed before the button text.
   */
  leftIcon?: React.ReactNode;

  /**
   * Icon displayed after the button text.
   */
  rightIcon?: React.ReactNode;

  /**
   * Makes the button take the full width of its parent.
   */
  fullWidth?: boolean;
}

/**
 * ==========================================================
 * Button Component
 * ==========================================================
 *
 * Features
 * ----------
 * ✓ CVA Variants
 * ✓ Multiple Sizes
 * ✓ Loading State
 * ✓ Disabled State
 * ✓ Left / Right Icons
 * ✓ asChild Support
 * ✓ Accessible
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

      {children}

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