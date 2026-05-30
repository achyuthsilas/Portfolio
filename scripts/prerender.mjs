/**
 * Prerenders the portfolio to dist/client/index.html so Vercel can
 * serve it as a static site. Runs after `vite build`.
 */
import { createServer } from "node:http";
import { writeFileSync } from "node:fs";

const { default: server } = await import("../dist/server/server.js");

const PORT = 4173;

const httpServer = createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", `http://localhost:${PORT}`);
  const headers = {};
  for (const [k, v] of Object.entries(req.headers)) {
    if (v) headers[k] = Array.isArray(v) ? v.join(", ") : v;
  }
  const request = new Request(url.toString(), { method: req.method, headers });
  const response = await server.fetch(request, {}, {});
  res.writeHead(response.status, Object.fromEntries(response.headers.entries()));
  res.end(await response.text());
});

httpServer.listen(PORT, async () => {
  try {
    const res = await fetch(`http://localhost:${PORT}/`);
    const html = await res.text();
    writeFileSync("dist/client/index.html", html, "utf8");
    console.log("✓ Prerendered dist/client/index.html");
  } catch (err) {
    console.error("Prerender failed:", err);
    process.exit(1);
  } finally {
    httpServer.close();
  }
});
