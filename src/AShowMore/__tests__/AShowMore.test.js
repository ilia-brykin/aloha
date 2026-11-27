import {
  h,
  nextTick,
} from "vue";
import {
  afterEach,
  beforeAll,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import AShowMore from "../AShowMore";

const TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

const wrappers = [];

const mountShowMore = (props = {}, options = {}) => {
  const wrapper = mount(AShowMore, {
    props: {
      id: "more",
      ...props,
    },
    attachTo: document.body,
    ...options,
  });
  wrappers.push(wrapper);
  return wrapper;
};

const button = wrapper => wrapper.get("button");
const content = wrapper => wrapper.get("#more");
const flush = async() => {
  await nextTick();
  await nextTick();
};

// the content is higher than the height: with height the button is shown
const mockHeight = height => vi.spyOn(HTMLElement.prototype, "offsetHeight", "get").mockReturnValue(height);

describe("AShowMore", () => {
  beforeAll(() => {
    globalThis.ResizeObserver = globalThis.ResizeObserver || class {
      observe() {
      }
      disconnect() {
      }
    };
  });

  afterEach(() => {
    wrappers.splice(0).forEach(wrapper => wrapper.unmount());
    vi.restoreAllMocks();
  });

  describe("text-length", () => {
    it("cuts at the end of a word with an ellipsis and has aria-expanded on the button", async() => {
      const wrapper = mountShowMore({ text: TEXT, textLength: 14 });

      expect(content(wrapper).text()).toBe("Lorem ipsum…");
      expect(button(wrapper).attributes("aria-expanded")).toBe("false");
      expect(button(wrapper).attributes("aria-controls")).toBe("more");
      expect(content(wrapper).attributes("aria-expanded")).toBeUndefined();

      await button(wrapper).trigger("click");
      expect(content(wrapper).text()).toBe(TEXT);
      expect(button(wrapper).attributes("aria-expanded")).toBe("true");
    });

    it("removes punctuation before the ellipsis", () => {
      const wrapper = mountShowMore({ text: TEXT, textLength: 27 });

      expect(content(wrapper).text()).toBe("Lorem ipsum dolor sit amet…");
    });

    it("shows the whole text without a button when it fits exactly", () => {
      const wrapper = mountShowMore({ text: "Hello", textLength: 5 });

      expect(content(wrapper).text()).toBe("Hello");
      expect(wrapper.find("button").exists()).toBe(false);
    });

    it("keeps the focus on the button after the click", async() => {
      const wrapper = mountShowMore({ text: TEXT, textLength: 14 });
      button(wrapper).element.focus();

      await button(wrapper).trigger("click");
      await flush();
      expect(document.activeElement).toBe(button(wrapper).element);
    });

    it("moves the focus to the content when the button disappears (show-less false)", async() => {
      const wrapper = mountShowMore({ text: TEXT, textLength: 14, showLess: false });
      button(wrapper).element.focus();

      await button(wrapper).trigger("click");
      await flush();
      expect(wrapper.find("button").exists()).toBe(false);
      expect(document.activeElement).toBe(content(wrapper).element);
    });
  });

  it("opens with is-open-default", () => {
    const wrapper = mountShowMore({ text: TEXT, textLength: 14, isOpenDefault: true });

    expect(content(wrapper).text()).toBe(TEXT);
    expect(button(wrapper).attributes("aria-expanded")).toBe("true");
  });

  it("supports v-model and still emits toggle", async() => {
    const wrapper = mountShowMore({ text: TEXT, textLength: 14, modelValue: false });

    await button(wrapper).trigger("click");
    expect(wrapper.emitted("update:modelValue").at(-1)).toEqual([true]);
    expect(wrapper.emitted("toggle").at(-1)).toEqual([{ isOpen: true }]);

    // the parent of v-model takes the new value and closes it again
    await wrapper.setProps({ modelValue: true });
    await wrapper.setProps({ modelValue: false });
    expect(content(wrapper).text()).toBe("Lorem ipsum…");
  });

  it("puts own attributes only on the root, not twice", () => {
    const wrapper = mountShowMore({ text: TEXT }, { attrs: { class: "own", "data-test": "x" } });

    expect(wrapper.classes()).toContain("own");
    expect(document.querySelectorAll("[data-test=\"x\"]")).toHaveLength(1);
  });

  describe("height", () => {
    it("has no aria-expanded, the button tells that it can be ignored", async() => {
      mockHeight(500);
      const wrapper = mountShowMore({ text: TEXT, height: 100 });
      await flush();

      expect(button(wrapper).attributes("aria-expanded")).toBeUndefined();
      expect(button(wrapper).text()).toContain("_A_SHOW_MORE_MORE_SCREEN_READER_");
      expect(wrapper.get(".a_show_more__wrapper").attributes("style")).toContain("max-height: 100px");
    });

    it("opens when a link in the cut part gets the focus", async() => {
      mockHeight(500);
      const wrapper = mountShowMore({ height: 100 }, {
        slots: { default: () => [h("p", "Text"), h("a", { href: "#", class: "hidden_link" }, "Link")] },
      });
      await flush();
      const WRAPPER = wrapper.get(".a_show_more__wrapper").element;
      const LINK = wrapper.get(".hidden_link").element;
      vi.spyOn(WRAPPER, "getBoundingClientRect").mockReturnValue({ top: 0, bottom: 100 });
      vi.spyOn(LINK, "getBoundingClientRect").mockReturnValue({ top: 300, bottom: 320 });

      LINK.focus();
      await flush();
      expect(wrapper.emitted("toggle").at(-1)).toEqual([{ isOpen: true }]);
      expect(wrapper.get(".a_show_more__wrapper").attributes("style")).toBeUndefined();
    });

    it("does not open when the focused element is visible", async() => {
      mockHeight(500);
      const wrapper = mountShowMore({ height: 100 }, {
        slots: { default: () => [h("a", { href: "#", class: "visible_link" }, "Link")] },
      });
      await flush();
      vi.spyOn(wrapper.get(".a_show_more__wrapper").element, "getBoundingClientRect").mockReturnValue({ top: 0, bottom: 100 });
      vi.spyOn(wrapper.get(".visible_link").element, "getBoundingClientRect").mockReturnValue({ top: 10, bottom: 30 });

      wrapper.get(".visible_link").element.focus();
      await flush();
      expect(wrapper.emitted("toggle")).toBeUndefined();
    });

    it("disconnects the ResizeObserver on unmount", async() => {
      const disconnect = vi.fn();
      const ORIGINAL = globalThis.ResizeObserver;
      globalThis.ResizeObserver = class {
        observe() {
        }
        disconnect() {
          disconnect();
        }
      };
      const wrapper = mountShowMore({ text: TEXT, height: 100 });
      await flush();

      wrapper.unmount();
      wrappers.splice(wrappers.indexOf(wrapper), 1);
      expect(disconnect).toHaveBeenCalled();
      globalThis.ResizeObserver = ORIGINAL;
    });
  });
});
