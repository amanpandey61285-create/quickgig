import { cn } from "@/lib/utils";

interface SkillTagProps {
  label: string;
  removable?: boolean;
  onRemove?: () => void;
  className?: string;
}

export function SkillTag({
  label,
  removable = false,
  onRemove,
  className,
}: SkillTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg",
        "bg-primary/15 text-primary border border-primary/25",
        className,
      )}
    >
      {label}
      {removable && (
        <button
          type="button"
          aria-label={`Remove ${label}`}
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          className="ml-0.5 hover:text-red-400 transition-smooth leading-none"
        >
          ×
        </button>
      )}
    </span>
  );
}
