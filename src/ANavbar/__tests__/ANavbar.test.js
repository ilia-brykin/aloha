import {
  nextTick,
} from "vue";
import {
  afterAll,
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

import ANavbar from "../ANavbar";

const keydown = (element, key) => {
  const EVENT = new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true });
  element.dispatchEvent(EVENT);
  return EVENT;
};
const byId = id => document.getElementById(id);

// jsdom has no layout: the widths come from the classes
let listWidth = 0;
let itemWidth = 100;
let listGap = 0;
let resizeCallbacks = [];
const OFFSET_WIDTH = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "offsetWidth");
const CLIENT_WIDTH = Object.getOwnPropertyDescriptor(Element.prototype, "clientWidth");

beforeAll(() => {
  vi.stubGlobal("ResizeObserver", class {
    constructor(callback) {
      resizeCallbacks.push(callback);
    }
    observe() {
    }
    unobserve() {
    }
    disconnect() {
    }
  });
  Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
    configurable: true,
    get() {
      if (this.classList.contains("a_navbar__more")) {
        return 40;
      }
      return this.classList.contains("a_navbar__item_top") ? itemWidth : 0;
    },
  });
  Object.defineProperty(Element.prototype, "clientWidth", {
    configurable: true,
    get() {
      return this.classList.contains("a_navbar__list") ? listWidth : 0;
    },
  });
});

// the gap of the list (jsdom computes no flex gap)
const GET_COMPUTED_STYLE = window.getComputedStyle;
beforeAll(() => {
  vi.spyOn(window, "getComputedStyle").mockImplementation((element, ...args) => {
    const STYLE = GET_COMPUTED_STYLE(element, ...args);
    return element.classList?.contains("a_navbar__list") ? { ...STYLE, direction: STYLE.direction, columnGap: `${ listGap }px` } : STYLE;
  });
});

afterAll(() => {
  Object.defineProperty(HTMLElement.prototype, "offsetWidth", OFFSET_WIDTH);
  Object.defineProperty(Element.prototype, "clientWidth", CLIENT_WIDTH);
  vi.unstubAllGlobals();
});

const DATA = [
  { id: "home", label: "Home", href: "/home", isActive: true },
  {
    id: "products",
    label: "Products",
    children: [
      { id: "a", label: "Product A", href: "/a" },
      {
        id: "b",
        label: "Product B",
        children: [
          { id: "b1", label: "B one", href: "/b1" },
          { id: "b2", label: "B two", href: "/b2" },
        ],
      },
      { id: "c", label: "Product C", href: "/c" },
    ],
  },
  {
    id: "docs",
    label: "Docs",
    href: "/docs",
    children: [
      { id: "api", label: "API", href: "/api" },
    ],
  },
  { id: "contact", label: "Contact", href: "/contact" },
];

let wrappers = [];
const mountNavbar = (props = {}, options = {}) => {
  const WRAPPER = mount(ANavbar, {
    attachTo: document.body,
    props: { id: "nav", data: DATA, ...props },
    ...options,
  });
  wrappers.push(WRAPPER);
  return WRAPPER;
};

afterEach(() => {
  wrappers.forEach(wrapper => wrapper.unmount());
  wrappers = [];
  isMobileWidth.value = undefined;
  listWidth = 0;
  itemWidth = 100;
  listGap = 0;
  resizeCallbacks = [];
  vi.useRealTimers();
  document.body.innerHTML = "";
});

