import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * ==========================================================
 * Input Props
 * ==========================================================
 */

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
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
 * Input Component
 * ==========================================================
 *
 * Features
 * ----------
 * ✓ React Hook Form Compatible
 * ✓ forwardRef
 * ✓ Label
 * ✓ Error State
 * ✓ Helper Text
 * ✓ Left / Right Icons
 * ✓ Accessible
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
      <div className="w-full space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            {label}

            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
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
              "flex h-10 w-full rounded-lg border",
              "border-(--border)",
              "bg-(--background)",
              "text-(--foreground)",
              "px-3 py-2 text-sm",
              "placeholder:text-slate-400",
              "transition-colors duration-200",
              "focus:outline-none",
              "focus:ring-2",
              "focus:ring-blue-500",
              "focus:border-blue-500",
              "disabled:cursor-not-allowed",
              "disabled:opacity-50",

              leftIcon && "pl-10",

              rightIcon && "pr-10",

              error && "border-red-500 focus:border-red-500 focus:ring-red-500",

              className,
            )}
            {...props}
          />

          {rightIcon && (
            <div className="absolute inset-y-0 right-3 flex items-center text-slate-400">
              {rightIcon}
            </div>
          )}
        </div>

        {helperText && !error && (
          <p
            id={`${inputId}-helper`}
            className="text-sm text-slate-500 dark:text-slate-400"
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
