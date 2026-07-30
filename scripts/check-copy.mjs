import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const scanRoots = ["app", "components", "lib", "scripts", "tailwind.config.ts", "README.md", "next.config.ts"];
const hexAllowed = new Set(["app/globals.css", "tailwind.config.ts"]);
const textFilePattern = /\.(css|md|mjs|ts|tsx)$/;
const rawHexPattern = /#[0-9a-fA-F]{3,8}\b/g;

function collect(path) {
  const absolute = join(root, path);
  const stat = statSync(absolute);

  if (stat.isFile()) {
    return textFilePattern.test(path) ? [path] : [];
  }

  return readdirSync(absolute).flatMap((entry) => collect(join(path, entry)));
}

const files = scanRoots.flatMap(collect);
const errors = [];

for (const file of files) {
  const content = readFileSync(join(root, file), "utf8");
  const display = relative(root, join(root, file));

  if (content.includes("\u2014")) {
    errors.push(`${display}: contains an em dash`);
  }

  if (file.startsWith("lib/content/") && content.includes("!")) {
    errors.push(`${display}: content contains an exclamation mark`);
  }

  const hexes = content.match(rawHexPattern) ?? [];
  if (hexes.length > 0 && !hexAllowed.has(file)) {
    errors.push(`${display}: raw hex found outside central tokens: ${hexes.join(", ")}`);
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Copy and token checks passed.");
