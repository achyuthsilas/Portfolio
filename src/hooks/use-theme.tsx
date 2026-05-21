import { useEffect, useState, useCallback } from "react";

export type Theme = "dark" | "light";
const KEY = "portfolio-theme";

function getInitial(): Theme {
  if (typeof window === "undefined") return "dark";
  const saved = localStorage.getItem(KEY) as Theme | null;
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function apply(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("light", theme === "light");
  root.classList.toggle("dark", theme === "dark");
  root.dataset.theme = theme;
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const t = getInitial();
    setTheme(t);
    apply(t);
  }, []);

  const toggle = useCallback((origin?: { x: number; y: number }) => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      localStorage.setItem(KEY, next);

      const doc = document as Document & {
        startViewTransition?: (cb: () => void) => { ready: Promise<void> };
      };
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!doc.startViewTransition || reduce) {
        apply(next);
        return next;
      }

      const x = origin?.x ?? window.innerWidth - 40;
      const y = origin?.y ?? 40;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );

      const transition = doc.startViewTransition(() => apply(next));
      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 650,
            easing: "cubic-bezier(0.65, 0, 0.35, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      });

      return next;
    });
  }, []);

  return { theme, toggle };
}
