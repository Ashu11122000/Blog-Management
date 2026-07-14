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
    <Card
      className="
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 space-y-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </p>

            <h3
              className="
                mt-3
                text-3xl
                font-bold
                tracking-tight
              "
            >
              {stat.value}
            </h3>
          </div>

          {stat.description && (
            <p className="text-sm leading-6 text-muted-foreground">
              {stat.description}
            </p>
          )}
        </div>

        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-primary/10
            text-primary
            transition-transform
            duration-300
            hover:scale-105
          "
        >
          <Icon className="h-6 w-6" />
        </div>
      </div>

      <div
        className="
          mt-6
          flex
          items-center
          gap-2
          border-t
          border-border
          pt-5
        "
      >
        <div
          className="
            flex
            items-center
            justify-center
            rounded-full
            bg-emerald-500/10
            p-1
          "
        >
          <TrendingUp className="h-4 w-4 text-emerald-500" />
        </div>

        <span
          className="
            font-semibold
            text-emerald-600
            dark:text-emerald-400
          "
        >
          +{stat.trend}%
        </span>

        <span className="text-sm text-muted-foreground">
          {stat.trendLabel}
        </span>
      </div>
    </Card>
  );
}