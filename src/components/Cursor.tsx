import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 28, stiffness: 380, mass: 0.4 });
  const sy = useSpring(y, { damping: 28, stiffness: 380, mass: 0.4 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-cursor-hover]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[200]"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      >
        <div
          className="rounded-full border border-primary transition-all duration-200"
          style={{
            width: hovering ? 56 : 28,
            height: hovering ? 56 : 28,
            opacity: hovering ? 1 : 0.7,
          }}
        />
      </motion.div>
      {/* Inner dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[201]"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      >
        <div
          className="rounded-full bg-primary"
          style={{
            width: hovering ? 4 : 4,
            height: hovering ? 4 : 4,
            opacity: hovering ? 0 : 1,
          }}
        />
      </motion.div>
    </>
  );
}
