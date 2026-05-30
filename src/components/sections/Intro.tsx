import { motion } from "framer-motion";
import { profile } from "@/lib/portfolio-data";

export function Intro() {
  return (
    <section
      id="intro"
      className="relative flex min-h-screen items-center overflow-hidden cosmic-gradient"
    >
      {/* Top meta line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute top-24 left-0 right-0 px-6 md:px-10 flex justify-between font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
      >
        <span>(Portfolio / 2026)</span>
        <span className="hidden md:inline">{profile.location}</span>
      </motion.div>

      {/* Left-aligned details — bot sits on the right via ScrollBot */}
      <div className="relative z-10 w-full px-6 md:px-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-mono text-[10px] uppercase tracking-[0.5em] text-muted-foreground mb-6"
          >
            ✦ {profile.title} ✦
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] tracking-tight text-glow"
          >
            {profile.name.split(" ")[0]}
            <br />
            <em className="text-primary whitespace-nowrap">{profile.name.split(" ").slice(1).join(" ")}.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-8 max-w-md text-sm md:text-base text-muted-foreground"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
          >
            <span><span className="text-primary">→</span> {profile.location}</span>
            <span><span className="text-primary">→</span> Open to work</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom meta line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10 left-0 right-0 px-6 md:px-10 flex justify-between items-end font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
      >
        <span>Scroll ↓</span>
        <span className="hidden md:inline">{profile.name}</span>
      </motion.div>
    </section>
  );
}
