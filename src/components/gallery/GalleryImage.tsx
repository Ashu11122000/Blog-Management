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
        "group relative overflow-hidden rounded-2xl bg-muted/60",
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
        className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-[1.04]
        "
      />

      {/* Soft premium overlay */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-black/10
          via-transparent
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Subtle top highlight */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-white/30
        "
      />
    </div>
  );
}