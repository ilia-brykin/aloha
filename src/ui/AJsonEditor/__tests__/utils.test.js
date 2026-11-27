import {
  describe,
  expect,
  it,
} from "vitest";

import {
  convertType,
  getJsonType,
  parseInputValue,
} from "../utils/types";
import {
  findVariables,
  getSimilarName,
  getVariableQuery,
  getWholeVariable,
  resolveVariables,
  splitVariables,
} from "../utils/variables";
import {
  flattenRows,
  getAncestorPointers,
  getContainerPointers,
} from "../utils/flatten";
import {
  formatJson,
  isUnsafeNumber,
  minifyJson,
  parseJson,
} from "../utils/format";
import {
  getAt,
  getUniqueKey,
  insertAt,
  isAncestor,
  matchesPattern,
  moveSibling,
  normalizeTokens,
  parsePointer,
  removeAt,
  renameAt,
  setAt,
  toDotPath,
  toPointer,
} from "../utils/jsonPointer";
import {
  getSchemaAt,
  validateRules,
  validateSchema,
} from "../utils/validate";
import {
  repairJson,
} from "../utils/repair";

const DOC = {
  name: "Anna",
  "a/b": 1,
  tags: ["vue", "a11y"],
  address: { city: "Bonn", zip: "53111" },
};

describe("jsonPointer", () => {
  it("writes and reads pointers with escaped tokens (RFC 6901)", () => {
    expect(toPointer(["a/b", "x~y", 0])).toBe("/a~1b/x~0y/0");
    expect(parsePointer("/a~1b/x~0y/0")).toEqual(["a/b", "x~y", "0"]);
    expect(parsePointer("")).toEqual([]);
    expect(normalizeTokens(DOC, ["tags", "1"])).toEqual(["tags", 1]);
    expect(toDotPath(["users", 0, "name"], "root")).toBe("root.users[0].name");
  });

  it("gets and sets without changing the original", () => {
    expect(getAt(DOC, ["address", "city"])).toBe("Bonn");
    expect(getAt(DOC, ["missing", "x"])).toBeUndefined();
    const NEXT = setAt(DOC, ["address", "city"], "Köln");
    expect(NEXT.address.city).toBe("Köln");
    expect(DOC.address.city).toBe("Bonn");
    // untouched branches are shared
    expect(NEXT.tags).toBe(DOC.tags);
    expect(Object.keys(NEXT)).toEqual(Object.keys(DOC));
  });

  it("removes, inserts, renames and moves", () => {
    expect(removeAt(DOC, ["tags", 0]).tags).toEqual(["a11y"]);
    expect(Object.keys(removeAt(DOC, ["name"]))).not.toContain("name");
    expect(insertAt(DOC, ["tags"], { value: "x", index: 1 }).tags).toEqual(["vue", "x", "a11y"]);
    expect(insertAt(DOC, ["tags"], { value: "x" }).tags).toEqual(["vue", "a11y", "x"]);
    expect(Object.keys(insertAt(DOC, [], { key: "id", value: 1, afterKey: "name" }))).toEqual(["name", "id", "a/b", "tags", "address"]);
    expect(Object.keys(insertAt(DOC, [], { key: "id", value: 1, beforeKey: "name" }))[0]).toBe("id");
    expect(Object.keys(renameAt(DOC, ["name"], "firstName"))).toEqual(["firstName", "a/b", "tags", "address"]);
    expect(moveSibling(DOC, ["tags", 0], 1)).toEqual({ document: { ...DOC, tags: ["a11y", "vue"] }, tokens: ["tags", 1] });
    expect(Object.keys(moveSibling(DOC, ["tags"], -1).document)).toEqual(["name", "tags", "a/b", "address"]);
    expect(moveSibling(DOC, ["name"], -1).document).toBe(DOC);
  });

  it("knows ancestors, unique keys and patterns", () => {
    expect(isAncestor(["a"], ["a", "b"])).toBe(true);
    expect(isAncestor(["a", "b"], ["a", "b"])).toBe(false);
    expect(getUniqueKey({ key: 1, key_1: 2 })).toBe("key_2");
    expect(matchesPattern(["users", 3, "role"], ["users", "*", "role"])).toBe(true);
    expect(matchesPattern(["users", 3], ["users", "*", "role"])).toBe(false);
  });
});

