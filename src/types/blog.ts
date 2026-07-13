import type { Author } from "./author";
import type { Category } from "./category";

export interface Blog {
  id: string;

  title: string;

  slug: string;

  excerpt: string;

  content: string;

  coverImage: string;

  category: Category;

  author: Author;

  tags: string[];

  publishedAt: string;

  updatedAt?: string;

  readTime: number;

  featured: boolean;

  published: boolean;

  views: number;
}