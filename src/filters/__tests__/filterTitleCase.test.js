import {
  describe,
  expect,
  it,
} from "vitest";

import filterTitleCase from "../filterTitleCase.js";

describe("filterTitleCase", () => {
  it("default", () => {
    expect(filterTitleCase("max mustermann")).toBe("Max Mustermann");
    expect(filterTitleCase("jean-luc picard")).toBe("Jean-Luc Picard");
    expect(filterTitleCase("über  äpfel")).toBe("Über  Äpfel");
    expect(filterTitleCase("иван петров")).toBe("Иван Петров");
  });

  it("keeps the other letters as they are", () => {
    expect(filterTitleCase("the NASA report")).toBe("The NASA Report");
    expect(filterTitleCase("mcDonald")).toBe("McDonald");
  });

  it("does not change numbers", () => {
    expect(filterTitleCase("3 kleine schweinchen")).toBe("3 Kleine Schweinchen");
  });

  it("empty values", () => {
    expect(filterTitleCase(undefined)).toBe("");
    expect(filterTitleCase(null)).toBe("");
    expect(filterTitleCase("")).toBe("");
  });
});
