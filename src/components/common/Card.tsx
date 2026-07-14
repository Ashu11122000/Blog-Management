import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * ==========================================================
 * Premium Card Component System
 * ==========================================================
 *
 * Reusable card components with premium spacing,
 * typography and visual polish.
 */

/* ==========================================================
   Card
========================================================== */

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl",
        "border border-(--border)",
        "bg-(--card) text-(--card-foreground)",
        "shadow-sm",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-0.5",
        "hover:shadow-lg",
        className,
      )}
      {...props}
    />
  );
}

/* ==========================================================
   Card Header
========================================================== */

export type CardHeaderProps =
  React.HTMLAttributes<HTMLDivElement>;

export function CardHeader({
  className,
  ...props
}: CardHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        "space-y-2",
        "p-6",
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
        "text-lg font-semibold",
        "leading-tight tracking-tight",
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
        "text-sm leading-6",
        "text-muted-foreground",
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
        "px-6 pb-6",
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
        "flex items-center justify-between",
        "gap-4",
        "px-6 pb-6",
        className,
      )}
      {...props}
    />
  );
}