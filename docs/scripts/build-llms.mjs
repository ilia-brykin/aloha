/*
 * Generates the documentation for AI agents from the docs pages:
 * ../AGENTS.md (entry) and ../llms/<section>/<page>.md.
 * Every page is loaded with vite, its setup() is called and its pug template is converted to markdown.
 *
 * Run: npm run build-llms (in the root)
 */
import {
  effectScope,
  isRef,
  reactive,
  unref,
} from "vue";

import fs from "node:fs";
import lex from "pug-lexer";
import parse from "pug-parser";
import path from "node:path";
import {
  createServer,
} from "vite";

const DOCS = path.resolve(import.meta.dirname, "..");
const ROOT = path.resolve(DOCS, "..");
const SRC = path.join(DOCS, "src");
const OUT_DIR = path.join(ROOT, "llms");

const WARN = console.warn;
const ERROR = console.error;
const PROBLEMS = [];

// Some filters use the DOM
const { JSDOM } = await import("jsdom");
const DOM = new JSDOM("");
globalThis.DOMParser = DOM.window.DOMParser;
globalThis.document = DOM.window.document;
globalThis.Node = DOM.window.Node;

const server = await createServer({
  configFile: path.join(DOCS, "vite.config.mjs"),
  root: DOCS,
  logLevel: "error",
  server: { middlewareMode: true, hmr: false },
  appType: "custom",
});

const load = file => server.ssrLoadModule(file);

// Translations: the same as in the docs (en)
const { mainTranslation } = await load(path.join(SRC, "mainTranslation.js"));
const ALOHA = await load(path.join(ROOT, "src/index.js"));
ALOHA.AI18nPlugin.install(null, mainTranslation, "en");
const translate = text => {
  if (typeof text !== "string" || !text) {
    return text;
  }
  return ALOHA.getTranslatedText({ placeholder: text }) ?? text;
};

const toCamel = s => s.replace(/-([a-z])/g, (m, c) => c.toUpperCase());
const toPascal = s => toCamel(s).replace(/^[a-z]/, c => c.toUpperCase());
const toKebab = s => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

// ---------- HTML → markdown ----------

