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

  test("Array with comma", () => {
    const URL = "x=aloha,holla&z=aloha";

    expect(getUrlParams({ url: URL })).toStrictEqual({ x: ["aloha", "holla"], z: "aloha" });
  });
});

