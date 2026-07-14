import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  CalendarDays,
  ChevronRight,
  FolderOpen,
  Home,
  ImageIcon,
  Sparkles,
  Star,
  Tag,
} from "lucide-react";

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
    (item) => item.id === id,
  );

  if (!image) {
    return {
      title: "Image Not Found",
      description: "The requested gallery image could not be found.",
    };
  }

  return {
    title: image.title,
    description: image.description,

    keywords: [
      image.category,
      ...image.tags,
      "Gallery",
      "Technology",
      "Workspace",
      "Development",
    ],

    alternates: {
      canonical: `/gallery/${image.id}`,
    },

    openGraph: {
      title: image.title,
      description: image.description,
      url: `/gallery/${image.id}`,
      type: "article",
      images: [
        {
          url: image.src,
          width: image.width,
          height: image.height,
          alt: image.alt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: image.title,
      description: image.description,
      images: [image.src],
    },
  };
}

export default async function GalleryImagePage({
  params,
}: Readonly<GalleryPageProps>) {
  const { id } = await params;

  const image = galleryImages.find(
    (item) => item.id === id,
  );

  if (!image) {
    notFound();
  }

  return (
    <main className="relative overflow-hidden py-16 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900" />

      <Container>
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
        >
          <Link
            href="/"
            className="flex items-center gap-1 transition-colors hover:text-primary"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>

          <ChevronRight className="h-4 w-4" />

          <Link
            href="/gallery"
            className="transition-colors hover:text-primary"
          >
            Gallery
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span className="font-medium text-slate-900 dark:text-white">
            {image.title}
          </span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Image */}
          <section className="rounded-3xl border border-slate-200/70 bg-white/70 p-5 shadow-xl backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-900/70">
            <div className="group relative overflow-hidden rounded-3xl">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                priority
                placeholder={
                  image.blurDataURL
                    ? "blur"
                    : "empty"
                }
                blurDataURL={image.blurDataURL}
                sizes="(max-width:1024px)100vw,55vw"
                className="h-auto w-full rounded-3xl object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              {image.featured && (
                <div className="absolute left-5 top-5">
                  <Badge>
                    <Star className="mr-1 h-3.5 w-3.5" />
                    Featured
                  </Badge>
                </div>
              )}
            </div>
          </section>

                    {/* Details */}
          <section className="rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-xl backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-900/70 lg:p-10">
            {/* Category */}
            <Badge className="mb-5">
              <FolderOpen className="mr-1 h-3.5 w-3.5" />
              {image.category}
            </Badge>

            {/* Title */}
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {image.title}
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              {image.description}
            </p>

            {/* Metadata */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <CalendarDays className="h-4 w-4 text-primary" />

                <time dateTime={image.uploadedAt}>
                  {new Date(image.uploadedAt).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    },
                  )}
                </time>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <ImageIcon className="h-4 w-4 text-primary" />

                <span>
                  {image.width} × {image.height}
                </span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <Sparkles className="h-4 w-4 text-primary" />

                <span>
                  {image.featured ? "Featured" : "Standard"}
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-10">
              <div className="mb-4 flex items-center gap-2">
                <Tag className="h-5 w-5 text-primary" />

                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Tags
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {image.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="rounded-full"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Image Details */}
            <div className="mt-10 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-6 dark:border-slate-800/70 dark:bg-slate-800/40">
              <h2 className="mb-6 text-xl font-semibold text-slate-900 dark:text-white">
                Image Details
              </h2>

              <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <dt className="text-sm text-slate-500 dark:text-slate-400">
                    Resolution
                  </dt>

                  <dd className="mt-1 font-semibold text-slate-900 dark:text-white">
                    {image.width} × {image.height}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-slate-500 dark:text-slate-400">
                    Category
                  </dt>

                  <dd className="mt-1 font-semibold text-slate-900 dark:text-white">
                    {image.category}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-slate-500 dark:text-slate-400">
                    Status
                  </dt>

                  <dd className="mt-1 font-semibold text-slate-900 dark:text-white">
                    {image.featured ? "Featured" : "Standard"}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-slate-500 dark:text-slate-400">
                    Uploaded
                  </dt>

                  <dd className="mt-1 font-semibold text-slate-900 dark:text-white">
                    {new Date(image.uploadedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </dd>
                </div>
              </dl>
            </div>

                        {/* Actions */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild>
                <Link href="/gallery">
                  Back to Gallery
                </Link>
              </Button>
            </div>

            {/* CTA */}
            <div className="mt-10 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-6 dark:border-primary/30 dark:from-primary/10 dark:to-primary/5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Sparkles className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    Discover More Inspiration
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                    Continue exploring our curated gallery of modern workspaces,
                    development environments, and technology imagery. New
                    collections and featured images are added regularly.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}