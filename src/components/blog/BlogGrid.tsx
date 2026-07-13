import BlogCard from "@/components/blog/BlogCard";
import EmptyState from "@/components/common/EmptyState";

import type { Blog } from "@/types/blog";

type BlogGridProps = {
  blogs: Blog[];
};

export default function BlogGrid({ blogs }: Readonly<BlogGridProps>) {
  if (blogs.length === 0) {
    return (
      <EmptyState
        title="No blogs found"
        description="There are no blog posts available at the moment. Please check back later."
      />
    );
  }

  return (
    <section
      aria-label="Blog posts"
      className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
    >
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </section>
  );
}
