import filterLimitTo from "../filterLimitTo";

describe("filterLimitTo", () => {
  test("text exactly at limit", () => {
    expect(filterLimitTo("Lorem ipsum dolor sit amet, cons", { limit: 30 })).toBe("Lorem ipsum dolor sit amet, co...");
  });

  test("long text exceeding limit", () => {
    expect(filterLimitTo("Lorem ipsum dolor sit amet, consectetur adipiscing elit", { limit: 30 })).toBe("Lorem ipsum dolor sit amet, co...");
  });

  test("text ending with a period", () => {
    expect(filterLimitTo("Lorem ipsum dolor sit amet.", { limit: 30 })).toBe("Lorem ipsum dolor sit amet.");
  });

  test("text with multiple periods at the end", () => {
    expect(filterLimitTo("Lorem ipsum dolor sit amet...", { limit: 30 })).toBe("Lorem ipsum dolor sit amet...");
  });

  test("numeric value treated as text", () => {
    expect(filterLimitTo(1234567890, { limit: 10 })).toBe("1234567890");
  });

  test("null value", () => {
    expect(filterLimitTo(null, { limit: 30 })).toBe("");
  });

  test("long text with maxThreeDots false", () => {
    expect(filterLimitTo("Lorem ipsum dolor sit amet, consectetur adipiscing elit", { limit: 30, maxThreeDots: false })).toBe("Lorem ipsum dolor sit amet, co...");
  });
});
