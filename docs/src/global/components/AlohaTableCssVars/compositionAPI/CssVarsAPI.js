import {
  computed,
} from "vue";

const RE_BLOCK_START = /^:where\((.+)\)\s*\{\s*$/;
const RE_VAR = /^\s*(--[\w-]+)\s*:\s*(.+?);\s*(?:\/\/\s*(.*))?$/;
const RE_VAR_START = /^\s*(--[\w-]+)\s*:\s*(.*)$/;
const RE_VAR_END = /^(.*?);\s*(?:\/\/\s*(.*))?$/;
const RE_GROUP = /^\s*\/\/\s*(.+)$/;

const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);

// Escapes the text and allows line breaks after "_" and "(", not after "--".
const toHtmlWithBreaks = text => {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/([_(])/g, "$1<wbr>");
};

const createVar = ({ name, value, description, group }) => {
  const DEFAULT = value.replace(/\s+/g, " ").trim();
  return {
    name,
    nameHtml: toHtmlWithBreaks(name),
    default: DEFAULT,
    defaultHtml: toHtmlWithBreaks(DEFAULT),
    group,
    description: description ? description.trim() : "",
  };
};

/**
 * Reads the component tokens from SCSS source:
 * :where(.a_x) {
 *   // group
 *   --a_x_y: value; // description
 * }
 * A file with several blocks uses the block selector as the default group.
 */
export function parseCssVars(source = "") {
  const LINES = source.replace(/\r\n/g, "\n").split("\n");
  const BLOCKS_COUNT = LINES.filter(line => RE_BLOCK_START.test(line)).length;
  const VARS = [];
  const SELECTORS = [];
  let group = "";
  let inBlock = false;
  let pending;

  LINES.forEach(line => {
    if (!inBlock) {
      const START = line.match(RE_BLOCK_START);
      if (START) {
        inBlock = true;
        SELECTORS.push(START[1]);
        group = BLOCKS_COUNT > 1 ? START[1] : "";
      }
      return;
    }
    if (pending) {
      const END = line.match(RE_VAR_END);
      if (END) {
        VARS.push(createVar({
          ...pending,
          value: `${ pending.value } ${ END[1] }`,
          description: END[2],
          group,
        }));
        pending = undefined;
      } else {
        pending.value += ` ${ line }`;
      }
      return;
    }
    if (/^\}/.test(line)) {
      inBlock = false;
      return;
    }
    const VAR = line.match(RE_VAR);
    if (VAR) {
      VARS.push(createVar({
        name: VAR[1],
        value: VAR[2],
        description: VAR[3],
        group,
      }));
      return;
    }
    const VAR_START = line.match(RE_VAR_START);
    if (VAR_START) {
      pending = {
        name: VAR_START[1],
        value: VAR_START[2],
      };
      return;
    }
    const GROUP = line.match(RE_GROUP);
    if (GROUP) {
      group = capitalize(GROUP[1].replace(/\(.*\)/, "").trim());
    }
  });

  return {
    selectors: SELECTORS,
    vars: VARS,
  };
}

export default function CssVarsAPI(props, {
  source = computed(() => ""),
}) {
  const parsed = computed(() => {
    const SOURCES = Array.isArray(source.value) ? source.value : [source.value];
    const RESULT = {
      selectors: [],
      vars: [],
    };
    SOURCES.forEach(item => {
      const { selectors, vars } = parseCssVars(item);
      RESULT.selectors.push(...selectors);
      RESULT.vars.push(...vars);
    });
    return RESULT;
  });

  const cssVars = computed(() => parsed.value.vars);

  const selector = computed(() => {
    return [...new Set(parsed.value.selectors.filter(item => item !== ":root"))].join(", ");
  });

  const hasGroups = computed(() => cssVars.value.some(item => item.group));

  const columns = computed(() => {
    const COLUMNS = [
      {
        label: "Variable",
        keyLabel: "name",
        slot: "name",
        width: 260,
        grow: 0,
      },
    ];
    if (hasGroups.value) {
      COLUMNS.push({
        label: "Group",
        keyLabel: "group",
        width: 100,
        grow: 0,
      });
    }
    COLUMNS.push(
      {
        label: "Default",
        keyLabel: "default",
        slot: "defaultValue",
        width: 200,
        grow: 0,
      },
      {
        label: "Description",
        keyLabel: "description",
        grow: 1,
      },
    );
    return COLUMNS;
  });

  const codeExample = computed(() => {
    const EXAMPLE = cssVars.value.find(item => /_color/.test(item.name) && !/\s/.test(item.default)) || cssVars.value[0];
    const FIRST_SELECTOR = parsed.value.selectors.find(item => item !== ":root") || ".a_component";
    const CLASS = FIRST_SELECTOR.split(",")[0].trim();
    if (!EXAMPLE) {
      return "";
    }
    const VALUE = /_color|_bg/.test(EXAMPLE.name) ? "var(--a_color_success)" : EXAMPLE.default;
    return `/* the whole project */
:root {
  ${ EXAMPLE.name }: ${ VALUE };
}

/* one place */
${ CLASS }.my_class {
  ${ EXAMPLE.name }: ${ VALUE };
}`;
  });

  return {
    codeExample,
    columns,
    cssVars,
    selector,
  };
}
