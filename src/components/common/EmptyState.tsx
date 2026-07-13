import * as React from "react";

import { Inbox } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * ==========================================================
 * EmptyState Props
 * ==========================================================
 */

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
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
   *
   * Example:
   * <Button>Create Blog</Button>
   */
  action?: React.ReactNode;
}

/**
 * ==========================================================
 * EmptyState Component
 * ==========================================================
 *
 * Features
 * ----------
 * ✓ Reusable
 * ✓ Accessible
 * ✓ Optional Icon
 * ✓ Optional Description
 * ✓ Optional Action
 * ✓ Dark Mode
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
        "rounded-xl border border-dashed border-(--border)",
        "bg-(--card)",
        "px-8 py-12",
        "text-center",
        className,
      )}
      {...props}
    >
      <div
        className="
          mb-6
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-slate-100
          text-slate-500
          dark:bg-slate-800
          dark:text-slate-400
        "
      >
        {icon ?? <Inbox className="h-8 w-8" />}
      </div>

      <h2 className="text-xl font-semibold text-(--foreground)">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}

      {children}

      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
