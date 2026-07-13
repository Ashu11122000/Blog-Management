import Container from "@/components/layout/Container";
import type { AboutTimelineItem } from "@/types/about";

interface AboutTimelineProps {
  timeline: AboutTimelineItem[];
}

export default function AboutTimeline({
  timeline,
}: Readonly<AboutTimelineProps>) {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-900">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Project Journey
          </h2>

          <div className="space-y-10">
            {timeline.map((item) => (
              <div
                key={item.id}
                className="border-l-4 border-blue-600 pl-6"
              >
                <p className="font-semibold text-blue-600">
                  {item.year}
                </p>

                <h3 className="mt-1 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}