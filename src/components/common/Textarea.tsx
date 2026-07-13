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
   * Helper text displayed below the textarea.
   */
  helperText?: string;
}

/**
 * ==========================================================
 * Textarea Component
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
    ref
  ) => {
    const generatedId = React.useId();
    const textareaId = id ?? generatedId;

    return (
      <div className="w-full space-y-2">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            {label}

            {required && (
              <span className="ml-1 text-red-500">*</span>
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
            "flex w-full rounded-lg border",
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
            "resize-y",

            error &&
              "border-red-500 focus:border-red-500 focus:ring-red-500",

            className
          )}
          {...props}
        />

        {helperText && !error && (
          <p
            id={`${textareaId}-helper`}
            className="text-sm text-slate-500 dark:text-slate-400"
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
  }
);

Textarea.displayName = "Textarea";

export default Textarea;