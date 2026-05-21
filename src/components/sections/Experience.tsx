import { motion } from "framer-motion";
import { experience, education } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-32 md:px-16 md:py-48">
      <div className="relative z-10 mr-auto max-w-2xl">
        <div className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-8">
          03 / Experience
        </div>
        <h2 className="font-display text-[clamp(2.25rem,5.5vw,4.75rem)] leading-[0.95] tracking-tight mb-16">
          Where I've <em className="text-primary">built</em>.
        </h2>

        <div className="space-y-12">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-t border-border pt-8"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                {job.period}
              </div>
              <div className="font-display text-2xl md:text-3xl">{job.role}</div>
              <div className="text-primary mb-4">{job.company}</div>
              <ul className="space-y-3 text-muted-foreground">
                {job.points.map((p, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="text-primary">—</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <div className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">
            Education
          </div>
          <div className="space-y-4">
            {education.map((e, i) => (
              <div key={i} className="rounded-lg border border-border p-6">
                <div className="font-mono text-xs text-muted-foreground">{e.period}</div>
                <div className="font-display text-2xl mt-2">{e.degree}</div>
                <div className="text-primary text-sm">{e.school}</div>
                <p className="text-muted-foreground text-sm mt-2">{e.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
