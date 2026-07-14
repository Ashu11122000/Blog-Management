import Container from "@/components/layout/Container";
import type { AboutHero as AboutHeroType } from "@/types/about";

interface AboutHeroProps {
  hero: AboutHeroType;
}

export default function AboutHero({
  hero,
}: Readonly<AboutHeroProps>) {
  return (
    <section className="relative overflow-hidden border-b bg-gradient-to-b from-slate-50 via-white to-slate-100 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Background Decoration */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Subtitle */}

          <div className="inline-flex items-center rounded-full border border-blue-200/60 bg-blue-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700 shadow-sm dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
            {hero.subtitle}
          </div>

          {/* Title */}

          <h1 className="mt-8 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl xl:text-7xl dark:text-white">
            {hero.title}
          </h1>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl dark:text-slate-300">
            {hero.description}
          </p>

          {/* Static Statistics */}

          <div className="mt-14 grid grid-cols-2 gap-8 border-t border-slate-200 pt-10 sm:grid-cols-4 dark:border-slate-800">
            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">
                120+
              </p>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Articles
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">
                25+
              </p>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Categories
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">
                100K+
              </p>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Monthly Readers
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">
                Weekly
              </p>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Fresh Content
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}