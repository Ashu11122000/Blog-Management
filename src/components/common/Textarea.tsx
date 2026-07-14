import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * ==========================================================
 * Textarea Props
 * ==========================================================
 */

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Textarea label.
   */
  label?: string;

  /**
   * Validation error message.
   */
  error?: string;

  /**
   * Helper text displayed below textarea.
   */
  helperText?: string;
}

/**
 * ==========================================================
 * Premium Textarea Component
 * ==========================================================
 *
 * Features
 * ----------
 * ✓ React Hook Form Compatible
 * ✓ forwardRef
 * ✓ Label
 * ✓ Error State
 * ✓ Helper Text
 * ✓ Accessible
 * ✓ Dark Mode
 * ✓ Premium UI
 */

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(
  (
    {
      className,
      label,
      error,
      helperText,
      id,
      required,
      disabled,
      rows = 5,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const textareaId = id ?? generatedId;

    return (
      <div className="w-full space-y-2.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-(--foreground)"
          >
            {label}

            {required && (
              <span className="ml-1 text-red-500">
                *
              </span>
            )}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          required={required}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={
            error
              ? `${textareaId}-error`
              : helperText
                ? `${textareaId}-helper`
                : undefined
          }
          className={cn(
            "flex w-full",
            "min-h-28",
            "rounded-xl",
            "border border-(--border)",
            "bg-(--background)",
            "px-4 py-3",
            "text-sm text-(--foreground)",
            "placeholder:text-muted-foreground",

            "transition-all duration-300 ease-out",

            "focus:outline-none",
            "focus:ring-2",
            "focus:ring-blue-500/30",
            "focus:border-blue-500",

            "disabled:cursor-not-allowed",
            "disabled:opacity-50",

            "resize-y",

            error &&
              [
                "border-red-500",
                "focus:border-red-500",
                "focus:ring-red-500/30",
              ].join(" "),

            className,
          )}
          {...props}
        />

        {helperText && !error && (
          <p
            id={`${textareaId}-helper`}
            className="text-sm text-muted-foreground"
          >
            {helperText}
          </p>
        )}

        {error && (
          <p
            id={`${textareaId}-error`}
            className="text-sm font-medium text-red-600"
          >
            {error}
          </p>
        )}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

export default Textarea;