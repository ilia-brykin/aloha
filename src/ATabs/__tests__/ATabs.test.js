import {
  h,
  nextTick,
} from "vue";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import {
  setI18n,
  setLanguage,
  updateTranslation,
} from "../../ATranslation/compositionAPI/ATranslationAPI";

import ATabs from "../ATabs";

const DATA = [
  { id: "a", label: "A", content: "Content A" },
  { id: "b", label: "B", content: "Content B" },
  { id: "c", label: "C", content: "Content C" },
];

const wrappers = [];

const mountTabs = (props = {}, options = {}) => {
  const wrapper = mount(ATabs, {
    props: {
      data: DATA,
      id: "tabs",
      keyId: "id",
      ...props,
    },
    attachTo: document.body,
    ...options,
  });
  wrappers.push(wrapper);
  return wrapper;
};

const tabs = wrapper => wrapper.findAll("[role=\"tab\"]");
const selected = wrapper => tabs(wrapper).map(tab => tab.attributes("aria-selected"));
const visiblePanel = wrapper => wrapper.find(".a_tabs__content_show");
const press = async(wrapper, key) => {
  await document.activeElement.dispatchEvent(new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true }));
  await nextTick();
};

describe("ATabs", () => {
  beforeEach(async() => {
    setI18n({ en: { _SETTINGS_: "Settings" } });
    setLanguage("en");
    updateTranslation();
    await nextTick();
  });

  afterEach(async() => {
    wrappers.splice(0).forEach(wrapper => wrapper.unmount());
    vi.restoreAllMocks();
    setI18n({});
    setLanguage("de");
    updateTranslation();
    await nextTick();
  });

  it("renders the tabs as buttons with aria-selected and connects tabs and panels", () => {
    const wrapper = mountTabs();
    const [tabA, tabB] = tabs(wrapper);

    expect(tabA.element.tagName).toBe("BUTTON");
    expect(tabA.attributes("type")).toBe("button");
    expect(selected(wrapper)).toEqual(["true", "false", "false"]);

    const panel = wrapper.get(`#${ tabA.attributes("aria-controls") }`);
    expect(panel.attributes("role")).toBe("tabpanel");
    expect(panel.attributes("aria-labelledby")).toBe(tabA.attributes("id"));
    expect(panel.attributes("tabindex")).toBe("0");
    expect(tabB.attributes("aria-controls")).toBe("tabs_b_content");
  });

  it("puts only the active tab into the Tab order (roving tabindex)", async() => {
    const wrapper = mountTabs();
    expect(tabs(wrapper).map(tab => tab.attributes("tabindex"))).toEqual(["0", "-1", "-1"]);

    await tabs(wrapper)[2].trigger("click");
    expect(tabs(wrapper).map(tab => tab.attributes("tabindex"))).toEqual(["-1", "-1", "0"]);
  });

  it("moves with the arrows, Home and End, goes round and opens the focused tab", async() => {
    const wrapper = mountTabs();
    tabs(wrapper)[0].element.focus();

    await press(wrapper, "ArrowRight");
    expect(document.activeElement.id).toBe("tabs_b");
    expect(selected(wrapper)).toEqual(["false", "true", "false"]);
    expect(visiblePanel(wrapper).text()).toBe("Content B");

    await press(wrapper, "End");
    expect(document.activeElement.id).toBe("tabs_c");
    await press(wrapper, "ArrowRight");
    expect(document.activeElement.id).toBe("tabs_a");
    await press(wrapper, "ArrowLeft");
    expect(document.activeElement.id).toBe("tabs_c");
    await press(wrapper, "Home");
    expect(document.activeElement.id).toBe("tabs_a");
    expect(selected(wrapper)).toEqual(["true", "false", "false"]);
  });

  it("skips disabled tabs with the arrows", async() => {
    const wrapper = mountTabs({
      data: [DATA[0], { ...DATA[1], disabled: true }, DATA[2]],
      keyDisabled: "disabled",
    });
    tabs(wrapper)[0].element.focus();

    await press(wrapper, "ArrowRight");
    expect(document.activeElement.id).toBe("tabs_c");
  });

  it("uses ArrowUp and ArrowDown and aria-orientation in vertical tabs", async() => {
    const wrapper = mountTabs({ isVertical: true });
    expect(wrapper.get("[role=\"tablist\"]").attributes("aria-orientation")).toBe("vertical");
    tabs(wrapper)[0].element.focus();

    await press(wrapper, "ArrowRight");
    expect(document.activeElement.id).toBe("tabs_a");
    await press(wrapper, "ArrowDown");
    expect(document.activeElement.id).toBe("tabs_b");
    await press(wrapper, "ArrowUp");
    expect(document.activeElement.id).toBe("tabs_a");
  });

  it("goes to the next tab with ArrowLeft in right-to-left", async() => {
    const wrapper = mountTabs();
    vi.spyOn(window, "getComputedStyle").mockReturnValue({ direction: "rtl" });
    tabs(wrapper)[0].element.focus();

    await press(wrapper, "ArrowLeft");
    expect(document.activeElement.id).toBe("tabs_b");
  });

  it("gives the tab list a translated aria-label or aria-labelledby", () => {
    expect(mountTabs({ ariaLabel: "_SETTINGS_" }).get("[role=\"tablist\"]").attributes("aria-label")).toBe("Settings");
    expect(mountTabs({ ariaLabelledby: "title" }).get("[role=\"tablist\"]").attributes("aria-labelledby")).toBe("title");
    expect(mountTabs().get("[role=\"tablist\"]").attributes("aria-orientation")).toBeUndefined();
  });

  it("shows the first enabled tab when the active tab is removed from data", async() => {
    const wrapper = mountTabs({ activeTabId: "c" });
    expect(visiblePanel(wrapper).text()).toBe("Content C");

    await wrapper.setProps({ data: [{ ...DATA[0], disabled: true }, DATA[1]], keyDisabled: "disabled" });
    expect(visiblePanel(wrapper).text()).toBe("Content B");
    expect(tabs(wrapper)[1].attributes("tabindex")).toBe("0");
  });

  it("does not open a disabled tab at the start", () => {
    const first = mountTabs({ data: [{ ...DATA[0], disabled: true }, DATA[1]], keyDisabled: "disabled" });
    expect(visiblePanel(first).text()).toBe("Content B");

    const byKeyActive = mountTabs({
      data: [DATA[0], { ...DATA[1], active: true, disabled: true }, { ...DATA[2], active: true }],
      keyDisabled: "disabled",
    });
    expect(visiblePanel(byKeyActive).text()).toBe("Content C");
  });

  it("keeps tab and panel of the same tab when the order changes (key and id by the tab id)", async() => {
    const wrapper = mountTabs();
    const PANEL_B = wrapper.get("#tabs_b_content").element;

    await wrapper.setProps({ data: [DATA[1], DATA[0], DATA[2]] });
    expect(wrapper.get("#tabs_b_content").element).toBe(PANEL_B);
    expect(tabs(wrapper)[0].attributes("id")).toBe("tabs_b");
  });

  it("builds valid ids from tab ids with spaces and other characters", () => {
    const wrapper = mountTabs({ data: [{ id: "a b/c", label: "A" }] });

    expect(tabs(wrapper)[0].attributes("id")).toBe("tabs_a_b_c");
  });

  it("supports v-model:active-tab-id", async() => {
    const wrapper = mountTabs({ activeTabId: "a" });

    await tabs(wrapper)[1].trigger("click");
    expect(wrapper.emitted("update:activeTabId").at(-1)).toEqual(["b"]);
    expect(wrapper.emitted("change").at(-1)[0]).toEqual(expect.objectContaining({ tabId: "b", index: 1 }));

    await wrapper.setProps({ activeTabId: "c" });
    expect(selected(wrapper)).toEqual(["false", "false", "true"]);
  });

  it("changes the tab only from outside with is-change-outside", async() => {
    const wrapper = mountTabs({ isChangeOutside: true });

    await tabs(wrapper)[1].trigger("click");
    expect(wrapper.emitted("change")).toHaveLength(1);
    expect(selected(wrapper)).toEqual(["true", "false", "false"]);
  });

  it("does not open a disabled tab with a click", async() => {
    const wrapper = mountTabs({ data: [DATA[0], { ...DATA[1], disabled: true }], keyDisabled: "disabled" });

    await tabs(wrapper)[1].trigger("click");
    expect(wrapper.emitted("change")).toBeUndefined();
    expect(tabs(wrapper)[1].classes()).toContain("a_tabs__list__link_disabled");
  });

  describe("render-content", () => {
    const contents = wrapper => wrapper.findAll("[role=\"tabpanel\"]").map(panel => panel.text());

    it("renders every content with all (default)", () => {
      expect(contents(mountTabs())).toEqual(["Content A", "Content B", "Content C"]);
    });

    it("renders only the active content with active", async() => {
      const wrapper = mountTabs({ renderContent: "active" });
      expect(contents(wrapper)).toEqual(["Content A", "", ""]);

      await tabs(wrapper)[1].trigger("click");
      expect(contents(wrapper)).toEqual(["", "Content B", ""]);
    });

    it("renders a content when it is opened first and keeps it with once", async() => {
      const wrapper = mountTabs({ renderContent: "once" });
      expect(contents(wrapper)).toEqual(["Content A", "", ""]);

      await tabs(wrapper)[1].trigger("click");
      expect(contents(wrapper)).toEqual(["Content A", "Content B", ""]);
    });

    it("does not render the slot of a hidden content with active", () => {
      const slot = vi.fn(() => h("span", "Slot"));
      mountTabs({ renderContent: "active" }, { slots: { content: slot } });

      expect(slot.mock.calls.map(([props]) => props.tabId)).toEqual(["a"]);
    });
  });
});
