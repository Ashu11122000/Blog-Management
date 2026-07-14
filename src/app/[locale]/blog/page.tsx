import type { Metadata } from "next";

import {
  BookOpen,
  Search,
  Sparkles,
  Star,
} from "lucide-react";

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
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "Frontend",
    "Web Development",
    "Programming",
    "Blog",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog",
    description:
      "Explore articles about Next.js, React, TypeScript, Tailwind CSS, and modern web development.",
    type: "website",
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description:
      "Explore articles about Next.js, React, TypeScript, Tailwind CSS, and modern web development.",
  },
};

export default function BlogPage() {
  const publishedBlogs = blogs.filter(
    (blog) => blog.published,
  );

  const featuredBlogs = publishedBlogs.filter(
    (blog) => blog.featured,
  );

  const categories = new Set(
    publishedBlogs.map(
      (blog) => blog.category.slug,
    ),
  );

  return (
    <main className="relative overflow-hidden py-16 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* Main Content */}
          <div>
            {/* Hero */}
            <section className="rounded-3xl border border-slate-200/70 bg-white/70 px-6 py-10 text-center shadow-xl backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-900/70 lg:px-12 lg:py-14">
              <Badge className="mb-5">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                Latest Articles
              </Badge>

              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                Modern Web Development Blog
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
                Discover in-depth tutorials, practical guides, development
                tips, and insights about Next.js, React, TypeScript,
                Tailwind CSS, and building modern full-stack applications.
              </p>

              {/* Statistics */}
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                  <BookOpen className="mx-auto h-6 w-6 text-primary" />

                  <p className="mt-3 text-3xl font-bold">
                    {publishedBlogs.length}
                  </p>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Articles
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                  <Star className="mx-auto h-6 w-6 text-primary" />

                  <p className="mt-3 text-3xl font-bold">
                    {featuredBlogs.length}
                  </p>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Featured
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                  <Search className="mx-auto h-6 w-6 text-primary" />

                  <p className="mt-3 text-3xl font-bold">
                    {categories.size}
                  </p>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Categories
                  </p>
                </div>
              </div>

              {/* Search */}
              <div className="mx-auto mt-12 max-w-2xl">
                <SearchBar
                  items={publishedBlogs}
                  placeholder="Search articles..."
                />
              </div>
            </section>

                        {/* Featured Posts */}
            {featuredBlogs.length > 0 && (
              <section className="mt-20">
                <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <Badge className="mb-4">
                      <Star className="mr-1 h-3.5 w-3.5" />
                      Editor&apos;s Picks
                    </Badge>

                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-4xl">
                      Featured Posts
                    </h2>

                    <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
                      Hand-picked articles covering best practices, modern
                      technologies, and practical development techniques for
                      today&apos;s web developers.
                    </p>
                  </div>

                  <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {featuredBlogs.length} Featured
                    {featuredBlogs.length === 1 ? " Post" : " Posts"}
                  </div>
                </div>

                <BlogGrid blogs={featuredBlogs} />
              </section>
            )}

            {/* All Articles */}
            <section className="mt-20">
              <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <Badge className="mb-4">
                    <BookOpen className="mr-1 h-3.5 w-3.5" />
                    All Articles
                  </Badge>

                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-4xl">
                    Explore Every Article
                  </h2>

                  <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
                    Browse our complete collection of tutorials, guides, and
                    technical articles on frontend, backend, and full-stack web
                    development.
                  </p>
                </div>

                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  {publishedBlogs.length} Published
                  {publishedBlogs.length === 1 ? " Article" : " Articles"}
                </div>
              </div>

              <BlogGrid blogs={publishedBlogs} />
            </section>

                      </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-slate-200/70 bg-white/70 shadow-xl backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-900/70">
              <BlogSidebar />
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}