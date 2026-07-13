import { Bell, UserCircle2 } from "lucide-react";

import ThemeToggle from "@/components/layout/ThemeToggle";

interface DashboardHeaderProps {
  title: string;
  description?: string;
}

export default function DashboardHeader({
  title,
  description,
}: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Left */}

        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight">
            {title}
          </h1>

          {description ? (
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>

        {/* Right */}

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            type="button"
            aria-label="Notifications"
            className="rounded-lg border border-border p-2 transition-colors hover:bg-muted"
          >
            <Bell className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="User Profile"
            className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 transition-colors hover:bg-muted"
          >
            <UserCircle2 className="h-6 w-6" />

            <div className="hidden text-left md:block">
              <p className="text-sm font-medium">
                Admin
              </p>

              <p className="text-xs text-muted-foreground">
                Administrator
              </p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}