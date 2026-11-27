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
  flushPromises,
  mount,
} from "@vue/test-utils";

import {
  isCurrentPopupOpen,
} from "../../compositionAPI/APopupAPI";

import APopover from "../APopover";
import {
  componentsPluginOptions,
} from "../../plugins/AComponentsPlugin";

const mountPopover = (props = {}, slots = {}) => mount(APopover, {
  props: {
    id: "info",
    buttonText: "Info",
    ...props,
  },
  slots: {
    default: () => [
      h("input", { id: "first_field" }),
      h("button", { id: "last_button", type: "button" }, "OK"),
    ],
    ...slots,
  },
  attachTo: document.body,
});

const getPopover = () => document.getElementById("info_popover");
const getButton = wrapper => wrapper.find("#info_button");
const openByClick = async wrapper => {
  await getButton(wrapper).trigger("click");
  await flushPromises();
};
const keydown = (element, key, options = {}) => {
  const EVENT = new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true, ...options });
  element.dispatchEvent(EVENT);
  return EVENT;
};

beforeAll(() => {
  vi.stubGlobal("ResizeObserver", class {
    observe() {
    }
    unobserve() {
    }
    disconnect() {
    }
  });
});

afterEach(() => {
  delete componentsPluginOptions.APopover;
  vi.useRealTimers();
  document.body.innerHTML = "";
});

describe("APopover: the button", () => {
  it("is a button of a dialog, closed", () => {
    const BUTTON = getButton(mountPopover());

    expect(BUTTON.element.tagName).toBe("BUTTON");
    expect(BUTTON.attributes("type")).toBe("button");
    expect(BUTTON.attributes("aria-haspopup")).toBe("dialog");
    expect(BUTTON.attributes("aria-expanded")).toBe("false");
    expect(BUTTON.attributes("aria-controls")).toBeUndefined();
    expect(getPopover()).toBeNull();
  });

  it("a button with only an icon gets a name for the screen reader", () => {
    const ICON_ONLY = getButton(mountPopover({ buttonText: undefined, buttonIconLeft: "<svg></svg>" }));
    expect(ICON_ONLY.text()).toContain("_A_POPOVER_BUTTON_");

    document.body.innerHTML = "";
    expect(getButton(mountPopover()).text()).not.toContain("_A_POPOVER_BUTTON_");
  });

  it("disabled: does not open", async() => {
    const wrapper = mountPopover({ disabled: true });
    await openByClick(wrapper);

    expect(getButton(wrapper).attributes("disabled")).toBeDefined();
    expect(getPopover()).toBeNull();
    wrapper.vm.open();
    await flushPromises();
    expect(getPopover()).toBeNull();
  });
});

