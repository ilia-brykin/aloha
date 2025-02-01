import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  getUrlParams,
} from "../AHttpAPI";

describe("getUrlParams", () => {
  it("simple", () => {
    const URL = "x=false&y=100&z=aloha";

    expect(getUrlParams({ url: URL })).toStrictEqual({ x: "false", y: "100", z: "aloha" });
  });

  it("Array", () => {
    const URL = "x=false&x=100&z=aloha&x=aloha";

    expect(getUrlParams({ url: URL })).toStrictEqual({ x: ["false", "100", "aloha"], z: "aloha" });
  });

  it("value with comma", () => {
    const URL = "x=a,b,c,d&y=100&z=aloha";

    expect(getUrlParams({ url: URL })).toStrictEqual({ x: "a,b,c,d", y: "100", z: "aloha" });
  });

  it("allCommasToArray", () => {
    const URL = "x=aloha,holla&z=aloha";

    expect(getUrlParams({ url: URL, allCommasToArray: true })).toStrictEqual({ x: ["aloha", "holla"], z: "aloha" });
  });

  it("keysCommaToArray", () => {
    const URL = "x=aloha,holla&z=aloha";

    expect(getUrlParams({ url: URL, keysCommaToArray: ["x"] })).toStrictEqual({ x: ["aloha", "holla"], z: "aloha" });
  });
});

