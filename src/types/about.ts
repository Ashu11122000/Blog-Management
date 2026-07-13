export interface AboutHero {
  title: string;
  subtitle: string;
  description: string;
}

export interface AboutStory {
  title: string;
  content: string[];
}

export interface AboutStat {
  id: number;
  label: string;
  value: string;
}

export interface AboutValue {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface AboutTimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
}

export interface AboutData {
  hero: AboutHero;
  story: AboutStory;
  stats: AboutStat[];
  values: AboutValue[];
  timeline: AboutTimelineItem[];
}