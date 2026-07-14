import Link from "next/link";
import {
  BookOpen,
  Clock3,
  FolderOpen,
  Hash,
  Star,
  TrendingUp,
} from "lucide-react";

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
    <aside className="space-y-8">
      {/* Categories */}
      <Card className="rounded-2xl border-slate-200/80 shadow-sm dark:border-slate-800">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-100 p-2 dark:bg-blue-500/10">
              <FolderOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>

            <div>
              <CardTitle className="text-xl">Categories</CardTitle>

              <p className="mt-1 text-sm text-muted-foreground">
                Browse topics by interest
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category.id}
                variant="outline"
                className="transition-colors hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {category.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Featured Posts */}
      <Card className="rounded-2xl border-slate-200/80 shadow-sm dark:border-slate-800">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-amber-100 p-2 dark:bg-amber-500/10">
              <Star className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>

            <div>
              <CardTitle className="text-xl">Featured Posts</CardTitle>

              <p className="mt-1 text-sm text-muted-foreground">
                Editor&apos;s hand-picked articles
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-5">
          {featuredPosts.map((blog, index) => (
            <article
              key={blog.id}
              className="group"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {index + 1}
                </div>

                <div className="min-w-0 flex-1">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="line-clamp-2 font-semibold transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400"
                  >
                    {blog.title}
                  </Link>

                  <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock3 className="h-3.5 w-3.5" />
                      {blog.readTime} min
                    </span>

                    <span className="flex items-center gap-1">
                      <TrendingUp className="h-3.5 w-3.5" />
                      Popular
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card className="rounded-2xl border-slate-200/80 shadow-sm dark:border-slate-800">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-emerald-100 p-2 dark:bg-emerald-500/10">
              <Hash className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>

            <div>
              <CardTitle className="text-xl">Popular Tags</CardTitle>

              <p className="mt-1 text-sm text-muted-foreground">
                Trending technologies
              </p>
            </div>
          </div>
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
                className="transition-transform duration-200 hover:-translate-y-0.5"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter (Static) */}
      <Card className="rounded-2xl border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-sm dark:border-blue-900 dark:from-blue-950/40 dark:to-slate-900">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-100 p-2 dark:bg-blue-500/10">
              <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>

            <CardTitle className="text-xl">
              Weekly Digest
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-sm leading-7 text-muted-foreground">
            Stay updated with carefully curated articles covering modern web
            development, backend engineering, AI, and software architecture.
          </p>

          <div className="mt-6 rounded-xl border border-dashed border-blue-300 bg-white/70 p-4 text-center dark:border-blue-800 dark:bg-slate-900/60">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              12K+
            </p>

            <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
              Weekly Readers
            </p>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}