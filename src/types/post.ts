import type { ID, ISODateString } from "./common";
import type { AuthorSummary } from "./author";
import type { CategorySummary } from "./category";
import type { TagSummary } from "./tag";
import type { MediaFile } from "./media";

/**
 * Post publication status.
 */
export type PostStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";

/**
 * Post visibility.
 */
export type PostVisibility = "PUBLIC" | "PRIVATE";

/**
 * Minimal post information.
 */
export interface PostSummary {
  readonly id: ID;
  readonly title: string;
  readonly slug: string;
  readonly excerpt: string;
  readonly status: PostStatus;
  readonly publishedAt?: ISODateString;
}

/**
 * Reading time.
 */
export interface ReadingTime {
  readonly text: string;
  readonly minutes: number;
}

/**
 * Complete post.
 */
export interface Post {
  readonly id: ID;

  readonly title: string;

  readonly slug: string;

  readonly excerpt: string;

  readonly content: string;

  readonly status: PostStatus;

  readonly visibility: PostVisibility;

  readonly featuredImage?: MediaFile;

  readonly author: AuthorSummary;

  readonly category: CategorySummary;

  readonly tags: readonly TagSummary[];

  readonly readingTime: ReadingTime;

  readonly viewCount: number;

  readonly commentCount: number;

  readonly publishedAt?: ISODateString;

  readonly createdAt: ISODateString;

  readonly updatedAt: ISODateString;
}

/**
 * Create post request.
 */
export interface CreatePostRequest {
  readonly title: string;
  readonly slug: string;
  readonly excerpt: string;
  readonly content: string;
  readonly categoryId: ID;
  readonly tagIds: readonly ID[];
  readonly featuredImageId?: ID;
  readonly visibility: PostVisibility;
  readonly status: PostStatus;
}

/**
 * Update post request.
 */
export interface UpdatePostRequest {
  readonly title?: string;
  readonly slug?: string;
  readonly excerpt?: string;
  readonly content?: string;
  readonly categoryId?: ID;
  readonly tagIds?: readonly ID[];
  readonly featuredImageId?: ID;
  readonly visibility?: PostVisibility;
  readonly status?: PostStatus;
}

/**
 * Featured post.
 */
export interface FeaturedPost extends PostSummary {
  readonly featuredImage?: MediaFile;
  readonly author: AuthorSummary;
}

/**
 * Related post.
 */
export interface RelatedPost extends PostSummary {
  readonly featuredImage?: MediaFile;
}

/**
 * Post filters.
 */
export interface PostFilters {
  readonly search?: string;
  readonly categoryId?: ID;
  readonly tagId?: ID;
  readonly status?: PostStatus;
  readonly visibility?: PostVisibility;
}

/**
 * Post analytics.
 */
export interface PostAnalytics {
  readonly totalPosts: number;
  readonly publishedPosts: number;
  readonly draftPosts: number;
  readonly archivedPosts: number;
  readonly totalViews: number;
}
