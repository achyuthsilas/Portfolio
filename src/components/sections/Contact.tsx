import { useState } from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/BrandIcons";
import { profile } from "@/lib/portfolio-data";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=Portfolio inquiry&body=${body}`;
  };

  return (
    <section id="contact" className="relative px-6 pt-32 pb-16 md:px-16 md:pt-40">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-12">
          06 / Contact
        </div>

        {/* 3-col layout: form | bot spacer | info */}
        <div className="grid gap-8 md:grid-cols-[1fr_minmax(260px,360px)_1fr] items-start">
          <form onSubmit={submit} className="space-y-4">
            <input
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-md border border-border bg-transparent px-4 py-3 outline-none focus:border-primary"
            />
            <input
              required
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-md border border-border bg-transparent px-4 py-3 outline-none focus:border-primary"
            />
            <textarea
              required
              rows={5}
              placeholder="What are you working on?"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-md border border-border bg-transparent px-4 py-3 outline-none focus:border-primary resize-none"
            />
            <button
              type="submit"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:scale-105 transition-transform"
            >
              Send message →
            </button>
          </form>

          {/* Center spacer reserved for the 3D bot */}
          <div className="hidden md:block h-[70vh]" aria-hidden="true" />

          <div className="space-y-6 md:text-right">
            <a href={`mailto:${profile.email}`} className="flex md:justify-end items-center gap-3 text-lg hover:text-primary transition-colors">
              <Mail className="h-5 w-5" /> {profile.email}
            </a>
            <div className="space-y-3 pt-4 border-t border-border">
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex md:justify-end items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex md:justify-end items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
              <a href={profile.leetcode} target="_blank" rel="noreferrer" className="flex md:justify-end items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <LeetcodeIcon className="h-4 w-4" /> LeetCode
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 font-mono text-xs uppercase tracking-widest text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} {profile.name}</div>
          <div>Built with React · Three.js · Framer Motion</div>
        </footer>
      </div>
    </section>
  );
}
