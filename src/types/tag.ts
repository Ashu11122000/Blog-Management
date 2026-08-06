import type { ID, ISODateString } from "./common";
import type { UserSummary } from "./user";

/**
 * Minimal tag information.
 */
export interface TagSummary {
  readonly id: ID;
  readonly name: string;
  readonly slug: string;
}

/**
 * Tag statistics.
 */
export interface TagStats {
  readonly postCount: number;
}

/**
 * Complete tag.
 */
export interface Tag {
  readonly id: ID;

  readonly name: string;

  readonly slug: string;

  readonly description?: string | null;

  readonly color?: string | null;

  readonly createdBy?: UserSummary | null;

  readonly stats: TagStats;

  readonly createdAt: ISODateString;

  readonly updatedAt: ISODateString;
}

/**
 * Create tag request.
 */
export interface CreateTagRequest {
  readonly name: string;
  readonly slug: string;
  readonly description?: string;
  readonly color?: string;
}

/**
 * Update tag request.
 */
export interface UpdateTagRequest {
  readonly name?: string;
  readonly slug?: string;
  readonly description?: string;
  readonly color?: string;
}

/**
 * Tag option for select components.
 */
export interface TagOption {
  readonly label: string;
  readonly value: ID;
}

/**
 * Tag filters.
 */
export interface TagFilters {
  readonly search?: string;
}

/**
 * Tag analytics.
 */
export interface TagAnalytics {
  readonly totalTags: number;
  readonly totalPosts: number;
  readonly mostUsedTag?: TagSummary;
}
