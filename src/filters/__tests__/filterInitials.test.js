import {
  describe,
  expect,
  it,
} from "vitest";

import filterInitials from "../filterInitials.js";

describe("filterInitials", () => {
  it("default", () => {
    expect(filterInitials("Ilia Brykin")).toBe("IB");
    expect(filterInitials("anna maria schmidt")).toBe("AS");
    expect(filterInitials("Anna-Lena Schmidt")).toBe("AS");
    expect(filterInitials("  Max  ")).toBe("M");
    expect(filterInitials("Ölçer Ünal")).toBe("ÖÜ");
    expect(filterInitials("Иван Петров")).toBe("ИП");
    expect(filterInitials("(Max) Mustermann")).toBe("MM");
  });

  it("limit", () => {
    expect(filterInitials("Anna Maria Schmidt", { limit: 3 })).toBe("AMS");
    expect(filterInitials("Anna Maria Schmidt", { limit: 1 })).toBe("A");
    expect(filterInitials("Anna Maria Schmidt", { limit: 0 })).toBe("");
  });

  it("isUppercase", () => {
    expect(filterInitials("anna schmidt", { isUppercase: false })).toBe("as");
  });

  it("empty values", () => {
    expect(filterInitials(undefined)).toBe("");
    expect(filterInitials(null)).toBe("");
    expect(filterInitials("")).toBe("");
    expect(filterInitials(" - ")).toBe("");
  });
});
