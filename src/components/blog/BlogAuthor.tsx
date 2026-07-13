import Image from "next/image";

import type { Author } from "@/types/author";

type BlogAuthorProps = {
  author: Author;
};

export default function BlogAuthor({
  author,
}: Readonly<BlogAuthorProps>) {
  return (
    <section className="mt-12 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start gap-4">
        <Image
          src={author.avatar}
          alt={author.name}
          width={72}
          height={72}
          className="rounded-full object-cover"
        />

        <div className="flex-1">
          <h3 className="text-xl font-semibold">
            {author.name}
          </h3>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {author.role}
            {author.company && ` • ${author.company}`}
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            {author.bio}
          </p>
        </div>
      </div>
    </section>
  );
}