describe("types", () => {
  it("knows the JSON types and converts between them", () => {
    expect(["a", 1, true, null, {}, []].map(getJsonType)).toEqual(["string", "number", "boolean", "null", "object", "array"]);
    expect(convertType("42", "number")).toBe(42);
    expect(convertType("abc", "number")).toBe(0);
    expect(convertType(42, "string")).toBe("42");
    expect(convertType("true", "boolean")).toBe(true);
    expect(convertType({ a: 1, b: 2 }, "array")).toEqual([1, 2]);
    expect(convertType(["x"], "object")).toEqual({ 0: "x" });
    expect(convertType("x", "array")).toEqual(["x"]);
    expect(convertType(null, "object")).toEqual({});
    expect(parseInputValue("1,5", "number")).toEqual({ value: 1.5 });
    expect(parseInputValue("x", "number")).toEqual({ error: "_A_JSON_EDITOR_ERROR_NUMBER_" });
    expect(parseInputValue("12345678901234567890", "number")).toEqual({ value: 12345678901234567000 });
    expect(parseInputValue("12345678901234567890", "number", { bigNumbers: "warn" })).toEqual({ error: "_A_JSON_EDITOR_ERROR_NUMBER_PRECISION_" });
    expect(parseInputValue("12345678901234567890", "number", { bigNumbers: "bigint" })).toEqual({ value: 12345678901234567890n });
    expect(parseInputValue("12345678901234567890", "number", { bigNumbers: "string" })).toEqual({ value: "12345678901234567890" });
    expect(parseInputValue("42", "number", { bigNumbers: "warn" })).toEqual({ value: 42 });
  });
});

describe("flatten", () => {
  it("lists the root and the children of the expanded nodes with level, setsize and posinset", () => {
    const ROWS = flattenRows(DOC, { expanded: new Set(["", "/tags"]) });
    expect(ROWS.map(row => row.pointer)).toEqual(["", "/name", "/a~1b", "/tags", "/tags/0", "/tags/1", "/address"]);
    const TAG = ROWS.find(row => row.pointer === "/tags/1");
    expect(TAG).toMatchObject({ level: 3, posinset: 2, setsize: 2, key: 1, isIndex: true, type: "string" });
    expect(ROWS.find(row => row.pointer === "/address")).toMatchObject({ isContainer: true, isExpanded: false, childCount: 2 });
  });

  it("filters, hides and pages big arrays", () => {
    expect(flattenRows(DOC, { expanded: new Set([""]), filter: new Set(["", "/name"]) }).map(row => row.pointer)).toEqual(["", "/name"]);
    expect(flattenRows(DOC, { expanded: new Set([""]), hiddenPaths: ["/tags"] }).map(row => row.pointer)).not.toContain("/tags");
    const BIG = { list: Array.from({ length: 5 }, (_, index) => index) };
    const ROWS = flattenRows(BIG, { expanded: new Set(["", "/list"]), pageSize: 2 });
    expect(ROWS.at(-1)).toMatchObject({ isMore: true, rest: 3, parentPointer: "/list" });
    expect(flattenRows(BIG, { expanded: new Set(["", "/list"]), pageSize: 2, pageLimits: { "/list": 4 } }).at(-1).rest).toBe(1);
  });

  it("finds the containers up to a level and the ancestors", () => {
    expect(getContainerPointers(DOC)).toEqual(["", "/tags", "/address"]);
    expect(getContainerPointers(DOC, 1)).toEqual([""]);
    expect(getAncestorPointers(["address", "city"])).toEqual(["", "/address"]);
  });
});

describe("variables", () => {
  it("finds, splits and recognises whole variables", () => {
    expect(findVariables("Hi {{ user.name }} and {{x}}").map(item => item.name)).toEqual(["user.name", "x"]);
    expect(getWholeVariable("{{ order.total }}")).toBe("order.total");
    expect(getWholeVariable("Total {{ order.total }}")).toBeNull();
    expect(splitVariables("Hi {{ user.name }}!")).toEqual([{ text: "Hi " }, { variable: "user.name", raw: "{{ user.name }}" }, { text: "!" }]);
    expect(findVariables("Hi $(user)", { open: "$(", close: ")" })[0].name).toBe("user");
  });

  it("resolves variables, a whole variable keeps its type", () => {
    const VALUES = { user: { name: "Anna" }, "order.total": 12.5 };
    expect(resolveVariables({ a: "Hi {{ user.name }}", b: "{{ order.total }}", c: ["{{ unknown }}"] }, VALUES))
      .toEqual({ a: "Hi Anna", b: 12.5, c: ["{{ unknown }}"] });
  });

  it("knows the typed variable before the caret and similar names", () => {
    expect(getVariableQuery("Hi {{ us", 8)).toEqual({ query: "us", start: 3, end: 8 });
    expect(getVariableQuery("Hi {{ user }} x", 15)).toBeNull();
    expect(getSimilarName("user.nmae", ["user.name", "order.total"])).toBe("user.name");
    expect(getSimilarName("abc", ["user.name"])).toBeNull();
  });
});

