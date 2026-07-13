"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { PanelLeft } from "lucide-react";

import { dashboardNavigation } from "@/constants/dashboard";
import { cn } from "@/lib/utils";

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-72 flex-col border-r border-border bg-background">
      {/* Logo */}

      <div className="flex h-16 items-center border-b border-border px-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-3"
        >
          <PanelLeft className="h-6 w-6 text-primary" />

          <div>
            <h2 className="font-semibold">
              Blog CMS
            </h2>

            <p className="text-xs text-muted-foreground">
              Dashboard
            </p>
          </div>
        </Link>
      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 p-4">
        {dashboardNavigation.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="h-5 w-5" />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}

      <div className="border-t border-border p-4">
        <p className="text-center text-xs text-muted-foreground">
          Blog Management System
        </p>
      </div>
    </aside>
  );
}