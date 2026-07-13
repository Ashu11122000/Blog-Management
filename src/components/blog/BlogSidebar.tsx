import Link from "next/link";

import Badge from "@/components/common/Badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/common/Card";

import { blogs } from "@/data/blogs";
import { categories } from "@/data/categories";

export default function BlogSidebar() {
  const featuredPosts = blogs
    .filter((blog) => blog.featured)
    .slice(0, 3);

  return (
    <aside className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category.id}
                variant="outline"
              >
                {category.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Featured Posts</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {featuredPosts.map((blog) => (
            <article key={blog.id}>
              <Link
                href={`/blog/${blog.slug}`}
                className="font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                {blog.title}
              </Link>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {blog.readTime} min read
              </p>
            </article>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Popular Tags</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "JavaScript",
            ].map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}