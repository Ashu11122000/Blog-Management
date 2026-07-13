import type { Category } from "@/types/category";

export const categories: Category[] = [
  {
    id: "1",
    name: "Next.js",
    slug: "nextjs",
    description: "Everything related to Next.js App Router.",
    color: "#000000",
    icon: "Rocket",
  },
  {
    id: "2",
    name: "React",
    slug: "react",
    description: "Modern React development.",
    color: "#61DAFB",
    icon: "Atom",
  },
  {
    id: "3",
    name: "TypeScript",
    slug: "typescript",
    description: "Strongly typed JavaScript.",
    color: "#3178C6",
    icon: "FileCode",
  },
  {
    id: "4",
    name: "Tailwind CSS",
    slug: "tailwindcss",
    description: "Utility-first CSS framework.",
    color: "#06B6D4",
    icon: "Palette",
  },
];