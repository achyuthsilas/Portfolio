import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/lib/portfolio-data";
import { ProjectModal, type ProjectModalData } from "@/components/ProjectModal";
import { projectScrollState } from "@/lib/project-scroll";

export function Projects() {
  const [active, setActive] = useState<ProjectModalData | null>(null);

  useEffect(() => {
    // Pin the Projects section for 2×vh of virtual scroll distance.
    // Progress 0→1 is written to projectScrollState and consumed by ScrollBot.
    const st = ScrollTrigger.create({
      trigger: "#projects",
      start: "top top",
      end: "+=200%",
      pin: true,
      scrub: true,
      onUpdate(self) {
        projectScrollState.progress = self.progress;
      },
      onToggle(self) {
        projectScrollState.active = self.isActive;
        if (!self.isActive) {
          projectScrollState.progress = self.progress;
        }
      },
    });

    // Defer refresh by one frame — lets layout settle after the lazy-load replaces
    // the Suspense fallback, ensuring ScrollTrigger measures the correct bounds.
    const rafId = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(rafId);
      st.kill();
      projectScrollState.active = false;
    };
  }, []);

  return (
    <section id="projects" className="relative px-6 py-32 md:px-16 md:py-48">
      <div className="relative z-10 mr-auto max-w-2xl">
        <div className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-8">
          04 / Projects
        </div>
        <h2 className="font-display text-[clamp(2.25rem,5.5vw,4.75rem)] leading-[0.95] tracking-tight mb-4">
          Things I've <em className="text-primary">shipped</em>.
        </h2>
        <p className="text-muted-foreground mb-16 max-w-lg">
          Selected work. Click any card to preview it without leaving this page.
        </p>

        {/* Stack projects vertically on the LEFT — bot points at them from the right */}
        <div className="space-y-px bg-border">
          {projects.map((project, i) => (
            <motion.button
              key={project.name}
              data-point-idx={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.06 }}
              onClick={() => setActive({ name: project.name, url: project.url })}
              data-cursor-hover
              className="group flex w-full flex-col bg-background p-8 text-left hover:bg-card transition-colors"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-display text-2xl md:text-3xl group-hover:text-primary transition-colors">
                  <span className="font-mono text-xs text-muted-foreground mr-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {project.name}
                </h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-2" />
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
