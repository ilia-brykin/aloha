import {
  ref,
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

import AMenu from "../AMenu";

const DATA = [
  { id: "home", label: "Home", to: "/home" },
  {
    id: "components",
    label: "Components",
    to: "/components",
    children: [
      { id: "button", label: "Button", to: "/button" },
      {
        id: "forms",
        label: "Forms",
        to: "/forms",
        children: [
          { id: "input", label: "Input", to: "/input" },
          { id: "select", label: "Select", to: "/select" },
        ],
      },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    children: [
      { id: "profile", label: "Profile", to: "/profile" },
    ],
  },
  {
    id: "archive",
    label: "Archive",
    to: "/archive",
    disabled: true,
    children: [
      { id: "old", label: "Old", to: "/old" },
    ],
  },
];

const RouterLink = {
  props: ["to"],
  template: "<a :href=\"to\" @click.prevent><slot /></a>",
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

let wrappers = [];
const mountMenu = (props = {}) => {
  const WRAPPER = mount(AMenu, {
    attachTo: document.body,
    props: {
      canChangeBodyClass: false,
      data: DATA,
      isInline: true,
      keyChildren: "children",
      menuId: "m",
      useBackdropMobile: false,
      ...props,
    },
    global: {
      components: { RouterLink },
      config: {
        globalProperties: {
          $router: {
            currentRoute: ref({ fullPath: "/" }),
            resolve: to => ({ fullPath: to }),
          },
        },
      },
    },
  });
  wrappers.push(WRAPPER);
  return WRAPPER;
};

const byId = id => document.getElementById(id);
const wait = () => new Promise(resolve => setTimeout(resolve));
const isPanelOpen = id => byId(`m_${ id }_panel`)?.classList.contains("a_menu__panel_opened");

afterEach(() => {
  wrappers.forEach(wrapper => wrapper.unmount());
  wrappers = [];
  document.body.innerHTML = "";
});

describe("AMenu: split item (page + children)", () => {
  it("an item with to and children: the link and the toggle with the counter", async() => {
    mountMenu();
    await flushPromises();
    const LINK = byId("m_components_link");
    const TOGGLE = byId("m_components_toggle");
    expect(LINK.getAttribute("href")).toBe("/components");
    expect(LINK.closest("li").classList.contains("a_menu__listitem_split")).toBe(true);
    expect(TOGGLE.getAttribute("role")).toBe("button");
    expect(TOGGLE.getAttribute("tabindex")).toBe("0");
    expect(TOGGLE.querySelector(".a_menu__link__counter").textContent).toContain("2");
    // the name of the toggle for the screen reader: open the submenu of Components
    expect(TOGGLE.querySelector(".a_sr_only").textContent).toContain("Components");
    // the link has no counter
    expect(LINK.querySelector(".a_menu__link__counter")).toBeNull();
  });

  it("other items stay as they were: a link without children, a button without to", async() => {
    mountMenu();
    await flushPromises();
    expect(byId("m_home_toggle")).toBeNull();
    expect(byId("m_home_link").closest("li").classList.contains("a_menu__listitem_split")).toBe(false);
    expect(byId("m_settings_toggle")).toBeNull();
    expect(byId("m_settings_link").getAttribute("role")).toBe("button");
    expect(byId("m_settings_link").getAttribute("href")).toBeNull();
  });

  it("the link does not open the panel, the toggle does (click, Enter)", async() => {
    mountMenu();
    await flushPromises();
    byId("m_components_link").click();
    await flushPromises();
    expect(isPanelOpen("components")).toBe(false);

    byId("m_components_toggle").click();
    await flushPromises();
    expect(isPanelOpen("components")).toBe(true);
    expect(byId("m_components_toggle").classList.contains("a_menu__link_open")).toBe(true);
    expect(byId("m_components_link").classList.contains("a_menu__link_open")).toBe(false);

    const wrapper = mountMenu({ menuId: "m2" });
    await flushPromises();
    await wrapper.find("#m2_components_toggle").trigger("keydown", { keyCode: 13 });
    await flushPromises();
    expect(byId("m2_components_panel").classList.contains("a_menu__panel_opened")).toBe(true);
  });

  it("the open panel: the last breadcrumb is the link to the page, without to it stays text", async() => {
    mountMenu();
    await flushPromises();
    byId("m_components_toggle").click();
    await flushPromises();
    const PAGE = byId("m_components_panel").querySelector(".a_menu__breadcrumbs__link_page");
    expect(PAGE.tagName).toBe("A");
    expect(PAGE.getAttribute("href")).toBe("/components");
    expect(PAGE.textContent).toContain("Components");

    byId("m_settings_link").click();
    await flushPromises();
    const PANEL = byId("m_settings_panel");
    expect(PANEL.querySelector(".a_menu__breadcrumbs__link_page")).toBeNull();
    expect(PANEL.querySelector("strong.a_menu__breadcrumbs__link").textContent).toContain("Settings");
  });

  it("a nested split item works in the panel", async() => {
    mountMenu();
    await flushPromises();
    byId("m_components_toggle").click();
    await flushPromises();
    expect(byId("m_forms_link").getAttribute("href")).toBe("/forms");
    byId("m_forms_toggle").click();
    await flushPromises();
    expect(isPanelOpen("forms")).toBe(true);
    expect(byId("m_forms_panel").querySelector(".a_menu__breadcrumbs__link_page").getAttribute("href")).toBe("/forms");
  });

  it("disabled page: the link is disabled, the children stay reachable, no page link in the panel", async() => {
    mountMenu();
    await flushPromises();
    expect(byId("m_archive_link").classList.contains("a_menu__link_disabled")).toBe(true);
    byId("m_archive_toggle").click();
    await flushPromises();
    expect(isPanelOpen("archive")).toBe(true);
    expect(byId("m_archive_panel").querySelector(".a_menu__breadcrumbs__link_page")).toBeNull();
  });

  it("the slot of an item gets isSplit", async() => {
    const DATA_SLOT = [
      { id: "a", label: "A", to: "/a", slot: "own", children: [{ id: "a1", label: "A1", to: "/a1" }] },
      { id: "b", label: "B", to: "/b", slot: "own" },
    ];
    const wrapper = mount(AMenu, {
      attachTo: document.body,
      props: {
        canChangeBodyClass: false,
        data: DATA_SLOT,
        isInline: true,
        keyChildren: "children",
        keySlot: "slot",
        menuId: "s",
        useBackdropMobile: false,
      },
      slots: {
        own: ({ item, isSplit }) => `${ item.label }:${ isSplit }`,
      },
      global: {
        components: { RouterLink },
        config: {
          globalProperties: {
            $router: { currentRoute: ref({ fullPath: "/" }), resolve: to => ({ fullPath: to }) },
          },
        },
      },
    });
    wrappers.push(wrapper);
    await flushPromises();
    expect(wrapper.text()).toContain("A:true");
    expect(wrapper.text()).toContain("B:false");
  });

  it("own iconClass of an item is added to the class of the icon", async() => {
    mountMenu({
      data: [{ id: "x", label: "X", to: "/x", icon: "<svg></svg>", iconClass: "my_icon" }],
    });
    await flushPromises();
    const ICON = byId("m_x_link").querySelector(".a_menu__link__icon");
    expect(ICON.classList.contains("my_icon")).toBe(true);
  });
});

describe("AMenu: split item in the closed menu (only icons)", () => {
  const mountClosed = () => mountMenu({ isInline: false, isMenuOpenInitial: false });

  it("in the icon column the item opens the panel, the header of the panel is the link to the page", async() => {
    const wrapper = mountClosed();
    await flushPromises();
    expect(wrapper.classes()).toContain("a_menu_close");
    expect(byId("m_components_toggle")).toBeNull();
    const OPENER = byId("m_components_link");
    expect(OPENER.getAttribute("role")).toBe("button");
    expect(OPENER.getAttribute("href")).toBeNull();
    // it opens the submenu, so its name says it (not only the label of the page)
    const NAME = OPENER.querySelector(".a_sr_only").textContent.trim();
    expect(NAME).toContain("Components");
    expect(NAME).not.toBe("Components");
    OPENER.click();
    await flushPromises();
    expect(isPanelOpen("components")).toBe(true);
    const HEADER = byId("m_components_panel").querySelector(".a_menu__panel_header__link");
    expect(HEADER.getAttribute("href")).toBe("/components");
    expect(HEADER.textContent).toContain("Components");
  });

  it("a click on the header link closes the panels", async() => {
    mountClosed();
    await flushPromises();
    byId("m_components_link").click();
    await flushPromises();
    byId("m_components_panel").querySelector(".a_menu__panel_header__link").click();
    await flushPromises();
    expect(isPanelOpen("components")).toBe(false);
  });

  it("Shift+Tab from the first link of a panel goes back to the toggle of the split item", async() => {
    mountClosed();
    await flushPromises();
    byId("m_components_link").click();
    await flushPromises();
    // in the panel there is room: Forms is split
    byId("m_forms_toggle").click();
    await flushPromises();
    await wait();
    const FIRST = byId("m_input_link");
    FIRST.focus();
    FIRST.dispatchEvent(new KeyboardEvent("keydown", { key: "Tab", shiftKey: true, bubbles: true, cancelable: true }));
    await flushPromises();
    expect(document.activeElement).toBe(byId("m_forms_toggle"));
  });
});