describe("ANavbar: structure (disclosure navigation)", () => {
  it("a nav landmark with a name, links, buttons without menu roles", async() => {
    const wrapper = mountNavbar({ label: "Main" });
    await flushPromises();
    const NAV = wrapper.find("nav");
    expect(NAV.attributes("aria-label")).toBe("Main");
    expect(NAV.attributes("id")).toBe("nav");
    expect(wrapper.find("[role=menu]").exists()).toBe(false);
    expect(wrapper.find("[role=menubar]").exists()).toBe(false);
    const HOME = wrapper.find("a[href='/home']");
    expect(HOME.attributes("aria-current")).toBe("page");
    expect(wrapper.find("a[href='/contact']").attributes("aria-current")).toBeUndefined();
    const BUTTON = byId("nav_button_1");
    expect(BUTTON.tagName).toBe("BUTTON");
    expect(BUTTON.getAttribute("aria-expanded")).toBe("false");
    expect(BUTTON.textContent).toContain("Products");
    expect(byId("nav_submenu_1")).toBeNull();
  });

  it("without a label: the text navigation, own texts by the prop texts", async() => {
    const wrapper = mountNavbar({ texts: { navigation: "Site" } });
    await flushPromises();
    expect(wrapper.find("nav").attributes("aria-label")).toBe("Site");
  });

  it("a click opens and closes the submenu, aria-controls points to it", async() => {
    mountNavbar();
    await flushPromises();
    const BUTTON = byId("nav_button_1");
    BUTTON.click();
    await flushPromises();
    expect(BUTTON.getAttribute("aria-expanded")).toBe("true");
    expect(BUTTON.getAttribute("aria-controls")).toBe("nav_submenu_1");
    const SUBMENU = byId("nav_submenu_1");
    expect(SUBMENU.classList.contains("a_navbar__submenu_floating")).toBe(true);
    expect(SUBMENU.querySelectorAll(":scope > li")).toHaveLength(3);
    BUTTON.click();
    await flushPromises();
    expect(BUTTON.getAttribute("aria-expanded")).toBe("false");
    expect(byId("nav_submenu_1")).toBeNull();
  });

  it("deep levels stay open together, another item of the bar closes them", async() => {
    mountNavbar();
    await flushPromises();
    byId("nav_button_1").click();
    await flushPromises();
    byId("nav_button_1.1").click();
    await flushPromises();
    expect(byId("nav_submenu_1")).not.toBeNull();
    expect(byId("nav_submenu_1.1").textContent).toContain("B two");
    expect(byId("nav_button_1.1").closest("li").classList.contains("a_navbar__item_level_1")).toBe(true);
    byId("nav_button_2").click();
    await flushPromises();
    expect(byId("nav_submenu_1")).toBeNull();
    expect(byId("nav_submenu_2")).not.toBeNull();
  });

  it("split item: the link and a toggle button with the name for the screen reader", async() => {
    const wrapper = mountNavbar({ texts: { submenu: "Submenu: {{ label }}" } });
    await flushPromises();
    const LI = wrapper.find("a[href='/docs']").element.closest("li");
    expect(LI.classList.contains("a_navbar__item_split")).toBe(true);
    const TOGGLE = byId("nav_button_2");
    expect(TOGGLE.classList.contains("a_navbar__toggle")).toBe(true);
    expect(TOGGLE.textContent).toContain("Submenu: Docs");
  });

  it("the way to the current page is marked", async() => {
    const wrapper = mountNavbar({
      data: [
        { id: "x", label: "X", children: [{ id: "y", label: "Y", children: [{ id: "z", label: "Z", href: "/z", isActive: true }] }] },
        { id: "w", label: "W", children: [{ id: "v", label: "V", href: "/v" }] },
      ],
    });
    await flushPromises();
    const ITEMS = wrapper.findAll(".a_navbar__item_top");
    expect(ITEMS[0].classes()).toContain("a_navbar__item_active_parent");
    expect(ITEMS[1].classes()).not.toContain("a_navbar__item_active_parent");
  });

  it("keyChildren, keyLabel and keyId", async() => {
    mountNavbar({
      data: [{ key: "k", name: "Group", items: [{ key: "i", name: "Inner", href: "/i" }] }],
      keyChildren: "items",
      keyId: "key",
      keyLabel: "name",
    });
    await flushPromises();
    expect(byId("nav_button_0").textContent).toContain("Group");
    byId("nav_button_0").click();
    await flushPromises();
    expect(byId("nav_submenu_0").textContent).toContain("Inner");
  });
});

