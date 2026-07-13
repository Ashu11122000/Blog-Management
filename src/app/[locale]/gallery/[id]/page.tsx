import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Tag } from "lucide-react";

import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import Container from "@/components/layout/Container";
import { galleryImages } from "@/data/gallery";

interface GalleryPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return galleryImages.map((image) => ({
    id: image.id,
  }));
}

export async function generateMetadata({
  params,
}: Readonly<GalleryPageProps>): Promise<Metadata> {
  const { id } = await params;

  const image = galleryImages.find(
    (item) => item.id === id
  );

  if (!image) {
    return {
      title: "Image Not Found",
    };
  }

  return {
    title: image.title,
    description: image.description,
    openGraph: {
      title: image.title,
      description: image.description,
      images: [
        {
          url: image.src,
          width: image.width,
          height: image.height,
          alt: image.alt,
        },
      ],
    },
  };
}

export default async function GalleryImagePage({
  params,
}: Readonly<GalleryPageProps>) {
  const { id } = await params;

  const image = galleryImages.find(
    (item) => item.id === id
  );

  if (!image) {
    notFound();
  }

  return (
    <Container className="py-12 lg:py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl border bg-card">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority
            placeholder={
              image.blurDataURL ? "blur" : "empty"
            }
            blurDataURL={image.blurDataURL}
            className="h-auto w-full object-cover"
            sizes="(max-width:1024px)100vw,50vw"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="mb-6 flex flex-wrap gap-2">
              <Badge variant="secondary">
                {image.category}
              </Badge>

              {image.featured && (
                <Badge variant="default">
                  Featured
                </Badge>
              )}
            </div>

            <h1 className="text-4xl font-bold tracking-tight">
              {image.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {image.description}
            </p>

            <div className="mt-8 flex items-center gap-2 text-muted-foreground">
              <CalendarDays className="h-5 w-5" />

              <time dateTime={image.uploadedAt}>
                {new Date(
                  image.uploadedAt
                ).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>

            <div className="mt-10">
              <div className="mb-4 flex items-center gap-2">
                <Tag className="h-5 w-5" />

                <h2 className="text-lg font-semibold">
                  Tags
                </h2>
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

            <div className="mt-10 rounded-xl border bg-muted/30 p-6">
              <h3 className="mb-4 font-semibold">
                Image Details
              </h3>

              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">
                    Resolution
                  </dt>

                  <dd className="mt-1 font-medium">
                    {image.width} × {image.height}
                  </dd>
                </div>

                <div>
                  <dt className="text-muted-foreground">
                    Category
                  </dt>

                  <dd className="mt-1 font-medium">
                    {image.category}
                  </dd>
                </div>

                <div>
                  <dt className="text-muted-foreground">
                    Status
                  </dt>

                  <dd className="mt-1 font-medium">
                    {image.featured
                      ? "Featured"
                      : "Standard"}
                  </dd>
                </div>

                <div>
                  <dt className="text-muted-foreground">
                    Uploaded
                  </dt>

                  <dd className="mt-1 font-medium">
                    {new Date(
                      image.uploadedAt
                    ).toLocaleDateString()}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-10">
            <Button asChild>
              <Link href="/gallery">
                Back to Gallery
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}