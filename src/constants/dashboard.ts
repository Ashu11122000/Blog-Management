/**
 * =============================================================================
 * Dashboard Constants
 * =============================================================================
 *
 * Shared constants for the admin dashboard.
 *
 * Responsibilities:
 * - Dashboard widgets
 * - Statistics cards
 * - Refresh intervals
 * - Recent activity
 * - Charts
 * - Pagination
 * =============================================================================
 */

export const DASHBOARD = {
  /**
   * Auto Refresh
   */
  REFRESH: {
    INTERVAL: 60_000, // 1 minute
    ENABLED: true,
  },

  /**
   * Statistics Cards
   */
  STATS: {
    TOTAL_POSTS: "totalPosts",
    TOTAL_CATEGORIES: "totalCategories",
    TOTAL_TAGS: "totalTags",
    TOTAL_COMMENTS: "totalComments",
    TOTAL_USERS: "totalUsers",
    TOTAL_VIEWS: "totalViews",
    TOTAL_PUBLISHED: "totalPublished",
    TOTAL_DRAFTS: "totalDrafts",
  },

  /**
   * Recent Activity
   */
  RECENT_ACTIVITY: {
    LIMIT: 10,
  },

  /**
   * Latest Posts
   */
  LATEST_POSTS: {
    LIMIT: 5,
  },

  /**
   * Latest Comments
   */
  LATEST_COMMENTS: {
    LIMIT: 5,
  },

  /**
   * Charts
   */
  CHARTS: {
    POSTS_PER_MONTH: "postsPerMonth",
    COMMENTS_PER_MONTH: "commentsPerMonth",
    CATEGORY_DISTRIBUTION: "categoryDistribution",
    POST_STATUS: "postStatus",
  },

  /**
   * Pagination
   */
  PAGINATION: {
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 10,
    MAX_LIMIT: 100,
  },
} as const;

export type DashboardConstants = typeof DASHBOARD;

export default DASHBOARD;
