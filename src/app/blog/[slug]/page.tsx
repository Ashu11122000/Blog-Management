import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
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
    <main className="py-16 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          {/* Main Content */}
          <article>
            <Badge className="mb-6">
              {blog.category.name}
            </Badge>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              {blog.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
              <span>
                By <strong>{blog.author.name}</strong>
              </span>

              <span>•</span>

              <span>{blog.publishedAt}</span>

              <span>•</span>

              <span>{blog.readTime} min read</span>

              <span>•</span>

              <span>{blog.views.toLocaleString()} views</span>
            </div>

            <div className="relative mt-10 aspect-video overflow-hidden rounded-xl">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            <BlogContent content={blog.content} />

            <BlogTags tags={blog.tags} />

            <BlogAuthor author={blog.author} />

            <div className="mt-12">
              <Link href="/blog">
                <Button variant="outline">
                  ← Back to Blogs
                </Button>
              </Link>
            </div>

            <RelatedPosts
              currentBlogId={blog.id}
              categorySlug={blog.category.slug}
              blogs={blogs}
            />
          </article>

          {/* Sidebar */}
          <aside>
            <BlogSidebar />
          </aside>
        </div>
      </Container>
    </main>
  );
}