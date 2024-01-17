import filterFileSize from "../filterFileSize.js";

describe("filterFileSize", () => {
  test("default", () => {
    expect(filterFileSize(1024)).toBe("1,00 _A_FILE_SIZE_KB_");
    expect(filterFileSize(0)).toBe("0,00 _A_FILE_SIZE_KB_");
    expect(filterFileSize(500)).toBe("0,49 _A_FILE_SIZE_KB_");
    expect(filterFileSize(504547643)).toBe("492.722,31 _A_FILE_SIZE_KB_");
  });

  test("units", () => {
    expect(filterFileSize(1048576, { units: "mb" })).toBe("1,00 _A_FILE_SIZE_MB_");
    expect(filterFileSize(0, { units: "mb" })).toBe("0,00 _A_FILE_SIZE_MB_");
    expect(filterFileSize(9226889999, { units: "gb" })).toBe("8,59 _A_FILE_SIZE_GB_");
    expect(filterFileSize(1024, { units: "" })).toBe("1,00 _A_FILE_SIZE_KB_");
    expect(filterFileSize(0, { units: "" })).toBe("0,00 _A_FILE_SIZE_B_");
  });

  test("sourceUnits", () => {
    expect(filterFileSize(1, { units: "mb", sourceUnits: "mb" })).toBe("1,00 _A_FILE_SIZE_MB_");
    expect(filterFileSize(1, { units: "kb", sourceUnits: "gb" })).toBe("1.048.576,00 _A_FILE_SIZE_KB_");
    expect(filterFileSize(0, { sourceUnits: "mb" })).toBe("0,00 _A_FILE_SIZE_KB_");
    expect(filterFileSize(1024, { sourceUnits: "b" })).toBe("1,00 _A_FILE_SIZE_KB_");
    expect(filterFileSize(12, { units: "tb", sourceUnits: "pb" })).toBe("12.288,00 _A_FILE_SIZE_TB_");
  });

  test("digits", () => {
    expect(filterFileSize(1024, { digits: 0 })).toBe("1 _A_FILE_SIZE_KB_");
    expect(filterFileSize(500, { digits: 1 })).toBe("0,5 _A_FILE_SIZE_KB_");
  });

  test("combined", () => {
    expect(filterFileSize(133889, { units: "tb", sourceUnits: "mb", digits: 3 })).toBe("0,128 _A_FILE_SIZE_TB_");
  });

  test("value (String)", () => {
    expect(filterFileSize("1024.1")).toBe("1,00 _A_FILE_SIZE_KB_");
  });
});