describe("format", () => {
  const VALUE = { b: [1, 2], a: { c: "ä/" }, e: {} };

  it("formats with indent, sort, inline arrays and empty containers", () => {
    expect(formatJson(VALUE)).toBe(JSON.stringify(VALUE, null, 2));
    expect(formatJson(VALUE, { indent: 4 })).toBe(JSON.stringify(VALUE, null, 4));
    expect(formatJson(VALUE, { indent: "tab" })).toBe(JSON.stringify(VALUE, null, "\t"));
    expect(formatJson(VALUE, { sortKeys: true }).indexOf("\"a\"")).toBeLessThan(formatJson(VALUE, { sortKeys: true }).indexOf("\"b\""));
    expect(formatJson(VALUE, { inlineArrays: true })).toContain("\"b\": [1, 2]");
    expect(formatJson(VALUE, { emptyContainers: "{ }" })).toContain("\"e\": { }");
    expect(formatJson({ a: 1 }, { inlineObjects: true })).toBe("{ \"a\": 1 }");
  });

  it("escapes, ends lines and minifies", () => {
    expect(formatJson(VALUE, { escapeUnicode: true })).toContain("\\u00e4");
    expect(formatJson(VALUE, { escapeSlashes: true })).toContain("\\/");
    expect(formatJson({ a: 1 }, { lineEnding: "crlf" })).toBe("{\r\n  \"a\": 1\r\n}");
    expect(formatJson({ a: 1 }, { trailingNewline: true }).endsWith("}\n")).toBe(true);
    expect(formatJson({ a: 1 }, { spaceAfterColon: false })).toBe("{\n  \"a\":1\n}");
    expect(minifyJson(VALUE)).toBe(JSON.stringify(VALUE));
    expect(formatJson({ a: 1.5 }, { numberFormat: value => value.toFixed(2) })).toContain("1.50");
  });

  it("parses with line and column of an error", () => {
    expect(parseJson("{\"a\": 1}")).toEqual({ value: { a: 1 }, unsafe: [] });
    const RESULT = parseJson("{\n  \"a\": 1,\n  \"b\": x\n}");
    expect(RESULT.error.line).toBe(3);
    expect(RESULT.error.column).toBeGreaterThan(1);
  });
});

describe("validate", () => {
  const DATA = { name: "A", age: 200, tags: ["x", "x"], users: [{ role: "admin" }, { role: "guest" }], settings: { theme: 1, foo: 2 } };

  it("checks rules by path with *", () => {
    const ERRORS = validateRules(DATA, {
      "/name": { type: "string", minLength: 2 },
      "/age": { type: "number", max: 150 },
      "/tags": { uniqueItems: true },
      "/users/*/role": { enum: ["admin", "user"] },
      "/email": { required: true },
      "/settings": { additionalKeys: false, keys: ["theme"] },
      "/settings/theme": { type: "string", level: "warning" },
    });
    const BY_POINTER = ERRORS.map(item => `${ item.pointer } ${ item.message } ${ item.level }`);
    expect(BY_POINTER).toEqual([
      "/name _A_JSON_EDITOR_ERROR_MIN_LENGTH_ error",
      "/age _A_JSON_EDITOR_ERROR_MAX_ error",
      "/tags _A_JSON_EDITOR_ERROR_UNIQUE_ error",
      "/users/1/role _A_JSON_EDITOR_ERROR_ENUM_ error",
      " _A_JSON_EDITOR_ERROR_REQUIRED_KEY_ error",
      "/settings/foo _A_JSON_EDITOR_ERROR_KEY_NOT_ALLOWED_ error",
      "/settings/theme _A_JSON_EDITOR_ERROR_TYPE_ warning",
    ]);
  });

  it("checks a subset of JSON Schema", () => {
    const SCHEMA = {
      type: "object",
      required: ["name", "email"],
      additionalProperties: false,
      properties: {
        name: { type: "string" },
        age: { type: "integer", minimum: 0 },
        tags: { type: "array", items: { type: "string" }, maxItems: 1 },
        users: { type: "array" },
        settings: { type: "object" },
      },
    };
    const ERRORS = validateSchema(DATA, SCHEMA).map(item => `${ item.pointer } ${ item.message }`);
    expect(ERRORS).toContain(" _A_JSON_EDITOR_ERROR_REQUIRED_KEY_");
    expect(ERRORS).toContain("/tags _A_JSON_EDITOR_ERROR_MAX_ITEMS_");
    expect(validateSchema({ a: 1 }, { type: "object", properties: { a: { type: "string" } } })[0].pointer).toBe("/a");
    expect(getSchemaAt(SCHEMA, ["tags", 0])).toEqual({ type: "string" });
  });
});

