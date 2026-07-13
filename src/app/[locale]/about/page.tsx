import type { Metadata } from "next";

import AboutCTA from "@/components/about/AboutCTA";
import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/about/AboutStats";
import AboutStory from "@/components/about/AboutStory";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutValues from "@/components/about/AboutValues";
import { aboutData } from "@/data/about";
import { SITE_CONFIG } from "@/constants/site";

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
    <main>
      <AboutHero hero={aboutData.hero} />

      <AboutStory story={aboutData.story} />

      <AboutStats stats={aboutData.stats} />

      <AboutValues values={aboutData.values} />

      <AboutTimeline timeline={aboutData.timeline} />

      <AboutCTA />
    </main>
  );
}