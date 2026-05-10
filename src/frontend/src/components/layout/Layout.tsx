import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function Layout({
  children,
  className,
  noPadding = false,
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main
        className={cn(
          "flex-1",
          !noPadding && "px-4 py-6 md:px-6 max-w-7xl mx-auto w-full",
          className,
        )}
      >
        {children}
      </main>
      <footer className="border-t border-white/10 bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <button
              type="button"
              className="hover:text-foreground transition-smooth"
            >
              Privacy
            </button>
            <button
              type="button"
              className="hover:text-foreground transition-smooth"
            >
              Terms
            </button>
            <button
              type="button"
              className="hover:text-foreground transition-smooth"
            >
              Contact
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
