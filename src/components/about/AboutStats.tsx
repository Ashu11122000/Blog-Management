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
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10">
          {/* Section Heading */}

          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
              By the Numbers
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">
              Growing Together Every Day
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              These numbers reflect our commitment to delivering valuable
              technical content, practical tutorials, and a better learning
              experience for developers worldwide.
            </p>
          </div>

          {/* Statistics */}

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <Card
                key={stat.id}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200/70
                  bg-background/80
                  p-8
                  text-center
                  shadow-sm
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1.5
                  hover:border-blue-200
                  hover:shadow-xl
                  dark:border-slate-800
                "
              >
                {/* Decorative Glow */}

                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>

                <h3 className="mt-5 text-5xl font-bold tracking-tight text-blue-600">
                  {stat.value}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Continuously growing with every new article,
                  tutorial, and community contribution.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}