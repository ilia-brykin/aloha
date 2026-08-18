import {
  describe,
  expect,
  it,
} from "@jest/globals";

import filterValueByCondition from "../filterValueByCondition";

describe("Filter value by condition", () => {
  it("Returns the value from the first matching function condition", () => {
    const conditions = [
      {
        if: value => value > 3,
        then: value => `(${ value * 3 } Aloha)`,
      },
      {
        if: value => value < 2,
        then: "aloha",
      },
    ];

    expect(filterValueByCondition(4, { conditions })).toBe("(12 Aloha)");
  });

  it("Returns the value from the first matching string expression condition", () => {
    const conditions = [
      {
        if: "value > 3",
        thenTemplate: "(${ value * 3 } Aloha)",
      },
      {
        if: "value < 2",
        then: "aloha",
      },
    ];

    expect(filterValueByCondition(1, { conditions })).toBe("aloha");
    expect(filterValueByCondition(4, { conditions })).toBe("(12 Aloha)");
  });

  it("Returns defaultValue if no condition matches", () => {
    const conditions = [
      {
        if: "value > 3",
        then: "aloha",
      },
    ];

    expect(filterValueByCondition(2, {
      conditions,
      defaultValue: value => value / 2,
    })).toBe(1);
  });

  it("Returns defaultTemplate if no condition matches", () => {
    const conditions = [
      {
        if: "value > 3",
        then: "aloha",
      },
    ];

    expect(filterValueByCondition(2, {
      conditions,
      defaultTemplate: "${ value / 2 }",
    })).toBe("1");
  });

  it("Returns an empty string if no condition matches and no default value is set", () => {
    const conditions = [
      {
        if: "value > 3",
        then: "aloha",
      },
    ];

    expect(filterValueByCondition(2, { conditions })).toBe("");
  });

  it("Skips invalid string expressions", () => {
    const conditions = [
      {
        if: "value >",
        then: "invalid",
      },
      {
        if: "value < 3",
        then: "valid",
      },
    ];

    expect(filterValueByCondition(2, { conditions })).toBe("valid");
  });
});
