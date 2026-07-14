import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * ==========================================================
 * Input Props
 * ==========================================================
 */

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Input label.
   */
  label?: string;

  /**
   * Validation error message.
   */
  error?: string;

  /**
   * Helper text displayed below the input.
   */
  helperText?: string;

  /**
   * Left icon.
   */
  leftIcon?: React.ReactNode;

  /**
   * Right icon.
   */
  rightIcon?: React.ReactNode;
}

/**
 * ==========================================================
 * Premium Input Component
 * ==========================================================
 *
 * Features
 * ----------
 * ✓ React Hook Form Compatible
 * ✓ forwardRef
 * ✓ Accessible
 * ✓ Premium UI
 * ✓ Dark Mode
 */

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      id,
      required,
      disabled,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;

    return (
      <div className="w-full space-y-2.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-(--foreground)"
          >
            {label}

            {required && (
              <span className="ml-1 text-red-500">*</span>
            )}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div
              className={cn(
                "pointer-events-none",
                "absolute inset-y-0 left-4",
                "flex items-center",
                "text-muted-foreground",
              )}
            >
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            type={type}
            required={required}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={
              error
                ? `${inputId}-error`
                : helperText
                  ? `${inputId}-helper`
                  : undefined
            }
            className={cn(
              "flex h-11 w-full",
              "rounded-xl",
              "border border-(--border)",
              "bg-(--background)",
              "px-4 py-2",
              "text-sm text-(--foreground)",
              "placeholder:text-muted-foreground",

              "transition-all duration-300 ease-out",

              "focus:outline-none",
              "focus:ring-2",
              "focus:ring-blue-500/30",
              "focus:border-blue-500",

              "disabled:cursor-not-allowed",
              "disabled:opacity-50",

              leftIcon && "pl-11",

              rightIcon && "pr-11",

              error &&
                "border-red-500 focus:border-red-500 focus:ring-red-500/30",

              className,
            )}
            {...props}
          />

          {rightIcon && (
            <div
              className={cn(
                "absolute inset-y-0 right-4",
                "flex items-center",
                "text-muted-foreground",
              )}
            >
              {rightIcon}
            </div>
          )}
        </div>

        {helperText && !error && (
          <p
            id={`${inputId}-helper`}
            className="text-sm text-muted-foreground"
          >
            {helperText}
          </p>
        )}

        {error && (
          <p
            id={`${inputId}-error`}
            className="text-sm font-medium text-red-600"
          >
            {error}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;