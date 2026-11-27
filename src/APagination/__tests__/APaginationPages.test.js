import {
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

import APaginationPages from "../APaginationPages/APaginationPages";
import ATable from "../../ATable/ATable";

import APagination from "../APagination";

const mountPages = props => mount(APaginationPages, {
  props: {
    limit: 10,
    offset: 0,
    totalCount: 40,
    ...props,
  },
  attachTo: document.body,
});
const getButtons = wrapper => wrapper.findAll(".a_pagination__item__link");
const getArrow = (wrapper, text) => getButtons(wrapper).find(button => button.text().includes(text));
const getCurrent = wrapper => wrapper.find("[aria-current='page']");
// the visible entries: page numbers and "…"
const getEntries = wrapper => wrapper.findAll(".a_pagination__item")
  .filter(item => !item.find(".a_pagination__item__link_arrow").exists())
  .map(item => item.text().replace("_A_PAGINATION_TO_PAGE_{{page}}_", "").trim());

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
  document.body.innerHTML = "";
});

describe("APaginationPages: states at the edges", () => {
  it("without rows: one page, all arrows disabled, no event", async() => {
    const wrapper = mountPages({ totalCount: 0 });

    expect(getEntries(wrapper)).toEqual(["1"]);
    for (const TEXT of ["FIRST", "PREVIOUS", "NEXT", "LAST"]) {
      expect(getArrow(wrapper, `_A_PAGINATION_${ TEXT }_PAGE_`).attributes("disabled")).toBeDefined();
    }
    await getArrow(wrapper, "_A_PAGINATION_NEXT_PAGE_").trigger("click");
    expect(wrapper.emitted("update:offset")).toBeUndefined();
  });

  it("an offset behind the last page shows the last page, previous goes to the page before it", async() => {
    const wrapper = mountPages({ totalCount: 30, offset: 50 });

    expect(getCurrent(wrapper).text()).toContain("3");
    expect(getArrow(wrapper, "_A_PAGINATION_NEXT_PAGE_").attributes("disabled")).toBeDefined();
    await getArrow(wrapper, "_A_PAGINATION_PREVIOUS_PAGE_").trigger("click");
    expect(wrapper.emitted("update:offset")).toEqual([[10]]);
  });
});

describe("APaginationPages: accessibility", () => {
  it("native buttons, disabled with the attribute, no role and no tabindex", () => {
    const wrapper = mountPages();

    for (const BUTTON of getButtons(wrapper)) {
      expect(BUTTON.element.tagName).toBe("BUTTON");
      expect(BUTTON.attributes("type")).toBe("button");
      expect(BUTTON.attributes("role")).toBeUndefined();
      expect(BUTTON.attributes("tabindex")).toBeUndefined();
    }
    expect(getArrow(wrapper, "_A_PAGINATION_FIRST_PAGE_").attributes("disabled")).toBeDefined();
    expect(getArrow(wrapper, "_A_PAGINATION_NEXT_PAGE_").attributes("disabled")).toBeUndefined();
    expect(getArrow(wrapper, "_A_PAGINATION_NEXT_PAGE_").classes()).toContain("a_pagination__item__link_arrow");
  });

  it("the current page: aria-current page, focusable, a click emits nothing", async() => {
    const wrapper = mountPages({ offset: 10 });
    const CURRENT = getCurrent(wrapper);

    expect(CURRENT.text()).toContain("2");
    expect(CURRENT.attributes("disabled")).toBeUndefined();
    expect(wrapper.findAll("[aria-current]")).toHaveLength(1);
    await CURRENT.trigger("click");
    expect(wrapper.emitted("update:offset")).toBeUndefined();
  });

  it("disabled: all buttons disabled", () => {
    const wrapper = mountPages({ disabled: true, offset: 10 });

    expect(getButtons(wrapper).every(button => button.attributes("disabled") !== undefined)).toBe(true);
  });

  it("the focus goes to the current page when the focused button becomes disabled", async() => {
    const wrapper = mountPages({ offset: 20 });
    const NEXT = getArrow(wrapper, "_A_PAGINATION_NEXT_PAGE_");
    NEXT.element.focus();
    await NEXT.trigger("click");
    expect(wrapper.emitted("update:offset")).toEqual([[30]]);

    await wrapper.setProps({ offset: 30 });
    await nextTick();
    expect(NEXT.attributes("disabled")).toBeDefined();
    expect(document.activeElement).toBe(getCurrent(wrapper).element);
  });

  it("the focus stays on an enabled button and is not taken from outside (e.g. the table)", async() => {
    const wrapper = mountPages();
    const NEXT = getArrow(wrapper, "_A_PAGINATION_NEXT_PAGE_");
    NEXT.element.focus();
    await NEXT.trigger("click");
    await wrapper.setProps({ offset: 10 });
    await nextTick();
    expect(document.activeElement).toBe(NEXT.element);

    const OTHER = document.createElement("button");
    document.body.appendChild(OTHER);
    await getArrow(wrapper, "_A_PAGINATION_LAST_PAGE_").trigger("click");
    OTHER.focus();
    await wrapper.setProps({ offset: 30 });
    await nextTick();
    expect(document.activeElement).toBe(OTHER);
  });
});

