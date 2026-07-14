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
            className="
              rounded-md
              border
              border-amber-200/60
              bg-gradient-to-r
              from-amber-100
              to-yellow-100
              px-1.5
              py-0.5
              font-semibold
              text-inherit
              shadow-sm
              transition-colors
              dark:border-yellow-500/30
              dark:from-yellow-500/20
              dark:to-amber-500/20
            "
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