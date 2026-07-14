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
    value: 10,
    description: "All blog articles",
    icon: FileText,
    trend: 25,
    trendLabel: "recently updated",
  },
  {
    id: "published",
    title: "Published",
    value: 10,
    description: "Live blog posts",
    icon: Newspaper,
    trend: 100,
    trendLabel: "published successfully",
  },
  {
    id: "categories",
    title: "Categories",
    value: 10,
    description: "Technology topics",
    icon: FolderTree,
    trend: 6,
    trendLabel: "new categories added",
  },
  {
    id: "views",
    title: "Total Views",
    value: "28.4K",
    description: "Across all articles",
    icon: Eye,
    trend: 21,
    trendLabel: "growth this month",
  },
];