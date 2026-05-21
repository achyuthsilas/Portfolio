import { motion } from "framer-motion";
import { achievements, certifications } from "@/lib/portfolio-data";
import { Award, Trophy } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-32 md:px-16 md:py-48">
      <div className="relative z-10 ml-auto max-w-2xl">
        <div className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-8">
          05 / Achievements
        </div>
        <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tight mb-16">
          Receipts.
        </h2>

        <div className="grid gap-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
              <Trophy className="h-4 w-4" /> Highlights
            </div>
            <ul className="space-y-4">
              {achievements.map((a, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-3 text-muted-foreground"
                >
                  <span className="text-primary">★</span>
                  <span>{a}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
              <Award className="h-4 w-4" /> Certifications
            </div>
            <ul className="space-y-4">
              {certifications.map((c, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary">✓</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
