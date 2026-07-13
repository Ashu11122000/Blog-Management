import type { GalleryImage } from "@/types/gallery";

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    title: "Modern Workspace",
    description:
      "A clean and modern workspace setup for productive software development.",
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    blurDataURL:
      "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
    alt: "Modern workspace with laptop and desk",
    width: 1600,
    height: 1067,
    category: "Workspace",
    tags: ["office", "workspace", "productivity"],
    featured: true,
    uploadedAt: "2026-07-01",
  },
  {
    id: "2",
    title: "Coding Session",
    description:
      "Developer writing code in a modern development environment.",
    src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    blurDataURL:
      "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
    alt: "Developer coding on a laptop",
    width: 1600,
    height: 1067,
    category: "Development",
    tags: ["coding", "developer", "react"],
    featured: true,
    uploadedAt: "2026-07-03",
  },
  {
    id: "3",
    title: "Team Collaboration",
    description:
      "A collaborative meeting discussing software architecture.",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    blurDataURL:
      "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
    alt: "People collaborating in an office",
    width: 1600,
    height: 1067,
    category: "Team",
    tags: ["meeting", "team", "collaboration"],
    featured: false,
    uploadedAt: "2026-07-05",
  },
  {
    id: "4",
    title: "Technology Setup",
    description:
      "A premium desktop setup with multiple monitors for development.",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    blurDataURL:
      "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
    alt: "Desktop computer setup",
    width: 1600,
    height: 1067,
    category: "Technology",
    tags: ["desktop", "technology", "setup"],
    featured: true,
    uploadedAt: "2026-07-08",
  },
  {
    id: "5",
    title: "Creative Workspace",
    description:
      "Minimal workspace designed for creativity and focus.",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    blurDataURL:
      "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
    alt: "Minimal creative workspace",
    width: 1600,
    height: 1067,
    category: "Workspace",
    tags: ["minimal", "workspace", "design"],
    featured: false,
    uploadedAt: "2026-07-10",
  },
  {
    id: "6",
    title: "Laptop Development",
    description:
      "Building modern web applications using Next.js and TypeScript.",
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    blurDataURL:
      "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
    alt: "Laptop displaying code editor",
    width: 1600,
    height: 1067,
    category: "Development",
    tags: ["nextjs", "typescript", "coding"],
    featured: false,
    uploadedAt: "2026-07-12",
  },
];