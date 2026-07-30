import { spawn } from "node:child_process";

const port = 3137;
const origin = `http://127.0.0.1:${port}`;
const internalRoutes = [
  "/",
  "/compete",
  "/compete/2027",
  "/compete/syllabus",
  "/compete/rules",
  "/results",
  "/results/past-problems",
  "/team-usa",
  "/about",
  "/news",
  "/sponsors",
  "/contact",
  "/dev/kit",
];
const server = spawn("npm", ["run", "start", "--", "--hostname", "127.0.0.1", "--port", String(port)], {
  cwd: process.cwd(),
  env: { ...process.env, PORT: String(port) },
  stdio: ["ignore", "pipe", "pipe"],
});

let output = "";
server.stdout.on("data", (chunk) => {
  output += chunk.toString();
});
server.stderr.on("data", (chunk) => {
  output += chunk.toString();
});

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer() {
  const startedAt = Date.now();
  while (Date.now() - startedAt < 30000) {
    try {
      const response = await fetch(origin);
      if (response.ok) return;
    } catch {
      await wait(500);
    }
  }

  throw new Error(`Next server did not become ready.\n${output}`);
}

try {
  await waitForServer();
  const failures = [];

  for (const route of internalRoutes) {
    const response = await fetch(`${origin}${route}`);
    const body = await response.text();
    if (!response.ok || !body.includes("</html>")) {
      failures.push(`${route}: ${response.status}`);
    }
  }

  for (const route of ["/robots.txt", "/sitemap.xml"]) {
    const response = await fetch(`${origin}${route}`);
    if (!response.ok) {
      failures.push(`${route}: ${response.status}`);
    }
  }

  if (failures.length > 0) {
    throw new Error(`Route checks failed:\n${failures.join("\n")}`);
  }

  console.log("Route checks passed.");
} finally {
  server.kill();
}