describe("APopover: open and close", () => {
  it("the click opens a non-modal dialog, the focus goes to the first field", async() => {
    const wrapper = mountPopover({ header: "Details" });
    await openByClick(wrapper);
    const POPOVER = getPopover();

    expect(POPOVER.getAttribute("role")).toBe("dialog");
    expect(POPOVER.hasAttribute("aria-modal")).toBe(false);
    expect(POPOVER.getAttribute("aria-labelledby")).toBe("info_header");
    expect(document.getElementById("info_header").textContent).toContain("Details");
    expect(getButton(wrapper).attributes("aria-expanded")).toBe("true");
    expect(getButton(wrapper).attributes("aria-controls")).toBe("info_popover");
    expect(document.activeElement.id).toBe("first_field");
    expect(wrapper.emitted("update:modelValue")).toEqual([[true]]);
    expect(wrapper.emitted("open")).toEqual([[{ trigger: "click" }]]);
    expect(isCurrentPopupOpen({ id: "info" })).toBe(true);

    await openByClick(wrapper);
    expect(getPopover()).toBeNull();
    expect(wrapper.emitted("close")).toEqual([[{ trigger: "click" }]]);
    expect(isCurrentPopupOpen({ id: "info" })).toBe(false);
  });

  it("without a header the button names the dialog; focus-on-open popover and none", async() => {
    const wrapper = mountPopover({ focusOnOpen: "popover" });
    await openByClick(wrapper);

    expect(getPopover().getAttribute("aria-labelledby")).toBe("info_button");
    expect(document.activeElement).toBe(getPopover());

    await openByClick(wrapper);
    await wrapper.setProps({ focusOnOpen: "none" });
    getButton(wrapper).element.focus();
    await openByClick(wrapper);
    expect(document.activeElement).toBe(getButton(wrapper).element);
  });

  it("Escape closes and gives the focus back to the button, only with the focus in the popover", async() => {
    // the focus can leave the popover only without close-on-focus-out
    const wrapper = mountPopover({ closeOnFocusOut: false });
    await openByClick(wrapper);

    const OTHER = document.createElement("input");
    document.body.appendChild(OTHER);
    OTHER.focus();
    keydown(OTHER, "Escape");
    await flushPromises();
    expect(getPopover()).not.toBeNull();

    document.getElementById("first_field").focus();
    const EVENT = keydown(document.getElementById("first_field"), "Escape");
    await flushPromises();
    expect(EVENT.defaultPrevented).toBe(true);
    expect(getPopover()).toBeNull();
    expect(document.activeElement).toBe(getButton(wrapper).element);
    expect(wrapper.emitted("close")).toEqual([[{ trigger: "escape" }]]);
  });

  it("use-escape false: Escape does nothing", async() => {
    const wrapper = mountPopover({ useEscape: false });
    await openByClick(wrapper);
    keydown(document.getElementById("first_field"), "Escape");
    await flushPromises();

    expect(getPopover()).not.toBeNull();
  });

  it("the close button and close() of the slot give the focus back to the button", async() => {
    const wrapper = mountPopover({}, {
      footer: ({ close }) => h("button", { id: "slot_close", type: "button", onClick: close }, "Done"),
    });
    await openByClick(wrapper);
    const CLOSE = getPopover().querySelector(".a_popover__close");

    expect(CLOSE.textContent).toContain("_A_POPOVER_CLOSE_");
    CLOSE.click();
    await flushPromises();
    expect(getPopover()).toBeNull();
    expect(document.activeElement).toBe(getButton(wrapper).element);

    await openByClick(wrapper);
    document.getElementById("slot_close").click();
    await flushPromises();
    expect(getPopover()).toBeNull();
    expect(wrapper.emitted("close")).toEqual([[{ trigger: "close" }], [{ trigger: "close" }]]);
  });

  it("a click outside closes without moving the focus, a click inside does not", async() => {
    const wrapper = mountPopover();
    await openByClick(wrapper);

    document.getElementById("first_field").dispatchEvent(new Event("pointerdown", { bubbles: true }));
    await flushPromises();
    expect(getPopover()).not.toBeNull();

    const OTHER = document.createElement("input");
    document.body.appendChild(OTHER);
    // pointerdown comes before the focus
    OTHER.dispatchEvent(new Event("pointerdown", { bubbles: true }));
    OTHER.focus();
    await flushPromises();
    expect(getPopover()).toBeNull();
    expect(document.activeElement).toBe(OTHER);
    expect(wrapper.emitted("close")).toEqual([[{ trigger: "outside" }]]);
  });

  it("close-on-click-outside false", async() => {
    const wrapper = mountPopover({ closeOnClickOutside: false });
    await openByClick(wrapper);
    document.body.dispatchEvent(new Event("pointerdown", { bubbles: true }));
    await flushPromises();

    expect(getPopover()).not.toBeNull();
  });

  it("the focus leaves the button and the popover: closes; inside: stays open", async() => {
    const wrapper = mountPopover();
    await openByClick(wrapper);
    const FIELD = document.getElementById("first_field");

    FIELD.dispatchEvent(new FocusEvent("focusout", { bubbles: true, relatedTarget: document.getElementById("last_button") }));
    await flushPromises();
    expect(getPopover()).not.toBeNull();

    const OTHER = document.createElement("input");
    document.body.appendChild(OTHER);
    FIELD.dispatchEvent(new FocusEvent("focusout", { bubbles: true, relatedTarget: OTHER }));
    await flushPromises();
    expect(getPopover()).toBeNull();
    expect(wrapper.emitted("close")).toEqual([[{ trigger: "focusout" }]]);
  });
});

