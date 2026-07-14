"use client";

import Image from "next/image";
import { CalendarDays, Tag } from "lucide-react";

import Badge from "@/components/common/Badge";
import Modal from "@/components/common/Modal";
import { cn } from "@/lib/utils";
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
      className="max-h-[92vh]"
    >
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] xl:gap-10">
        {/* ==========================================================
            Image
        ========================================================== */}

        <div
          className={cn(
            "relative overflow-hidden rounded-2xl",
            "border border-border/60",
            "bg-muted/40 shadow-sm",
            "min-h-80 lg:min-h-[42rem]",
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            placeholder={image.blurDataURL ? "blur" : "empty"}
            blurDataURL={image.blurDataURL}
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover transition-transform duration-700 hover:scale-[1.02]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
        </div>

        {/* ==========================================================
            Content
        ========================================================== */}

        <div className="flex flex-col justify-between">
          <div className="space-y-8">
            {/* Description */}

            <div className="space-y-3">
              <h3 className="text-lg font-semibold tracking-tight">
                About this image
              </h3>

              <p className="max-w-prose text-[15px] leading-7 text-muted-foreground">
                {image.description}
              </p>
            </div>

            {/* Category */}

            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="secondary">
                {image.category}
              </Badge>

              {image.featured && (
                <Badge variant="default">
                  Featured
                </Badge>
              )}

              <Badge variant="outline">
                High Resolution
              </Badge>
            </div>

            {/* Upload Date */}

            <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-border/60 bg-muted/40 px-3.5 py-2 text-sm text-muted-foreground">
              <CalendarDays className="h-4 w-4" />

              <time dateTime={image.uploadedAt}>
                {new Date(image.uploadedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>

            <div className="border-t border-border/60" />

            {/* Tags */}

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-primary" />

                <h4 className="font-semibold tracking-tight">
                  Tags
                </h4>
              </div>

              <div className="flex flex-wrap gap-2.5">
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

            <div className="border-t border-border/60" />

                        {/* ==========================================================
                Image Information
            ========================================================== */}

            <div className="space-y-4">
              <h4 className="text-lg font-semibold tracking-tight">
                Image Information
              </h4>

              <div className="rounded-2xl border border-border/60 bg-muted/20 p-5 shadow-sm">
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      Category
                    </p>

                    <p className="mt-1.5 text-sm font-semibold">
                      {image.category}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      Resolution
                    </p>

                    <p className="mt-1.5 text-sm font-semibold">
                      {image.width} × {image.height}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      Uploaded
                    </p>

                    <p className="mt-1.5 text-sm font-semibold">
                      {new Date(image.uploadedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      Status
                    </p>

                    <p className="mt-1.5 text-sm font-semibold">
                      {image.featured ? "Featured" : "Standard"}
                    </p>
                  </div>

                  {/* Premium Static Information */}

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      License
                    </p>

                    <p className="mt-1.5 text-sm font-semibold">
                      Free to Use
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      Format
                    </p>

                    <p className="mt-1.5 text-sm font-semibold">
                      JPG
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      Color Profile
                    </p>

                    <p className="mt-1.5 text-sm font-semibold">
                      sRGB
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      Quality
                    </p>

                    <p className="mt-1.5 text-sm font-semibold">
                      High Resolution
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ==========================================================
                Additional Note
            ========================================================== */}

            <div className="rounded-2xl border border-dashed border-border/60 bg-muted/10 p-4">
              <p className="text-sm leading-6 text-muted-foreground">
                This image is part of our curated gallery collection showcasing
                modern design inspiration, creative concepts, and high-quality
                visual assets for developers, designers, and digital creators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}