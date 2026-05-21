import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

export function ChatBubble() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<{ role: "user" | "ai"; text: string }[]>([
    { role: "ai", text: "Hey — I'm a placeholder AI. Wire me to OpenAI/Anthropic and I'll answer for real." },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMsgs((m) => [...m, { role: "user", text: input }, { role: "ai", text: "(Placeholder response — connect an API key.)" }]);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open AI chat"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_40px_var(--glow)] hover:scale-105 transition-transform"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-40 flex h-96 w-80 flex-col rounded-2xl border border-border bg-card shadow-2xl"
          >
            <div className="border-b border-border p-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Talk to AI
            </div>
            <div className="flex-1 space-y-2 overflow-y-auto p-3 text-sm">
              {msgs.map((m, i) => (
                <div key={i} className={m.role === "user" ? "text-right" : ""}>
                  <span
                    className={`inline-block max-w-[85%] rounded-2xl px-3 py-2 ${
                      m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    {m.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-2 border-t border-border p-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask anything…"
                className="flex-1 rounded-full bg-muted px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={send}
                aria-label="Send"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
