import type { Metadata } from "next";

import {
  FolderOpen,
  ImageIcon,
  Sparkles,
  Star,
} from "lucide-react";

import Badge from "@/components/common/Badge";
import Container from "@/components/layout/Container";

import GalleryGrid from "@/components/gallery/GalleryGrid";

import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore our curated collection of workspace, development, and technology images.",

  keywords: [
    "Gallery",
    "Workspace",
    "Development",
    "Technology",
    "Programming",
    "Next.js",
    "React",
    "Software Engineering",
    "Images",
  ],

  alternates: {
    canonical: "/gallery",
  },

  openGraph: {
    title: "Gallery | Blog Management",
    description:
      "Explore our curated collection of workspace, development, and technology images.",
    url: "/gallery",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gallery | Blog Management",
    description:
      "Explore our curated collection of workspace, development, and technology images.",
  },
};

export default function GalleryPage() {
  const totalImages = galleryImages.length;

  const featuredImages = galleryImages.filter(
    (image) => image.featured,
  ).length;

  const totalCategories = new Set(
    galleryImages.map(
      (image) => image.category,
    ),
  ).size;

  return (
    <main className="relative overflow-hidden py-16 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900" />

      <Container>
        {/* Hero */}
        <section className="rounded-3xl border border-slate-200/70 bg-white/70 px-6 py-12 text-center shadow-xl backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-900/70 lg:px-12 lg:py-16">
          <Badge className="mb-5">
            <Sparkles className="mr-1 h-3.5 w-3.5" />
            Image Gallery
          </Badge>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Explore Our Gallery
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            Browse a curated collection of workspace, development,
            technology, and software engineering images that showcase
            modern tools, environments, and creative inspiration.
          </p>

          {/* Statistics */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <ImageIcon className="mx-auto h-6 w-6 text-primary" />

              <p className="mt-3 text-3xl font-bold">
                {totalImages}
              </p>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Total Images
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <Star className="mx-auto h-6 w-6 text-primary" />

              <p className="mt-3 text-3xl font-bold">
                {featuredImages}
              </p>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Featured Images
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <FolderOpen className="mx-auto h-6 w-6 text-primary" />

              <p className="mt-3 text-3xl font-bold">
                {totalCategories}
              </p>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Categories
              </p>
            </div>
          </div>
        </section>

                {/* Gallery Section */}
        <section className="mt-20">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Badge className="mb-4">
                <ImageIcon className="mr-1 h-3.5 w-3.5" />
                Gallery Collection
              </Badge>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-4xl">
                Browse the Collection
              </h2>

              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
                Discover a curated selection of high-quality images featuring
                modern workspaces, software development, technology, design,
                and programming environments. Click any image to view it in
                greater detail.
              </p>
            </div>

            <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
              {totalImages} {totalImages === 1 ? "Image" : "Images"}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-xl backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-900/70 lg:p-8">
            <GalleryGrid images={galleryImages} />
          </div>
        </section>

                {/* Bottom CTA */}
        <section className="mt-20">
          <div className="rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 px-8 py-12 text-center shadow-lg dark:border-primary/30 dark:from-primary/10 dark:via-primary/5 dark:to-primary/10">
            <Badge className="mb-5">
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              Keep Exploring
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Inspiration Starts with Great Design
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
              Explore our growing collection of development workspaces,
              technology setups, and creative environments. More curated
              images and categories will continue to be added over time.
            </p>
          </div>
        </section>
      </Container>
    </main>
  );
}