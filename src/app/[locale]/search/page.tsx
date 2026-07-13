import type { Metadata } from "next";
import SearchPageClient from "./SearchPageClient";

export const metadata: Metadata = {
  title: "Search",
  description:
    "Search articles by title, author, category, or tag.",
};

export default function Page() {
  return <SearchPageClient />;
}