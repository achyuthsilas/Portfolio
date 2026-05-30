import { createFileRoute } from "@tanstack/react-router";
import { ClientOnly } from "@tanstack/react-router";
import { useEffect, useState, lazy, Suspense } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SideNav } from "@/components/SideNav";
import { Cursor } from "@/components/Cursor";
import { Loader } from "@/components/Loader";
import { ScrollBot } from "@/components/ScrollBot";
import { Intro } from "@/components/sections/Intro";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { ChatBubble } from "@/components/ChatBubble";
import { Marquee } from "@/components/Marquee";

gsap.registerPlugin(ScrollTrigger);

const Projects = lazy(() => import("@/components/sections/Projects").then((m) => ({ default: m.Projects })));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Achyuth Kumar — AI Engineer" },
      { name: "description", content: "AI Engineer building LLM systems, RAG pipelines, and agentic workflows." },
      { property: "og:title", content: "Achyuth Kumar — AI Engineer" },
      { property: "og:description", content: "AI Engineer building LLM systems, RAG pipelines, and agentic workflows." },
    ],
  }),
  component: Index,
});

function Index() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // autoRaf: false — Lenis v1.3+ defaults to true (its own RAF loop).
    // We drive it via GSAP's ticker instead; running both causes double-ticking
    // which makes ScrollTrigger's scrub progress jump and become unreliable.
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true, autoRaf: false });

    // Feed Lenis scroll position into GSAP ScrollTrigger so pinning works correctly
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const t = setTimeout(() => setLoaded(true), 1400);
    return () => {
      clearTimeout(t);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative grain">
      <Loader done={loaded} />
      <Cursor />
      <SideNav />
      <ClientOnly fallback={null}><ScrollBot /></ClientOnly>
      <Intro />
      <Marquee items={["Generative AI", "RAG Systems", "LangGraph Agents", "MLOps", "Azure · AWS · GCP", "HIPAA-Grade AI"]} />
      <About />
      <Skills />
      <Experience />
      <Suspense fallback={<div className="py-32 text-center text-muted-foreground">Loading projects…</div>}>
        <Projects />
      </Suspense>
      <Marquee items={["Open to work", "Let's build", "AI Engineer", "Santa Clara, CA"]} />
      <Achievements />
      <Contact />
      <ChatBubble />
    </main>
  );
}
