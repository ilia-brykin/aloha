const e=`import filterBoolean from "../filterBoolean";

describe("filterBoolean", () => {
  test("value=true", () => {
    expect(filterBoolean(true)).toBe("_YES_");
    expect(filterBoolean(123)).toBe("_YES_");
    expect(filterBoolean("1")).toBe("_YES_");
    expect(filterBoolean(true, { trueValue: "yes" })).toBe("yes");
  });

  test("value=false", () => {
    expect(filterBoolean(false)).toBe("_NO_");
    expect(filterBoolean(0)).toBe("_NO_");
    expect(filterBoolean("")).toBe("_NO_");
    expect(filterBoolean(false, { falseValue: "no" })).toBe("no");
  });

  test("useNil=true", () => {
    expect(filterBoolean(undefined, { useNil: true })).toBe("");
    expect(filterBoolean(null, { useNil: true })).toBe("");
    expect(filterBoolean(false, { useNil: true })).toBe("_NO_");
    expect(filterBoolean(true, { useNil: true })).toBe("_YES_");
  });

  test("useNil=false", () => {
    expect(filterBoolean(undefined, { useNil: false })).toBe("_NO_");
    expect(filterBoolean(null, { useNil: false })).toBe("_NO_");
    expect(filterBoolean(false, { useNil: false })).toBe("_NO_");
    expect(filterBoolean(true, { useNil: false })).toBe("_YES_");
  });
});

`;export{e as f};
