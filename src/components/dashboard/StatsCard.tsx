import { TrendingUp } from "lucide-react";

import { Card } from "@/components/common/Card";
import type { DashboardStat } from "@/types/dashboard";

interface StatsCardProps {
  stat: DashboardStat;
}

export default function StatsCard({
  stat,
}: StatsCardProps) {
  const Icon = stat.icon;

  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">
              {stat.title}
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              {stat.value}
            </h3>
          </div>

          {stat.description && (
            <p className="text-sm text-muted-foreground">
              {stat.description}
            </p>
          )}
        </div>

        <div className="rounded-xl bg-primary/10 p-3 text-primary">
          <Icon className="h-6 w-6" />
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 border-t border-border pt-4">
        <TrendingUp className="h-4 w-4 text-emerald-500" />

        <span className="font-semibold text-emerald-600 dark:text-emerald-400">
          +{stat.trend}%
        </span>

        <span className="text-sm text-muted-foreground">
          {stat.trendLabel}
        </span>
      </div>
    </Card>
  );
}