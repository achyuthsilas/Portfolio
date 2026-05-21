import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        toggle({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="relative inline-flex h-8 w-14 items-center rounded-full border border-border bg-muted/50 transition-colors hover:border-primary/60"
    >
      <span
        className={`absolute top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 ${
          isDark ? "translate-x-1" : "translate-x-7"
        }`}
      >
        {isDark ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
      </span>
    </button>
  );
}
