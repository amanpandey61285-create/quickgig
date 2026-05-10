import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { useState } from "react";

interface StarRatingProps {
  value?: number;
  max?: number;
  interactive?: boolean;
  onChange?: (value: number) => void;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-6 h-6",
};

export function StarRating({
  value = 0,
  max = 5,
  interactive = false,
  onChange,
  size = "md",
  className,
}: StarRatingProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const display = hovered ?? value;

  return (
    <div
      className={cn("inline-flex items-center gap-0.5", className)}
      role={interactive ? "radiogroup" : undefined}
      aria-label={interactive ? "Star rating" : `${value} out of ${max} stars`}
    >
      {Array.from({ length: max }, (_, i) => {
        const starNum = i + 1;
        const filled = i < display;
        return (
          <button
            key={starNum}
            type="button"
            disabled={!interactive}
            aria-label={`${starNum} star`}
            onClick={() => interactive && onChange?.(starNum)}
            onMouseEnter={() => interactive && setHovered(starNum)}
            onMouseLeave={() => interactive && setHovered(null)}
            className={cn(
              "transition-smooth",
              interactive
                ? "cursor-pointer"
                : "cursor-default pointer-events-none",
            )}
          >
            <Star
              className={cn(
                sizeMap[size],
                filled
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-muted-foreground",
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