describe("APopover: Tab in the container in body", () => {
  const mountWithNext = () => {
    const wrapper = mount({
      render: () => [
        h(APopover, { id: "info", buttonText: "Info" }, {
          default: () => [
            h("input", { id: "first_field" }),
            h("button", { id: "last_button", type: "button" }, "OK"),
          ],
        }),
        h("button", { id: "after", type: "button" }, "After"),
      ],
    }, { attachTo: document.body });
    return wrapper;
  };

  it("Tab on the last element goes to the element after the button and closes", async() => {
    const wrapper = mountWithNext();
    await wrapper.find("#info_button").trigger("click");
    await flushPromises();

    // the popover is in the container in body, not after the button
    expect(document.getElementById("a_tooltip_container").contains(getPopover())).toBe(true);
    const LAST = document.getElementById("last_button");
    LAST.focus();
    const EVENT = keydown(LAST, "Tab");
    await flushPromises();
    expect(EVENT.defaultPrevented).toBe(true);
    expect(document.activeElement.id).toBe("after");
    expect(getPopover()).toBeNull();
  });

  it("Shift+Tab on the first element (the close button) goes to the button, the popover stays", async() => {
    const wrapper = mountWithNext();
    await wrapper.find("#info_button").trigger("click");
    await flushPromises();

    // from the field Shift+Tab goes natively to the close button, the first element of the popover
    expect(keydown(document.getElementById("first_field"), "Tab", { shiftKey: true }).defaultPrevented).toBe(false);
    const CLOSE = getPopover().querySelector(".a_popover__close");
    CLOSE.focus();
    const EVENT = keydown(CLOSE, "Tab", { shiftKey: true });
    await flushPromises();
    expect(EVENT.defaultPrevented).toBe(true);
    expect(document.activeElement.id).toBe("info_button");
    expect(getPopover()).not.toBeNull();
  });

  it("in-body false and close-on-focus-out false: Tab after the last element skips the popover, it stays open", async() => {
    const wrapper = mount({
      render: () => [
        h(APopover, { id: "info", buttonText: "Info", inBody: false, closeOnFocusOut: false }, {
          default: () => h("button", { id: "last_button", type: "button" }, "OK"),
        }),
        h("button", { id: "after", type: "button" }, "After"),
      ],
    }, { attachTo: document.body });
    await wrapper.find("#info_button").trigger("click");
    await flushPromises();

    const LAST = document.getElementById("last_button");
    LAST.focus();
    keydown(LAST, "Tab");
    await flushPromises();
    expect(document.activeElement.id).toBe("after");
    expect(getPopover()).not.toBeNull();
  });

  it("Tab inside moves natively", async() => {
    const wrapper = mountWithNext();
    await wrapper.find("#info_button").trigger("click");
    await flushPromises();

    expect(keydown(document.getElementById("first_field"), "Tab").defaultPrevented).toBe(false);
  });
});

