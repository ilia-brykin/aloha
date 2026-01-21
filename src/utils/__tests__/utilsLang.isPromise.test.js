import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isPromise,
} from "../utilsLang";

describe("isPromise function", () => {
  it("should return true for Promise instances", () => {
    const pending = new Promise(() => {});
    const resolved = Promise.resolve(123);
    const rejected = Promise.reject(new Error("fail"));
    const chained = Promise.resolve().then(() => 1);
    const asyncResult = (async() => 1)();

    rejected.catch(() => {});

    expect(isPromise(pending)).toBe(true);
    expect(isPromise(resolved)).toBe(true);
    expect(isPromise(rejected)).toBe(true);
    expect(isPromise(chained)).toBe(true);
    expect(isPromise(asyncResult)).toBe(true);
  });

  it("should return true for promise-like objects", () => {
    const thenable = {
      then: () => {},
      catch: () => {},
    };
    const withFinally = {
      then: () => {},
      catch: () => {},
      finally: () => {},
    };

    expect(isPromise(thenable)).toBe(true);
    expect(isPromise(withFinally)).toBe(true);
  });

  it("should return false for non-promise types", () => {
    const fn = function example() {

    };
    const arrow = () => {};
    class Example {

    }

    expect(isPromise([])).toBe(false);
    expect(isPromise([1, 2, 3])).toBe(false);
    expect(isPromise({})).toBe(false);
    expect(isPromise(fn)).toBe(false);
    expect(isPromise(arrow)).toBe(false);
    expect(isPromise(Example)).toBe(false);
    expect(isPromise(0)).toBe(false);
    expect(isPromise(1)).toBe(false);
    expect(isPromise(NaN)).toBe(false);
    expect(isPromise(Infinity)).toBe(false);
    expect(isPromise(true)).toBe(false);
    expect(isPromise(false)).toBe(false);
    expect(isPromise(null)).toBe(false);
    expect(isPromise(undefined)).toBe(false);
    expect(isPromise("")).toBe(false);
    expect(isPromise("test")).toBe(false);
    expect(isPromise(new Date())).toBe(false);
    expect(isPromise(/test/)).toBe(false);
    expect(isPromise(Symbol("x"))).toBe(false);
    expect(isPromise(1n)).toBe(false);
    expect(isPromise(new Map())).toBe(false);
    expect(isPromise(new Set())).toBe(false);
    expect(isPromise(new Error("oops"))).toBe(false);
  });

  it("should return false for incomplete thenables", () => {
    const thenOnly = {
      then: () => {},
    };
    const catchOnly = {
      catch: () => {},
    };
    const invalidThen = {
      then: "not-fn",
      catch: () => {},
    };

    expect(isPromise(thenOnly)).toBe(false);
    expect(isPromise(catchOnly)).toBe(false);
    expect(isPromise(invalidThen)).toBe(false);
  });
});
