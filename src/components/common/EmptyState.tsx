import * as React from "react";

import { Inbox } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * ==========================================================
 * EmptyState Props
 * ==========================================================
 */

export interface EmptyStateProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional icon.
   */
  icon?: React.ReactNode;

  /**
   * Main heading.
   */
  title: string;

  /**
   * Supporting description.
   */
  description?: string;

  /**
   * Optional action element.
   */
  action?: React.ReactNode;
}

/**
 * ==========================================================
 * Premium EmptyState Component
 * ==========================================================
 *
 * Features
 * ----------
 * ✓ Premium UI
 * ✓ Accessible
 * ✓ Dark Mode
 * ✓ Optional Icon
 * ✓ Optional Description
 * ✓ Optional Action
 * ✓ Reusable
 */

export default function EmptyState({
  className,
  icon,
  title,
  description,
  action,
  children,
  ...props
}: Readonly<EmptyStateProps>) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center",
        "rounded-2xl",
        "border border-dashed border-(--border)",
        "bg-(--card)",
        "px-8 py-14",
        "text-center",
        "transition-all duration-300",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "mb-6",
          "flex h-16 w-16 items-center justify-center",
          "rounded-full",
          "bg-muted",
          "text-muted-foreground",
          "ring-1 ring-(--border)",
        )}
      >
        {icon ?? <Inbox className="h-8 w-8" />}
      </div>

      <h2
        className={cn(
          "text-xl font-semibold tracking-tight",
          "text-(--foreground)",
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-3 max-w-md",
            "text-sm leading-6",
            "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}

      {children && (
        <div className="mt-6 w-full">
          {children}
        </div>
      )}

      {action && (
        <div className="mt-8 flex items-center justify-center">
          {action}
        </div>
      )}
    </div>
  );
}