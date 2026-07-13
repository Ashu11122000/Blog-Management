import {
  FilePlus2,
  Pencil,
  FolderPlus,
  ImagePlus,
} from "lucide-react";

import type { DashboardActivity } from "@/types/dashboard";

export const dashboardActivities: DashboardActivity[] = [
  {
    id: "1",
    title: "New Blog Published",
    description:
      "Getting Started with Next.js App Router",
    time: "2 hours ago",
    icon: FilePlus2,
  },
  {
    id: "2",
    title: "Blog Updated",
    description:
      "Mastering TypeScript for React Developers",
    time: "Yesterday",
    icon: Pencil,
  },
  {
    id: "3",
    title: "Category Created",
    description: "Added 'Performance' category",
    time: "2 days ago",
    icon: FolderPlus,
  },
  {
    id: "4",
    title: "Gallery Updated",
    description: "Uploaded 12 new images",
    time: "3 days ago",
    icon: ImagePlus,
  },
];