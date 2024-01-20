import filterLink from "../filterLink";

describe("filterLink", () => {
  test("default behavior", () => {
    expect(filterLink("example.com")).toBe('<a href="https://example.com">example.com</a>');
    expect(filterLink("http://example.com")).toBe('<a href="http://example.com">http://example.com</a>');
  });

  test("with linkText", () => {
    expect(filterLink("example.com", { linkText: "Example" })).toBe('<a href="https://example.com">Example</a>');
  });

  test("with protocol", () => {
    expect(filterLink("example.com", { protocol: "http://" })).toBe('<a href="http://example.com">example.com</a>');
  });

  test("with target", () => {
    expect(filterLink("example.com", { target: "_blank" })).toBe('<a href="https://example.com" target="_blank">example.com</a>');
  });

  test("with linkClass", () => {
    expect(filterLink("example.com", { linkClass: "custom-class" })).toBe('<a href="https://example.com" class="custom-class">example.com</a>');
  });

  test("invalid URL", () => {
    expect(filterLink(null)).toBe('');
    expect(filterLink(undefined)).toBe('');
    expect(filterLink(123)).toBe('');
  });

  test("combined options", () => {
    expect(filterLink("example.com", { linkText: "Example", target: "_blank", linkClass: "custom-class" }))
      .toBe('<a href="https://example.com" target="_blank" class="custom-class">Example</a>');
  });
});
