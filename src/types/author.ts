import type { ID, ISODateString } from "./common";

/**
 * Public author summary.
 */
export interface AuthorSummary {
  readonly id: ID;
  readonly name: string;
  readonly username: string;
  readonly image?: string | null;
}

/**
 * Author statistics.
 */
export interface AuthorStats {
  readonly totalPosts: number;
  readonly totalViews: number;
  readonly totalComments: number;
  readonly joinedAt: ISODateString;
}

/**
 * Public author profile.
 */
export interface AuthorProfile extends AuthorSummary {
  readonly bio?: string | null;
  readonly website?: string | null;
  readonly stats: AuthorStats;
}

/**
 * Author information used by posts and listings.
 */
export interface Author {
  readonly id: ID;
  readonly name: string;
  readonly username: string;
  readonly email: string;
  readonly bio?: string | null;
  readonly image?: string | null;
  readonly website?: string | null;
  readonly stats: AuthorStats;
}

/**
 * Author filters.
 */
export interface AuthorFilters {
  readonly search?: string;
}

/**
 * Author analytics.
 */
export interface AuthorAnalytics {
  readonly totalAuthors: number;
  readonly activeAuthors: number;
  readonly totalPosts: number;
}
