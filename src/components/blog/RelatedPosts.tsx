import { ArrowRight, Sparkles } from "lucide-react";

import BlogGrid from "@/components/blog/BlogGrid";

import type { Blog } from "@/types/blog";

type RelatedPostsProps = {
  currentBlogId: string;
  categorySlug: string;
  blogs: Blog[];
};

export default function RelatedPosts({
  currentBlogId,
  categorySlug,
  blogs,
}: Readonly<RelatedPostsProps>) {
  const relatedBlogs = blogs
    .filter(
      (blog) =>
        blog.id !== currentBlogId &&
        blog.category.slug === categorySlug,
    )
    .slice(0, 3);

  if (relatedBlogs.length === 0) {
    return null;
  }

  return (
    <section className="mt-24 border-t border-slate-200 pt-20 dark:border-slate-800">
      {/* Header */}
      <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
            <Sparkles className="h-4 w-4" />
            Continue Reading
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Related Articles
          </h2>

          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Continue exploring more articles from the same category and discover
            additional insights, practical guides, and modern development best
            practices.
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 dark:border-slate-800 dark:bg-slate-900">
          <span className="text-2xl font-bold text-slate-900 dark:text-white">
            {relatedBlogs.length}
          </span>

          <div>
            <p className="text-sm font-medium text-slate-900 dark:text-white">
              Recommended
            </p>

            <p className="text-xs text-muted-foreground">
              Articles to explore
            </p>
          </div>

          <ArrowRight className="ml-2 h-5 w-5 text-muted-foreground" />
        </div>
      </div>

      {/* Grid */}
      <BlogGrid blogs={relatedBlogs} />
    </section>
  );
}