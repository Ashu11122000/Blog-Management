import {
  Eye,
  FileText,
  FolderTree,
  Newspaper,
} from "lucide-react";

import type { DashboardStat } from "@/types/dashboard";

export const dashboardStats: DashboardStat[] = [
  {
    id: "posts",
    title: "Total Posts",
    value: 48,
    description: "Published and drafts",
    icon: FileText,
    trend: 12,
    trendLabel: "vs last month",
  },
  {
    id: "published",
    title: "Published",
    value: 36,
    description: "Live blog posts",
    icon: Newspaper,
    trend: 8,
    trendLabel: "vs last month",
  },
  {
    id: "categories",
    title: "Categories",
    value: 9,
    description: "Active categories",
    icon: FolderTree,
    trend: 2,
    trendLabel: "new this month",
  },
  {
    id: "views",
    title: "Total Views",
    value: "24.8K",
    description: "Across all posts",
    icon: Eye,
    trend: 18,
    trendLabel: "vs last month",
  },
];