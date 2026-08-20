// src/lib/icons.ts
// Maps icon name strings to Lucide React components
// This file is safe to import in client components

import {
  GraduationCap,
  Sprout,
  Hotel,
  Building2,
  TrendingUp,
  Flame,
  Heart,
  Users,
  HandHeart,
  Tv2,
  type LucideIcon,
} from "lucide-react";
import type { AreaIconName } from "@/data/areas";

export const areaIconMap: Record<AreaIconName, LucideIcon> = {
  GraduationCap,
  Sprout,
  Hotel,
  Building2,
  TrendingUp,
  Flame,
  Heart,
  Users,
  HandHeart,
  Tv2,
};

export function getAreaIcon(name: AreaIconName): LucideIcon {
  return areaIconMap[name] ?? GraduationCap;
}