const decode = s => s
  .replace(/&nbsp;/g, " ")
  .replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">")
  .replace(/&quot;/g, "\"")
  .replace(/&#39;/g, "'")
  .replace(/&amp;/g, "&");
const strip = s => s.replace(/<[^>]+>/g, "");

function htmlToMd(html = "") {
  let s = String(html);
  s = s.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/g, (m, t) => `\n\n\`\`\`\n${ decode(strip(t)).trim() }\n\`\`\`\n\n`);
  s = s.replace(/<br\s*\/?>/g, "\n");
  s = s.replace(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/g, (m, l, t) => `\n\n${ "#".repeat(Math.max(2, +l)) } ${ htmlToMd(t) }\n\n`);
  s = s.replace(/<code[^>]*>([\s\S]*?)<\/code>/g, (m, t) => `\`${ decode(strip(t)) }\``);
  s = s.replace(/<(strong|b)(\s[^>]*)?>([\s\S]*?)<\/\1>/g, "**$3**");
  s = s.replace(/<(em|i)(\s[^>]*)?>([\s\S]*?)<\/\1>/g, "*$3*");
  s = s.replace(/<a\s[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g, "[$2]($1)");
  s = s.replace(/<li[^>]*>/g, "\n- ").replace(/<\/li>/g, "");
  s = s.replace(/<\/?(ul|ol|p|div|table|tr)(\s[^>]*)?>/g, "\n\n");
  s = s.replace(/<\/?(td|th)(\s[^>]*)?>/g, " ");
  s = decode(strip(s));
  return s.replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}

const fence = (code, language = "") => {
  const TEXT = String(code).replace(/\r\n/g, "\n").trim();
  const TICKS = TEXT.includes("```") ? "````" : "```";
  return `${ TICKS }${ language }\n${ TEXT }\n${ TICKS }`;
};

const cell = value => {
  if (value === undefined) {
    return "";
  }
  const TEXT = typeof value === "string" ? value : JSON.stringify(value);
  return String(TEXT).replace(/\r?\n/g, " ").replace(/\|/g, "\\|");
};

const table = (columns, rows) => {
  if (!rows?.length) {
    return "";
  }
  return [
    `| ${ columns.join(" | ") } |`,
    `| ${ columns.map(() => "---").join(" | ") } |`,
    ...rows.map(row => `| ${ row.map(cell).join(" | ") } |`),
  ].join("\n");
};

// ---------- components of the docs ----------

const COMPONENTS_CACHE = {};

async function loadComponent(vueFile) {
  if (COMPONENTS_CACHE[vueFile]) {
    return COMPONENTS_CACHE[vueFile];
  }
  const VUE = fs.readFileSync(vueFile, "utf8");
  const DIR = path.dirname(vueFile);
  const PUG_SRC = VUE.match(/<template[^>]*src="([^"]+)"/)?.[1];
  const JS_SRC = VUE.match(/<script[^>]*src="([^"]+)"/)?.[1];
  const PUG = PUG_SRC ? fs.readFileSync(path.resolve(DIR, PUG_SRC), "utf8") : "";
  const JS_FILE = JS_SRC ? path.resolve(DIR, JS_SRC) : undefined;
  const JS = JS_FILE ? fs.readFileSync(JS_FILE, "utf8") : "";
  // Local components: import PageAlertBasic from "./PageAlertBasic/PageAlertBasic.vue";
  const IMPORTS = {};
  for (const [, name, file] of JS.matchAll(/import\s+(\w+)\s+from\s+"([^"]+\.vue)"/g)) {
    IMPORTS[name] = path.resolve(DIR, file);
  }
  const DEFINITION = JS_FILE ? (await load(JS_FILE)).default : {};
  COMPONENTS_CACHE[vueFile] = { ast: parse(lex(PUG)), imports: IMPORTS, definition: DEFINITION || {}, file: vueFile };
  return COMPONENTS_CACHE[vueFile];
}

function buildProps(definition, attrs) {
  const DECLARED = Array.isArray(definition.props) ?
    Object.fromEntries(definition.props.map(name => [name, {}])) :
    definition.props || {};
  const PROPS = {};
  for (const [name, options] of Object.entries(DECLARED)) {
    if (Object.hasOwn(attrs, name)) {
      PROPS[name] = attrs[name];
    } else if (options && Object.hasOwn(options, "default")) {
      PROPS[name] = typeof options.default === "function" && options.type !== Function ?
        options.default() :
        options.default;
    }
  }
  return reactive(PROPS);
}

function runSetup(component, attrs) {
  const { definition } = component;
  if (!definition.setup) {
    return {};
  }
  try {
    const SCOPE = effectScope();
    const RESULT = SCOPE.run(() => definition.setup(buildProps(definition, attrs), {
      emit: () => {},
      attrs: {},
      slots: {},
      expose: () => {},
    }));
    return RESULT && typeof RESULT === "object" ? RESULT : {};
  } catch(error) {
    PROBLEMS.push(`${ path.relative(DOCS, component.file) }: setup() ${ error.message }`);
    return {};
  }
}

function evaluate(expression, vars) {
  try {
    const SCOPE = new Proxy(vars, {
      has: (target, key) => key in target,
      get: (target, key) => unref(target[key]),
    });
    // eslint-disable-next-line no-new-func
    return new Function("__scope", `with (__scope) { return (${ expression }); }`)(SCOPE);
  } catch {
    return undefined;
  }
}

// Attributes of a pug tag: { "page-title": value } (":" bound attributes are evaluated)
function getAttrs(node, vars) {
  const ATTRS = {};
  for (const { name, val } of node.attrs || []) {
    if (name.startsWith("@") || name.startsWith("v-")) {
      continue;
    }
    // eslint-disable-next-line no-new-func
    const LITERAL = val === true ? true : new Function(`return (${ val });`)();
    if (name.startsWith(":")) {
      ATTRS[name.slice(1)] = evaluate(LITERAL, vars);
    } else {
      ATTRS[name] = LITERAL;
    }
  }
  return ATTRS;
}

