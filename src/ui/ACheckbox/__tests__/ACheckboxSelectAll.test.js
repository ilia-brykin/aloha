import {
  describe,
  expect,
  it,
  vi,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import ACheckbox from "../ACheckbox";

const data = [
  { id: "a", label: "Apple" },
  { id: "b", label: "Banana" },
  { id: "c", label: "Cherry", isDisabled: true },
  { id: "d", label: "Avocado" },
];

const mountCheckbox = props => mount(ACheckbox, {
  props: {
    data,
    isDeselectAll: true,
    isSelectAll: true,
    keyDisabled: "isDisabled",
    keyId: "id",
    keyLabel: "label",
    label: "Fruits",
    ...props,
  },
});

const getButtons = wrapper => wrapper.findAll(".a_checkbox__select_all button");

const getLastModel = async wrapper => {
  vi.runAllTimers();
  await wrapper.vm.$nextTick();
  const EMITTED = wrapper.emitted("update:modelValue");
  return EMITTED[EMITTED.length - 1][0];
};

describe("ACheckbox select all", () => {
  it("does not render the buttons by default", () => {
    const wrapper = mountCheckbox({ isDeselectAll: false, isSelectAll: false });
    expect(wrapper.find(".a_checkbox__select_all").exists()).toBe(false);
  });

  it("selects all items that are not disabled and keeps the model order", async() => {
    vi.useFakeTimers();
    const wrapper = mountCheckbox({ modelValue: ["b"] });
    await getButtons(wrapper)[0].trigger("click");
    expect(await getLastModel(wrapper)).toEqual(["b", "a", "d"]);
    vi.useRealTimers();
  });

  it("deselects all items but keeps disabled ones", async() => {
    vi.useFakeTimers();
    const wrapper = mountCheckbox({ modelValue: ["a", "c", "d"] });
    await getButtons(wrapper)[1].trigger("click");
    expect(await getLastModel(wrapper)).toEqual(["c"]);
    vi.useRealTimers();
  });

  it("affects only the found items while searching", async() => {
    vi.useFakeTimers();
    const wrapper = mountCheckbox({ modelValue: ["b"], search: true });
    await wrapper.find(".a_fieldset__search input").setValue("Av");
    await getButtons(wrapper)[0].trigger("click");
    expect(await getLastModel(wrapper)).toEqual(["b", "d"]);
    vi.useRealTimers();
  });

  it("disables the buttons when there is nothing to change", () => {
    const wrapper = mountCheckbox({ modelValue: ["c"] });
    const [selectAll, deselectAll] = getButtons(wrapper);
    expect(selectAll.attributes("aria-disabled")).not.toBe("true");
    expect(deselectAll.attributes("aria-disabled")).toBe("true");
  });

  it("does not change the model with an aria-disabled button", async() => {
    vi.useFakeTimers();
    const wrapper = mountCheckbox({ modelValue: ["c"] });
    await getButtons(wrapper)[1].trigger("click");
    vi.runAllTimers();
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    vi.useRealTimers();
  });
});
