import type { Metadata } from "next";

import ActivityCard from "@/components/dashboard/ActivityCard";
import RecentPosts from "@/components/dashboard/RecentPosts";
import StatsCard from "@/components/dashboard/StatsCard";

import { dashboardStats } from "@/data/dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Manage your blog posts, categories, gallery, and account settings.",
};

export default function DashboardPage() {
  return (
    <main className="relative space-y-12">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-400/10" />
      </div>

      {/* ====================================================== */}
      {/* Hero */}
      {/* ====================================================== */}

      <section
        aria-labelledby="dashboard-heading"
        className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/70 p-8 shadow-lg backdrop-blur-xl lg:p-10"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Content Overview
            </span>

            <h1
              id="dashboard-heading"
              className="mt-5 text-4xl font-bold tracking-tight"
            >
              Welcome back 👋
            </h1>

            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
              Manage your blog, monitor content performance, organize
              categories, and stay on top of your publishing workflow from one
              central dashboard.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 rounded-2xl border bg-background/80 p-6 backdrop-blur">
            <div>
              <p className="text-2xl font-bold">24</p>
              <p className="text-sm text-muted-foreground">
                Published Posts
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">12</p>
              <p className="text-sm text-muted-foreground">
                Categories
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">1.5k</p>
              <p className="text-sm text-muted-foreground">
                Monthly Readers
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">Today</p>
              <p className="text-sm text-muted-foreground">
                Last Updated
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Statistics */}
      {/* ====================================================== */}

      <section
        aria-labelledby="dashboard-stats"
        className="space-y-6"
      >
        <div>
          <h2
            id="dashboard-stats"
            className="text-2xl font-semibold tracking-tight"
          >
            Dashboard Statistics
          </h2>

          <p className="mt-2 text-muted-foreground">
            A quick overview of your blog activity and content performance.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {dashboardStats.map((stat) => (
            <StatsCard
              key={stat.id}
              stat={stat}
            />
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* Content */}
      {/* ====================================================== */}

      <section
        aria-labelledby="dashboard-content"
        className="space-y-6"
      >
        <div>
          <h2
            id="dashboard-content"
            className="text-2xl font-semibold tracking-tight"
          >
            Workspace
          </h2>

          <p className="mt-2 text-muted-foreground">
            Review your latest articles and keep track of recent platform
            activity.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <RecentPosts />
          </div>

          <aside>
            <ActivityCard />
          </aside>
        </div>
      </section>
    </main>
  );
}