describe("ANavbar: closing", () => {
  it("a pointerdown outside closes all, inside not", async() => {
    mountNavbar();
    await flushPromises();
    byId("nav_button_1").click();
    await flushPromises();
    byId("nav_submenu_1").dispatchEvent(new Event("pointerdown", { bubbles: true }));
    await flushPromises();
    expect(byId("nav_submenu_1")).not.toBeNull();
    document.body.dispatchEvent(new Event("pointerdown", { bubbles: true }));
    await flushPromises();
    expect(byId("nav_submenu_1")).toBeNull();
  });

  it("the focus outside the navigation closes all", async() => {
    const OUTSIDE = document.createElement("button");
    document.body.appendChild(OUTSIDE);
    const wrapper = mountNavbar();
    await flushPromises();
    byId("nav_button_1").click();
    await flushPromises();
    // inside: stays open
    await wrapper.find("nav").trigger("focusout", { relatedTarget: byId("nav_button_2") });
    expect(byId("nav_submenu_1")).not.toBeNull();
    await wrapper.find("nav").trigger("focusout", { relatedTarget: OUTSIDE });
    expect(byId("nav_submenu_1")).toBeNull();
  });

  it("Escape closes the deepest level and focuses its button, the event does not go further", async() => {
    mountNavbar();
    await flushPromises();
    byId("nav_button_1").click();
    await flushPromises();
    byId("nav_button_1.1").click();
    await flushPromises();
    const B1 = byId("nav_submenu_1.1").querySelector("a");
    B1.focus();
    // e.g. a modal around must not close
    const onDocumentKeydown = vi.fn();
    document.addEventListener("keydown", onDocumentKeydown);
    const EVENT = keydown(B1, "Escape");
    document.removeEventListener("keydown", onDocumentKeydown);
    await flushPromises();
    expect(EVENT.defaultPrevented).toBe(true);
    expect(onDocumentKeydown).not.toHaveBeenCalled();
    expect(byId("nav_submenu_1.1")).toBeNull();
    expect(byId("nav_submenu_1")).not.toBeNull();
    expect(document.activeElement).toBe(byId("nav_button_1.1"));
    keydown(document.activeElement, "Escape");
    await flushPromises();
    expect(byId("nav_submenu_1")).toBeNull();
    expect(document.activeElement).toBe(byId("nav_button_1"));
    // nothing open: Escape is not taken
    expect(keydown(document.activeElement, "Escape").defaultPrevented).toBe(false);
  });

  it("a link emits navigate with the item and closes all", async() => {
    const wrapper = mountNavbar();
    await flushPromises();
    byId("nav_button_1").click();
    await flushPromises();
    byId("nav_submenu_1").querySelector("a[href='/a']").click();
    await flushPromises();
    expect(wrapper.emitted("navigate")[0][0].item.id).toBe("a");
    expect(byId("nav_submenu_1")).toBeNull();
  });
});

describe("ANavbar: keyboard", () => {
  it("the bar: ArrowRight / ArrowLeft go round, Home / End", async() => {
    const wrapper = mountNavbar();
    await flushPromises();
    const CONTROLS = wrapper.findAll(".a_navbar__item_top > .a_navbar__control").map(item => item.element);
    expect(CONTROLS).toHaveLength(4);
    CONTROLS[0].focus();
    keydown(CONTROLS[0], "ArrowRight");
    expect(document.activeElement).toBe(CONTROLS[1]);
    keydown(CONTROLS[1], "ArrowLeft");
    expect(document.activeElement).toBe(CONTROLS[0]);
    keydown(CONTROLS[0], "ArrowLeft");
    expect(document.activeElement).toBe(CONTROLS[3]);
    keydown(CONTROLS[3], "Home");
    expect(document.activeElement).toBe(CONTROLS[0]);
    keydown(CONTROLS[0], "End");
    expect(document.activeElement).toBe(CONTROLS[3]);
  });

  it("ArrowDown opens and focuses the first item, in the submenu ArrowDown / ArrowUp", async() => {
    mountNavbar();
    await flushPromises();
    const BUTTON = byId("nav_button_1");
    BUTTON.focus();
    const EVENT = keydown(BUTTON, "ArrowDown");
    expect(EVENT.defaultPrevented).toBe(true);
    await flushPromises();
    const FIRST = byId("nav_submenu_1").querySelector("a[href='/a']");
    expect(document.activeElement).toBe(FIRST);
    keydown(FIRST, "ArrowDown");
    expect(document.activeElement).toBe(byId("nav_button_1.1"));
    keydown(document.activeElement, "ArrowUp");
    expect(document.activeElement).toBe(FIRST);
    keydown(FIRST, "ArrowUp");
    expect(document.activeElement.getAttribute("href")).toBe("/c");
  });

  it("ArrowRight opens the next level, ArrowLeft closes it and goes back", async() => {
    mountNavbar();
    await flushPromises();
    byId("nav_button_1").click();
    await flushPromises();
    const B = byId("nav_button_1.1");
    B.focus();
    keydown(B, "ArrowRight");
    await flushPromises();
    const B1 = byId("nav_submenu_1.1").querySelector("a");
    expect(document.activeElement).toBe(B1);
    keydown(B1, "ArrowLeft");
    await flushPromises();
    expect(byId("nav_submenu_1.1")).toBeNull();
    expect(document.activeElement).toBe(B);
  });

  it("the arrows skip a disabled item (a link without href, a disabled button)", async() => {
    mountNavbar({
      data: [
        { id: "a", label: "A", href: "/a" },
        { id: "b", label: "B", href: "/b", disabled: true },
        { id: "c", label: "C", disabled: true, children: [{ id: "c1", label: "C1", href: "/c1" }] },
        { id: "d", label: "D", href: "/d" },
      ],
    });
    await flushPromises();
    const A = document.querySelector("a[href='/a']");
    A.focus();
    keydown(A, "ArrowRight");
    expect(document.activeElement.getAttribute("href")).toBe("/d");
    keydown(document.activeElement, "ArrowRight");
    expect(document.activeElement).toBe(A);
  });

  it("other keys are not taken (Tab, letters)", async() => {
    mountNavbar();
    await flushPromises();
    const BUTTON = byId("nav_button_1");
    expect(keydown(BUTTON, "Tab").defaultPrevented).toBe(false);
    expect(keydown(BUTTON, "a").defaultPrevented).toBe(false);
  });
});

