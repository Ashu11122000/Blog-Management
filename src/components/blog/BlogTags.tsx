import Badge from "@/components/common/Badge";

type BlogTagsProps = {
  tags: string[];
};

export default function BlogTags({
  tags,
}: Readonly<BlogTagsProps>) {
  if (tags.length === 0) {
    return null;
  }

  return (
    <section className="mt-10">
      <h3 className="mb-4 text-lg font-semibold">
        Tags
      </h3>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </section>
  );
}