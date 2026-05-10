import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { GradientButton } from "./GradientButton";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-16 px-6 text-center",
        className,
      )}
      data-ocid="empty_state"
    >
      {icon && (
        <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center text-muted-foreground">
          {icon}
        </div>
      )}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground max-w-xs">
            {description}
          </p>
        )}
      </div>
      {action && (
        <GradientButton
          variant="primary"
          size="md"
          onClick={action.onClick}
          data-ocid="empty_state_cta.primary_button"
        >
          {action.label}
        </GradientButton>
      )}
    </div>
  );
}
