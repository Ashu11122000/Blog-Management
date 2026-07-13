import type { Metadata } from "next";

import Container from "@/components/layout/Container";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore our curated collection of workspace, development, and technology images.",
};

export default function GalleryPage() {
  const totalImages = galleryImages.length;

  const featuredImages = galleryImages.filter(
    (image) => image.featured
  ).length;

  const totalCategories = new Set(
    galleryImages.map((image) => image.category)
  ).size;

  return (
    <Container className="py-12 lg:py-16">
      {/* Hero */}
      <section className="mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-full border border-border bg-muted px-4 py-1 text-sm font-medium">
          Image Gallery
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
          Explore Our Gallery
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Browse a curated collection of development,
          workspace, and technology images showcasing
          modern software engineering environments.
        </p>
      </section>

      {/* Statistics */}
      <section className="mt-12 grid gap-6 sm:grid-cols-3">
        <div className="rounded-xl border bg-card p-6 text-center shadow-sm">
          <p className="text-3xl font-bold">
            {totalImages}
          </p>

          <p className="mt-2 text-sm text-muted-foreground">
            Total Images
          </p>
        </div>

        <div className="rounded-xl border bg-card p-6 text-center shadow-sm">
          <p className="text-3xl font-bold">
            {featuredImages}
          </p>

          <p className="mt-2 text-sm text-muted-foreground">
            Featured Images
          </p>
        </div>

        <div className="rounded-xl border bg-card p-6 text-center shadow-sm">
          <p className="text-3xl font-bold">
            {totalCategories}
          </p>

          <p className="mt-2 text-sm text-muted-foreground">
            Categories
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="mt-16">
        <GalleryGrid images={galleryImages} />
      </section>
    </Container>
  );
}