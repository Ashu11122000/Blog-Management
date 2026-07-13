import Container from "@/components/layout/Container";
import type { AboutHero as AboutHeroType } from "@/types/about";

interface AboutHeroProps {
  hero: AboutHeroType;
}

export default function AboutHero({
  hero,
}: Readonly<AboutHeroProps>) {
  return (
    <section className="border-b bg-linear-to-b from-slate-50 to-white py-20 dark:from-slate-950 dark:to-slate-900">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            {hero.subtitle}
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">
            {hero.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {hero.description}
          </p>
        </div>
      </Container>
    </section>
  );
}