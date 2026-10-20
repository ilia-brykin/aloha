import {
  nextTick,
  reactive,
} from "vue";
import {
  describe,
  expect,
  it,
  vi,
} from "vitest";

import ListModeAPI from "../compositionAPI/ListModeAPI";

vi.mock("../../../utils/utilsDOM", () => ({
  setFocusToElement: vi.fn(),
}));

function createList(modelValue, valueKey = "value", errors) {
  const props = reactive({
    id: "values",
    change: vi.fn(),
    modelValue,
    valueKey,
    errors,
  });
  const emit = vi.fn();
  const api = ListModeAPI(props, { emit }, {});
  return { api, emit, props };
}

describe("AValidatedJson primitive lists", () => {
  it("wraps values for forms and reacts to external model and key changes", () => {
    const { api, props } = createList(["Aloha", 0, false, null]);
    expect(api.listModeItems.value).toEqual([
      { value: "Aloha" }, { value: 0 }, { value: false }, { value: null },
    ]);
    expect(api.modelListMode.value).toEqual(["Aloha", 0, false, null]);
    props.valueKey = "entry";
    props.modelValue = ["Vue"];
    expect(api.listModeItems.value).toEqual([{ entry: "Vue" }]);
  });

  it.each(["text", "", 0, false, null])("creates and updates the primitive %j", value => {
    const { api, emit, props } = createList(["old"]);
    api.openModalCreateListMode();
    api.closeModalCreateListMode({ model: { value } });
    expect(api.isModalCreateListModeVisible.value).toBe(false);
    expect(emit).toHaveBeenLastCalledWith("update:modelValue", ["old", value]);
    expect(props.change).toHaveBeenLastCalledWith({
      currentModel: ["old", value], model: ["old", value], id: "values",
    });
    api.updateListMode({ index: 0, model: { value } });
    expect(emit).toHaveBeenLastCalledWith("update:modelValue", [value]);
    expect(props.modelValue).toEqual(["old"]);
  });

  it("supports an initially undefined model and cancelling the create dialog", () => {
    const { api, emit } = createList(undefined);
    expect(api.listModeItems.value).toEqual([]);
    api.openModalCreateListMode();
    api.closeModalCreateListMode();
    expect(emit).not.toHaveBeenCalled();
    api.closeModalCreateListMode({ model: { value: "first" } });
    expect(emit).toHaveBeenLastCalledWith("update:modelValue", ["first"]);
  });

  it("keeps primitive values when moving and deleting without changing the input", async() => {
    const { api, emit, props } = createList([0, false, "last"]);
    api.moveListMode({ action: "up", index: 1 });
    expect(emit).toHaveBeenLastCalledWith("update:modelValue", [false, 0, "last"]);
    api.moveListMode({ action: "down", index: 0 });
    expect(emit).toHaveBeenLastCalledWith("update:modelValue", [false, 0, "last"]);
    api.deleteListMode({ index: 1 });
    expect(emit).toHaveBeenLastCalledWith("update:modelValue", [0, "last"]);
    expect(props.modelValue).toEqual([0, false, "last"]);
    await nextTick();
  });

  it("associates primitive element errors with the configured field", () => {
    const { api } = createList(["invalid"], "value", { 0: ["Invalid value"] });
    expect(api.getListModeErrors(0)).toEqual({ value: ["Invalid value"] });
    expect(api.getListModeErrors(1)).toBeUndefined();
  });

  it("preserves already structured errors", () => {
    const errors = { 0: { value: ["Invalid value"] } };
    const { api } = createList(["invalid"], "value", errors);
    expect(api.getListModeErrors(0)).toEqual(errors[0]);
  });

  it("keeps the existing object-list contract when valueKey is omitted", () => {
    const { api, emit, props } = createList([{ text: "old" }], undefined);
    // Explicitly unset the helper default to exercise the public default.
    props.valueKey = undefined;
    expect(api.listModeItems.value).toEqual([{ text: "old" }]);
    api.closeModalCreateListMode({ model: { text: "new" } });
    expect(emit).toHaveBeenLastCalledWith("update:modelValue", [
      { text: "old" }, { text: "new" },
    ]);
    api.updateListMode({ index: 0, model: { text: "updated" } });
    expect(emit).toHaveBeenLastCalledWith("update:modelValue", [{ text: "updated" }]);
  });
});
