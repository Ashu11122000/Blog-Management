type BlogContentProps = {
  content: string;
};

export default function BlogContent({
  content,
}: Readonly<BlogContentProps>) {
  return (
    <article className="prose prose-slate mt-12 max-w-none dark:prose-invert">
      <pre className="whitespace-pre-wrap font-sans">
        {content}
      </pre>
    </article>
  );
}