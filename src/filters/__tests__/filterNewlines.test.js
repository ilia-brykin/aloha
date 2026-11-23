import {
  describe,
  expect,
  it,
} from "vitest";

import filterNewlines from "../filterNewlines.js";

describe("filterNewlines", () => {
  it("default", () => {
    expect(filterNewlines("Line 1\nLine 2")).toBe("Line 1<br>Line 2");
    expect(filterNewlines("No line breaks")).toBe("No line breaks");
    expect(filterNewlines(42)).toBe("42");
  });

  it("all kinds of line breaks", () => {
    expect(filterNewlines("Windows\r\nMac\rUnix\nEnd")).toBe("Windows<br>Mac<br>Unix<br>End");
    expect(filterNewlines("Paragraph 1\n\nParagraph 2")).toBe("Paragraph 1<br><br>Paragraph 2");
  });

  it("escapes HTML", () => {
    expect(filterNewlines("<script>alert(1)</script>\nTom & Jerry")).toBe("&lt;script&gt;alert(1)&lt;/script&gt;<br>Tom &amp; Jerry");
    expect(filterNewlines("<img src=x onerror=\"alert('x')\">")).toBe("&lt;img src=x onerror=&quot;alert(&#39;x&#39;)&quot;&gt;");
  });

  it("empty values", () => {
    expect(filterNewlines(undefined)).toBe("");
    expect(filterNewlines(null)).toBe("");
    expect(filterNewlines("")).toBe("");
  });
});
