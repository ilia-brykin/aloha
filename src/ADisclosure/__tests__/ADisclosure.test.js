import {
  nextTick,
} from "vue";
import {
  afterEach,
  describe,
  expect,
  it,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import ADisclosure from "../ADisclosure";

const wrappers = [];

const mountDisclosure = (props = {}, attrs = {}) => {
  const wrapper = mount(ADisclosure, {
    props: {
      id: "disclosure",
      textLess: "Short",
      textMore: "Short and the rest",
      ...props,
    },
    attrs,
    attachTo: document.body,
  });
  wrappers.push(wrapper);
  return wrapper;
};

const button = wrapper => wrapper.get("button");
const content = wrapper => wrapper.get("#disclosure");
const flush = async() => {
  await nextTick();
  await nextTick();
};

afterEach(() => {
  wrappers.splice(0).forEach(wrapper => wrapper.unmount());
});

describe("ADisclosure", () => {
  it("has aria-expanded and aria-controls on the button, not on the content", async() => {
    const wrapper = mountDisclosure();

    expect(button(wrapper).attributes("aria-expanded")).toBe("false");
    expect(button(wrapper).attributes("aria-controls")).toBe("disclosure");
    expect(content(wrapper).attributes("aria-expanded")).toBeUndefined();
    expect(content(wrapper).text()).toBe("Short");

    await button(wrapper).trigger("click");
    expect(button(wrapper).attributes("aria-expanded")).toBe("true");
    expect(content(wrapper).text()).toBe("Short and the rest");
  });

  it("puts own attributes only on the root, not twice", () => {
    const wrapper = mountDisclosure({}, { class: "own", "data-test": "x" });

    expect(wrapper.classes()).toContain("own");
    expect(document.querySelectorAll("[data-test=\"x\"]")).toHaveLength(1);
    expect(content(wrapper).classes()).not.toContain("own");
  });

  it("keeps the focus on the button after the click", async() => {
    const wrapper = mountDisclosure();
    button(wrapper).element.focus();

    await button(wrapper).trigger("click");
    await flush();
    expect(document.activeElement).toBe(button(wrapper).element);
  });

  it("moves the focus to the content when the button disappears (show-less false)", async() => {
    const wrapper = mountDisclosure({ showLess: false });
    button(wrapper).element.focus();

    await button(wrapper).trigger("click");
    await flush();
    expect(wrapper.find("button").exists()).toBe(false);
    expect(document.activeElement).toBe(content(wrapper).element);
  });

  it("opens with is-open-default", () => {
    const wrapper = mountDisclosure({ isOpenDefault: true });

    expect(button(wrapper).attributes("aria-expanded")).toBe("true");
    expect(content(wrapper).text()).toBe("Short and the rest");
  });

  it("supports v-model and still emits toggle", async() => {
    const wrapper = mountDisclosure({ modelValue: false });

    await button(wrapper).trigger("click");
    expect(wrapper.emitted("update:modelValue").at(-1)).toEqual([true]);
    expect(wrapper.emitted("toggle").at(-1)).toEqual([{ isOpen: true }]);

    // the parent of v-model takes the new value and closes it again
    await wrapper.setProps({ modelValue: true });
    await wrapper.setProps({ modelValue: false });
    expect(button(wrapper).attributes("aria-expanded")).toBe("false");
    await wrapper.setProps({ modelValue: true });
    expect(content(wrapper).text()).toBe("Short and the rest");
  });
});