describe("APopover: v-model, hover, options", () => {
  it("v-model: open from the start, closed from outside, the click only asks", async() => {
    const wrapper = mountPopover({ modelValue: true });
    await flushPromises();
    expect(getPopover()).not.toBeNull();
    // open from the start: in the list of the popups (AModal) and Escape works
    expect(isCurrentPopupOpen({ id: "info" })).toBe(true);
    document.getElementById("first_field").focus();
    keydown(document.getElementById("first_field"), "Escape");
    expect(wrapper.emitted("update:modelValue")).toEqual([[false]]);

    // the parent takes the close of Escape: the trigger stays escape
    await wrapper.setProps({ modelValue: false });
    await flushPromises();
    expect(getPopover()).toBeNull();
    expect(wrapper.emitted("close")).toEqual([[{ trigger: "escape" }]]);

    // opened and closed only from outside
    await wrapper.setProps({ modelValue: true });
    await flushPromises();
    await wrapper.setProps({ modelValue: false });
    await flushPromises();
    expect(wrapper.emitted("close")[1]).toEqual([{ trigger: "model" }]);

    // the parent does not change the model: the popover stays closed
    await openByClick(wrapper);
    expect(wrapper.emitted("update:modelValue").at(-1)).toEqual([true]);
    expect(getPopover()).toBeNull();
    expect(getPopover()).toBeNull();
  });

  it("hover: opens after the delay without the focus, the popover can be hovered, Escape closes", async() => {
    vi.useFakeTimers();
    const wrapper = mountPopover({ trigger: "hover", openDelay: 100, closeDelay: 200 });
    const BUTTON = getButton(wrapper);
    BUTTON.element.focus();

    await BUTTON.trigger("mouseenter");
    vi.advanceTimersByTime(99);
    await nextTick();
    expect(getPopover()).toBeNull();
    vi.advanceTimersByTime(1);
    await nextTick();
    await nextTick();
    expect(getPopover()).not.toBeNull();
    expect(document.activeElement).toBe(BUTTON.element);

    await BUTTON.trigger("mouseleave");
    getPopover().dispatchEvent(new Event("mouseenter"));
    vi.advanceTimersByTime(500);
    await nextTick();
    expect(getPopover()).not.toBeNull();

    keydown(document.body, "Escape");
    await nextTick();
    await nextTick();
    expect(getPopover()).toBeNull();
  });

  it("hover: mouseleave closes after the delay, a click keeps the popover open", async() => {
    vi.useFakeTimers();
    const wrapper = mountPopover({ trigger: "hover", openDelay: 0, closeDelay: 200 });
    const BUTTON = getButton(wrapper);

    await BUTTON.trigger("mouseenter");
    vi.advanceTimersByTime(0);
    await nextTick();
    await nextTick();
    await BUTTON.trigger("mouseleave");
    vi.advanceTimersByTime(200);
    await nextTick();
    await nextTick();
    expect(getPopover()).toBeNull();

    await BUTTON.trigger("mouseenter");
    vi.advanceTimersByTime(0);
    await nextTick();
    await nextTick();
    await BUTTON.trigger("click");
    await BUTTON.trigger("mouseleave");
    vi.advanceTimersByTime(500);
    await nextTick();
    expect(getPopover()).not.toBeNull();
  });

  it("in-body false: the popover is after the button", async() => {
    const wrapper = mountPopover({ inBody: false });
    await openByClick(wrapper);

    expect(getButton(wrapper).element.nextElementSibling).toBe(getPopover());
  });

  it("arrow, close button and the defaults of AComponentsPlugin", async() => {
    const wrapper = mountPopover();
    await openByClick(wrapper);
    expect(getPopover().querySelector(".a_popover__arrow").getAttribute("aria-hidden")).toBe("true");
    expect(getPopover().querySelector(".a_popover__close")).not.toBeNull();
    wrapper.unmount();

    componentsPluginOptions.APopover = { props: { hasArrow: false, hasCloseButton: false } };
    await openByClick(mountPopover());
    expect(getPopover().querySelector(".a_popover__arrow")).toBeNull();
    expect(getPopover().querySelector(".a_popover__close")).toBeNull();
  });

  it("the methods open, close and toggle", async() => {
    const wrapper = mountPopover();

    wrapper.vm.open();
    await flushPromises();
    expect(getPopover()).not.toBeNull();
    expect(wrapper.emitted("open")).toEqual([[{ trigger: "api" }]]);
    wrapper.vm.toggle();
    await flushPromises();
    expect(getPopover()).toBeNull();
    wrapper.vm.toggle();
    await flushPromises();
    wrapper.vm.close();
    await flushPromises();
    expect(getPopover()).toBeNull();
  });

  it("the slots header and button, popover-class and popover-attributes", async() => {
    const wrapper = mountPopover({ popoverClass: "my_popover", popoverAttributes: { "data-test": "x" } }, {
      button: () => "Own button",
      header: () => "Own header",
    });
    expect(getButton(wrapper).text()).toContain("Own button");
    await openByClick(wrapper);

    expect(getPopover().classList.contains("my_popover")).toBe(true);
    expect(getPopover().getAttribute("data-test")).toBe("x");
    expect(document.getElementById("info_header").textContent).toBe("Own header");
  });
});
