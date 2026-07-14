import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: "default" | "wide" | "narrow" | "full";
}

const containerSizes = {
  default: "max-w-7xl",
  wide: "max-w-screen-2xl",
  narrow: "max-w-5xl",
  full: "max-w-none",
};

export default function Container({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        containerSizes[size],
        "px-5 sm:px-6 lg:px-8 xl:px-10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}