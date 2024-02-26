import {
  getModelId,
} from "../utils";

describe("getModelId", () => {
  it("returns modelId if the item object contains modelId", () => {
    const item = { modelId: "123", id: "abc" };
    expect(getModelId({ item })).toBe("123");
  });

  it("returns id if the item object does not contain modelId", () => {
    const item = { id: "abc" };
    expect(getModelId({ item })).toBe("abc");
  });

  it("returns undefined if item is not passed", () => {
    expect(getModelId()).toBeUndefined();
  });

  it("returns undefined if item is passed but does not contain id or modelId", () => {
    const item = { name: "test" };
    expect(getModelId({ item })).toBeUndefined();
  });
});
