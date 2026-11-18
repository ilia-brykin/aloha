import {
  describe,
  expect,
  it,
} from "vitest";

import filterTruncateMiddle from "../filterTruncateMiddle.js";

describe("filterTruncateMiddle", () => {
  it("default", () => {
    expect(filterTruncateMiddle("3f9a1c7e-42b0-4d1e-9c55")).toBe("3f9a1c…9c55");
    expect(filterTruncateMiddle("short")).toBe("short");
    expect(filterTruncateMiddle("12345678901")).toBe("12345678901");
    expect(filterTruncateMiddle("123456789012")).toBe("123456…9012");
    expect(filterTruncateMiddle(1234567890123)).toBe("123456…0123");
  });

  it("start, end and separator", () => {
    expect(filterTruncateMiddle("DE89370400440532013000", { start: 4, end: 4, separator: " … " })).toBe("DE89 … 3000");
    expect(filterTruncateMiddle("/home/user/projects/aloha/src/index.js", { start: 5, end: 8, separator: "/…/" })).toBe("/home/…/index.js");
    expect(filterTruncateMiddle("abcdefghijklmnop", { start: 3, end: 0 })).toBe("abc…");
  });

  it("keeps characters made of two code units together", () => {
    expect(filterTruncateMiddle("😀😀😀😀😀😀😀😀😀😀😀😀", { start: 2, end: 2 })).toBe("😀😀…😀😀");
  });

  it("empty values", () => {
    expect(filterTruncateMiddle(undefined)).toBe("");
    expect(filterTruncateMiddle(null)).toBe("");
    expect(filterTruncateMiddle("")).toBe("");
  });
});
