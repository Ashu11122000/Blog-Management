import {
  Accessibility,
  Code2,
  Layers,
  Zap,
} from "lucide-react";

import { Card } from "@/components/common/Card";
import Container from "@/components/layout/Container";
import type { AboutValue } from "@/types/about";

interface AboutValuesProps {
  values: AboutValue[];
}

const icons = {
  Layers,
  Zap,
  Accessibility,
  Code2,
};

export default function AboutValues({
  values,
}: Readonly<AboutValuesProps>) {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Decoration */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10">
          {/* Section Header */}

          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
              What Drives Us
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">
              Our Core Values
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              These principles guide every decision we make, from designing
              intuitive user experiences to delivering high-quality technical
              content and maintaining modern engineering standards.
            </p>
          </div>

          {/* Values */}

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => {
              const Icon =
                icons[value.icon as keyof typeof icons];

              return (
                <Card
                  key={value.id}
                  className="
                    group
                    relative
                    h-full
                    overflow-hidden
                    rounded-2xl
                    border
                    border-border/60
                    bg-background/80
                    p-8
                    shadow-sm
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1.5
                    hover:border-blue-200
                    hover:shadow-xl
                  "
                >
                  {/* Accent Bar */}

                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {Icon && (
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/10">
                      <Icon className="h-7 w-7" />
                    </div>
                  )}

                  <h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                    {value.description}
                  </p>

                  {/* Static Footer */}

                  <div className="mt-8 inline-flex rounded-full border border-border bg-muted/30 px-3 py-1 text-xs font-medium text-muted-foreground">
                    Core Principle
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}