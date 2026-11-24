import {
  h,
  nextTick,
} from "vue";
import {
  afterEach,
  beforeAll,
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
  ADropdown,
} from "../../index";

const ACTIONS = [
  { type: "button", text: "Edit" },
  { type: "button", text: "Copy" },
  { type: "button", text: "Delete" },
];

const wrappers = [];

const mountDropdown = ({ props = {}, slots = {}, withInput = false } = {}) => {
  const wrapper = mount({
    render: () => h("div", [
      withInput && h("input", { id: "other_field" }),
      h(ADropdown, { id: "dd", buttonText: "Actions", actions: ACTIONS, ...props }, slots),
    ]),
  }, { attachTo: document.body });
  wrappers.push(wrapper);
  return wrapper;
};

const button = () => document.getElementById("dd");
const menu = () => document.getElementById("dd_menu");
const items = () => Array.from(document.querySelectorAll("[role=\"menuitem\"]"));
const flush = async() => {
  await nextTick();
  vi.runAllTimers();
  await nextTick();
};
const key = async(target, keyName, init = {}) => {
  target.dispatchEvent(new KeyboardEvent("keydown", { key: keyName, bubbles: true, cancelable: true, ...init }));
  await flush();
};
const open = async() => {
  button().focus();
  button().click();
  await flush();
};

