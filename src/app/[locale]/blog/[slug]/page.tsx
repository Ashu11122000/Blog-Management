import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  CalendarDays,
  ChevronRight,
  Clock3,
  Eye,
  Home,
  User2,
} from "lucide-react";

import BlogAuthor from "@/components/blog/BlogAuthor";
import BlogContent from "@/components/blog/BlogContent";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogTags from "@/components/blog/BlogTags";
import RelatedPosts from "@/components/blog/RelatedPosts";

import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

import Container from "@/components/layout/Container";

import { blogs } from "@/data/blogs";

export const dynamicParams = false;

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogs
    .filter((blog) => blog.published)
    .map((blog) => ({
      slug: blog.slug,
    }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;

  const blog = blogs.find((post) => post.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    keywords: blog.tags,
    alternates: {
      canonical: `/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `/blog/${blog.slug}`,
      type: "article",
      images: [
        {
          url: blog.coverImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.coverImage],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: Readonly<BlogPageProps>) {
  const { slug } = await params;

  const blog = blogs.find((post) => post.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="relative overflow-hidden py-16 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* Main Content */}
          <article className="rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-xl backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-900/70 lg:p-10">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
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
                href="/blog"
                className="transition-colors hover:text-primary"
              >
                Blog
              </Link>

              <ChevronRight className="h-4 w-4" />

              <span className="font-medium text-slate-900 dark:text-white">
                {blog.title}
              </span>
            </nav>

            {/* Category */}
            <Badge className="mb-6">
              {blog.category.name}
            </Badge>

            {/* Title */}
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              {blog.title}
            </h1>

            {/* Excerpt */}
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              {blog.excerpt}
            </p>

            {/* Metadata */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <User2 className="h-4 w-4 text-primary" />
                <span>{blog.author.name}</span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <CalendarDays className="h-4 w-4 text-primary" />
                <span>{blog.publishedAt}</span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <Clock3 className="h-4 w-4 text-primary" />
                <span>{blog.readTime} min read</span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <Eye className="h-4 w-4 text-primary" />
                <span>{blog.views.toLocaleString()} views</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="group relative mt-10 aspect-video overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

                        {/* Blog Content */}
            <div className="mt-12">
              <BlogContent content={blog.content} />
            </div>

            {/* Tags */}
            <div className="mt-12">
              <BlogTags tags={blog.tags} />
            </div>

            {/* Divider */}
            <hr className="my-12 border-slate-200 dark:border-slate-800" />

            {/* Author */}
            <BlogAuthor author={blog.author} />

            {/* Back Button */}
            <div className="mt-12">
              <Link href="/blog">
                <Button
                  variant="outline"
                  leftIcon={<ArrowLeft className="h-4 w-4" />}
                >
                  Back to Blogs
                </Button>
              </Link>
            </div>

            {/* Related Posts */}
            <section className="mt-20 border-t border-slate-200 pt-16 dark:border-slate-800">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Continue Reading
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Related Articles
                </h2>

                <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
                  Explore more articles from the same category and discover
                  additional insights that complement this post.
                </p>
              </div>

              <RelatedPosts
                currentBlogId={blog.id}
                categorySlug={blog.category.slug}
                blogs={blogs}
              />
            </section>

                      </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 shadow-xl backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-900/70">
              <BlogSidebar />
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}