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
    <section className="mt-20">
      <h2 className="mb-8 text-3xl font-bold">
        Related Posts
      </h2>

      <BlogGrid blogs={relatedBlogs} />
    </section>
  );
}