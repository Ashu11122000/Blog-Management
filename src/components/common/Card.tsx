import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * ==========================================================
 * Card Component System
 * ==========================================================
 *
 * Reusable card components for the entire application.
 */

/* ==========================================================
   Card
========================================================== */

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm",
        "transition-all duration-300",
        "dark:border-slate-800 dark:bg-slate-900 dark:text-slate-50",
        className,
      )}
      {...props}
    />
  );
}

/* ==========================================================
   Card Header
========================================================== */

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export function CardHeader({
  className,
  ...props
}: CardHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-1.5 p-6",
        className,
      )}
      {...props}
    />
  );
}

/* ==========================================================
   Card Title
========================================================== */

export type CardTitleProps =
  React.HTMLAttributes<HTMLHeadingElement>;

export function CardTitle({
  className,
  ...props
}: CardTitleProps) {
  return (
    <h3
      className={cn(
        "text-xl font-semibold leading-none tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

/* ==========================================================
   Card Description
========================================================== */

export type CardDescriptionProps =
  React.HTMLAttributes<HTMLParagraphElement>;

export function CardDescription({
  className,
  ...props
}: CardDescriptionProps) {
  return (
    <p
      className={cn(
        "text-sm text-slate-600 dark:text-slate-400",
        className,
      )}
      {...props}
    />
  );
}

/* ==========================================================
   Card Content
========================================================== */

export type CardContentProps =
  React.HTMLAttributes<HTMLDivElement>;

export function CardContent({
  className,
  ...props
}: CardContentProps) {
  return (
    <div
      className={cn(
        "p-6 pt-0",
        className,
      )}
      {...props}
    />
  );
}

/* ==========================================================
   Card Footer
========================================================== */

export type CardFooterProps =
  React.HTMLAttributes<HTMLDivElement>;

export function CardFooter({
  className,
  ...props
}: CardFooterProps) {
  return (
    <div
      className={cn(
        "flex items-center p-6 pt-0",
        className,
      )}
      {...props}
    />
  );
}