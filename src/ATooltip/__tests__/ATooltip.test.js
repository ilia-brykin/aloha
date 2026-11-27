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

import ATooltip from "../ATooltip";

vi.mock("@floating-ui/vue", async importOriginal => {
  const ORIGINAL = await importOriginal();
  return {
    ...ORIGINAL,
    arrow: vi.fn(ORIGINAL.arrow),
    autoUpdate: vi.fn(ORIGINAL.autoUpdate),
  };
});

const floatingUi = await import("@floating-ui/vue");

const wrappers = [];

const mountTooltip = ({ props = {}, defaultSlot, attrs = {} } = {}) => {
  const wrapper = mount({
    render: () => h("div", { class: "outside", ...attrs }, [
      h(ATooltip, { id: "tip", timeClose: 0, ...props }, {
        default: defaultSlot || (() => h("button", { type: "button", class: "inner" }, "Save")),
        title: () => h("span", "Saves the document"),
      }),
    ]),
  }, { attachTo: document.body });
  wrappers.push(wrapper);
  return wrapper;
};

const wrapperEl = () => document.getElementById("tip");
const titleEl = () => document.getElementById("tip_title");
const innerButton = () => document.querySelector(".inner");
const flush = async() => {
  await nextTick();
  await nextTick();
};

describe("ATooltip", () => {
  beforeAll(() => {
    globalThis.ResizeObserver = globalThis.ResizeObserver || class {
      observe() {
      }
      unobserve() {
      }
      disconnect() {
      }
    };
  });

  afterEach(() => {
    wrappers.splice(0).forEach(wrapper => wrapper.unmount());
    vi.useRealTimers();
    vi.clearAllMocks();
  });

  it("opens on mouse hover, the title has role tooltip", async() => {
    mountTooltip();
    await flush();
    expect(titleEl()).toBeNull();

    wrapperEl().dispatchEvent(new MouseEvent("mouseenter"));
    await flush();
    expect(titleEl().getAttribute("role")).toBe("tooltip");
    expect(titleEl().textContent).toBe("Saves the document");
  });

  it("has the text always as a hidden description of the button, also without focus (render-description always)", async() => {
    mountTooltip();
    await flush();

    const DESCRIPTION = document.getElementById("tip_description");
    expect(DESCRIPTION.hidden).toBe(true);
    expect(DESCRIPTION.textContent).toBe("Saves the document");
    expect(titleEl()).toBeNull();
    expect(innerButton().getAttribute("aria-describedby")).toBe("tip_description");
    expect(wrapperEl().hasAttribute("aria-describedby")).toBe(false);

    innerButton().focus();
    await flush();
    expect(titleEl()).not.toBeNull();
    expect(innerButton().getAttribute("aria-describedby")).toBe("tip_description");

    innerButton().blur();
    await flush();
    expect(titleEl()).toBeNull();
    expect(innerButton().getAttribute("aria-describedby")).toBe("tip_description");
  });

  it("puts aria-describedby on the button inside only while open with render-description visible", async() => {
    mountTooltip({ props: { renderDescription: "visible" } });
    await flush();
    expect(document.getElementById("tip_description")).toBeNull();
    expect(innerButton().hasAttribute("aria-describedby")).toBe(false);

    innerButton().focus();
    await flush();
    expect(innerButton().getAttribute("aria-describedby")).toBe("tip_title");
    expect(wrapperEl().hasAttribute("aria-describedby")).toBe(false);

    innerButton().blur();
    await flush();
    expect(innerButton().hasAttribute("aria-describedby")).toBe(false);
  });

  it("puts aria-describedby on the wrapper when it is the button (tag=\"button\")", async() => {
    mountTooltip({ props: { tag: "button" }, defaultSlot: () => "Save" });
    await flush();

    expect(wrapperEl().getAttribute("aria-describedby")).toBe("tip_description");
    expect(wrapperEl().textContent).toBe("SaveSaves the document");
    expect(document.getElementById("tip_description").hidden).toBe(true);
  });

  it("keeps own ids in aria-describedby", async() => {
    mountTooltip({
      props: { renderDescription: "visible" },
      defaultSlot: () => h("button", { class: "inner", "aria-describedby": "hint" }, "Save"),
    });
    await flush();

    innerButton().focus();
    await flush();
    expect(innerButton().getAttribute("aria-describedby")).toBe("hint tip_title");

    innerButton().blur();
    await flush();
    expect(innerButton().getAttribute("aria-describedby")).toBe("hint");

    wrappers.splice(0).forEach(wrapper => wrapper.unmount());
    mountTooltip({ defaultSlot: () => h("button", { class: "inner", "aria-describedby": "hint" }, "Save") });
    await flush();
    expect(innerButton().getAttribute("aria-describedby")).toBe("hint tip_description");
  });

  it("has no description and no aria-describedby with is-hide", async() => {
    mountTooltip({ props: { isHide: true } });
    await flush();

    expect(document.getElementById("tip_description")).toBeNull();
    expect(innerButton().hasAttribute("aria-describedby")).toBe(false);
  });

  it("removes aria-describedby from the button on unmount", async() => {
    mountTooltip({ defaultSlot: () => h("button", { class: "inner", "aria-describedby": "hint" }, "Save") });
    await flush();
    const BUTTON = innerButton();

    wrappers.splice(0).forEach(wrapper => wrapper.unmount());
    expect(BUTTON.getAttribute("aria-describedby")).toBe("hint");
  });

  it("does not set aria-describedby with without-aria-describedby", async() => {
    mountTooltip({ props: { withoutAriaDescribedby: true } });
    await flush();

    expect(document.getElementById("tip_description")).toBeNull();
    innerButton().focus();
    await flush();
    expect(titleEl()).not.toBeNull();
    expect(innerButton().hasAttribute("aria-describedby")).toBe(false);
  });

  it("closes only the tooltip with Escape, the event does not reach e.g. a modal", async() => {
    const onKeydownModal = vi.fn();
    mountTooltip({ attrs: { onKeydown: onKeydownModal } });
    await flush();

    innerButton().focus();
    await flush();
    innerButton().dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    await flush();
    expect(titleEl()).toBeNull();
    expect(onKeydownModal).not.toHaveBeenCalled();

    innerButton().dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    expect(onKeydownModal).toHaveBeenCalledTimes(1);
  });

  it("stays open while the mouse or the focus is on it", async() => {
    mountTooltip();
    await flush();

    wrapperEl().dispatchEvent(new MouseEvent("mouseenter"));
    innerButton().focus();
    await flush();

    wrapperEl().dispatchEvent(new MouseEvent("mouseleave"));
    await flush();
    expect(titleEl()).not.toBeNull();

    wrapperEl().dispatchEvent(new MouseEvent("mouseenter"));
    innerButton().blur();
    await flush();
    expect(titleEl()).not.toBeNull();

    wrapperEl().dispatchEvent(new MouseEvent("mouseleave"));
    await new Promise(resolve => setTimeout(resolve));
    await flush();
    expect(titleEl()).toBeNull();
  });

  it("waits time-open on hover, but opens at once on focus", async() => {
    vi.useFakeTimers();
    mountTooltip({ props: { timeOpen: 300 } });
    await flush();

    wrapperEl().dispatchEvent(new MouseEvent("mouseenter"));
    vi.advanceTimersByTime(299);
    await flush();
    expect(titleEl()).toBeNull();
    vi.advanceTimersByTime(1);
    await flush();
    expect(titleEl()).not.toBeNull();

    wrapperEl().dispatchEvent(new MouseEvent("mouseleave"));
    vi.runAllTimers();
    await flush();
    expect(titleEl()).toBeNull();

    wrapperEl().dispatchEvent(new MouseEvent("mouseenter"));
    vi.advanceTimersByTime(100);
    wrapperEl().dispatchEvent(new MouseEvent("mouseleave"));
    vi.runAllTimers();
    await flush();
    expect(titleEl()).toBeNull();

    innerButton().focus();
    await flush();
    expect(titleEl()).not.toBeNull();
  });

  it("closes an open tooltip when is-hide becomes true", async() => {
    const wrapper = mount(ATooltip, {
      props: { id: "tip" },
      slots: { default: () => h("button", { class: "inner" }, "Save"), title: () => "Title" },
      attachTo: document.body,
    });
    wrappers.push(wrapper);
    await flush();

    innerButton().focus();
    await flush();
    expect(titleEl()).not.toBeNull();

    await wrapper.setProps({ isHide: true });
    await flush();
    expect(titleEl()).toBeNull();
  });

  it("accepts numbers (px) and strings for the widths", async() => {
    mountTooltip({ props: { width: 200, minWidth: "10rem", maxWidth: "50%" } });
    await flush();

    innerButton().focus();
    await flush();
    const container = document.querySelector(".a_tooltip__container");
    expect(container.style.width).toBe("200px");
    expect(container.style.minWidth).toBe("10rem");
    expect(container.style.maxWidth).toBe("50%");
  });

  it("positions the tooltip at its own element", async() => {
    mountTooltip();
    await flush();

    innerButton().focus();
    await flush();
    expect(floatingUi.autoUpdate).toHaveBeenCalledWith(wrapperEl(), expect.anything(), expect.any(Function));
  });

  it("passes arrow-padding to the arrow, also as a function with popper, reference and placement", async() => {
    mountTooltip({ props: { arrowPadding: 35 } });
    await flush();
    innerButton().focus();
    await flush();
    await new Promise(resolve => setTimeout(resolve));
    expect(floatingUi.arrow).toHaveBeenCalledWith(expect.objectContaining({ padding: 35 }));

    wrappers.splice(0).forEach(wrapper => wrapper.unmount());
    vi.clearAllMocks();

    const CALLBACK = vi.fn(() => 12);
    mountTooltip({ props: { arrowPadding: CALLBACK } });
    await flush();
    innerButton().focus();
    await flush();
    await new Promise(resolve => setTimeout(resolve));
    const OPTIONS = floatingUi.arrow.mock.calls[0][0];
    const STATE = { rects: { floating: { width: 100 }, reference: { width: 50 } }, placement: "top" };
    expect(OPTIONS(STATE).padding).toBe(12);
    expect(CALLBACK).toHaveBeenCalledWith({ popper: { width: 100 }, reference: { width: 50 }, placement: "top" });
  });
});