describe("ANavbar: trigger hover", () => {
  it("opens after openDelay, closes after closeDelay, the click still works", async() => {
    vi.useFakeTimers();
    const wrapper = mountNavbar({ trigger: "hover", openDelay: 100, closeDelay: 200 });
    await flushPromises();
    const LI = wrapper.findAll(".a_navbar__item_top")[1];
    await LI.trigger("mouseenter");
    vi.advanceTimersByTime(99);
    await nextTick();
    expect(byId("nav_submenu_1")).toBeNull();
    vi.advanceTimersByTime(1);
    await nextTick();
    expect(byId("nav_submenu_1")).not.toBeNull();
    await LI.trigger("mouseleave");
    vi.advanceTimersByTime(150);
    await nextTick();
    expect(byId("nav_submenu_1")).not.toBeNull();
    // back in time: stays open
    await LI.trigger("mouseenter");
    vi.advanceTimersByTime(300);
    await nextTick();
    expect(byId("nav_submenu_1")).not.toBeNull();
    await LI.trigger("mouseleave");
    vi.advanceTimersByTime(200);
    await nextTick();
    expect(byId("nav_submenu_1")).toBeNull();
    byId("nav_button_1").click();
    await nextTick();
    expect(byId("nav_submenu_1")).not.toBeNull();
  });

  it("trigger click: hover does nothing", async() => {
    vi.useFakeTimers();
    const wrapper = mountNavbar();
    await flushPromises();
    await wrapper.findAll(".a_navbar__item_top")[1].trigger("mouseenter");
    vi.advanceTimersByTime(1000);
    await nextTick();
    expect(byId("nav_submenu_1")).toBeNull();
  });
});

describe("ANavbar: overflow", () => {
  it("more: the items that do not fit go into the button \"…\"", async() => {
    listWidth = 230;
    const wrapper = mountNavbar({ texts: { more: "More" } });
    await flushPromises();
    // 100 + 40 (…) <= 230, 2 × 100 + 40 > 230: the width of "…" counts
    expect(wrapper.findAll(".a_navbar__item_top")).toHaveLength(1);
    const MORE = byId("nav_button_more");
    expect(MORE.querySelector("[title]").getAttribute("title")).toBe("More");
    expect(MORE.textContent).toContain("More");
    MORE.click();
    await flushPromises();
    const SUBMENU = byId("nav_submenu_more");
    expect(SUBMENU.textContent).toContain("Products");
    expect(SUBMENU.textContent).toContain("Docs");
    expect(SUBMENU.textContent).toContain("Contact");
    // the hidden items keep their submenus
    expect(byId("nav_button_more.0")).not.toBeNull();
  });

  it("more: a resize shows the items again", async() => {
    listWidth = 250;
    const wrapper = mountNavbar();
    await flushPromises();
    expect(byId("nav_button_more")).not.toBeNull();
    listWidth = 1000;
    resizeCallbacks.forEach(callback => callback());
    await flushPromises();
    expect(byId("nav_button_more")).toBeNull();
    expect(wrapper.findAll(".a_navbar__item_top")).toHaveLength(4);
  });

  it("more: no layout at the mount (hidden, late CSS), the resize measures again", async() => {
    listWidth = 250;
    itemWidth = 0;
    const wrapper = mountNavbar();
    await flushPromises();
    expect(byId("nav_button_more")).toBeNull();
    itemWidth = 100;
    resizeCallbacks.forEach(callback => callback());
    await flushPromises();
    expect(byId("nav_button_more")).not.toBeNull();
    expect(wrapper.findAll(".a_navbar__item_top")).toHaveLength(2);
  });

  it("more: the gap between the items counts", async() => {
    // 4 × 100 = 400 fits in 410, with 3 gaps of 8 not
    listWidth = 410;
    listGap = 8;
    mountNavbar();
    await flushPromises();
    expect(byId("nav_button_more")).not.toBeNull();
  });

  it("more: everything fits, no button", async() => {
    listWidth = 400;
    mountNavbar();
    await flushPromises();
    expect(byId("nav_button_more")).toBeNull();
  });

  it("more: new data are measured again", async() => {
    listWidth = 250;
    const wrapper = mountNavbar({ data: DATA.slice(0, 2) });
    await flushPromises();
    expect(byId("nav_button_more")).toBeNull();
    await wrapper.setProps({ data: DATA });
    await flushPromises();
    expect(byId("nav_button_more")).not.toBeNull();
  });

  it("wrap and scroll: all items, a class for the CSS", async() => {
    listWidth = 250;
    const wrapper = mountNavbar({ overflow: "wrap" });
    await flushPromises();
    expect(wrapper.find("nav").classes()).toContain("a_navbar_overflow_wrap");
    expect(byId("nav_button_more")).toBeNull();
    await wrapper.setProps({ overflow: "scroll" });
    await flushPromises();
    expect(wrapper.find("nav").classes()).toContain("a_navbar_overflow_scroll");
    expect(wrapper.findAll(".a_navbar__item_top")).toHaveLength(4);
  });
});

