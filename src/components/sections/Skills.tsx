import { motion } from "framer-motion";
import { skills } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32 md:px-16 md:py-48">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-8 text-center">
          02 / Skills
        </div>
        <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tight mb-12 text-center">
          The <em className="text-primary">stack</em>.
        </h2>

        {/* Reserve vertical space so the bot (center, upper area) doesn't collide with the content */}
        <div className="h-[55vh] md:h-[60vh]" aria-hidden="true" />

        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-background/60 p-8 hover:bg-card/60 transition-colors"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                {group.group}
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-sm hover:border-primary hover:text-primary transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
