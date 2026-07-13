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
    <Card className="group overflow-hidden border shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        href={`/gallery/${image.id}`}
        aria-label={`View ${image.title}`}
        scroll={false}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <GalleryImage
          image={image}
          priority={priority}
          className="aspect-4/3"
        />

        <CardContent className="space-y-3 p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="line-clamp-2 text-lg font-semibold transition-colors duration-200 group-hover:text-primary">
              {image.title}
            </h3>

            {image.featured && (
              <Badge variant="default">
                Featured
              </Badge>
            )}
          </div>

          <p className="line-clamp-2 text-sm text-muted-foreground">
            {image.description}
          </p>
        </CardContent>

        <CardFooter className="flex items-center justify-between border-t pt-4 text-sm text-muted-foreground">
          <Badge variant="secondary">
            {image.category}
          </Badge>

          <div className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />

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