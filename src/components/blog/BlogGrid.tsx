import BlogCard from "@/components/blog/BlogCard";
import EmptyState from "@/components/common/EmptyState";

import type { Blog } from "@/types/blog";

interface BlogGridProps {
  blogs: Blog[];
}

export default function BlogGrid({
  blogs,
}: Readonly<BlogGridProps>) {
  if (blogs.length === 0) {
    return (
      <section className="py-16">
        <EmptyState
          title="No blogs found"
          description="There are no blog posts available at the moment. Please check back later."
        />
      </section>
    );
  }

  return (
    <section
      aria-labelledby="blog-grid-heading"
      className="space-y-8"
    >
      {/* Editorial Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Latest Articles
          </p>

          <h2
            id="blog-grid-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Explore Our Collection
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
            Discover carefully curated articles covering software development,
            modern technologies, design principles, and engineering best
            practices.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm dark:border-slate-800 dark:bg-slate-900">
          <span className="font-semibold text-slate-900 dark:text-white">
            {blogs.length}
          </span>

          <span className="ml-2 text-muted-foreground">
            {blogs.length === 1 ? "Article" : "Articles"}
          </span>
        </div>
      </div>

      {/* Blog Grid */}
      <div
        className="
          grid
          items-stretch
          grid-cols-1
          gap-8
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
          />
        ))}
      </div>
    </section>
  );
}