describe("repairJson", () => {
  const messages = result => result.changes.map(item => item.message.replace("_A_JSON_EDITOR_REPAIR_", ""));

  it("repairs keys, quotes, commas and constants", () => {
    const RESULT = repairJson("{name: 'Anna', age: 30, active: True, note: None,}");
    expect(RESULT.value).toEqual({ name: "Anna", age: 30, active: true, note: null });
    expect(messages(RESULT)).toEqual(expect.arrayContaining(["KEY_QUOTES_", "SINGLE_QUOTES_", "CONSTANT_", "COMMA_REMOVED_"]));
  });

  it("removes comments and adds missing commas with the line", () => {
    const RESULT = repairJson("// settings\n{\n  \"a\": 1\n  \"b\": [1 2], /* old */\n}");
    expect(RESULT.value).toEqual({ a: 1, b: [1, 2] });
    expect(RESULT.changes.filter(item => item.message === "_A_JSON_EDITOR_REPAIR_COMMA_ADDED_").map(item => item.line)).toEqual([4, 4]);
    expect(messages(RESULT).filter(item => item === "COMMENT_")).toHaveLength(2);
  });

  it("closes strings and brackets and fixes wrong brackets", () => {
    expect(repairJson("{\"a\": {\"b\": \"text").value).toEqual({ a: { b: "text" } });
    expect(repairJson("{\"a\": [1, 2}").value).toEqual({ a: [1, 2] });
    expect(repairJson("[1, 2]]").value).toEqual([1, 2]);
    expect(repairJson("{\"a\": 1, \"b\":").value).toEqual({ a: 1, b: null });
  });

  it("repairs numbers, typographic quotes, newlines and texts without quotes", () => {
    expect(repairJson("{\"a\": +1, \"b\": .5, \"c\": 5., \"d\": -Infinity}").value).toEqual({ a: 1, b: 0.5, c: 5, d: null });
    expect(repairJson("{“a”: ‘b’}").value).toEqual({ a: "b" });
    expect(repairJson("{\"text\": \"line\nnext\"}").value).toEqual({ text: "line\nnext" });
    expect(repairJson("{\"a\": hello world}").value).toEqual({ a: "hello world" });
    expect(repairJson("{\"a\": 'it\\'s \"ok\"'}").value).toEqual({ a: "it's \"ok\"" });
  });

  it("puts several values at the root into an array", () => {
    const RESULT = repairJson("{\"a\": 1}\n{\"a\": 2}");
    expect(RESULT.value).toEqual([{ a: 1 }, { a: 2 }]);
    expect(messages(RESULT)).toEqual(["ROOT_ARRAY_"]);
  });

  it("changes nothing in valid JSON and gives an error when it can not repair", () => {
    expect(repairJson("{\"a\": [1, \"x\"]}").changes).toEqual([]);
    expect(repairJson("{\"a\" 1}").error).toBeTruthy();
  });
});

describe("big numbers", () => {
  const TEXT = "{\"id\": 12345678901234567890, \"list\": [1, 9007199254740993, 0.1, 0.123456789012345678901], \"safe\": 9007199254740992}";

  it("finds numbers that are not exact in JavaScript", () => {
    expect(isUnsafeNumber("12345678901234567890")).toBe(true);
    expect(isUnsafeNumber("9007199254740993")).toBe(true);
    expect(isUnsafeNumber("9007199254740992")).toBe(false);
    expect(isUnsafeNumber("1.10")).toBe(false);
    expect(isUnsafeNumber("-0.0")).toBe(false);
    expect(isUnsafeNumber("1e400")).toBe(true);
  });

  it("warn: the numbers stay and their pointers are found", () => {
    const RESULT = parseJson(TEXT, { bigNumbers: "warn" });
    expect(RESULT.unsafe.map(item => item.pointer)).toEqual(["/id", "/list/1", "/list/3"]);
    expect(typeof RESULT.value.id).toBe("number");
    expect(parseJson("12345678901234567890", { bigNumbers: "warn" }).unsafe).toEqual([{ pointer: "" }]);
  });

  it("string and bigint keep the digits", () => {
    const STRING = parseJson(TEXT, { bigNumbers: "string" });
    expect(STRING.value.id).toBe("12345678901234567890");
    expect(STRING.value.list).toEqual([1, "9007199254740993", 0.1, "0.123456789012345678901"]);
    expect(STRING.unsafe).toEqual([]);
    const BIGINT = parseJson(TEXT, { bigNumbers: "bigint" });
    expect(BIGINT.value.id).toBe(12345678901234567890n);
    expect(BIGINT.unsafe.map(item => item.pointer)).toEqual(["/list/3"]);
    expect(formatJson(BIGINT.value, { minify: true })).toBe("{\"id\":12345678901234567890,\"list\":[1,9007199254740993,0.1,0.12345678901234568],\"safe\":9007199254740992}");
  });

  it("without bigNumbers JSON.parse as it is", () => {
    expect(parseJson(TEXT).unsafe).toEqual([]);
    expect(getJsonType(1n)).toBe("number");
  });
});
