import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/BrandIcons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/lib/portfolio-data";

const sections = [
  { id: "intro", label: "Intro" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function SideNav() {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Top bar with socials */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5 md:px-10">
        <a href="#intro" className="font-display text-2xl tracking-tight">
          {profile.name.split(" ")[0]}<span className="text-primary">.</span>
        </a>
        <nav className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
            <GithubIcon className="h-5 w-5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" className="hover:text-primary transition-colors">
            <LeetcodeIcon className="h-5 w-5" />
          </a>
          <span className="mx-1 h-4 w-px bg-border" />
          <ThemeToggle />
        </nav>
      </header>

      {/* Side nav */}
      <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 md:block">
        <ul className="flex flex-col gap-4">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="group flex items-center justify-end gap-3 text-xs uppercase tracking-[0.2em]"
              >
                <span
                  className={`transition-all ${
                    active === s.id ? "text-primary opacity-100" : "opacity-0 group-hover:opacity-60"
                  }`}
                >
                  {s.label}
                </span>
                <span
                  className={`h-px transition-all ${
                    active === s.id ? "w-10 bg-primary" : "w-4 bg-muted-foreground/40 group-hover:w-6"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
