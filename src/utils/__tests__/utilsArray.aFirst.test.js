import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  aFirst,
} from "../utilsArray";

describe("aFirst function", () => {
  it("should return the first element for a non-empty array", () => {
    const array = [1, 2, 3];
    const result = aFirst(array);

    expect(result).toBe(1);
  });

  it("should return undefined for an empty array when defaultValue is not provided", () => {
    const result = aFirst([]);

    expect(result).toBeUndefined();
  });

  it("should return the defaultValue for an empty array", () => {
    const result = aFirst([], 0);

    expect(result).toBe(0);
  });

  it("should return the defaultValue when array is not provided", () => {
    const result = aFirst(undefined, "fallback");

    expect(result).toBe("fallback");
  });

  it("should return the first element even if it is falsy", () => {
    const result = aFirst([0, 1], 10);

    expect(result).toBe(0);
  });

  it("should return the first element even if it is undefined", () => {
    const result = aFirst([undefined, 2], "fallback");

    expect(result).toBeUndefined();
  });

  it("should return the defaultValue when array is null", () => {
    const result = aFirst(null, "fallback");

    expect(result).toBe("fallback");
  });
});
