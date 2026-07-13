import Container from "@/components/layout/Container";
import type { AboutStory as AboutStoryType } from "@/types/about";

interface AboutStoryProps {
  story: AboutStoryType;
}

export default function AboutStory({
  story,
}: Readonly<AboutStoryProps>) {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold">
            {story.title}
          </h2>

          <div className="space-y-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {story.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}