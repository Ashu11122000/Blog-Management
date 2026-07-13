import { authors } from "./authors";
import { categories } from "./categories";

import type { Blog } from "@/types/blog";

export const blogs: Blog[] = [
  {
    id: "1",

    title: "Getting Started with Next.js App Router",

    slug: "getting-started-with-nextjs-app-router",

    excerpt:
      "Learn the fundamentals of the Next.js App Router and how it improves routing, layouts, and server rendering.",

    content: `
# Getting Started

This is placeholder markdown content.

The full blog content will be implemented in Phase 3.
`,

    coverImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",

    category: categories[0],

    author: authors[0],

    tags: ["Next.js", "React", "App Router"],

    publishedAt: "2026-07-10",

    updatedAt: "2026-07-12",

    readTime: 8,

    featured: true,

    published: true,

    views: 1542,
  },
  {
    id: "2",

    title: "Building Reusable Components with React",

    slug: "building-reusable-components-with-react",

    excerpt:
      "Create scalable UI components that improve consistency and maintainability.",

    content: `
# Reusable Components

Placeholder content.
`,

    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",

    category: categories[1],

    author: authors[1],

    tags: ["React", "Components"],

    publishedAt: "2026-07-08",

    readTime: 6,

    featured: false,

    published: true,

    views: 980,
  },
  {
    id: "3",

    title: "Mastering TypeScript for React Developers",

    slug: "mastering-typescript-for-react-developers",

    excerpt:
      "Improve code quality and developer experience using TypeScript with React.",

    content: `
# TypeScript

Placeholder content.
`,

    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",

    category: categories[2],

    author: authors[0],

    tags: ["TypeScript", "React"],

    publishedAt: "2026-07-05",

    readTime: 10,

    featured: true,

    published: true,

    views: 2140,
  },
];