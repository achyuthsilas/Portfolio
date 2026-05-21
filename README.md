# Achyuth Kumar — AI Engineer Portfolio

Dark cosmic portfolio inspired by sidewave.it. Built with React, Vite, Tailwind v4, Framer Motion, Three.js (@react-three/fiber + drei), Lenis smooth scroll, and TanStack Start for routing/SSR.

## Sections
Intro · About · Skills · Experience · Projects (live from GitHub) · Achievements · Contact

Projects open **in-page** inside a full-screen iframe modal (uses `homepage` field if set, falls back to repo URL).

## Run locally
```bash
bun install
bun run dev
```
Open http://localhost:8080

## Asset placeholders
Drop into `public/assets/`:
- `hero-loop.mp4` — fallback hero video
- `profile.webp` — profile photo
- `loader.gif` — loader animation
- `resume.pdf` — downloadable resume

## Editing content
All text content lives in `src/lib/portfolio-data.ts` (about, skills, experience, education, achievements, socials).

## Deploy to Vercel
```bash
vercel
```
Or push to GitHub and import the repo on Vercel — it auto-detects Vite/TanStack Start.

## Socials
- GitHub: https://github.com/achyuthsilas
- LinkedIn: https://www.linkedin.com/in/achyuthkumar09/
- LeetCode: https://leetcode.com/u/achyuthsilas/
