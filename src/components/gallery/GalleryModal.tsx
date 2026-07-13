"use client";

import Image from "next/image";
import { CalendarDays, Tag } from "lucide-react";

import Badge from "@/components/common/Badge";
import Modal from "@/components/common/Modal";
import type { GalleryImage } from "@/types/gallery";

interface GalleryModalProps {
  image: GalleryImage;
  open: boolean;
  onClose: () => void;
}

export default function GalleryModal({
  image,
  open,
  onClose,
}: Readonly<GalleryModalProps>) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={image.title}
      maxWidth="2xl"
      className="max-h-[90vh]"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Image */}
        <div className="relative min-h-80 overflow-hidden rounded-xl bg-muted lg:min-h-150">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            placeholder={image.blurDataURL ? "blur" : "empty"}
            blurDataURL={image.blurDataURL}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            <p className="leading-7 text-muted-foreground">
              {image.description}
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">
                {image.category}
              </Badge>

              {image.featured && (
                <Badge variant="default">
                  Featured
                </Badge>
              )}
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarDays className="h-4 w-4" />

              <time dateTime={image.uploadedAt}>
                {new Date(image.uploadedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>

            <div>
              <div className="mb-3 flex items-center gap-2">
                <Tag className="h-4 w-4" />

                <span className="font-medium">
                  Tags
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {image.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">
                  Category
                </p>

                <p className="mt-1 font-medium">
                  {image.category}
                </p>
              </div>

              <div>
                <p className="text-muted-foreground">
                  Resolution
                </p>

                <p className="mt-1 font-medium">
                  {image.width} × {image.height}
                </p>
              </div>

              <div>
                <p className="text-muted-foreground">
                  Uploaded
                </p>

                <p className="mt-1 font-medium">
                  {new Date(image.uploadedAt).toLocaleDateString()}
                </p>
              </div>

              <div>
                <p className="text-muted-foreground">
                  Status
                </p>

                <p className="mt-1 font-medium">
                  {image.featured ? "Featured" : "Standard"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}