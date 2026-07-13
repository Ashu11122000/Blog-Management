import ActivityCard from "@/components/dashboard/ActivityCard";
import RecentPosts from "@/components/dashboard/RecentPosts";
import StatsCard from "@/components/dashboard/StatsCard";

import { dashboardStats } from "@/data/dashboard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome */}

      <section>
        <h2 className="text-3xl font-bold tracking-tight">
          Welcome back 👋
        </h2>

        <p className="mt-2 text-muted-foreground">
          Here&apos;s an overview of your blog performance and
          recent activity.
        </p>
      </section>

      {/* Statistics */}

      <section
        aria-labelledby="dashboard-stats"
        className="space-y-4"
      >
        <h2
          id="dashboard-stats"
          className="sr-only"
        >
          Dashboard Statistics
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {dashboardStats.map((stat) => (
            <StatsCard
              key={stat.id}
              stat={stat}
            />
          ))}
        </div>
      </section>

      {/* Dashboard Content */}

      <section className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentPosts />
        </div>

        <div>
          <ActivityCard />
        </div>
      </section>
    </div>
  );
}