import Container from "@/components/layout/Container";
import type { AboutStory as AboutStoryType } from "@/types/about";

interface AboutStoryProps {
  story: AboutStoryType;
}

export default function AboutStory({
  story,
}: Readonly<AboutStoryProps>) {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Decoration */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Section Badge */}

          <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
            Our Story
          </div>

          {/* Title */}

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">
            {story.title}
          </h2>

          {/* Intro */}

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Every great platform begins with a simple idea. Our journey is
            driven by a passion for sharing knowledge, building practical
            solutions, and creating valuable learning experiences for developers
            around the world.
          </p>

          {/* Story */}

          <div className="mt-12 space-y-8 border-l-2 border-blue-100 pl-8 dark:border-blue-900">
            {story.content.map((paragraph) => (
              <p
                key={paragraph}
                className="text-lg leading-8 text-slate-600 dark:text-slate-300"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Static Highlights */}

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-border/60 bg-muted/20 p-6">
              <h3 className="text-lg font-semibold">
                Our Mission
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Empower developers with practical tutorials, real-world
                examples, and modern web development best practices.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-muted/20 p-6">
              <h3 className="text-lg font-semibold">
                Our Vision
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Build a trusted knowledge hub where learning, creativity,
                and innovation come together for developers of every level.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-muted/20 p-6">
              <h3 className="text-lg font-semibold">
                Our Values
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Simplicity, quality, accessibility, continuous improvement,
                and a commitment to sharing meaningful technical knowledge.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}