describe("ADropdown", () => {
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

  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    wrappers.splice(0).forEach(wrapper => wrapper.unmount());
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  describe("menu (actions)", () => {
    it("has the WAI-ARIA menu roles and connects the button with the menu", async() => {
      mountDropdown();
      await flush();
      expect(button().getAttribute("aria-haspopup")).toBe("menu");
      expect(button().getAttribute("aria-expanded")).toBe("false");

      await open();
      expect(button().getAttribute("aria-expanded")).toBe("true");
      expect(button().getAttribute("aria-controls")).toBe("dd_menu");
      expect(menu().getAttribute("role")).toBe("menu");
      expect(menu().getAttribute("aria-labelledby")).toBe("dd");
      expect(menu().parentElement.hasAttribute("aria-labelledby")).toBe(false);
      expect(items().map(item => item.textContent.trim())).toEqual(["Edit", "Copy", "Delete"]);
      expect(items().every(item => item.getAttribute("tabindex") === "-1")).toBe(true);
      expect(Array.from(menu().children).every(li => li.getAttribute("role") === "none")).toBe(true);
    });

    it("focuses the first item when opened", async() => {
      mountDropdown();
      await flush();
      await open();

      expect(document.activeElement.textContent.trim()).toBe("Edit");
    });

    it("goes round with the arrows and uses Home and End", async() => {
      mountDropdown();
      await flush();
      await open();

      await key(document.activeElement, "ArrowUp");
      expect(document.activeElement.textContent.trim()).toBe("Delete");
      await key(document.activeElement, "ArrowDown");
      expect(document.activeElement.textContent.trim()).toBe("Edit");
      await key(document.activeElement, "End");
      expect(document.activeElement.textContent.trim()).toBe("Delete");
      await key(document.activeElement, "Home");
      expect(document.activeElement.textContent.trim()).toBe("Edit");
    });

    it("goes to the next item that starts with the typed letter", async() => {
      mountDropdown();
      await flush();
      await open();

      await key(document.activeElement, "d");
      expect(document.activeElement.textContent.trim()).toBe("Delete");
      await key(document.activeElement, "C");
      expect(document.activeElement.textContent.trim()).toBe("Copy");
    });

    it("opens at the last item with ArrowUp on the closed button", async() => {
      mountDropdown();
      await flush();
      button().focus();

      await key(button(), "ArrowUp");
      expect(button().getAttribute("aria-expanded")).toBe("true");
      expect(document.activeElement.textContent.trim()).toBe("Delete");
    });

    it("closes with Escape and gives the focus back to the button", async() => {
      mountDropdown();
      await flush();
      await open();

      await key(document.activeElement, "Escape");
      expect(button().getAttribute("aria-expanded")).toBe("false");
      expect(document.activeElement).toBe(button());
    });

    it("skips disabled items", async() => {
      mountDropdown({ props: { actions: [ACTIONS[0], { ...ACTIONS[1], disabled: true }, ACTIONS[2]] } });
      await flush();
      await open();

      await key(document.activeElement, "ArrowDown");
      expect(document.activeElement.textContent.trim()).toBe("Delete");
    });

    it("has a separator for a divider", async() => {
      mountDropdown({ props: { actions: [ACTIONS[0], { type: "divider" }, ACTIONS[1]] } });
      await flush();
      await open();

      const DIVIDER = menu().querySelector(".a_dropdown__divider");
      expect(DIVIDER.getAttribute("role")).toBe("separator");
      expect(DIVIDER.hasAttribute("aria-hidden")).toBe(false);
    });

    it("does not handle the keys when the focus is in another field (opened by hover)", async() => {
      mountDropdown({ props: { triggers: ["hover"] }, withInput: true });
      await flush();
      button().dispatchEvent(new MouseEvent("mouseenter"));
      await flush();
      const FIELD = document.getElementById("other_field");
      FIELD.focus();

      const EVENT = new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true, cancelable: true });
      FIELD.dispatchEvent(EVENT);
      expect(EVENT.defaultPrevented).toBe(false);
      expect(document.activeElement).toBe(FIELD);
    });
  });

  describe("type header", () => {
    const WITH_HEADERS = [
      { type: "header", text: "Export" },
      { type: "button", text: "PDF" },
      { type: "button", text: "CSV" },
      { type: "header", text: "Share" },
      { type: "button", text: "E-mail" },
      { type: "header", text: "Empty" },
    ];

    it("makes a labelled group for the following actions and drops empty headers", async() => {
      mountDropdown({ props: { actions: WITH_HEADERS } });
      await flush();
      await open();

      const GROUPS = Array.from(menu().querySelectorAll("[role=\"group\"]"));
      expect(GROUPS).toHaveLength(2);
      const LABELS = GROUPS.map(group => document.getElementById(group.getAttribute("aria-labelledby")).textContent.trim());
      expect(LABELS).toEqual(["Export", "Share"]);
      expect(GROUPS[0].querySelectorAll("[role=\"menuitem\"]")).toHaveLength(2);
      expect(menu().textContent).not.toContain("Empty");
    });

    it("moves with the arrows over the groups and skips the headers", async() => {
      mountDropdown({ props: { actions: WITH_HEADERS } });
      await flush();
      await open();

      expect(document.activeElement.textContent.trim()).toBe("PDF");
      await key(document.activeElement, "ArrowDown");
      await key(document.activeElement, "ArrowDown");
      expect(document.activeElement.textContent.trim()).toBe("E-mail");
    });

    it("ends a group with a divider", async() => {
      mountDropdown({
        props: {
          actions: [
            { type: "header", text: "Export" },
            { type: "button", text: "PDF" },
            { type: "divider" },
            { type: "button", text: "Settings" },
          ],
        },
      });
      await flush();
      await open();

      const GROUP = menu().querySelector("[role=\"group\"]");
      expect(GROUP.textContent).toContain("PDF");
      expect(GROUP.textContent).not.toContain("Settings");
    });
  });

  describe("own content (disclosure)", () => {
    it("has no menu roles and no aria-haspopup with the slot dropdown", async() => {
      mountDropdown({
        props: { actions: [] },
        slots: { dropdown: () => h("li", [h("input", { class: "own_field" })]) },
      });
      await flush();
      expect(button().hasAttribute("aria-haspopup")).toBe(false);
      expect(button().getAttribute("aria-expanded")).toBe("false");

      await open();
      expect(menu().hasAttribute("role")).toBe(false);
      expect(button().getAttribute("aria-controls")).toBe("dd_menu");
    });

    it("does not use letters for the search in a field of the dropdown", async() => {
      mountDropdown({
        props: { actions: [] },
        slots: { dropdown: () => h("li", [h("input", { class: "own_field" }), h("button", "Apply")]) },
      });
      await flush();
      await open();
      const FIELD = document.querySelector(".own_field");
      FIELD.focus();

      const EVENT = new KeyboardEvent("keydown", { key: "a", bubbles: true, cancelable: true });
      FIELD.dispatchEvent(EVENT);
      expect(EVENT.defaultPrevented).toBe(false);
    });
  });

  it("hides a rendered but closed menu with aria-hidden (persist)", async() => {
    mountDropdown({ props: { persist: true } });
    await flush();
    await open();
    await key(document.activeElement, "Escape");

    expect(menu().parentElement.getAttribute("aria-hidden")).toBe("true");
  });
});
