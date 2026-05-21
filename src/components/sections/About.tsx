import { motion } from "framer-motion";
import { profile } from "@/lib/portfolio-data";

export function About() {
  return (
    <section id="about" className="relative flex min-h-screen items-center px-6 py-32 md:px-16 md:py-40">
      <div className="relative z-10 w-full max-w-2xl md:w-[48vw] md:ml-[38vw] md:pl-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-8">
            01 / About
          </div>
          <h2 className="font-display text-[clamp(2.25rem,4.6vw,4.75rem)] leading-[0.95] tracking-tight">
            I teach machines to <em className="text-primary">think</em>,<br />
            then teach them to <em className="text-primary">ship</em>.
          </h2>
          <p className="mt-10 text-base leading-8 text-muted-foreground md:text-lg">{profile.about}</p>
          <div className="mt-10 space-y-4 font-mono text-sm max-w-md">
            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-muted-foreground">Based in</span>
              <span>Remote · Earth</span>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-muted-foreground">Focus</span>
              <span>LLMs · RAG · Agents</span>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-muted-foreground">Status</span>
              <span className="text-primary">Open to work</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
