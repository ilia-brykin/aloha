import filterLimitTo from "../filterLimitTo";

describe("filterLimitTo", () => {
  test("limit - shorter text", () => {
    expect(filterLimitTo("Lorem ipsum", { limit: 20 })).toBe("Lorem ipsum");
  });

  test("limit - longer text", () => {
    expect(filterLimitTo("Lorem ipsum dolor sit amet", { limit: 10 })).toBe("Lorem ipsu...");
  });

  test("maxThreeDots - true with text ending in dot", () => {
    expect(filterLimitTo("Lorem ipsum.", { limit: 10, maxThreeDots: true })).toBe("Lorem ipsu...");
  });

  test("maxThreeDots - false with text ending in dot", () => {
    expect(filterLimitTo("Lorem ipsum.", { limit: 10, maxThreeDots: false })).toBe("Lorem ipsu...");
  });

  test("maxThreeDots - true with multiple ending dots", () => {
    expect(filterLimitTo("Lorem ipsum...", { limit: 10, maxThreeDots: true })).toBe("Lorem ipsu...");
  });

  test("maxThreeDots - false with multiple ending dots", () => {
    expect(filterLimitTo("Lorem ipsum...", { limit: 10, maxThreeDots: false })).toBe("Lorem ipsu...");
  });

  test("numeric input", () => {
    expect(filterLimitTo(1234567890, { limit: 5 })).toBe("12345...");
  });

  test("null input", () => {
    expect(filterLimitTo(null)).toBe("");
  });

  test("undefined input", () => {
    expect(filterLimitTo(undefined)).toBe("");
  });

  test("no options provided", () => {
    expect(filterLimitTo("Default lorem ipsum")).toBe("Default lorem ipsum");
  });

  test("empty string input", () => {
    expect(filterLimitTo("", { limit: 5 })).toBe("");
  });
});