describe("ANavbar: slots", () => {
  it("start, end and item", async() => {
    const wrapper = mountNavbar({}, {
      slots: {
        start: "<img alt='Logo' src='logo.svg'>",
        end: "<button type='button'>Login</button>",
        item: ({ item, level }) => `${ item.label } (${ level })`,
      },
    });
    await flushPromises();
    expect(wrapper.find(".a_navbar__start img").attributes("alt")).toBe("Logo");
    expect(wrapper.find(".a_navbar__end button").text()).toBe("Login");
    expect(wrapper.find("a[href='/home']").text()).toContain("Home (0)");
    byId("nav_button_1").click();
    await flushPromises();
    expect(byId("nav_submenu_1").textContent).toContain("Product A (1)");
  });
});

describe("ANavbar: mobile", () => {
  it("a button opens the drawer with the navigation as accordion", async() => {
    isMobileWidth.value = true;
    const wrapper = mountNavbar({ texts: { toggle: "Open menu" } }, {
      slots: { end: "<span class='my_end'>E</span>" },
    });
    await flushPromises();
    expect(wrapper.find("nav.a_navbar").exists()).toBe(false);
    expect(wrapper.find(".my_end").exists()).toBe(true);
    const TOGGLE = byId("nav_toggle");
    expect(TOGGLE.getAttribute("aria-expanded")).toBe("false");
    expect(TOGGLE.textContent).toContain("Open menu");
    TOGGLE.click();
    await flushPromises();
    expect(TOGGLE.getAttribute("aria-expanded")).toBe("true");
    const NAV = byId("nav");
    expect(NAV.tagName).toBe("NAV");
    expect(NAV.classList.contains("a_navbar__drawer")).toBe(true);
    // all items, no "…"
    expect(NAV.querySelectorAll(".a_navbar__item_top")).toHaveLength(4);
    byId("nav_button_1").click();
    await flushPromises();
    expect(byId("nav_submenu_1").classList.contains("a_navbar__submenu_accordion")).toBe(true);
    // the arrows of the bar are not used in the accordion
    expect(keydown(byId("nav_button_1"), "ArrowRight").defaultPrevented).toBe(false);
    byId("nav_submenu_1").querySelector("a[href='/a']").click();
    await flushPromises();
    expect(wrapper.emitted("navigate")).toHaveLength(1);
    expect(byId("nav")).toBeNull();
    expect(TOGGLE.getAttribute("aria-expanded")).toBe("false");
  });

  it("isEndInDrawer: the slot end in the drawer", async() => {
    isMobileWidth.value = true;
    const wrapper = mountNavbar({ isEndInDrawer: true }, {
      slots: { end: "<span class='my_end'>E</span>" },
    });
    await flushPromises();
    expect(wrapper.find(".my_end").exists()).toBe(false);
    byId("nav_toggle").click();
    await flushPromises();
    expect(document.querySelector(".my_end")).not.toBeNull();
  });

  it("isMobileMenu false: the bar also on a small screen", async() => {
    isMobileWidth.value = true;
    const wrapper = mountNavbar({ isMobileMenu: false });
    await flushPromises();
    expect(wrapper.find("nav.a_navbar").exists()).toBe(true);
    expect(byId("nav_toggle")).toBeNull();
  });
});