const getAttrsCamel = attrs => Object.fromEntries(Object.entries(attrs).map(([key, value]) => [toCamel(key), value]));

// ---------- pug → markdown ----------

async function renderBlock(block, ctx, out) {
  for (const node of block?.nodes || []) {
    // eslint-disable-next-line no-await-in-loop -- the order of the output matters
    await renderNode(node, ctx, out);
  }
}

const textOf = block => (block?.nodes || [])
  .map(node => (node.type === "Text" ? node.val : textOf(node.block)))
  .join("");

const HANDLERS = {
  "a-page-tab-title": () => {},
  hr: () => {},
  br: () => {},
  "page-filter-test": () => {},
  "page-filter-arguments": (node, ctx, out, attrs) => {
    out.push(`## ${ translate("_PAGE_FUNCTIONS_ARGUMENTS_HEADER_") }`, fence(attrs["function-description"], "js"));
    const ITEMS = (attrs["arguments-text"] || []).map(item => `- **${ item.value }** (${ (item.types || []).join(" | ") }): ${ htmlToMd(translate(item.text)) }`);
    if (ITEMS.length) {
      out.push(ITEMS.join("\n"));
    }
  },
  "aloha-page": async(node, ctx, out, attrs) => {
    const TITLE = translate(attrs.pageTitleH1 || attrs["page-title-h1"] || attrs["page-title"]);
    if (TITLE && !ctx.page.title) {
      ctx.page.title = htmlToMd(TITLE);
      out.push(`# ${ ctx.page.title }`);
    }
    await renderBlock(node.block, ctx, out);
  },
  "a-translation": (node, ctx, out, attrs) => {
    const KEY = attrs["safe-html"] ?? attrs.html ?? attrs.text;
    if (!KEY) {
      return;
    }
    const TEXT = htmlToMd(ALOHA.getTranslatedText({ placeholder: KEY, extra: attrs.extra }) ?? KEY);
    const LEVEL = /^h([1-6])$/.exec(attrs.tag || "")?.[1];
    if (LEVEL === "1") {
      if (!ctx.page.title) {
        ctx.page.title = TEXT;
        out.push(`# ${ TEXT }`);
      }
      return;
    }
    out.push(LEVEL ? `${ "#".repeat(+LEVEL) } ${ TEXT }` : TEXT);
  },
  "aloha-highlightjs": (node, ctx, out, attrs) => {
    if (attrs.code) {
      out.push(fence(attrs.code, attrs.language === "markdown" ? "bash" : attrs.language));
    }
  },
  "aloha-example": (node, ctx, out, attrs) => {
    const HEADER = translate(attrs.header);
    if (HEADER) {
      out.push(`## ${ htmlToMd(HEADER) }`);
    }
    if (attrs.description) {
      out.push(htmlToMd(translate(attrs.description)));
    }
    const RELATED = ["props", "slots", "emits", "exposes"]
      .filter(key => attrs[key])
      .map(key => `${ key }: ${ [].concat(attrs[key]).map(item => `\`${ item }\``).join(", ") }`);
    if (RELATED.length) {
      out.push(`*${ RELATED.join("; ") }*`);
    }
    if (attrs["code-html"]) {
      out.push(fence(attrs["code-html"], "html"));
    }
    // Only imports and the registration of the components: the same in every example
    const IS_BOILERPLATE = /export default/.test(attrs["code-js"]) && !/setup\s*\(|data\s*\(|methods|computed/.test(attrs["code-js"]);
    if (attrs["code-js"] && !IS_BOILERPLATE) {
      out.push(fence(attrs["code-js"], "js"));
    }
    if (attrs.code) {
      out.push(fence(attrs.code));
    }
  },
  "aloha-table-props": (node, ctx, out, attrs) => {
    const COLUMNS = attrs.columns || ["name", "type", "default", "required", "description"];
    const ROWS = (attrs.data || []).map(item => COLUMNS.map(column => {
      if (column === "description") {
        return htmlToMd(translate(item.description));
      }
      if (column === "required") {
        return item.required ? "yes" : "";
      }
      return item[column];
    }));
    if (ROWS.length) {
      out.push(`## ${ translate(attrs["table-label"]) || "Props" }`, table(COLUMNS, ROWS));
    }
  },
  "aloha-table-translate": (node, ctx, out, attrs) => {
    const ROWS = (attrs.data || []).map(key => [`\`${ key }\``, htmlToMd(translate(key))]);
    if (ROWS.length) {
      out.push("## Translations", table(["key", "en"], ROWS));
    }
  },
  "aloha-table-css-vars": async(node, ctx, out, attrs) => {
    const { parseCssVars } = await load(path.join(SRC, "global/components/AlohaTableCssVars/compositionAPI/CssVarsAPI.js"));
    const SOURCES = attrs.source ?
      [].concat(attrs.source) :
      [].concat(attrs.files || []).map(file => {
        const FILE = path.join(ROOT, "scss", `${ file }.scss`);
        return fs.existsSync(FILE) ? fs.readFileSync(FILE, "utf8") : "";
      });
    const VARS = SOURCES.flatMap(source => parseCssVars(source).vars);
    if (VARS.length) {
      const FILES = [].concat(attrs.files || []).map(file => `\`scss/${ file }.scss\``).join(", ");
      out.push(`## CSS variables${ FILES ? ` (${ FILES })` : "" }`, table(["name", "value", "description"], VARS.map(item => [`\`${ item.name }\``, item.value, item.description])));
    }
  },
};

