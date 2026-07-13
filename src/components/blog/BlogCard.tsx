import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";
import { Card, CardContent, CardFooter } from "@/components/common/Card";

import type { Blog } from "@/types/blog";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: Readonly<BlogCardProps>) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/blog/${blog.slug}`}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            priority={blog.featured}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute left-4 top-4 flex gap-2">
            <Badge>{blog.category.name}</Badge>

            {blog.featured && <Badge variant="secondary">Featured</Badge>}
          </div>
        </div>
      </Link>

      <CardContent className="space-y-4 pt-6">
        <Link href={`/blog/${blog.slug}`}>
          <h2 className="line-clamp-2 text-2xl font-bold transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
            {blog.title}
          </h2>
        </Link>

        <p className="line-clamp-3 text-sm text-muted-foreground">
          {blog.excerpt}
        </p>

        <div className="flex items-center gap-3">
          <Image
            src={blog.author.avatar}
            alt={blog.author.name}
            width={40}
            height={40}
            className="rounded-full border object-cover"
          />

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{blog.author.name}</p>

            <p className="truncate text-xs text-muted-foreground">
              {blog.author.role}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar size={16} />

            <span>{blog.publishedAt}</span>
          </div>

          <div className="flex items-center gap-1">
            <Clock size={16} />

            <span>{blog.readTime} min read</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="justify-between">
        <div className="text-sm text-muted-foreground">
          {blog.views.toLocaleString()} views
        </div>

        <Link href={`/blog/${blog.slug}`}>
          <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