describe("APaginationPages: new props", () => {
  it("show-edges: first and last page with … only for a gap", async() => {
    const wrapper = mountPages({ totalCount: 200, offset: 90, showEdges: true });

    expect(getEntries(wrapper)).toEqual(["1", "…", "8", "9", "10", "11", "12", "…", "20"]);
    const ELLIPSIS = wrapper.findAll(".a_pagination__item_ellipsis");
    expect(ELLIPSIS).toHaveLength(2);
    expect(ELLIPSIS[0].attributes("aria-hidden")).toBe("true");

    await wrapper.setProps({ offset: 40 });
    expect(getEntries(wrapper)).toEqual(["1", "2", "3", "4", "5", "6", "7", "…", "20"]);
    await wrapper.setProps({ offset: 30 });
    expect(getEntries(wrapper)).toEqual(["1", "2", "3", "4", "5", "6", "…", "20"]);
    await wrapper.setProps({ offset: 0 });
    expect(getEntries(wrapper)).toEqual(["1", "2", "3", "4", "5", "…", "20"]);
    await wrapper.setProps({ offset: 150 });
    expect(getEntries(wrapper)).toEqual(["1", "…", "14", "15", "16", "17", "18", "19", "20"]);
    await wrapper.setProps({ offset: 190 });
    expect(getEntries(wrapper)).toEqual(["1", "…", "16", "17", "18", "19", "20"]);
    await wrapper.setProps({ showEdges: false });
    expect(getEntries(wrapper)).toEqual(["16", "17", "18", "19", "20"]);
  });

  it("show-jumper: a labelled field, a valid page emits, an invalid page shows an error", async() => {
    const wrapper = mountPages({ showJumper: true, id: "pages" });
    const INPUT = wrapper.find("input");

    expect(wrapper.find("label").attributes("for")).toBe("pages_jumper");
    expect(INPUT.attributes("id")).toBe("pages_jumper");
    expect(INPUT.attributes("inputmode")).toBe("numeric");
    expect(INPUT.attributes("aria-describedby")).toBe("pages_jumper_of");

    // one after the other: the error of every value
    for (const VALUE of ["abc", "0", "5", "2.5"]) {
      // eslint-disable-next-line no-await-in-loop
      await INPUT.setValue(VALUE);
      // eslint-disable-next-line no-await-in-loop
      await wrapper.find("form").trigger("submit");
      expect(INPUT.attributes("aria-invalid")).toBe("true");
      expect(wrapper.find("[role='alert']").attributes("id")).toBe("pages_jumper_error");
      expect(INPUT.attributes("aria-describedby")).toBe("pages_jumper_of pages_jumper_error");
    }
    expect(wrapper.emitted("update:offset")).toBeUndefined();

    await INPUT.setValue(" 3 ");
    expect(wrapper.find("[role='alert']").exists()).toBe(false);
    await wrapper.find("form").trigger("submit");
    expect(wrapper.emitted("update:offset")).toEqual([[20]]);
    expect(wrapper.emitted("update:page")).toEqual([[3]]);
    expect(INPUT.element.value).toBe("");
  });

  it("hide-on-single-page", async() => {
    const wrapper = mountPages({ totalCount: 10, hideOnSinglePage: true });

    expect(wrapper.find("nav").exists()).toBe(false);
    await wrapper.setProps({ totalCount: 11 });
    expect(wrapper.find("nav").exists()).toBe(true);
    await wrapper.setProps({ totalCount: 0 });
    expect(wrapper.find("nav").exists()).toBe(false);
  });

  it("v-model:page and the event change", async() => {
    const wrapper = mountPages({ page: 2, offset: undefined });

    expect(getCurrent(wrapper).text()).toContain("2");
    await getArrow(wrapper, "_A_PAGINATION_NEXT_PAGE_").trigger("click");
    expect(wrapper.emitted("update:page")).toEqual([[3]]);
    expect(wrapper.emitted("update:offset")).toEqual([[20]]);
    expect(wrapper.emitted("change")).toEqual([[{ limit: 10, offset: 20, page: 3 }]]);

    // page wins over offset
    await wrapper.setProps({ page: 4, offset: 0 });
    expect(getCurrent(wrapper).text()).toContain("4");
  });

  it("v-model:page in the mode loadMore: the shown rows start at the page", () => {
    // page 2 of 20 rows: rows 11-20 are shown, nothing more to load
    expect(mountPages({ mode: "loadMore", page: 2, offset: undefined, totalCount: 20 }).find("button").exists()).toBe(false);
    expect(mountPages({ mode: "loadMore", page: 1, offset: undefined, totalCount: 20 }).find("button").exists()).toBe(true);
  });

  it("mode infinite: loads when the button comes near the view, not twice before the rows come", async() => {
    const OBSERVERS = [];
    globalThis.IntersectionObserver = class {
      constructor(callback, options) {
        this.callback = callback;
        this.options = options;
        this.elements = [];
        OBSERVERS.push(this);
      }
      observe(element) {
        this.elements.push(element);
      }
      disconnect() {
        this.elements = [];
      }
    };
    try {
      const wrapper = mountPages({ mode: "infinite", totalCount: 25 });
      await nextTick();
      const getObserver = () => OBSERVERS.filter(observer => observer.elements.length).at(-1);
      expect(getObserver().elements[0]).toBe(wrapper.find("button").element);

      getObserver().callback([{ isIntersecting: false }]);
      expect(wrapper.emitted("update:limit")).toBeUndefined();
      getObserver().callback([{ isIntersecting: true }]);
      getObserver().callback([{ isIntersecting: true }]);
      expect(wrapper.emitted("update:limit")).toEqual([[20, { loadMore: true }]]);

      await wrapper.setProps({ limit: 20 });
      await nextTick();
      // observed again: an observer reports only changes, the button may still be in the view
      expect(OBSERVERS).toHaveLength(2);
      getObserver().callback([{ isIntersecting: true }]);
      expect(wrapper.emitted("update:limit")[1]).toEqual([30, { loadMore: true }]);

      // the button is still there for the keyboard
      expect(wrapper.find("button").text()).toContain("_A_PAGINATION_LOAD_MORE_");
      wrapper.unmount();
      expect(OBSERVERS.every(observer => !observer.elements.length)).toBe(true);
    } finally {
      delete globalThis.IntersectionObserver;
    }
  });

  it("size: classes of the sizes", async() => {
    const wrapper = mountPages();

    expect(wrapper.find("nav").classes()).not.toContain("a_pagination__parent_small");
    await wrapper.setProps({ size: "small" });
    expect(wrapper.find("nav").classes()).toContain("a_pagination__parent_small");
    await wrapper.setProps({ size: "large" });
    expect(wrapper.find("nav").classes()).toContain("a_pagination__parent_large");
  });

  it("own icons and slots: the slot content is hidden, the name stays", () => {
    const wrapper = mount(APaginationPages, {
      props: {
        iconLast: "<svg class=\"my_last\"></svg>",
        limit: 10,
        offset: 0,
        totalCount: 40,
      },
      slots: {
        next: ({ disabled }) => `Next ${ disabled }`,
        page: ({ page, isActive }) => `P${ page }${ isActive ? "!" : "" }`,
      },
    });

    expect(wrapper.find(".my_last").exists()).toBe(true);
    const NEXT = getArrow(wrapper, "_A_PAGINATION_NEXT_PAGE_");
    expect(NEXT.find(".a_pagination__item__slot").text()).toBe("Next false");
    expect(NEXT.find(".a_pagination__item__slot").attributes("aria-hidden")).toBe("true");
    expect(NEXT.find("svg").exists()).toBe(false);
    expect(getCurrent(wrapper).find(".a_pagination__item__slot").text()).toBe("P1!");
    expect(getCurrent(wrapper).text()).toContain("_A_PAGINATION_TO_PAGE_");
  });
});