async function renderNode(node, ctx, out) {
  if (node.type === "Text") {
    if (node.val.trim()) {
      out.push(node.val.trim());
    }
    return;
  }
  if (node.type !== "Tag") {
    await renderBlock(node.block, ctx, out);
    return;
  }
  if (node.attrs?.some(attr => attr.name === "v-for")) {
    return;
  }
  const ATTRS = getAttrs(node, ctx.vars);
  if (HANDLERS[node.name]) {
    await HANDLERS[node.name](node, ctx, out, ATTRS);
    return;
  }
  const LOCAL = ctx.component.imports[toPascal(node.name)];
  if (LOCAL && !LOCAL.includes(`${ path.sep }global${ path.sep }`)) {
    await renderComponent(LOCAL, getAttrsCamel(ATTRS), ctx.page, out);
    return;
  }
  const HEADING = /^h([1-6])$/.exec(node.name)?.[1];
  if (HEADING) {
    const TEXT = textOf(node.block).trim();
    if (TEXT) {
      out.push(`${ "#".repeat(Math.max(2, +HEADING)) } ${ TEXT }`);
    }
    return;
  }
  if (["template", "div", "section", "p", "ul", "li", "span", "strong"].includes(node.name)) {
    await renderBlock(node.block, ctx, out);
  }
  // Other tags (a-button, a-table…) are live demos, their code is in aloha-example
}

async function renderComponent(vueFile, attrs, page, out) {
  const COMPONENT = await loadComponent(vueFile);
  const VARS = runSetup(COMPONENT, attrs);
  const ALL_VARS = { ...attrs, ...Object.fromEntries(Object.entries(VARS).map(([key, value]) => [key, isRef(value) ? value.value : value])) };
  await renderBlock(COMPONENT.ast, { component: COMPONENT, vars: ALL_VARS, page }, out);
}

// ---------- pages ----------

const ROUTER = fs.readFileSync(path.join(SRC, "router/index.js"), "utf8");
const ROUTES = {};
for (const [, routePath, name, file] of ROUTER.matchAll(/path:\s*"([^"]+)",\s*name:\s*"(\w+)",\s*component:\s*\(\)\s*=>\s*import\("([^"]+)"\)/g)) {
  ROUTES[name] = { path: routePath, file: path.resolve(SRC, "router", file) };
}

