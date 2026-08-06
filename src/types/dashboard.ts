import type { ID, ISODateString } from "./common";

/**
 * Dashboard summary statistics.
 */
export interface DashboardStats {
  readonly totalPosts: number;
  readonly publishedPosts: number;
  readonly draftPosts: number;
  readonly archivedPosts: number;

  readonly totalCategories: number;
  readonly totalTags: number;

  readonly totalComments: number;
  readonly pendingComments: number;

  readonly totalUsers: number;
}

/**
 * Statistic card displayed on the dashboard.
 */
export interface DashboardStatCard {
  readonly id: ID;
  readonly title: string;
  readonly value: number;
  readonly change: number;
  readonly changeType: "increase" | "decrease" | "neutral";
  readonly icon: string;
}

/**
 * Dashboard activity item.
 */
export interface DashboardActivity {
  readonly id: ID;
  readonly title: string;
  readonly description: string;
  readonly type: "post" | "comment" | "category" | "tag" | "user";

  readonly createdAt: ISODateString;
}

/**
 * Dashboard chart data point.
 */
export interface DashboardChartPoint {
  readonly label: string;
  readonly value: number;
}

/**
 * Dashboard chart.
 */
export interface DashboardChart {
  readonly title: string;
  readonly data: readonly DashboardChartPoint[];
}

/**
 * Dashboard quick action.
 */
export interface DashboardQuickAction {
  readonly id: ID;
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly icon: string;
}

/**
 * Dashboard overview.
 */
export interface DashboardOverview {
  readonly stats: DashboardStats;
  readonly statCards: readonly DashboardStatCard[];
  readonly recentActivity: readonly DashboardActivity[];
  readonly charts: readonly DashboardChart[];
  readonly quickActions: readonly DashboardQuickAction[];
}