describe("APagination: options of modes.pagination and slots", () => {
  it("passes showEdges, size and the slot page to APaginationPages", () => {
    const wrapper = mount(APagination, {
      props: {
        limit: 10,
        modes: { pagination: { mode: "normal", position: 0, showEdges: true, size: "small" } },
        offset: 90,
        rowsLength: 10,
        totalCount: 200,
      },
      slots: {
        page: ({ page }) => `#${ page }`,
      },
    });

    expect(wrapper.findAll(".a_pagination__item_ellipsis")).toHaveLength(2);
    expect(wrapper.find("nav").classes()).toContain("a_pagination__parent_small");
    expect(wrapper.find("[aria-current='page']").text()).toContain("#10");
  });
});

describe("ATable: two paginations with different names", () => {
  const mountTable = position => mount(ATable, {
    props: {
      columns: [{ id: "id", keyLabel: "id", label: "Id" }],
      data: Array.from({ length: 25 }, (_, index) => ({ id: index + 1 })),
      id: `table_pagination_${ position }`,
      keyId: "id",
      label: "Table",
      rowsCountRenderPerTick: 0,
      pagination: {
        use: true,
        limitStart: 10,
        position,
        modes: {
          desktop: { pagination: { mode: "normal", position: 0 } },
          mobile: { pagination: { mode: "normal", position: 0 } },
        },
      },
    },
    attachTo: document.body,
  });

  it("top and bottom: own names; only one: the default name", () => {
    expect(mountTable("y").findAll("nav").map(nav => nav.attributes("aria-label")))
      .toEqual(["_A_TABLE_PAGINATION_TOP_", "_A_TABLE_PAGINATION_BOTTOM_"]);
    expect(mountTable("bottom").findAll("nav").map(nav => nav.attributes("aria-label")))
      .toEqual(["_A_PAGINATION_NAVIGATION_"]);
  });
});
