import { motion } from "framer-motion";

export function Loader({ done }: { done: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1, pointerEvents: done ? "none" : "auto" }}
      transition={{ duration: 0.9, delay: done ? 0.3 : 0 }}
      className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-background"
    >
      <div className="relative h-24 w-24">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0%, oklch(0.82 0.16 75 / 0.9) 25%, transparent 50%)",
            mask: "radial-gradient(circle, transparent 58%, black 60%)",
            WebkitMask: "radial-gradient(circle, transparent 58%, black 60%)",
          }}
        />
        <div className="absolute inset-4 rounded-full bg-primary/10 blur-2xl" />
      </div>
      <div className="mt-10 font-mono text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
        Preparing the content. Good things take a few milliseconds.
      </div>
    </motion.div>
  );
}
