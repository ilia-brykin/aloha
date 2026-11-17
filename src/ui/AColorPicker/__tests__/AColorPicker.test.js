import {
  nextTick,
} from "vue";
import {
  afterEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import AColorPicker from "../AColorPicker";

const mountPicker = props => {
  return mount(AColorPicker, {
    attachTo: document.body,
    props: {
      label: "Color",
      ...props,
    },
  });
};

const flush = async() => {
  await nextTick();
  await nextTick();
};

const getPopup = () => document.body.querySelector(".a_color_picker__popup");

afterEach(() => {
  document.body.innerHTML = "";
});

describe("AColorPicker", () => {
  it("renders an accessible toggle filled with the model color", () => {
    const wrapper = mountPicker({ modelValue: "#0775b0" });
    const toggle = wrapper.get("button.a_color_picker__toggle");

    expect(toggle.attributes("aria-haspopup")).toBe("dialog");
    expect(toggle.attributes("aria-expanded")).toBe("false");
    expect(toggle.attributes("aria-labelledby")).toContain("_label");
    const parent = wrapper.get(".a_color_picker");
    expect(parent.attributes("style")).toContain("--a_color_picker_color: rgb(7, 117, 176)");
    expect(parent.attributes("style")).toContain("--a_color_picker_text_color: #fff");
    expect(toggle.text()).toBe("#0775b0");
    wrapper.unmount();
  });

  it("opens a dialog, changes the hue with the keyboard and confirms", async() => {
    const change = vi.fn();
    const wrapper = mountPicker({ modelValue: "#ff0000", change });
    await wrapper.get("button.a_color_picker__toggle").trigger("click");
    await flush();

    const popup = getPopup();
    expect(popup.getAttribute("role")).toBe("dialog");
    expect(wrapper.get("button.a_color_picker__toggle").attributes("aria-expanded")).toBe("true");

    const hue = popup.querySelector(".a_color_picker_slider_hue [role='slider']");
    expect(hue.getAttribute("aria-valuenow")).toBe("0");
    hue.dispatchEvent(new KeyboardEvent("keydown", { key: "End", bubbles: true }));
    await flush();
    hue.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft", bubbles: true, shiftKey: true }));
    await flush();
    expect(hue.getAttribute("aria-valuenow")).toBe("345");

    [...popup.querySelectorAll("button")].find(button => button.textContent.includes("_A_COLOR_PICKER_CONFIRM_")).click();
    await flush();

    expect(wrapper.emitted("update:modelValue").at(-1)).toEqual(["#ff0040"]);
    expect(change).toHaveBeenCalledWith(expect.objectContaining({ model: "#ff0040" }));
    expect(getPopup()).toBeNull();
    wrapper.unmount();
  });

  it("closes with Escape without changing the model and returns the focus", async() => {
    const wrapper = mountPicker({ modelValue: "#ff0000" });
    const toggle = wrapper.get("button.a_color_picker__toggle");
    await toggle.trigger("click");
    await flush();

    const saturation = getPopup().querySelector(".a_color_picker_saturation__thumb");
    saturation.dispatchEvent(new KeyboardEvent("keydown", { key: "Home", bubbles: true }));
    await flush();
    saturation.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    await flush();

    expect(getPopup()).toBeNull();
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    expect(document.activeElement).toBe(toggle.element);
    wrapper.unmount();
  });

  it("applies a typed value and shows an error for an invalid one", async() => {
    const wrapper = mountPicker({ modelValue: "#ff0000", colorFormat: "rgb", showAlpha: true });
    await wrapper.get("button.a_color_picker__toggle").trigger("click");
    await flush();

    const input = getPopup().querySelector(".a_color_picker__input input");
    input.value = "no color";
    input.dispatchEvent(new Event("input"));
    input.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
    await flush();
    expect(input.getAttribute("aria-invalid")).toBe("true");

    input.value = "#00ff0080";
    input.dispatchEvent(new Event("input"));
    input.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
    await flush();
    expect(input.value).toBe("rgba(0, 255, 0, 0.5)");
    expect(getPopup().querySelector(".a_color_picker_slider_alpha [role='slider']").getAttribute("aria-valuenow")).toBe("50");
    wrapper.unmount();
  });

  it("marks the selected predefined color", async() => {
    const wrapper = mountPicker({ modelValue: "#ff0000", predefine: ["#ff0000", "#00ff00", "invalid"] });
    await wrapper.get("button.a_color_picker__toggle").trigger("click");
    await flush();

    const items = getPopup().querySelectorAll(".a_color_picker__predefine__item");
    expect(items).toHaveLength(2);
    expect(items[0].getAttribute("aria-pressed")).toBe("true");
    items[1].click();
    await flush();
    expect(items[1].getAttribute("aria-pressed")).toBe("true");
    wrapper.unmount();
  });

  it("renders the readonly value with a swatch", () => {
    const wrapper = mountPicker({ modelValue: "#0775b0", readonly: true });
    expect(wrapper.find(".a_color_picker__swatch").exists()).toBe(true);
    expect(wrapper.text()).toContain("#0775b0");
    wrapper.unmount();
  });
});
