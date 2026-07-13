import type { LucideIcon } from "lucide-react";

import {
  LayoutDashboard,
  FileText,
  FolderTree,
  ImageIcon,
  User,
  Settings,
} from "lucide-react";

export interface DashboardNavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

export const dashboardNavigation: DashboardNavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Posts",
    href: "/dashboard/posts",
    icon: FileText,
  },
  {
    title: "Categories",
    href: "/dashboard/categories",
    icon: FolderTree,
  },
  {
    title: "Gallery",
    href: "/dashboard/gallery",
    icon: ImageIcon,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];
