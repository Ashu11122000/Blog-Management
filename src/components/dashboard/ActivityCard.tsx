import { Card } from "@/components/common/Card";

import { dashboardActivities } from "@/data/activity";

export default function ActivityCard() {
  return (
    <Card className="p-6">
      <div className="mb-8">
        <h2 className="text-xl font-semibold tracking-tight">
          Recent Activity
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Latest updates across your blog.
        </p>
      </div>

      {dashboardActivities.length === 0 ? (
        <div className="flex min-h-40 items-center justify-center text-center">
          <p className="text-sm text-muted-foreground">
            No recent activity found.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {dashboardActivities.map((activity) => {
            const Icon = activity.icon;

            return (
              <div
                key={activity.id}
                className="
                  group
                  flex gap-4
                  rounded-xl
                  p-3
                  transition-all
                  duration-300
                  hover:bg-muted/50
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary/10
                    text-primary
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-medium leading-tight">
                      {activity.title}
                    </h3>

                    <p className="text-sm leading-6 text-muted-foreground">
                      {activity.description}
                    </p>

                    <span className="mt-1 text-xs text-muted-foreground">
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