import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repository = fileURLToPath(new URL("../../", import.meta.url));
const publicDir = resolve(repository, "docs/public");
const read = path => readFileSync(path, "utf8");
const componentExports = read(resolve(repository, "src/index.js"))
  .split(/^\/\/\s+compositionAPI\s*$/m)[0];
const componentSource = /^export \{ default as (\w+) \} from "([^"]+)";$/gm;
const components = new Set();

// The component section also exports a raw SVG and a menu composable.
// Only source modules that declare a named Vue component are included.
for (const [, name, path] of componentExports.matchAll(componentSource)) {
  const source = read(resolve(repository, "src", path + ".js"));
  if (/^\s{2}name: ["'][^"']+["'],/m.test(source)) {
    components.add(name);
  }
}
if (!components.size) {
  throw new Error("No public components were found in src/index.js.");
}

const errors = [];
const indexPath = resolve(publicDir, "llms.txt");
const index = read(indexPath);
const indexLinks = new Set([...index.matchAll(/\]\((https:\/\/ilia-brykin\.github\.io\/aloha\/[^)]+)\)/g)].map(match => new URL(match[1]).pathname));
const referenceDir = resolve(publicDir, "ai/v3/components");
const examplesDir = resolve(publicDir, "ai/v3/examples");
const versionMarker = /aloha-vue@3\.\d+\.\d+/;

function check(condition, message) {
  if (!condition) errors.push(message);
}

check(versionMarker.test(index), "llms.txt must name the documented Aloha Vue 3 release.");
for (const guide of ["quick-start", "theming", "migration-2-to-3"]) {
  const path = "ai/v3/" + guide + ".md";
  check(indexLinks.has("/aloha/" + path), "Missing index link for " + path);
  check(existsSync(resolve(publicDir, path)), "Missing guide " + path);
}

for (const component of components) {
  const reference = resolve(referenceDir, component + ".md");
  const example = resolve(examplesDir, component + ".vue");
  const exampleLink = "../examples/" + component + ".vue";
  const importPattern = new RegExp('import\\s*\\{[^}]*\\b' + component + '\\b[^}]*\\}\\s*from\\s*["\']aloha-vue["\']');

  check(indexLinks.has("/aloha/ai/v3/components/" + component + ".md"), "Missing index link for " + component);
  check(existsSync(reference), "Missing reference for " + component);
  check(existsSync(example), "Missing Vue example for " + component);
  if (existsSync(reference)) {
    const content = read(reference);
    check(versionMarker.test(content), "Wrong version in the reference for " + component);
    check(content.includes("(" + exampleLink + ")"), "Missing example link in the reference for " + component);
    check(importPattern.test(content), "Missing public import in the reference for " + component);
  }
  if (existsSync(example)) {
    check(importPattern.test(read(example)), "Missing public import in the example for " + component);
  }
}

for (const [directory, extension] of [[referenceDir, ".md"], [examplesDir, ".vue"]]) {
  for (const file of readdirSync(directory).filter(file => file.endsWith(extension))) {
    check(components.has(file.slice(0, -extension.length)), "Unknown component in " + file);
  }
}

for (const path of indexLinks) {
  if (path.startsWith("/aloha/ai/v3/")) {
    check(existsSync(resolve(dirname(indexPath), path.slice("/aloha/".length))), "Broken index link " + path);
  }
}
if (errors.length) {
  throw new Error(errors.join("\n"));
}
console.log("Verified AI documentation and examples for " + components.size + " public UI components.");
