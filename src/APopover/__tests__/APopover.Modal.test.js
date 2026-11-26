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

const keydown = (element, key, options = {}) => {
  const EVENT = new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true, ...options });
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
  vi.restoreAllMocks();
  document.body.innerHTML = "";
});

describe("APopover: the bottom sheet is modal", () => {
  const mountSheet = () => {
    const OUTSIDE = document.createElement("button");
    OUTSIDE.id = "outside";
    document.body.appendChild(OUTSIDE);
    return mount(APopover, {
      props: { id: "info", buttonText: "Info" },
      slots: {
        default: () => [
          h("input", { id: "first_field" }),
          h("button", { id: "last_button", type: "button" }, "OK"),
        ],
      },
      attachTo: document.body,
    });
  };

  it("aria-modal, the rest of the page inert, back after Escape with the focus on the button", async() => {
    isMobileWidth.value = true;
    const wrapper = mountSheet();
    await wrapper.find("#info_button").trigger("click");
    await flushPromises();

    expect(byId("info_popover").getAttribute("aria-modal")).toBe("true");
    expect(byId("outside").hasAttribute("inert")).toBe(true);
    // the button is in the page: inert too, the popover in the container in body not
    expect(byId("info_button").closest("[inert]")).not.toBeNull();
    expect(byId("info_popover").closest("[inert]")).toBeNull();

    keydown(byId("first_field"), "Escape");
    await flushPromises();
    expect(byId("info_popover")).toBeNull();
    expect(byId("outside").hasAttribute("inert")).toBe(false);
    expect(document.activeElement).toBe(byId("info_button"));
  });

  it("Tab and Shift+Tab go round in the sheet", async() => {
    isMobileWidth.value = true;
    const wrapper = mountSheet();
    await wrapper.find("#info_button").trigger("click");
    await flushPromises();
    const CLOSE = byId("info_popover").querySelector(".a_popover__close");
    const LAST = byId("last_button");

    LAST.focus();
    expect(keydown(LAST, "Tab").defaultPrevented).toBe(true);
    expect(document.activeElement).toBe(CLOSE);
    expect(byId("info_popover")).not.toBeNull();

    expect(keydown(CLOSE, "Tab", { shiftKey: true }).defaultPrevented).toBe(true);
    expect(document.activeElement).toBe(LAST);

    // inside: native
    byId("first_field").focus();
    expect(keydown(byId("first_field"), "Tab").defaultPrevented).toBe(false);
  });

  it("a large screen: no aria-modal, no inert; the window gets small or large while open", async() => {
    const wrapper = mountSheet();
    await wrapper.find("#info_button").trigger("click");
    await flushPromises();
    expect(byId("info_popover").hasAttribute("aria-modal")).toBe(false);
    expect(byId("outside").hasAttribute("inert")).toBe(false);

    isMobileWidth.value = true;
    await flushPromises();
    expect(byId("info_popover").getAttribute("aria-modal")).toBe("true");
    expect(byId("outside").hasAttribute("inert")).toBe(true);

    isMobileWidth.value = false;
    await flushPromises();
    expect(byId("outside").hasAttribute("inert")).toBe(false);
  });

  it("unmount while open: no inert left", async() => {
    isMobileWidth.value = true;
    const wrapper = mountSheet();
    await wrapper.find("#info_button").trigger("click");
    await flushPromises();
    wrapper.unmount();

    expect(byId("outside").hasAttribute("inert")).toBe(false);
  });
});

describe("APopover: own trigger that is no button", () => {
  const mountTrigger = render => mount(APopover, {
    props: { id: "info" },
    slots: {
      trigger: ({ attributes }) => render(attributes),
      default: () => "Text",
    },
    attachTo: document.body,
  });

  it("a span gets role button and tabindex 0, Enter and Space open and close, a warning", async() => {
    const WARN = vi.spyOn(console, "warn").mockImplementation(() => {});
    const wrapper = mountTrigger(attributes => h("span", { ...attributes, class: "my_trigger" }, "?"));
    const TRIGGER = wrapper.find(".my_trigger");

    expect(TRIGGER.attributes("role")).toBe("button");
    expect(TRIGGER.attributes("tabindex")).toBe("0");
    expect(WARN).toHaveBeenCalledTimes(1);
    expect(WARN.mock.calls[0][0]).toContain("<span>");

    const ENTER = keydown(TRIGGER.element, "Enter");
    await flushPromises();
    expect(ENTER.defaultPrevented).toBe(true);
    expect(byId("info_popover")).not.toBeNull();
    keydown(TRIGGER.element, " ");
    await flushPromises();
    expect(byId("info_popover")).toBeNull();

    // the re-render does not warn again
    await wrapper.setProps({ header: "New" });
    expect(WARN).toHaveBeenCalledTimes(1);
  });

  it("own role and tabindex stay", () => {
    vi.spyOn(console, "warn").mockImplementation(() => {});
    const wrapper = mountTrigger(attributes => h("div", { ...attributes, role: "link", tabindex: "-1" }, "?"));

    expect(wrapper.find("#info_button").attributes("role")).toBe("link");
    expect(wrapper.find("#info_button").attributes("tabindex")).toBe("-1");
  });

  it("a button: no change, no warning, Enter is native", async() => {
    const WARN = vi.spyOn(console, "warn").mockImplementation(() => {});
    const wrapper = mountTrigger(attributes => h("button", { ...attributes, type: "button" }, "?"));
    const TRIGGER = wrapper.find("#info_button");

    expect(TRIGGER.attributes("role")).toBeUndefined();
    expect(WARN).not.toHaveBeenCalled();
    expect(keydown(TRIGGER.element, "Enter").defaultPrevented).toBe(false);
    await flushPromises();
    expect(byId("info_popover")).toBeNull();
  });

  it("a link with href: only a warning, no role, Enter is native", async() => {
    const WARN = vi.spyOn(console, "warn").mockImplementation(() => {});
    const wrapper = mountTrigger(attributes => h("a", { ...attributes, href: "#info" }, "?"));
    const TRIGGER = wrapper.find("#info_button");

    expect(TRIGGER.attributes("role")).toBeUndefined();
    expect(WARN.mock.calls[0][0]).toContain("link");
    expect(keydown(TRIGGER.element, "Enter").defaultPrevented).toBe(false);
    await flushPromises();
    expect(byId("info_popover")).toBeNull();
  });
});
