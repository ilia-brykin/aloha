import {
  parseJson,
} from "./format";

/**
 * Repairs a text that is almost JSON, without a library:
 * comments, trailing commas, missing commas, single and typographic quotes, keys without quotes,
 * Python and JS constants (True, None, undefined, NaN), "+1", ".5", "5.", missing closing brackets and quotes.
 * Result: { text, changes: [{ message, line }] } or { error } when the text is still no JSON.
 */
export function repairJson(input) {
  const TEXT = `${ input ?? "" }`;
  const CHANGES = [];
  let out = "";
  let index = 0;
  // the open containers: "{" or "["
  const STACK = [];
  // the last token: "value", "key" (a string before ":"), "colon", "comma", "open" or "start"
  let last = "start";
  // several values at the root (e.g. JSON lines) are put into an array
  let isRootArray = false;

  const lineAt = position => TEXT.slice(0, position).split("\n").length;
  const change = (message, position = index) => {
    CHANGES.push({ message, line: lineAt(position) });
  };

  // a new value or key where a comma is missing
  const beforeValue = () => {
    if (last !== "value") {
      return;
    }
    // the comma right after the value, before the spaces
    out = out.replace(/(\s*)$/, ",$1");
    if (STACK.length) {
      change("_A_JSON_EDITOR_REPAIR_COMMA_ADDED_");
    } else if (!isRootArray) {
      isRootArray = true;
      change("_A_JSON_EDITOR_REPAIR_ROOT_ARRAY_");
    }
  };
  // "a": , or "a": } without a value
  const addMissingValue = () => {
    if (last === "colon") {
      out += "null";
      last = "value";
      change("_A_JSON_EDITOR_REPAIR_VALUE_ADDED_");
    }
  };

  const isSpace = char => char === " " || char === "\t" || char === "\n" || char === "\r";

  // the next char after spaces and comments
  const peek = from => {
    let position = from;
    for (;;) {
      while (position < TEXT.length && isSpace(TEXT[position])) {
        position++;
      }
      if (TEXT.startsWith("//", position)) {
        const END = TEXT.indexOf("\n", position);
        position = END === -1 ? TEXT.length : END;
      } else if (TEXT.startsWith("/*", position)) {
        const END = TEXT.indexOf("*/", position + 2);
        position = END === -1 ? TEXT.length : END + 2;
      } else {
        return TEXT[position];
      }
    }
  };

  const readString = () => {
    const QUOTE = TEXT[index];
    const CLOSE = { "\"": "\"", "'": "'", "“": "”", "‘": "’" }[QUOTE];
    if (QUOTE !== "\"") {
      change(QUOTE === "'" ? "_A_JSON_EDITOR_REPAIR_SINGLE_QUOTES_" : "_A_JSON_EDITOR_REPAIR_TYPOGRAPHIC_QUOTES_");
    }
    index++;
    let value = "\"";
    while (index < TEXT.length && TEXT[index] !== CLOSE) {
      const CHAR = TEXT[index];
      if (CHAR === "\\") {
        const NEXT = TEXT[index + 1];
        // \' is no escape in JSON
        value += NEXT === "'" ? "'" : `\\${ NEXT ?? "\\" }`;
        index += 2;
        continue;
      }
      if (CHAR === "\"") {
        value += "\\\"";
      } else if (CHAR === "\n") {
        value += "\\n";
        change("_A_JSON_EDITOR_REPAIR_NEWLINE_");
      } else if (CHAR === "\t") {
        value += "\\t";
      } else {
        value += CHAR;
      }
      index++;
    }
    if (index >= TEXT.length) {
      change("_A_JSON_EDITOR_REPAIR_STRING_CLOSED_");
    }
    index++;
    return `${ value }"`;
  };

  const CONSTANTS = {
    true: "true",
    True: "true",
    TRUE: "true",
    false: "false",
    False: "false",
    FALSE: "false",
    null: "null",
    None: "null",
    NULL: "null",
    undefined: "null",
    NaN: "null",
    Infinity: "null",
  };

  while (index < TEXT.length) {
    const CHAR = TEXT[index];
    if (isSpace(CHAR)) {
      out += CHAR;
      index++;
      continue;
    }
    if (TEXT.startsWith("//", index) || TEXT.startsWith("/*", index)) {
      const IS_LINE = TEXT.startsWith("//", index);
      const END = IS_LINE ? TEXT.indexOf("\n", index) : TEXT.indexOf("*/", index + 2);
      change("_A_JSON_EDITOR_REPAIR_COMMENT_");
      index = END === -1 ? TEXT.length : END + (IS_LINE ? 0 : 2);
      continue;
    }
    if (CHAR === "{" || CHAR === "[") {
      beforeValue();
      STACK.push(CHAR);
      out += CHAR;
      last = "open";
      index++;
      continue;
    }
    if (CHAR === "}" || CHAR === "]") {
      addMissingValue();
      if (!STACK.length) {
        change("_A_JSON_EDITOR_REPAIR_BRACKET_REMOVED_");
        index++;
        continue;
      }
      const EXPECTED = STACK[STACK.length - 1] === "{" ? "}" : "]";
      if (CHAR !== EXPECTED) {
        change("_A_JSON_EDITOR_REPAIR_BRACKET_FIXED_");
      }
      STACK.pop();
      out += EXPECTED;
      last = "value";
      index++;
      continue;
    }
    if (CHAR === ",") {
      addMissingValue();
      const NEXT = peek(index + 1);
      if (last === "comma" || last === "open" || NEXT === "}" || NEXT === "]" || NEXT === undefined) {
        change("_A_JSON_EDITOR_REPAIR_COMMA_REMOVED_");
      } else {
        out += ",";
        last = "comma";
      }
      index++;
      continue;
    }
    if (CHAR === ":") {
      out += ":";
      last = "colon";
      index++;
      continue;
    }
    if (CHAR === "\"" || CHAR === "'" || CHAR === "“" || CHAR === "‘") {
      beforeValue();
      out += readString();
      last = STACK[STACK.length - 1] === "{" && peek(index) === ":" && last !== "colon" ? "key" : "value";
      continue;
    }
    // a number: +1, .5, 5., -0.5e3
    const NUMBER = /^[+-]?(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?/.exec(TEXT.slice(index));
    if (NUMBER && /[\d.]/.test(CHAR === "+" || CHAR === "-" ? TEXT[index + 1] : CHAR)) {
      beforeValue();
      let number = NUMBER[0];
      if (number.startsWith("+")) {
        number = number.slice(1);
        change("_A_JSON_EDITOR_REPAIR_NUMBER_");
      }
      if (/^-?\./.test(number)) {
        number = number.replace(".", "0.");
        change("_A_JSON_EDITOR_REPAIR_NUMBER_");
      }
      if (/\.(?![\d])/.test(number)) {
        number = number.replace(/\.(?![\d])/, "");
        change("_A_JSON_EDITOR_REPAIR_NUMBER_");
      }
      out += number;
      last = "value";
      index += NUMBER[0].length;
      continue;
    }
    // a word: a key without quotes, a constant or a text without quotes
    const WORD = /^-?[A-Za-z_$][\w$-]*/.exec(TEXT.slice(index));
    if (WORD) {
      beforeValue();
      const VALUE = WORD[0];
      index += VALUE.length;
      const IS_KEY = STACK[STACK.length - 1] === "{" && last !== "colon" && peek(index) === ":";
      if (IS_KEY) {
        out += JSON.stringify(VALUE);
        change("_A_JSON_EDITOR_REPAIR_KEY_QUOTES_");
        last = "key";
      } else if (VALUE === "-Infinity" || Object.prototype.hasOwnProperty.call(CONSTANTS, VALUE)) {
        const RESULT = VALUE === "-Infinity" ? "null" : CONSTANTS[VALUE];
        if (RESULT !== VALUE) {
          change("_A_JSON_EDITOR_REPAIR_CONSTANT_");
        }
        out += RESULT;
        last = "value";
      } else {
        // a text without quotes up to the end of the value: hello world
        const REST = /^[^,:}\]\n"]*/.exec(TEXT.slice(index))[0].replace(/\s+$/, "");
        index += REST.length;
        out += JSON.stringify(`${ VALUE }${ REST }`);
        change("_A_JSON_EDITOR_REPAIR_TEXT_QUOTES_");
        last = "value";
      }
      continue;
    }
    // an unknown char: removed
    change("_A_JSON_EDITOR_REPAIR_CHAR_REMOVED_");
    index++;
  }
  addMissingValue();
  if (STACK.length) {
    change("_A_JSON_EDITOR_REPAIR_BRACKET_CLOSED_", TEXT.length);
    out = out.replace(/\s*$/, "");
    if (last === "comma") {
      out = out.replace(/,$/, "");
    }
    out += STACK.reverse().map(char => (char === "{" ? "}" : "]")).join("");
  }
  if (isRootArray) {
    out = `[${ out.trim() }]`;
  }
  const RESULT = parseJson(out);
  if (RESULT.error) {
    return { error: RESULT.error, text: out, changes: CHANGES };
  }
  return { text: out, value: RESULT.value, changes: CHANGES };
}
