import Button from "@/components/common/Button";
import Container from "@/components/layout/Container";
import { SITE_CONFIG } from "@/constants/site";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Container>
        <section className="flex min-h-screen flex-col items-center justify-center text-center">
          <span className="mb-4 rounded-full border border-slate-200 bg-slate-100 px-4 py-1 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            Built with Next.js App Router
          </span>

          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-50">
            {SITE_CONFIG.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            {SITE_CONFIG.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg">
              Explore Blogs
            </Button>

            <Button
              variant="outline"
              size="lg"
            >
              Dashboard
            </Button>
          </div>
        </section>
      </Container>
    </main>
  );
}