import {
  describe,
  expect,
  it,
} from "vitest";

import {
  filterVisibleRequiredUiElements,
  isAnyRequiredUiElementEmpty,
} from "../utils";

function requiredList(children = [{ id: "value", type: "text", required: true }]) {
  return { id: "tags", type: "validatedJson", mode: "list", valueKey: "value", required: true, children };
}

describe("required validatedJson list fields", () => {
  it.each([
    { values: ["Aloha"] },
    { values: [0] },
    { values: [false] },
    { values: [null] },
    { values: [{ text: "Aloha" }] },
  ])("accepts a populated list $values without treating it as one child form", ({ values }) => {
    const fields = filterVisibleRequiredUiElements({ elements: [requiredList()] });
    expect(isAnyRequiredUiElementEmpty({ elements: fields, model: { tags: values } })).toBe(false);
  });

  it.each([{ values: [] }, { values: undefined }, { values: null }])("rejects an empty or absent required list $values", ({ values }) => {
    expect(isAnyRequiredUiElementEmpty({ elements: [requiredList()], model: { tags: values } })).toBe(true);
  });

  it("retains a required list with optional item fields", () => {
    const field = requiredList([{ id: "value", type: "text" }]);
    const fields = filterVisibleRequiredUiElements({ elements: [field] });
    expect(fields).toHaveLength(1);
    expect(fields[0].children).toEqual(field.children);
    expect(isAnyRequiredUiElementEmpty({ elements: fields, model: { tags: [] } })).toBe(true);
  });

  it("ignores optional and hidden lists", () => {
    const fields = filterVisibleRequiredUiElements({ elements: [
      { ...requiredList(), required: false },
      { ...requiredList(), isHide: true },
    ] });
    expect(fields).toEqual([]);
  });

  it("continues checking required children in single mode", () => {
    const fields = filterVisibleRequiredUiElements({ elements: [{ ...requiredList(), mode: "single" }] });
    expect(isAnyRequiredUiElementEmpty({ elements: fields, model: { tags: { value: "" } } })).toBe(true);
    expect(isAnyRequiredUiElementEmpty({ elements: fields, model: { tags: { value: "Aloha" } } })).toBe(false);
  });
});
