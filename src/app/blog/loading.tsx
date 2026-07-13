import Container from "@/components/layout/Container";
import Skeleton from "@/components/common/Skeleton";

export default function BlogLoading() {
  return (
    <main className="py-16 lg:py-24">
      <Container>
        {/* Page Header */}
        <section className="mb-16 flex flex-col items-center text-center">
          <Skeleton className="mb-4 h-8 w-32 rounded-full" />

          <Skeleton className="h-12 w-80 max-w-full rounded-lg" />

          <Skeleton className="mt-6 h-5 w-full max-w-2xl rounded-lg" />

          <Skeleton className="mt-3 h-5 w-3/4 max-w-xl rounded-lg" />
        </section>

        {/* Blog Grid */}
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800"
            >
              <Skeleton className="aspect-video w-full" />

              <div className="space-y-4 p-6">
                <Skeleton className="h-6 w-24 rounded-full" />

                <Skeleton className="h-8 w-full rounded-lg" />

                <Skeleton className="h-4 w-full rounded-lg" />

                <Skeleton className="h-4 w-4/5 rounded-lg" />

                <div className="flex items-center gap-3 pt-4">
                  <Skeleton className="h-10 w-10 rounded-full" />

                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-32 rounded-lg" />

                    <Skeleton className="h-3 w-24 rounded-lg" />
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <Skeleton className="h-4 w-20 rounded-lg" />

                  <Skeleton className="h-10 w-28 rounded-lg" />
                </div>
              </div>
            </article>
          ))}
        </section>
      </Container>
    </main>
  );
}