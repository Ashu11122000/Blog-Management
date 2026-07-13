"use client";

import { Search, X } from "lucide-react";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

export default function SearchBar() {
  const router = useRouter();

  const pathname = usePathname();

  const searchParams = useSearchParams();

  const [query, setQuery] = useState(
    searchParams.get("q") ?? "",
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(
        searchParams.toString(),
      );

      if (query.trim()) {
        params.set("q", query.trim());
      } else {
        params.delete("q");
      }

      router.replace(
        `${pathname}?${params.toString()}`,
        {
          scroll: false,
        },
      );
    }, 400);

    return () => clearTimeout(timeout);
  }, [
    pathname,
    query,
    router,
    searchParams,
  ]);

  return (
    <div className="flex items-center gap-2">
      <Input
        type="search"
        placeholder="Search articles..."
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
        leftIcon={
          <Search className="h-4 w-4" />
        }
      />

      {query && (
        <Button
          variant="ghost"
          size="icon"
          aria-label="Clear search"
          onClick={() => setQuery("")}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}