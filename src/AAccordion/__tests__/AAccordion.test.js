import {
  nextTick,
} from "vue";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import {
  setI18n,
  setLanguage,
  updateTranslation,
} from "../../ATranslation/compositionAPI/ATranslationAPI";

import AAccordion from "../AAccordion";

const wrappers = [];

const mountAccordion = (props = {}) => {
  const wrapper = mount(AAccordion, {
    props: {
      data: [
        { label: "One", content: "Content one" },
        { label: "Two", content: "Content two" },
      ],
      ...props,
    },
    attachTo: document.body,
  });
  wrappers.push(wrapper);
  return wrapper;
};

const buttons = wrapper => wrapper.findAll(".a_accordion__button");
const expanded = wrapper => buttons(wrapper).map(button => button.attributes("aria-expanded"));
const items = count => Array.from({ length: count }, (_, index) => ({ label: `Item ${ index }`, content: `Content ${ index }` }));

describe("AAccordion", () => {
  beforeEach(async() => {
    setI18n({ en: { _LABEL_: "Order {{ number }}" } });
    setLanguage("en");
    updateTranslation();
    await nextTick();
  });

  afterEach(async() => {
    wrappers.splice(0).forEach(wrapper => wrapper.unmount());
    setI18n({});
    setLanguage("de");
    updateTranslation();
    await nextTick();
  });

  it("uses a real button in a heading, so it works with the keyboard", async() => {
    const wrapper = mountAccordion();
    const button = buttons(wrapper)[0];

    expect(button.element.tagName).toBe("BUTTON");
    expect(button.attributes("type")).toBe("button");
    expect(button.element.parentElement.tagName).toBe("H3");
    expect(button.attributes("aria-expanded")).toBe("false");

    await button.trigger("click");
    expect(button.attributes("aria-expanded")).toBe("true");
  });

  it("gives every accordion its own id", () => {
    const first = mountAccordion();
    const second = mountAccordion();

    const controlsFirst = buttons(first)[0].attributes("aria-controls");
    const controlsSecond = buttons(second)[0].attributes("aria-controls");
    expect(controlsFirst).not.toBe(controlsSecond);
    expect(document.querySelectorAll(`#${ controlsFirst }`)).toHaveLength(1);
  });

  it("does not open a disabled item", async() => {
    const wrapper = mountAccordion({
      data: [{ label: "One", content: "1", disabled: true }],
    });
    const button = buttons(wrapper)[0];

    expect(button.attributes("disabled")).toBeDefined();
    await button.trigger("click");
    expect(button.attributes("aria-expanded")).toBe("false");
  });

  it("closes only the item and its nested items with always-open", async() => {
    const DATA = items(12);
    DATA[1].children = [{ label: "Child", content: "c" }];
    const wrapper = mountAccordion({ data: DATA, alwaysOpen: true, modelValue: ["1", "1_0", "10"] });

    await buttons(wrapper)[1].trigger("click");

    expect(wrapper.emitted("update:modelValue").at(-1)[0]).toEqual(["10"]);
  });

  it("does not change the array of ids-for-open-default", async() => {
    const IDS = ["0"];
    const wrapper = mountAccordion({ alwaysOpen: true, idsForOpenDefault: IDS });

    await buttons(wrapper)[1].trigger("click");

    expect(IDS).toEqual(["0"]);
    expect(expanded(wrapper)).toEqual(["true", "true"]);
  });

  it("uses header-tag and the next level for nested items", async() => {
    const wrapper = mountAccordion({
      headerTag: "h2",
      data: [{ label: "Parent", children: [{ label: "Child", content: "c" }] }],
      modelValue: ["0"],
    });
    await nextTick();

    const headers = wrapper.findAll(".a_accordion__header");
    expect(headers.map(header => header.element.tagName)).toEqual(["H2", "H3"]);
  });

  it("labels the panel with its button; role region only for a few panels", () => {
    const wrapper = mountAccordion();
    const button = buttons(wrapper)[0];
    const panel = wrapper.get(`#${ button.attributes("aria-controls") }`);

    expect(panel.attributes("aria-labelledby")).toBe(button.attributes("id"));
    expect(panel.attributes("role")).toBe("region");

    const many = mountAccordion({ data: items(7) });
    expect(many.find("[role=\"region\"]").exists()).toBe(false);
  });

  it("keeps the open item of one-item-always-open as a focusable button", async() => {
    const wrapper = mountAccordion({ oneItemAlwaysOpen: true, idsForOpenDefault: ["0"] });
    const button = buttons(wrapper)[0];

    expect(button.element.tagName).toBe("BUTTON");
    expect(button.attributes("aria-disabled")).toBe("true");
    expect(button.attributes("disabled")).toBeUndefined();

    await button.trigger("click");
    expect(button.attributes("aria-expanded")).toBe("true");
  });

  it("translates label and content and keeps HTML sanitized", async() => {
    const wrapper = mountAccordion({
      extra: { number: 7 },
      data: [{ label: "_LABEL_", content: "<b>ok</b><img src=x onerror=alert(1)>" }],
      modelValue: ["0"],
    });
    await nextTick();

    expect(buttons(wrapper)[0].text()).toBe("Order 7");
    const body = wrapper.get(".a_accordion__body");
    expect(body.find("b").text()).toBe("ok");
    expect(body.html()).not.toContain("onerror");
  });

  it("supports v-model for the open items", async() => {
    const wrapper = mountAccordion({ modelValue: [] });

    await buttons(wrapper)[1].trigger("click");
    expect(wrapper.emitted("update:modelValue").at(-1)[0]).toEqual(["1"]);

    await wrapper.setProps({ modelValue: ["0"] });
    expect(expanded(wrapper)).toEqual(["true", "false"]);
  });
});
