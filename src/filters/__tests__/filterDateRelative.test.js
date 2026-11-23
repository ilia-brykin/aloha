import {
  afterEach,
  describe,
  expect,
  it,
} from "vitest";

import {
  setLanguage,
} from "../../ATranslation/compositionAPI/ATranslationAPI";

import filterDateRelative from "../filterDateRelative.js";

const NOW = "2026-03-10T12:00:00";

describe("filterDateRelative", () => {
  afterEach(() => {
    setLanguage("de");
  });

  it("default (de)", () => {
    expect(filterDateRelative("2026-03-10T11:55:00", { now: NOW })).toBe("vor 5 Minuten");
    expect(filterDateRelative("2026-03-10T12:00:30", { now: NOW })).toBe("in 30 Sekunden");
    expect(filterDateRelative("2026-03-10T09:00:00", { now: NOW })).toBe("vor 3 Stunden");
    expect(filterDateRelative("2026-03-12T12:00:00", { now: NOW })).toBe("übermorgen");
    expect(filterDateRelative("2026-03-09T12:00:00", { now: NOW })).toBe("gestern");
    expect(filterDateRelative("2026-02-24T12:00:00", { now: NOW })).toBe("vor 2 Wochen");
    expect(filterDateRelative("2025-12-10T12:00:00", { now: NOW })).toBe("vor 3 Monaten");
    expect(filterDateRelative("2028-03-10T12:00:00", { now: NOW })).toBe("in 2 Jahren");
    expect(filterDateRelative(NOW, { now: NOW })).toBe("jetzt");
  });

  it("numeric", () => {
    expect(filterDateRelative("2026-03-09T12:00:00", { now: NOW, numeric: "always" })).toBe("vor 1 Tag");
    expect(filterDateRelative("2026-03-11T12:00:00", { now: NOW, numeric: "always" })).toBe("in 1 Tag");
  });

  it("uses the current language", () => {
    setLanguage("en");
    expect(filterDateRelative("2026-03-10T11:55:00", { now: NOW })).toBe("5 minutes ago");
    expect(filterDateRelative("2026-03-11T12:00:00", { now: NOW })).toBe("tomorrow");
  });

  it("Date objects", () => {
    expect(filterDateRelative(new Date(2026, 2, 10, 11, 0, 0), { now: new Date(2026, 2, 10, 12, 0, 0) })).toBe("vor 1 Stunde");
  });

  it("invalid and empty values", () => {
    expect(filterDateRelative("Aloha", { now: NOW })).toBe("Aloha");
    expect(filterDateRelative(undefined)).toBe("");
    expect(filterDateRelative(null)).toBe("");
    expect(filterDateRelative("")).toBe("");
  });
});
