import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Eye, Star } from "lucide-react";

import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import { Card, CardContent, CardFooter } from "@/components/common/Card";

import type { Blog } from "@/types/blog";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({
  blog,
}: Readonly<BlogCardProps>) {
  return (
    <Card
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-slate-200/80
        bg-white
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-200
        hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)]
        dark:border-slate-800
        dark:bg-slate-900
        dark:hover:border-blue-900
      "
    >
      <Link
        href={`/blog/${blog.slug}`}
        className="relative block aspect-video overflow-hidden"
      >
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          priority={blog.featured}
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Premium Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Top Badges */}
        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          <Badge>{blog.category.name}</Badge>

          {blog.featured && (
            <Badge variant="secondary">
              <Star className="mr-1 h-3 w-3 fill-current" />
              Featured
            </Badge>
          )}
        </div>

        {/* Static Editorial Badge */}
        <div className="absolute bottom-5 right-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur dark:bg-slate-900/80 dark:text-slate-200">
          Editor&apos;s Pick
        </div>
      </Link>

      <CardContent className="flex flex-1 flex-col p-6">
        {/* Title */}
        <Link href={`/blog/${blog.slug}`}>
          <h2
            className="
              line-clamp-2
              text-xl
              font-bold
              leading-tight
              tracking-tight
              transition-colors
              group-hover:text-blue-600
              dark:group-hover:text-blue-400
              lg:text-2xl
            "
          >
            {blog.title}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className="mt-4 line-clamp-3 text-[15px] leading-7 text-muted-foreground">
          {blog.excerpt}
        </p>

        {/* Expertise / Reading Badge */}
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
            Modern Development
          </span>

          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
            Beginner Friendly
          </span>
        </div>

        {/* Bottom Content */}
        <div className="mt-auto pt-6">
          {/* Author */}
          <div className="flex items-center gap-3">
            <Image
              src={blog.author.avatar}
              alt={blog.author.name}
              width={44}
              height={44}
              className="rounded-full border border-white object-cover shadow-sm dark:border-slate-700"
            />

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
                {blog.author.name}
              </p>

              <p className="truncate text-xs text-muted-foreground">
                {blog.author.role}
              </p>
            </div>
          </div>

          {/* Metadata */}
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />

              <span>{blog.publishedAt}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />

              <span>{blog.readTime} min read</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="mt-auto flex items-center justify-between border-t border-slate-200 px-6 py-5 dark:border-slate-800">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Eye className="h-4 w-4" />

            <span>{blog.views.toLocaleString()} views</span>
          </div>

          <div className="hidden items-center gap-1 text-amber-500 sm:flex">
            <Star className="h-4 w-4 fill-current" />

            <span className="font-medium">4.9</span>
          </div>
        </div>

        <Link href={`/blog/${blog.slug}`}>
          <Button className="group/button">
            Read Article

            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/button:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}