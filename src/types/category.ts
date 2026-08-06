import type { ID } from "./common";
import type { UserSummary } from "./user";

/**
 * Minimal category information.
 */
export interface CategorySummary {
  readonly id: ID;
  readonly name: string;
  readonly slug: string;
}

/**
 * Category statistics.
 */
export interface CategoryStats {
  readonly postCount: number;
}

/**
 * Category displayed throughout the application.
 */
export interface Category {
  readonly id: ID;
  readonly name: string;
  readonly slug: string;
  readonly description: string | null;
  readonly color: string | null;
  readonly createdBy: UserSummary | null;
  readonly stats: CategoryStats;
  readonly createdAt: string;
  readonly updatedAt: string;
}

/**
 * Category option for dropdowns and selectors.
 */
export interface CategoryOption {
  readonly label: string;
  readonly value: ID;
}

/**
 * Create category request.
 */
export interface CreateCategoryRequest {
  readonly name: string;
  readonly slug: string;
  readonly description?: string;
  readonly color?: string;
}

/**
 * Update category request.
 */
export interface UpdateCategoryRequest {
  readonly name?: string;
  readonly slug?: string;
  readonly description?: string;
  readonly color?: string;
}

/**
 * Category filters.
 */
export interface CategoryFilters {
  readonly search?: string;
}

/**
 * Category breadcrumb.
 */
export interface CategoryBreadcrumb {
  readonly id: ID;
  readonly name: string;
  readonly slug: string;
}

/**
 * Category analytics.
 */
export interface CategoryAnalytics {
  readonly totalCategories: number;
  readonly totalPosts: number;
  readonly mostUsedCategory?: CategorySummary;
}