import Image from "next/image";

import { cn } from "@/lib/utils";
import type { GalleryImage as GalleryImageType } from "@/types/gallery";

interface GalleryImageProps {
  image: GalleryImageType;
  priority?: boolean;
  className?: string;
}

export default function GalleryImage({
  image,
  priority = false,
  className,
}: Readonly<GalleryImageProps>) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-muted",
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        placeholder={image.blurDataURL ? "blur" : "empty"}
        blurDataURL={image.blurDataURL}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
      />
    </div>
  );
}