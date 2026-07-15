import fs from "node:fs";

// Injects the server-rendered app HTML into the built dist/index.html so the
// deployed page ships real content in its initial response (SEO / social).
// Run after: vite build (client) && vite build --ssr src/entry-server.tsx.
const { render } = await import("../dist-server/entry-server.js");
const appHtml = render();

const indexPath = "dist/index.html";
const template = fs.readFileSync(indexPath, "utf-8");

if (!template.includes('<div id="root"></div>')) {
  console.warn("prerender: could not find empty root div; skipping injection");
} else {
  const output = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  fs.writeFileSync(indexPath, output);
  console.log(`prerender: injected ${appHtml.length} chars of static HTML into ${indexPath}`);
}

fs.rmSync("dist-server", { recursive: true, force: true });
