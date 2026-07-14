import Link from "next/link";
import { CalendarDays } from "lucide-react";

import Badge from "@/components/common/Badge";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/common/Card";
import GalleryImage from "@/components/gallery/GalleryImage";
import type { GalleryImage as GalleryImageType } from "@/types/gallery";

interface GalleryCardProps {
  image: GalleryImageType;
  priority?: boolean;
}

export default function GalleryCard({
  image,
  priority = false,
}: Readonly<GalleryCardProps>) {
  return (
    <Card
      className="
        group
        h-full
        overflow-hidden
        rounded-2xl
        border
        border-border/60
        bg-background/80
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1.5
        hover:border-primary/20
        hover:shadow-xl
      "
    >
      <Link
        href={`/gallery/${image.id}`}
        aria-label={`View ${image.title}`}
        scroll={false}
        className="flex h-full flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <div className="overflow-hidden">
          <GalleryImage
            image={image}
            priority={priority}
            className="aspect-4/3 transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <CardContent className="flex flex-1 flex-col space-y-4 p-6">
          <div className="flex items-start justify-between gap-4">
            <h3
              className="
                line-clamp-2
                text-xl
                font-semibold
                leading-snug
                tracking-tight
                transition-colors
                duration-200
                group-hover:text-primary
              "
            >
              {image.title}
            </h3>

            {image.featured && (
              <Badge
                variant="default"
                className="shrink-0"
              >
                Featured
              </Badge>
            )}
          </div>

          <p
            className="
              line-clamp-3
              text-sm
              leading-6
              text-muted-foreground
            "
          >
            {image.description}
          </p>
        </CardContent>

        <CardFooter
          className="
            mt-auto
            flex
            items-center
            justify-between
            border-t
            border-border/60
            px-6
            py-4
            text-sm
            text-muted-foreground
          "
        >
          <Badge variant="secondary">
            {image.category}
          </Badge>

          <div className="flex items-center gap-2 whitespace-nowrap">
            <CalendarDays className="h-4 w-4 opacity-70" />

            <time dateTime={image.uploadedAt}>
              {new Date(image.uploadedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}