type BlogContentProps = {
  content: string;
};

export default function BlogContent({
  content,
}: Readonly<BlogContentProps>) {
  return (
    <section className="mt-14">
      <article
        className="
          mx-auto
          max-w-4xl
          rounded-3xl
          border
          border-slate-200/80
          bg-white
          p-6
          shadow-sm
          transition-colors
          sm:p-8
          lg:p-10
          dark:border-slate-800
          dark:bg-slate-900
        "
      >
        {/* Section Label */}
        <div className="mb-8 flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Article
          </span>

          <span className="text-xs text-slate-400 dark:text-slate-500">
            Enjoy your reading
          </span>
        </div>

        <div
          className="
            prose
            prose-slate
            prose-lg
            max-w-none
            dark:prose-invert

            prose-headings:scroll-mt-24
            prose-headings:font-bold
            prose-headings:tracking-tight

            prose-p:leading-8
            prose-p:text-slate-700
            dark:prose-p:text-slate-300

            prose-a:text-blue-600
            prose-a:no-underline
            hover:prose-a:underline

            prose-strong:text-slate-900
            dark:prose-strong:text-white

            prose-blockquote:border-l-blue-500
            prose-blockquote:italic

            prose-code:rounded
            prose-code:bg-slate-100
            prose-code:px-1.5
            prose-code:py-0.5
            prose-code:text-sm
            dark:prose-code:bg-slate-800

            prose-pre:bg-slate-950
          "
        >
          <pre
            className="
              whitespace-pre-wrap
              break-words
              font-sans
              text-[16px]
              leading-8
              text-slate-700
              dark:text-slate-300
            "
          >
            {content}
          </pre>
        </div>
      </article>
    </section>
  );
}