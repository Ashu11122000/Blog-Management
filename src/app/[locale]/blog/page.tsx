import type { Metadata } from "next";

import BlogGrid from "@/components/blog/BlogGrid";
import BlogSidebar from "@/components/blog/BlogSidebar";
import SearchBar from "@/components/blog/SearchBar";
import Badge from "@/components/common/Badge";
import Container from "@/components/layout/Container";

import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore articles about Next.js, React, TypeScript, Tailwind CSS, and modern web development.",
};

export default function BlogPage() {
  const publishedBlogs = blogs.filter(
    (blog) => blog.published,
  );

  const featuredBlogs = publishedBlogs.filter(
    (blog) => blog.featured,
  );

  return (
    <main className="py-16 lg:py-24">
      <Container>
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <Badge className="mb-4">
            Latest Articles
          </Badge>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Blog
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            Discover tutorials, guides, and insights on
            Next.js, React, TypeScript, Tailwind CSS,
            and modern web development.
          </p>

          <div className="mx-auto mt-10 max-w-xl">
            <SearchBar
              items={publishedBlogs}
              placeholder="Search articles..."
            />
          </div>
        </section>

        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          {/* Main Content */}
          <div>
            {featuredBlogs.length > 0 && (
              <section className="mb-20">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold">
                    Featured Posts
                  </h2>

                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    Hand-picked articles recommended
                    for you.
                  </p>
                </div>

                <BlogGrid blogs={featuredBlogs} />
              </section>
            )}

            <section>
              <div className="mb-8">
                <h2 className="text-3xl font-bold">
                  All Articles
                </h2>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Browse all published blog posts.
                </p>
              </div>

              <BlogGrid blogs={publishedBlogs} />
            </section>
          </div>

          {/* Sidebar */}
          <aside>
            <BlogSidebar />
          </aside>
        </div>
      </Container>
    </main>
  );
}