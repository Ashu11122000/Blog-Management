import { Card } from "@/components/common/Card";

import { dashboardActivities } from "@/data/activity";

export default function ActivityCard() {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          Recent Activity
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Latest updates across your blog.
        </p>
      </div>

      {dashboardActivities.length === 0 ? (
        <div className="py-10 text-center">
          <p className="text-muted-foreground">
            No recent activity found.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {dashboardActivities.map((activity) => {
            const Icon = activity.icon;

            return (
              <div
                key={activity.id}
                className="flex gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-medium">
                      {activity.title}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>

                    <span className="text-xs text-muted-foreground">
                      {activity.time}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}