const { default: MenuItemsAPI } = await load(path.join(SRC, "components/TheMenu/compositionAPI/MenuItemsAPI.js"));
const MENU = unref(MenuItemsAPI().menuItems ?? Object.values(MenuItemsAPI())[0]);

const PAGES = [];
function collect(items, section, group) {
  for (const item of items || []) {
    const NAME = item.to?.name;
    if (NAME && ROUTES[NAME]) {
      PAGES.push({ name: NAME, label: item.label, section, group, ...ROUTES[NAME] });
    }
    collect(item.children, section, item.to ? group : item.label);
  }
}
for (const top of MENU) {
  collect(top.children, top.label, undefined);
}

console.warn = () => {};
console.error = () => {};

const fileOf = page => `llms/${ toKebab(page.section.replace(/\s+/g, "")) }/${ toKebab(page.name.replace(/^Page/, "")) }.md`;
const PATH_TO_FILE = Object.fromEntries(PAGES.map(page => [page.path, fileOf(page)]));
// [text](/#/filter-float) → [text](../functions/filter-float.md)
const fixLinks = (text, file) => text.replace(/\]\((?:\/#|\/aloha)?(\/[^)\s#?]*)\)/g, (match, link) => {
  const TARGET = PATH_TO_FILE[link];
  return TARGET ? `](${ path.posix.relative(path.posix.dirname(file), TARGET) })` : match;
});

fs.rmSync(OUT_DIR, { recursive: true, force: true });
const INDEX = [];
for (const page of PAGES) {
  const OUT = [];
  const PAGE = { title: "" };
  try {
    // eslint-disable-next-line no-await-in-loop -- the order of the output matters
    await renderComponent(page.file, {}, PAGE, OUT);
  } catch(error) {
    PROBLEMS.push(`${ page.name }: ${ error.message }`);
    continue;
  }
  if (!PAGE.title) {
    OUT.unshift(`# ${ page.label }`);
  }
  const FILE = fileOf(page);
  fs.mkdirSync(path.join(ROOT, path.dirname(FILE)), { recursive: true });
  fs.writeFileSync(path.join(ROOT, FILE), `${ fixLinks(OUT.filter(Boolean).join("\n\n").replace(/\n{3,}/g, "\n\n"), FILE) }\n`);
  // The first sentence of the introduction (the text before the first section)
  const FIRST_SECTION = OUT.findIndex((line, i) => i > 0 && line.startsWith("#"));
  const INTRO = OUT.slice(1, FIRST_SECTION === -1 ? OUT.length : FIRST_SECTION).find(line => /^[A-Za-z*]/.test(line) && !line.startsWith("*props") && !/^_[A-Z_]+_$/.test(line)) || "";
  const SUMMARY = INTRO.split("\n")[0].replace(/\s+/g, " ").match(/^.*?[.!?](?=\s|$)|^.*/)[0];
  INDEX.push({ ...page, file: FILE, summary: SUMMARY });
}

console.warn = WARN;
console.error = ERROR;

// ---------- AGENTS.md ----------

const LINES = [];
let section;
let group;
for (const page of INDEX) {
  if (page.section !== section) {
    section = page.section;
    group = undefined;
    LINES.push("", `### ${ section }`, "");
  }
  if (page.group !== group) {
    group = page.group;
    if (group) {
      LINES.push(`- **${ group }**`);
    }
  }
  LINES.push(`${ group ? "  " : "" }- [${ page.label }](${ page.file })${ page.summary ? ` — ${ page.summary }` : "" }`);
}

const TEMPLATE = fs.readFileSync(path.join(import.meta.dirname, "AGENTS.template.md"), "utf8").replace(/\r\n/g, "\n");
fs.writeFileSync(path.join(ROOT, "AGENTS.md"), TEMPLATE.replace("{{INDEX}}", () => fixLinks(LINES.join("\n").trim(), "AGENTS.md")));

await server.close();

console.log(`llms: ${ INDEX.length } pages`);
if (PROBLEMS.length) {
  console.log(`Problems (${ PROBLEMS.length }):\n${ PROBLEMS.join("\n") }`);
}
