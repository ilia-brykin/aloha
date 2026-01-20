import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  aLast,
} from "../utilsArray";

describe("aLast function", () => {
  it("should return the last element for a non-empty array", () => {
    const array = [1, 2, 3];
    const result = aLast(array);

    expect(result).toBe(3);
  });

  it("should return undefined for an empty array when defaultValue is not provided", () => {
    const result = aLast([]);

    expect(result).toBeUndefined();
  });

  it("should return the defaultValue for an empty array", () => {
    const result = aLast([], null);

    expect(result).toBeNull();
  });

  it("should return the defaultValue when array is not provided", () => {
    const result = aLast(undefined, "fallback");

    expect(result).toBe("fallback");
  });

  it("should return the last element even if it is falsy", () => {
    const result = aLast([1, 0], 10);

    expect(result).toBe(0);
  });

  it("should return the last element even if it is undefined", () => {
    const result = aLast([2, undefined], "fallback");

    expect(result).toBeUndefined();
  });

  it("should return the defaultValue when array is null", () => {
    const result = aLast(null, "fallback");

    expect(result).toBe("fallback");
  });
});
