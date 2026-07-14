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
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime(),
    )
    .slice(0, 5);

  return (
    <Card className="p-6">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            Recent Posts
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Latest published blog posts.
          </p>
        </div>

        <Button asChild variant="ghost" size="sm">
          <Link href="/dashboard/posts">
            View All
          </Link>
        </Button>
      </div>

      {recentPosts.length === 0 ? (
        <div className="flex min-h-40 items-center justify-center text-center">
          <p className="text-sm text-muted-foreground">
            No blog posts found.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="
                group
                flex
                flex-col
                gap-5
                rounded-xl
                border
                border-border
                p-5
                transition-all
                duration-300
                hover:border-primary/20
                hover:bg-muted/40
                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              <div className="min-w-0 flex-1">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <Badge>
                    {post.category.name}
                  </Badge>

                  <Badge
                    variant={
                      post.published
                        ? "success"
                        : "secondary"
                    }
                  >
                    {post.published
                      ? "Published"
                      : "Draft"}
                  </Badge>
                </div>

                <h3
                  className="
                    truncate
                    text-lg
                    font-semibold
                    tracking-tight
                    transition-colors
                    duration-200
                    group-hover:text-primary
                  "
                >
                  {post.title}
                </h3>

                <div
                  className="
                    mt-3
                    flex
                    flex-wrap
                    items-center
                    gap-x-4
                    gap-y-2
                    text-sm
                    text-muted-foreground
                  "
                >
                  <span>
                    {post.author.name}
                  </span>

                  <span>
                    {new Date(
                      post.publishedAt,
                    ).toLocaleDateString()}
                  </span>

                  <span>
                    {post.readTime} min read
                  </span>
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                size="sm"
              >
                <Link href={`/blog/${post.slug}`}>
                  View
                </Link>
              </Button>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}