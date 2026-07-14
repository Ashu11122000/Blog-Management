import { Hash } from "lucide-react";

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
    <section
      className="
        mt-14
        rounded-2xl
        border
        border-slate-200/80
        bg-white
        p-6
        shadow-sm
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-blue-100 p-3 dark:bg-blue-500/10">
          <Hash className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold tracking-tight">
            Topics & Tags
          </h3>

          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            Explore related technologies and concepts discussed throughout this
            article.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="
                  rounded-full
                  px-4
                  py-2
                  text-sm
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-blue-500
                  hover:bg-blue-50
                  hover:text-blue-600
                  dark:hover:bg-blue-500/10
                  dark:hover:text-blue-400
                "
              >
                #{tag}
              </Badge>
            ))}
          </div>

          <div className="mt-8 border-t border-slate-200 pt-5 dark:border-slate-800">
            <p className="text-xs uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
              {tags.length} {tags.length === 1 ? "Topic" : "Topics"} Covered
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}