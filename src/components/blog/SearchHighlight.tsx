interface SearchHighlightProps {
  text: string;
  query: string;
}

export default function SearchHighlight({
  text,
  query,
}: Readonly<SearchHighlightProps>) {
  const search = query.trim();

  if (!search) {
    return <>{text}</>;
  }

  const escapedQuery = search.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&",
  );

  const regex = new RegExp(
    `(${escapedQuery})`,
    "gi",
  );

  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() ===
        search.toLowerCase() ? (
          <mark
            key={index}
            className="rounded bg-yellow-200 px-0.5 text-inherit dark:bg-yellow-500/30"
          >
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  );
}