import type { Metadata } from "next";

import AboutCTA from "@/components/about/AboutCTA";
import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/about/AboutStats";
import AboutStory from "@/components/about/AboutStory";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutValues from "@/components/about/AboutValues";
import { SITE_CONFIG } from "@/constants/site";
import { aboutData } from "@/data/about";

export const metadata: Metadata = {
  title: `About | ${SITE_CONFIG.title}`,
  description:
    "Learn more about the Blog Management System, its architecture, goals, and the technologies used to build it.",
  keywords: [
    "About",
    "Blog Management",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "App Router",
  ],
  openGraph: {
    title: `About | ${SITE_CONFIG.title}`,
    description:
      "Discover the story, mission, and technologies behind the Blog Management System.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="pb-24">
      <AboutHero hero={aboutData.hero} />

      <div className="space-y-24 lg:space-y-32">
        <AboutStory story={aboutData.story} />

        <AboutStats stats={aboutData.stats} />

        <AboutValues values={aboutData.values} />

        <AboutTimeline timeline={aboutData.timeline} />

        <AboutCTA />
      </div>
    </main>
  );
}