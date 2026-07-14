import Container from "@/components/layout/Container";
import type { AboutTimelineItem } from "@/types/about";

interface AboutTimelineProps {
  timeline: AboutTimelineItem[];
}

export default function AboutTimeline({
  timeline,
}: Readonly<AboutTimelineProps>) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Background Decoration */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Section Header */}

          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
              Journey
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">
              Project Journey
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Every milestone reflects our commitment to continuous
              improvement, thoughtful design, and building a modern blog
              management platform with the latest web technologies.
            </p>
          </div>

          {/* Timeline */}

          <div className="relative space-y-12 before:absolute before:left-5 before:top-0 before:h-full before:w-px before:bg-border">
            {timeline.map((item) => (
              <div
                key={item.id}
                className="relative flex gap-6"
              >
                {/* Timeline Dot */}

                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-600 shadow-lg dark:border-blue-500/20">
                  <div className="h-3 w-3 rounded-full bg-white" />
                </div>

                {/* Content */}

                <div className="flex-1 rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                    {item.year}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>

                  {/* Static milestone note */}

                  <div className="mt-6 inline-flex rounded-full border border-border bg-muted/30 px-3 py-1 text-xs font-medium text-muted-foreground">
                    Milestone Achieved
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Summary */}

          <div className="mt-20 rounded-3xl border border-border/60 bg-muted/20 p-8 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              Continuing the Journey
            </h3>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
              Every release is an opportunity to improve the experience for
              readers and developers alike. Our focus remains on performance,
              accessibility, clean design, and delivering valuable technical
              content that grows with the modern web ecosystem.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}