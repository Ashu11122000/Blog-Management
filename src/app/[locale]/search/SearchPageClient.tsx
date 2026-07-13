"use client";

import { Search } from "lucide-react";

import BlogGrid from "@/components/blog/BlogGrid";
import PopularSearches from "@/components/blog/PopularSearches";
import RecentSearches from "@/components/blog/RecentSearches";
import SearchBar from "@/components/blog/SearchBar";
import SearchResultCount from "@/components/blog/SearchResultCount";
import Badge from "@/components/common/Badge";
import EmptyState from "@/components/common/EmptyState";
import Container from "@/components/layout/Container";
import { blogs } from "@/data/blogs";
import { useSearch } from "@/hooks/useSearch";

const POPULAR_SEARCHES = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "App Router",
  "SEO",
];

export default function SearchPageClient() {
  const {
    query,
    filteredItems,
    totalResults,
    setQuery,
  } = useSearch(blogs);

  return (
    <Container className="py-12">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Header */}
        <header className="space-y-3 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Search Blogs
          </h1>

          <p className="text-muted-foreground">
            Find articles by title, author,
            category, or tag.
          </p>
        </header>

        {/* Search Bar */}
        <SearchBar items={blogs} />

        {/* Popular Searches */}
        <PopularSearches
          items={blogs}
          searches={POPULAR_SEARCHES}
        />

        {/* Recent Searches */}
        <RecentSearches
          onSelect={(search) => setQuery(search)}
        />

        {/* Search Result Count */}
        <SearchResultCount
          query={query}
          totalResults={totalResults}
          totalItems={blogs.length}
        />

        {/* Search Results */}
        {filteredItems.length > 0 ? (
          <BlogGrid
            blogs={filteredItems}
          />
        ) : (
          <EmptyState
            icon={<Search className="h-8 w-8" />}
            title={
              query
                ? `No results found for "${query}"`
                : "No articles found"
            }
            description="Try searching with one of these popular topics."
          >
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {POPULAR_SEARCHES.map((search) => (
                <Badge
                  key={search}
                  variant="secondary"
                >
                  {search}
                </Badge>
              ))}
            </div>
          </EmptyState>
        )}
      </div>
    </Container>
  );
}