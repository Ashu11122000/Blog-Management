"use client";

import { notFound, useRouter } from "next/navigation";

import GalleryModal from "@/components/gallery/GalleryModal";
import { galleryImages } from "@/data/gallery";

interface GalleryModalPageProps {
  params: {
    id: string;
  };
}

export default function GalleryModalPage({
  params,
}: Readonly<GalleryModalPageProps>) {
  const router = useRouter();

  const image = galleryImages.find(
    (item) => item.id === params.id
  );

  if (!image) {
    notFound();
  }

  return (
    <GalleryModal
      image={image}
      open
      onClose={() => router.back()}
    />
  );
}