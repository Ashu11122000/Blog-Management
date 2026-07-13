import { Card } from "@/components/common/Card";
import Container from "@/components/layout/Container";
import type { AboutStat } from "@/types/about";

interface AboutStatsProps {
  stats: AboutStat[];
}

export default function AboutStats({
  stats,
}: Readonly<AboutStatsProps>) {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-900">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card
              key={stat.id}
              className="p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-blue-600">
                {stat.value}
              </h3>

              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}