import {
  afterEach,
  describe,
  expect,
  it,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import {
  getValueForLevel,
} from "../compositionAPI/LevelAPI";

import ARate from "../ARate";

const wrappers = [];

const mountRate = (props = {}) => {
  const wrapper = mount(ARate, {
    props: {
      label: "Rating",
      "onUpdate:modelValue": model => wrapper.setProps({ modelValue: model }),
      ...props,
    },
    attachTo: document.body,
  });
  wrappers.push(wrapper);
  return wrapper;
};

const slider = wrapper => wrapper.get("[role=slider]");
const items = wrapper => wrapper.findAll(".a_rate__item");
const fills = wrapper => items(wrapper).map(item => {
  const fill = item.find(".a_rate__item__fill");
  return fill.exists() ? fill.attributes("style") : "";
});
const lastModel = wrapper => wrapper.emitted("update:modelValue")?.at(-1)?.[0];

const mockRect = element => {
  element.getBoundingClientRect = () => ({ left: 0, right: 20, width: 20, top: 0, bottom: 20, height: 20 });
};

afterEach(() => {
  wrappers.splice(0).forEach(wrapper => wrapper.unmount());
});

describe("ARate", () => {
  it("renders a slider with value, text and label", () => {
    const wrapper = mountRate({ modelValue: 3 });
    const element = slider(wrapper);
    expect(items(wrapper)).toHaveLength(5);
    expect(element.attributes("tabindex")).toBe("0");
    expect(element.attributes("aria-valuemin")).toBe("0");
    expect(element.attributes("aria-valuemax")).toBe("5");
    expect(element.attributes("aria-valuenow")).toBe("3");
    expect(element.attributes("aria-valuetext")).toBe("_A_RATE_VALUE_{{value}}_{{max}}_, _A_RATE_TEXT_3_");
    expect(element.attributes("aria-labelledby")).toBe(`${ element.attributes("id") }_label`);
    expect(fills(wrapper)).toEqual(["width: 100%;", "width: 100%;", "width: 100%;", "", ""]);
  });

  it("shows decimal values", () => {
    const wrapper = mountRate({ modelValue: 3.7, readonly: true });
    expect(wrapper.find("[role=slider]").exists()).toBe(false);
    expect(wrapper.get("[role=img]").attributes("aria-label")).toBe("_A_RATE_VALUE_{{value}}_{{max}}_, _A_RATE_TEXT_4_");
    expect(fills(wrapper)[3]).toMatch(/width: 70(\.\d+)?%;/);
  });

  it("sets the value with a click, half values with allowHalf and clears with clearable", async() => {
    const wrapper = mountRate({ allowHalf: true, clearable: true });
    mockRect(items(wrapper)[2].element);
    await items(wrapper)[2].trigger("click", { clientX: 5 });
    expect(lastModel(wrapper)).toBe(2.5);
    await items(wrapper)[2].trigger("click", { clientX: 15 });
    expect(lastModel(wrapper)).toBe(3);
    await items(wrapper)[2].trigger("click", { clientX: 15 });
    expect(lastModel(wrapper)).toBe(0);
  });

  it("shows the hovered value", async() => {
    const wrapper = mountRate({ modelValue: 1 });
    await items(wrapper)[3].trigger("pointermove");
    expect(fills(wrapper).filter(Boolean)).toHaveLength(4);
    expect(wrapper.get(".a_rate").classes()).toContain("a_rate_hovering");
    await wrapper.get(".a_rate__items").trigger("pointerleave");
    expect(fills(wrapper).filter(Boolean)).toHaveLength(1);
  });

  it("changes the value with the keyboard", async() => {
    const wrapper = mountRate({ modelValue: 2 });
    await slider(wrapper).trigger("keydown", { key: "ArrowRight" });
    expect(lastModel(wrapper)).toBe(3);
    await slider(wrapper).trigger("keydown", { key: "End" });
    expect(lastModel(wrapper)).toBe(5);
    await slider(wrapper).trigger("keydown", { key: "Home" });
    expect(lastModel(wrapper)).toBe(1);
    await slider(wrapper).trigger("keydown", { key: "ArrowLeft" });
    expect(wrapper.emitted("update:modelValue")).toHaveLength(3);
    await slider(wrapper).trigger("keydown", { key: "4" });
    expect(lastModel(wrapper)).toBe(4);
    await slider(wrapper).trigger("keydown", { key: "Delete" });
    expect(lastModel(wrapper)).toBe(4);
  });

  it("shows the keyboard value instead of the hovered value", async() => {
    const wrapper = mountRate({ modelValue: 2 });
    await items(wrapper)[4].trigger("pointermove");
    await slider(wrapper).trigger("keydown", { key: "ArrowRight" });
    expect(fills(wrapper).filter(Boolean)).toHaveLength(3);
  });

  it("uses half steps and clears with the keyboard", async() => {
    const wrapper = mountRate({ modelValue: 1, allowHalf: true, clearable: true });
    await slider(wrapper).trigger("keydown", { key: "ArrowUp" });
    expect(lastModel(wrapper)).toBe(1.5);
    await slider(wrapper).trigger("keydown", { key: "Backspace" });
    expect(lastModel(wrapper)).toBe(0);
  });

  it("does nothing when disabled", async() => {
    const wrapper = mountRate({ modelValue: 2, disabled: true });
    expect(slider(wrapper).attributes("tabindex")).toBe("-1");
    expect(slider(wrapper).attributes("aria-disabled")).toBe("true");
    await items(wrapper)[4].trigger("click");
    await slider(wrapper).trigger("keydown", { key: "ArrowRight" });
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  });

  it("chooses colors and icons by level", () => {
    expect(getValueForLevel({ source: ["a", "b", "c"], value: 1, level: "low" })).toBe("a");
    expect(getValueForLevel({ source: ["a", "b", "c"], value: 5, level: "high" })).toBe("c");
    expect(getValueForLevel({ source: { 2: "a", 4: "b", 5: "c" }, value: 3, level: "medium" })).toBe("b");
    expect(getValueForLevel({ source: "a", value: 3, level: "medium" })).toBe("a");

    const wrapper = mountRate({ modelValue: 5, colors: ["red", "orange", "green"] });
    expect(wrapper.get(".a_rate").classes()).toContain("a_rate_level_high");
    expect(wrapper.get(".a_rate").attributes("style")).toContain("--a_rate_fill_color_current: green");
  });

  it("shows score and text", () => {
    const wrapper = mountRate({ modelValue: 2, showScore: true, showText: true, texts: ["one", "two"] });
    expect(wrapper.get(".a_rate__score").text()).toBe("_A_RATE_SCORE_{{value}}_{{max}}_");
    expect(wrapper.get(".a_rate__text").text()).toBe("two");
  });

  it("keeps the deprecated props of 2.x working", () => {
    const wrapper = mountRate({ modelValue: 2, rating: 7, halfIcon: true, size: "big", color: "red", text: "Info" });
    expect(items(wrapper)).toHaveLength(7);
    expect(wrapper.get(".a_rate").classes()).toContain("a_rate_large");
    expect(wrapper.get(".a_rate").attributes("style")).toContain("--a_rate_fill_color_current: red");
    expect(wrapper.get(".a_rate__text").text()).toBe("Info");
  });

  it("shows errors and help text", () => {
    const wrapper = mountRate({ errors: "Required", helpText: "Help" });
    expect(slider(wrapper).attributes("aria-invalid")).toBe("true");
    expect(slider(wrapper).attributes("aria-describedby")).toContain("_help_text");
    expect(slider(wrapper).attributes("aria-describedby")).toContain("_errors");
  });
});
