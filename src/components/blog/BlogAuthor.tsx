import Image from "next/image";
import { BookOpen, Briefcase, Users } from "lucide-react";

import type { Author } from "@/types/author";

type BlogAuthorProps = {
  author: Author;
};

export default function BlogAuthor({
  author,
}: Readonly<BlogAuthorProps>) {
  return (
    <section className="mt-16 rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
      <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
        About the Author
      </p>

      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <div className="shrink-0">
          <div className="rounded-full bg-slate-100 p-1 dark:bg-slate-800">
            <Image
              src={author.avatar}
              alt={author.name}
              width={88}
              height={88}
              className="rounded-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-bold tracking-tight">
            {author.name}
          </h3>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            {author.role}
            {author.company && ` • ${author.company}`}
          </p>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400">
            {author.bio}
          </p>

          {/* Static Expertise */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["Next.js", "FastAPI", "TypeScript"].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Static Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <BookOpen className="h-4 w-4" />
                <span className="text-xs">Articles</span>
              </div>

              <p className="mt-2 text-lg font-bold">120+</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <Briefcase className="h-4 w-4" />
                <span className="text-xs">Experience</span>
              </div>

              <p className="mt-2 text-lg font-bold">6+ Years</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <Users className="h-4 w-4" />
                <span className="text-xs">Readers</span>
              </div>

              <p className="mt-2 text-lg font-bold">50K+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}