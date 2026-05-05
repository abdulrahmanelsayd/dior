import {
  Clock,
  CheckCircle,
  Smile,
  Shield,
  RotateCcw,
  HeartHandshake,
} from "lucide-react";
import type { IconMap } from "@/types/components";

export const ICON_MAP: IconMap = {
  clock: { component: Clock },
  "check-circle": { component: CheckCircle },
  smile: { component: Smile },
  Shield: { component: Shield },
  RotateCcw: { component: RotateCcw },
  HeartHandshake: { component: HeartHandshake },
};

interface IconProps {
  iconId: string;
  className?: string;
  strokeWidth?: number;
}

export default function Icon({ iconId, className, strokeWidth = 1.5 }: IconProps) {
  const entry = ICON_MAP[iconId];
  if (!entry) return null;
  const Component = entry.component;
  return <Component className={className} strokeWidth={strokeWidth} />;
}
