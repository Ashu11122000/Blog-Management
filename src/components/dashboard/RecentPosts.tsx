import Link from "next/link";

import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import { blogs } from "@/data/blogs";

export default function RecentPosts() {
  const recentPosts = blogs
    .slice()
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, 5);

  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Recent Posts</h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Latest published blog posts.
          </p>
        </div>

        <Link href="/dashboard/posts">View All</Link>
      </div>

      {recentPosts.length === 0 ? (
        <div className="py-10 text-center">
          <p className="text-muted-foreground">No blog posts found.</p>
        </div>
      ) : (
        <div className="space-y-5">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col gap-4 rounded-lg border border-border p-4 transition-colors hover:bg-muted/40 md:flex-row md:items-center md:justify-between"
            >
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <Badge>{post.category.name}</Badge>

                  <Badge variant={post.published ? "success" : "secondary"}>
                    {post.published ? "Published" : "Draft"}
                  </Badge>
                </div>

                <h3 className="truncate text-lg font-semibold">{post.title}</h3>

                <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span>{post.author.name}</span>

                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>

                  <span>{post.readTime} min read</span>
                </div>
              </div>

              <Button asChild variant="ghost">
                <Link href={`/blog/${post.slug}`}>View</Link>
              </Button>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
