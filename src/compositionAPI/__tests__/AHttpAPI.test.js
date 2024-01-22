import {
  getUrlParams,
} from "../AHttpAPI";

describe("getUrlParams", () => {
  test("simple", () => {
    const URL = "x=false&y=100&z=aloha";

    expect(getUrlParams({ url: URL })).toStrictEqual({ x: "false", y: "100", z: "aloha" });
  });

  test("Array", () => {
    const URL = "x=false&x=100&z=aloha&x=aloha";

    expect(getUrlParams({ url: URL })).toStrictEqual({ x: ["false", "100", "aloha"], z: "aloha" });
  });

  test("value with comma", () => {
    const URL = "x=a,b,c,d&y=100&z=aloha";

    expect(getUrlParams({ url: URL })).toStrictEqual({ x: "a,b,c,d", y: "100", z: "aloha" });
  });

  test("allCommasToArray", () => {
    const URL = "x=aloha,holla&z=aloha";

    expect(getUrlParams({ url: URL, allCommasToArray: true })).toStrictEqual({ x: ["aloha", "holla"], z: "aloha" });
  });

  test("keysCommaToArray", () => {
    const URL = "x=aloha,holla&z=aloha";

    expect(getUrlParams({ url: URL, keysCommaToArray: ["x"] })).toStrictEqual({ x: ["aloha", "holla"], z: "aloha" });
  });
});

