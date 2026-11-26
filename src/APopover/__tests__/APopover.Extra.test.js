import {
  h,
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
  isMobileWidth,
} from "../../compositionAPI/AMobileAPI";

import APopover from "../APopover";

const keydown = (element, key) => {
  const EVENT = new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true });
  element.dispatchEvent(EVENT);
  return EVENT;
};
const byId = id => document.getElementById(id);

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
  isMobileWidth.value = undefined;
  document.body.innerHTML = "";
});

describe("APopover: own trigger (slot trigger)", () => {
  it("the own element gets the id, the ARIA attributes and the events", async() => {
    const wrapper = mount(APopover, {
      props: { id: "info" },
      slots: {
        trigger: ({ attributes, isOpen }) => h("a", {
          ...attributes,
          class: "my_trigger",
          href: "#",
          "data-open": isOpen,
        }, "Own link"),
        default: () => h("button", { id: "inside", type: "button" }, "OK"),
      },
      attachTo: document.body,
    });
    const TRIGGER = wrapper.find(".my_trigger");

    // no own button of the component
    expect(wrapper.find("button").exists()).toBe(false);
    expect(TRIGGER.attributes("id")).toBe("info_button");
    expect(TRIGGER.attributes("aria-haspopup")).toBe("dialog");
    expect(TRIGGER.attributes("aria-expanded")).toBe("false");

    TRIGGER.element.focus();
    await TRIGGER.trigger("click");
    await flushPromises();
    expect(TRIGGER.attributes("aria-expanded")).toBe("true");
    expect(TRIGGER.attributes("data-open")).toBe("true");
    expect(byId("info_popover").getAttribute("aria-labelledby")).toBe("info_button");
    expect(document.activeElement.id).toBe("inside");

    keydown(byId("inside"), "Escape");
    await flushPromises();
    expect(byId("info_popover")).toBeNull();
    // the focus goes back to the own element
    expect(document.activeElement).toBe(TRIGGER.element);
  });
});

describe("APopover: bottom sheet on mobile", () => {
  it("AMobilePlugin, small screen: a panel at the bottom with a backdrop, no arrow, always in body", async() => {
    isMobileWidth.value = true;
    const wrapper = mount(APopover, {
      props: { id: "info", buttonText: "Info", inBody: false },
      slots: { default: () => "Text" },
      attachTo: document.body,
    });
    await wrapper.find("#info_button").trigger("click");
    await flushPromises();
    const POPOVER = byId("info_popover");

    expect(POPOVER.classList.contains("a_popover_sheet")).toBe(true);
    expect(POPOVER.hasAttribute("data-placement")).toBe(false);
    expect(POPOVER.querySelector(".a_popover__arrow")).toBeNull();
    expect(byId("a_tooltip_container").contains(POPOVER)).toBe(true);
    const BACKDROP = document.querySelector(".a_popover__backdrop");
    expect(BACKDROP.getAttribute("aria-hidden")).toBe("true");

    // a tap on the backdrop is a click outside
    BACKDROP.dispatchEvent(new Event("pointerdown", { bubbles: true }));
    await flushPromises();
    expect(byId("info_popover")).toBeNull();
    expect(document.querySelector(".a_popover__backdrop")).toBeNull();
  });

  it("is-bottom-sheet-on-mobile false, or a large screen: a popover at the button", async() => {
    isMobileWidth.value = true;
    const wrapper = mount(APopover, {
      props: { id: "info", buttonText: "Info", isBottomSheetOnMobile: false },
      attachTo: document.body,
    });
    await wrapper.find("#info_button").trigger("click");
    await flushPromises();
    expect(byId("info_popover").classList.contains("a_popover_sheet")).toBe(false);
    expect(document.querySelector(".a_popover__backdrop")).toBeNull();

    await wrapper.setProps({ isBottomSheetOnMobile: true });
    expect(byId("info_popover").classList.contains("a_popover_sheet")).toBe(true);
    isMobileWidth.value = false;
    await flushPromises();
    const POPOVER = byId("info_popover");
    expect(POPOVER.classList.contains("a_popover_sheet")).toBe(false);
    expect(POPOVER.querySelector(".a_popover__arrow")).not.toBeNull();
    // the position is computed again at the button
    expect(POPOVER.getAttribute("data-placement")).toBe("bottom");
    expect(POPOVER.style.left).not.toBe("");

    // small again: no placement, the CSS places the sheet
    isMobileWidth.value = true;
    await flushPromises();
    expect(POPOVER.hasAttribute("data-placement")).toBe(false);
    expect(POPOVER.style.left).toBe("");
  });
});

describe("APopover: nested popovers", () => {
  const mountNested = () => mount(APopover, {
    props: { id: "parent", buttonText: "Parent" },
    slots: {
      default: () => h(APopover, { id: "child", buttonText: "Child" }, {
        default: () => h("input", { id: "child_field" }),
      }),
    },
    attachTo: document.body,
  });

  it("the focus and the clicks in the child keep the parent open, Escape closes the top one first", async() => {
    const wrapper = mountNested();
    await wrapper.find("#parent_button").trigger("click");
    await flushPromises();
    byId("child_button").focus();
    byId("child_button").click();
    await flushPromises();
    const FIELD = byId("child_field");

    // the child popover is in the container in body, not in the parent popover
    expect(byId("parent_popover").contains(byId("child_popover"))).toBe(false);
    expect(document.activeElement).toBe(FIELD);
    byId("child_button").dispatchEvent(new FocusEvent("focusout", { bubbles: true, relatedTarget: FIELD }));
    FIELD.dispatchEvent(new Event("pointerdown", { bubbles: true }));
    await flushPromises();
    expect(byId("parent_popover")).not.toBeNull();
    expect(byId("child_popover")).not.toBeNull();

    keydown(FIELD, "Escape");
    await flushPromises();
    expect(byId("child_popover")).toBeNull();
    expect(byId("parent_popover")).not.toBeNull();
    expect(document.activeElement.id).toBe("child_button");

    keydown(byId("child_button"), "Escape");
    await flushPromises();
    expect(byId("parent_popover")).toBeNull();
    expect(document.activeElement.id).toBe("parent_button");
  });

  it("a click in the parent closes only the child", async() => {
    const wrapper = mountNested();
    await wrapper.find("#parent_button").trigger("click");
    await flushPromises();
    byId("child_button").click();
    await flushPromises();

    byId("parent_popover").dispatchEvent(new Event("pointerdown", { bubbles: true }));
    await flushPromises();
    expect(byId("child_popover")).toBeNull();
    expect(byId("parent_popover")).not.toBeNull();
  });
});

describe("APopover: z-index", () => {
  it("the prop sets the token on the popover and the backdrop, without it the CSS token stays", async() => {
    const wrapper = mount(APopover, {
      props: { id: "info", buttonText: "Info" },
      attachTo: document.body,
    });
    await wrapper.find("#info_button").trigger("click");
    await flushPromises();
    expect(byId("info_popover").getAttribute("style") || "").not.toContain("--a_popover_z_index");

    await wrapper.setProps({ zIndex: 1040 });
    expect(byId("info_popover").style.getPropertyValue("--a_popover_z_index")).toBe("1040");

    isMobileWidth.value = true;
    await flushPromises();
    expect(document.querySelector(".a_popover__backdrop").style.getPropertyValue("--a_popover_z_index")).toBe("1040");
  });
});
