import {
  describe,
  expect,
  it,
} from "@jest/globals";

import filterLink from "../filterLink";

describe("filterLink", () => {
  it("default behavior", () => {
    expect(filterLink("example.com")).toBe("<a href=\"https://example.com\">example.com</a>");
    expect(filterLink("http://example.com")).toBe("<a href=\"http://example.com\">http://example.com</a>");
  });

  it("with linkText", () => {
    expect(filterLink("example.com", { linkText: "Example" })).toBe("<a href=\"https://example.com\">Example</a>");
  });

  it("with protocol", () => {
    expect(filterLink("example.com", { protocol: "http://" })).toBe("<a href=\"http://example.com\">example.com</a>");
  });

  it("with target", () => {
    expect(filterLink("example.com", { target: "_blank" })).toBe("<a href=\"https://example.com\" target=\"_blank\">example.com</a>");
  });

  it("with linkClass", () => {
    expect(filterLink("example.com", { linkClass: "custom-class" })).toBe("<a href=\"https://example.com\" class=\"custom-class\">example.com</a>");
  });

  it("invalid URL", () => {
    expect(filterLink(null)).toBe("");
    expect(filterLink(undefined)).toBe("");
    expect(filterLink(123)).toBe("");
  });

  it("combined options", () => {
    expect(filterLink("example.com", { linkText: "Example", target: "_blank", linkClass: "custom-class" }))
      .toBe("<a href=\"https://example.com\" target=\"_blank\" class=\"custom-class\">Example</a>");
  });
});
