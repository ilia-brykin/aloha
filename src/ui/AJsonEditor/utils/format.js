import {
  isArray,
  isFunction,
  isPlainObject,
} from "lodash-es";

export const DEFAULT_FORMAT_OPTIONS = {
  emptyContainers: "{}",
  escapeSlashes: false,
  escapeUnicode: false,
  indent: 2,
  inlineArrays: false,
  inlineObjects: false,
  lineEnding: "lf",
  maxLineLength: 80,
  minify: false,
  numberFormat: undefined,
  sortKeys: false,
  spaceAfterColon: true,
  trailingNewline: false,
};

function stringifyString(value, options) {
  let text = JSON.stringify(value);
  if (options.escapeUnicode) {
    text = text.replace(/[\u007f-￿]/g, char => `\\u${ char.charCodeAt(0).toString(16).padStart(4, "0") }`);
  }
  if (options.escapeSlashes) {
    text = text.replace(/\//g, "\\/");
  }
  return text;
}

function sortEntries(entries, sortKeys) {
  if (!sortKeys) {
    return entries;
  }
  const COMPARE = isFunction(sortKeys) ? sortKeys : (a, b) => a.localeCompare(b);
  const SORTED = entries.slice().sort(([a], [b]) => COMPARE(a, b));
  return sortKeys === "desc" ? SORTED.reverse() : SORTED;
}

/**
 * JSON as text with the options of the editor (see DEFAULT_FORMAT_OPTIONS):
 * indent (number or "tab"), sortKeys, inlineArrays / inlineObjects (short ones in one line), escapeUnicode,
 * lineEnding, trailingNewline, spaceAfterColon, emptyContainers ("{}" or "{ }"), numberFormat, minify.
 */
export function formatJson(value, optionsLocal = {}) {
  const OPTIONS = { ...DEFAULT_FORMAT_OPTIONS, ...optionsLocal };
  const INDENT = OPTIONS.minify ? "" : (OPTIONS.indent === "tab" ? "\t" : " ".repeat(OPTIONS.indent));
  const COLON = OPTIONS.spaceAfterColon && !OPTIONS.minify ? ": " : ":";
  const NEWLINE = OPTIONS.minify ? "" : "\n";
  const EMPTY_SPACE = OPTIONS.emptyContainers === "{ }" && !OPTIONS.minify ? " " : "";

  const inlineLimit = option => {
    if (OPTIONS.minify || !option) {
      return 0;
    }
    return option === true ? OPTIONS.maxLineLength : option;
  };

  const stringify = (item, level) => {
    if (item === null || item === undefined) {
      return "null";
    }
    if (typeof item === "bigint") {
      return `${ item }`;
    }
    if (typeof item === "number") {
      if (!Number.isFinite(item)) {
        return "null";
      }
      return isFunction(OPTIONS.numberFormat) ? `${ OPTIONS.numberFormat(item) }` : `${ item }`;
    }
    if (typeof item === "boolean") {
      return `${ item }`;
    }
    if (typeof item === "string") {
      return stringifyString(item, OPTIONS);
    }
    const IS_ARRAY = isArray(item);
    if (!IS_ARRAY && !isPlainObject(item)) {
      return stringifyString(`${ item }`, OPTIONS);
    }
    const [OPEN, CLOSE] = IS_ARRAY ? ["[", "]"] : ["{", "}"];
    const ENTRIES = IS_ARRAY ? item.map(child => [null, child]) : sortEntries(Object.entries(item), OPTIONS.sortKeys);
    if (!ENTRIES.length) {
      return `${ OPEN }${ EMPTY_SPACE }${ CLOSE }`;
    }
    const PARTS = ENTRIES.map(([key, child]) => {
      const VALUE = stringify(child, level + 1);
      return key === null ? VALUE : `${ stringifyString(key, OPTIONS) }${ COLON }${ VALUE }`;
    });
    // short containers of primitives in one line
    const LIMIT = inlineLimit(IS_ARRAY ? OPTIONS.inlineArrays : OPTIONS.inlineObjects);
    const ONLY_PRIMITIVES = ENTRIES.every(([, child]) => child === null || typeof child !== "object");
    if (LIMIT && ONLY_PRIMITIVES) {
      const INLINE = IS_ARRAY ? `[${ PARTS.join(", ") }]` : `{ ${ PARTS.join(", ") } }`;
      if (INLINE.length + INDENT.length * level <= LIMIT) {
        return INLINE;
      }
    }
    const PADDING = INDENT.repeat(level + 1);
    return `${ OPEN }${ NEWLINE }${ PARTS.map(part => `${ PADDING }${ part }`).join(`,${ NEWLINE }`) }${ NEWLINE }${ INDENT.repeat(level) }${ CLOSE }`;
  };

  let text = stringify(value, 0);
  if (OPTIONS.trailingNewline && !OPTIONS.minify) {
    text += "\n";
  }
  return OPTIONS.lineEnding === "crlf" ? text.replace(/\n/g, "\r\n") : text;
}

export function minifyJson(value) {
  return formatJson(value, { minify: true });
}

// the place of the first error, also when JSON.parse gives no position (new V8)
export function findJsonErrorPosition(text) {
  const TEXT = `${ text }`;
  let index = 0;
  const fail = () => {
    throw index;
  };
  const skip = () => {
    while (index < TEXT.length && " \t\n\r".includes(TEXT[index])) {
      index++;
    }
  };
  const expect = word => {
    for (const CHAR of word) {
      if (TEXT[index] !== CHAR) {
        fail();
      }
      index++;
    }
  };
  const parseString = () => {
    expect("\"");
    while (index < TEXT.length && TEXT[index] !== "\"") {
      if (TEXT[index] === "\\") {
        index++;
      } else if (TEXT.charCodeAt(index) < 32) {
        fail();
      }
      index++;
    }
    expect("\"");
  };
  const parseValue = () => {
    skip();
    const CHAR = TEXT[index];
    if (CHAR === "{") {
      index++;
      skip();
      if (TEXT[index] === "}") {
        index++;
        return;
      }
      for (;;) {
        skip();
        parseString();
        skip();
        expect(":");
        parseValue();
        skip();
        if (TEXT[index] === ",") {
          index++;
          continue;
        }
        expect("}");
        return;
      }
    } else if (CHAR === "[") {
      index++;
      skip();
      if (TEXT[index] === "]") {
        index++;
        return;
      }
      for (;;) {
        parseValue();
        skip();
        if (TEXT[index] === ",") {
          index++;
          continue;
        }
        expect("]");
        return;
      }
    } else if (CHAR === "\"") {
      parseString();
    } else if (CHAR === "t") {
      expect("true");
    } else if (CHAR === "f") {
      expect("false");
    } else if (CHAR === "n") {
      expect("null");
    } else {
      const MATCH = /^-?(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?/.exec(TEXT.slice(index));
      if (!MATCH) {
        fail();
      }
      index += MATCH[0].length;
    }
  };
  try {
    parseValue();
    skip();
    if (index < TEXT.length) {
      fail();
    }
  } catch(position) {
    return position;
  }
  return TEXT.length;
}

// the digits of a number without sign, point, exponent and zeros at the start and the end
function getSignificantDigits(text) {
  return `${ text }`.replace(/^-/, "").replace(/e.*$/i, "").replace(".", "").replace(/^0+/, "").replace(/0+$/, "");
}

/**
 * A number of the text is unsafe, when JavaScript can not keep it exactly:
 * 12345678901234567890, 9007199254740993, 0.12345678901234567890, 1e400.
 */
export function isUnsafeNumber(source) {
  const NUMBER = Number(source);
  return !Number.isFinite(NUMBER) || getSignificantDigits(source) !== getSignificantDigits(`${ NUMBER }`);
}

function isIntegerSource(source) {
  return /^-?\d+$/.test(source);
}

/**
 * JSON.parse with the place of an error: { value, unsafe } or { error: { message, line, column, position } }.
 * bigNumbers: "warn" (the numbers stay, unsafe has their pointers), "string" (unsafe numbers as strings),
 * "bigint" (unsafe integers as BigInt, other unsafe numbers as in "warn"). Without bigNumbers JSON.parse as it is.
 * unsafe: [{ pointer }]; pointer is null in old browsers without the source of the numbers in the reviver.
 */
export function parseJson(text, { bigNumbers } = {}) {
  try {
    if (!bigNumbers) {
      return { value: JSON.parse(text), unsafe: [] };
    }
    // holder → keys of the unsafe numbers, the pointers are found after the parse
    const MARKED = new Map();
    let withoutSource = 0;
    const VALUE = JSON.parse(text, function(key, value, context) {
      if (typeof value !== "number") {
        return value;
      }
      if (!context || context.source === undefined) {
        // shortcut: without the source only big integers are found, decimals are not (old browsers)
        if (Number.isInteger(value) && !Number.isSafeInteger(value)) {
          withoutSource++;
        }
        return value;
      }
      const SOURCE = context.source;
      if (!isUnsafeNumber(SOURCE)) {
        return value;
      }
      if (bigNumbers === "string") {
        return SOURCE;
      }
      if (bigNumbers === "bigint" && isIntegerSource(SOURCE)) {
        return BigInt(SOURCE);
      }
      if (!MARKED.has(this)) {
        MARKED.set(this, new Set());
      }
      MARKED.get(this).add(key);
      return value;
    });
    const UNSAFE = [];
    if (MARKED.size) {
      const visit = (item, pointer) => {
        if (item === null || typeof item !== "object") {
          return;
        }
        const KEYS = MARKED.get(item);
        Object.keys(item).forEach(key => {
          const CHILD_POINTER = `${ pointer }/${ key.replace(/~/g, "~0").replace(/\//g, "~1") }`;
          if (KEYS?.has(key)) {
            UNSAFE.push({ pointer: CHILD_POINTER });
          }
          visit(item[key], CHILD_POINTER);
        });
      };
      // the root number itself
      MARKED.forEach((keys, holder) => {
        if (keys.has("") && holder[""] === VALUE && Object.keys(holder).length === 1) {
          UNSAFE.push({ pointer: "" });
        }
      });
      visit(VALUE, "");
    }
    for (let i = 0; i < withoutSource; i++) {
      UNSAFE.push({ pointer: null });
    }
    return { value: VALUE, unsafe: UNSAFE };
  } catch(error) {
    const POSITION = findJsonErrorPosition(text);
    const BEFORE = `${ text }`.slice(0, POSITION).split("\n");
    return {
      error: {
        message: error.message || "",
        line: BEFORE.length,
        column: BEFORE[BEFORE.length - 1].length + 1,
        position: POSITION,
      },
    };
  }
}
