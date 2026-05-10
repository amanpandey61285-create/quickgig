import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  fullWidth?: boolean;
}

const variantStyles = {
  primary:
    "gradient-primary text-white shadow-lg hover:opacity-90 hover:shadow-primary/25 active:scale-95",
  secondary:
    "bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary/90 active:scale-95",
  accent:
    "gradient-accent text-foreground shadow-lg hover:opacity-90 hover:shadow-accent/25 active:scale-95",
  outline:
    "border-2 border-primary text-primary bg-transparent hover:bg-primary/10 active:scale-95",
  ghost: "text-foreground bg-transparent hover:bg-white/10 active:scale-95",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
  xl: "px-10 py-5 text-xl rounded-2xl",
};

export function GradientButton({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  className,
  disabled,
  ...props
}: GradientButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold transition-smooth cursor-pointer",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        (disabled || loading) && "opacity-60 cursor-not-allowed",
        className,
      )}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </button>
  );
}
