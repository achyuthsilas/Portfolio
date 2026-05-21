// Shared scroll-pin state: Projects.tsx writes (via GSAP ScrollTrigger),
// ScrollBot.tsx reads (in useFrame) to drive the pointing animation.
export const projectScrollState = {
  active: false,   // true while the Projects section is scroll-pinned
  progress: 0,     // 0 = pointing at card 1, 0.5 = card 2, 1 = card 3
};
