import {
  describe,
  expect,
  it,
} from "vitest";

import filterStripHtml from "../filterStripHtml.js";

describe("filterStripHtml", () => {
  it("default", () => {
    expect(filterStripHtml("<p>Hello <strong>World</strong></p>")).toBe("Hello World");
    expect(filterStripHtml("No tags")).toBe("No tags");
    expect(filterStripHtml(42)).toBe("42");
  });

  it("decodes entities", () => {
    expect(filterStripHtml("Tom &amp; Jerry &lt;3")).toBe("Tom & Jerry <3");
  });

  it("removes script and style with their contents", () => {
    expect(filterStripHtml("<script>alert(1)</script>Hi<style>p { color: red; }</style>")).toBe("Hi");
    expect(filterStripHtml("<img src=x onerror=alert(1)>Text")).toBe("Text");
  });

  it("empty values", () => {
    expect(filterStripHtml(undefined)).toBe("");
    expect(filterStripHtml(null)).toBe("");
    expect(filterStripHtml("")).toBe("");
  });
});
