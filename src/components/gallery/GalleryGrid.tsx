import EmptyState from "@/components/common/EmptyState";
import GalleryCard from "@/components/gallery/GalleryCard";
import type { GalleryImage } from "@/types/gallery";

interface GalleryGridProps {
  images: GalleryImage[];
  featuredOnly?: boolean;
}

export default function GalleryGrid({
  images,
  featuredOnly = false,
}: Readonly<GalleryGridProps>) {
  const displayedImages = featuredOnly
    ? images.filter((image) => image.featured)
    : images;

  if (displayedImages.length === 0) {
    return (
      <EmptyState
        title="No images found"
        description="There are no gallery images to display at the moment."
      />
    );
  }

  return (
    <section
      aria-label="Gallery"
      className="
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        lg:gap-7
        xl:grid-cols-3
        2xl:gap-8
        items-stretch
      "
    >
      {displayedImages.map((image, index) => (
        <GalleryCard
          key={image.id}
          image={image}
          priority={index < 3}
        />
      ))}
    </section>
  );
}