import type { ID } from "./common";

/**
 * Hero section displayed at the top of the About page.
 */
export interface AboutHero {
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
}

/**
 * Story/content section explaining the purpose or history.
 */
export interface AboutStory {
  readonly title: string;
  readonly content: readonly string[];
}

/**
 * Statistics displayed on the About page.
 */
export interface AboutStat {
  readonly id: ID;
  readonly label: string;
  readonly value: string;
}

/**
 * Core company or project values.
 */
export interface AboutValue {
  readonly id: ID;
  readonly title: string;
  readonly description: string;

  /**
   * Icon identifier (Lucide, Heroicons, etc.).
   */
  readonly icon: string;
}

/**
 * Timeline entry for milestones or history.
 */
export interface AboutTimelineItem {
  readonly id: ID;
  readonly year: string;
  readonly title: string;
  readonly description: string;
}

/**
 * Complete About page data.
 */
export interface AboutData {
  readonly hero: AboutHero;
  readonly story: AboutStory;
  readonly stats: readonly AboutStat[];
  readonly values: readonly AboutValue[];
  readonly timeline: readonly AboutTimelineItem[];
}
