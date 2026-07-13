import type { LucideIcon } from "lucide-react";

export interface DashboardStat {
  id: string;
  title: string;
  value: number | string;
  description?: string;
  icon: LucideIcon;
  trend: number;
  trendLabel: string;
}

export interface DashboardActivity {
  id: string;
  title: string;
  description: string;
  time: string;
  icon: LucideIcon;
}