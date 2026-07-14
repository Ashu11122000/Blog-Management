"use client";

import Container from "@/components/layout/Container";
import Skeleton from "@/components/common/Skeleton";

export default function BlogLoading() {
  return (
    <main className="relative overflow-hidden py-16 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900" />

      <Container>
        {/* Header */}
        <section className="mb-16 flex flex-col items-center text-center">
          <Skeleton className="mb-5 h-8 w-32 rounded-full" />

          <Skeleton className="h-12 w-[28rem] max-w-full rounded-xl" />

          <Skeleton className="mt-6 h-5 w-full max-w-2xl rounded-lg" />

          <Skeleton className="mt-3 h-5 w-3/4 max-w-xl rounded-lg" />
        </section>

        {/* Blog Grid */}
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 shadow-lg backdrop-blur-sm transition-all duration-300 dark:border-slate-800/70 dark:bg-slate-900/70"
            >
              {/* Image */}
              <Skeleton className="aspect-video w-full rounded-none" />

              <div className="space-y-5 p-6">
                {/* Category */}
                <Skeleton className="h-6 w-24 rounded-full" />

                {/* Title */}
                <Skeleton className="h-8 w-full rounded-xl" />
                <Skeleton className="h-8 w-4/5 rounded-xl" />

                {/* Description */}
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-3/4 rounded-lg" />

                {/* Author */}
                <div className="flex items-center gap-3 pt-2">
                  <Skeleton className="h-11 w-11 rounded-full" />

                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-32 rounded-lg" />
                    <Skeleton className="h-3 w-24 rounded-lg" />
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3">
                  <Skeleton className="h-4 w-20 rounded-lg" />

                  <Skeleton className="h-10 w-28 rounded-xl" />
                </div>
              </div>
            </article>
          ))}
        </section>
      </Container>
    </main>
  );
}