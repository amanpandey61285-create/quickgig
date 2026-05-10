import { cn } from "@/lib/utils";
import {
  AlertCircle,
  CheckCheck,
  CheckCircle,
  Clock,
  Flame,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import type { ReactNode } from "react";

export type StatusBadgeVariant =
  | "verified"
  | "urgent"
  | "trending"
  | "open"
  | "closed"
  | "completed"
  | "pending"
  | "accepted"
  | "rejected"
  | "default";

interface StatusBadgeProps {
  variant?: StatusBadgeVariant;
  children?: ReactNode;
  className?: string;
}

const variantConfig: Record<
  StatusBadgeVariant,
  { classes: string; icon?: ReactNode }
> = {
  verified: {
    classes: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    icon: <CheckCircle className="w-3 h-3" />,
  },
  urgent: {
    classes: "bg-red-500/20 text-red-400 border-red-500/30",
    icon: <Flame className="w-3 h-3" />,
  },
  trending: {
    classes: "bg-accent/20 text-accent border-accent/30",
    icon: <Sparkles className="w-3 h-3" />,
  },
  open: {
    classes: "bg-primary/20 text-primary border-primary/30",
    icon: <Clock className="w-3 h-3" />,
  },
  closed: {
    classes: "bg-muted/40 text-muted-foreground border-border",
  },
  completed: {
    classes: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    icon: <CheckCheck className="w-3 h-3" />,
  },
  pending: {
    classes: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    icon: <Clock className="w-3 h-3" />,
  },
  accepted: {
    classes: "bg-primary/20 text-primary border-primary/30",
    icon: <CheckCircle className="w-3 h-3" />,
  },
  rejected: {
    classes: "bg-red-500/20 text-red-400 border-red-500/30",
    icon: <AlertCircle className="w-3 h-3" />,
  },
  default: {
    classes: "bg-muted/40 text-muted-foreground border-border",
  },
};

export function StatusBadge({
  variant = "default",
  children,
  className,
}: StatusBadgeProps) {
  const { classes, icon } = variantConfig[variant];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full border",
        classes,
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
