import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

export interface ProjectModalData {
  name: string;
  url: string;
}

export function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectModalData | null;
  onClose: () => void;
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    if (project) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[250] bg-background/95 backdrop-blur-xl"
        >
          <div className="flex h-14 items-center justify-between border-b border-border px-4">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground truncate">
              {project.name}
            </div>
            <div className="flex items-center gap-2">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 rounded-full border border-border px-3 py-1 text-xs hover:border-primary hover:text-primary"
              >
                Open <ExternalLink className="h-3 w-3" />
              </a>
              <button
                onClick={onClose}
                aria-label="Close project"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="relative h-[calc(100vh-3.5rem)] w-full">
            {!loaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary/20 border-t-primary" />
              </div>
            )}
            <iframe
              src={project.url}
              loading="lazy"
              title={project.name}
              onLoad={() => setLoaded(true)}
              className="h-full w-full border-0 bg-white"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
