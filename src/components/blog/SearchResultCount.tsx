interface SearchResultCountProps {
  query: string;
  totalResults: number;
  totalItems: number;
}

export default function SearchResultCount({
  query,
  totalResults,
  totalItems,
}: Readonly<SearchResultCountProps>) {
  const hasQuery = query.trim().length > 0;

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-4">
      <p className="text-sm text-muted-foreground">
        {hasQuery ? (
          <>
            Showing{" "}
            <span className="font-semibold text-foreground">
              {totalResults}
            </span>{" "}
            result
            {totalResults !== 1 ? "s" : ""} for{" "}
            <span className="font-semibold text-foreground">
              &quot;{query}&quot;
            </span>
          </>
        ) : (
          <>
            Showing all{" "}
            <span className="font-semibold text-foreground">
              {totalItems}
            </span>{" "}
            blog
            {totalItems !== 1 ? "s" : ""}
          </>
        )}
      </p>
    </div>
  );
}