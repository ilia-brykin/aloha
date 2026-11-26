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

const mountLoadMore = props => mount(APaginationPages, {
  props: {
    limit: 10,
    mode: "loadMore",
    offset: 0,
    totalCount: 25,
    ...props,
  },
  attachTo: document.body,
});

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

describe("APaginationPages", () => {
  it("normal: the next page and a page number emit update:offset", async() => {
    const wrapper = mount(APaginationPages, {
      props: { limit: 10, offset: 0, totalCount: 35 },
    });
    const LINKS = wrapper.findAll(".a_pagination__item__link");
    // first, previous, 1, 2, 3, 4, next, last
    expect(LINKS).toHaveLength(8);
    expect(LINKS[2].attributes("aria-current")).toBe("page");

    await LINKS[6].trigger("click");
    await LINKS[3].trigger("click");
    expect(wrapper.emitted("update:offset")).toEqual([[10], [10]]);
    // the first page is disabled on the first page
    await LINKS[0].trigger("click");
    expect(wrapper.emitted("update:offset")).toHaveLength(2);
  });

  it("loadMore: a translated button and a status with the shown rows", () => {
    const wrapper = mountLoadMore();
    const BUTTON = wrapper.find("button.a_pagination__load_more__btn");

    expect(BUTTON.exists()).toBe(true);
    expect(BUTTON.attributes("type")).toBe("button");
    expect(BUTTON.text()).toContain("_A_PAGINATION_LOAD_MORE_");
    expect(BUTTON.text()).not.toContain("Load more");
    const STATUS = wrapper.find(".a_pagination__load_more__status");
    expect(STATUS.attributes("role")).toBe("status");
    expect(STATUS.attributes("tabindex")).toBe("-1");
    expect(STATUS.text()).toContain("_A_COUNT_PER_PAGE_");
  });

  it("loadMore: the click adds the first limit, also after a change of the limit", async() => {
    const wrapper = mountLoadMore();

    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("update:limit")).toEqual([[20, { loadMore: true }]]);

    await wrapper.setProps({ limit: 20 });
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("update:limit")[1]).toEqual([30, { loadMore: true }]);
  });

  it("loadMore: no button when all rows are shown, disabled emits nothing", async() => {
    expect(mountLoadMore({ limit: 30 }).find("button").exists()).toBe(false);
    expect(mountLoadMore({ offset: 20, limit: 10 }).find("button").exists()).toBe(false);

    const wrapper = mountLoadMore({ disabled: true });
    expect(wrapper.find("button").attributes("disabled")).toBeDefined();
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("update:limit")).toBeUndefined();
  });

  it("loadMore: the focus goes to the status when the button is gone after the last click", async() => {
    const wrapper = mountLoadMore({ limit: 20 });
    const BUTTON = wrapper.find("button");
    BUTTON.element.focus();
    await BUTTON.trigger("click");

    await wrapper.setProps({ limit: 30 });
    await nextTick();
    expect(wrapper.find("button").exists()).toBe(false);
    expect(document.activeElement).toBe(wrapper.find(".a_pagination__load_more__status").element);
  });

  it("loadMore: the focus is not taken from another element (rows of the server came later)", async() => {
    const wrapper = mountLoadMore({ limit: 20 });
    const OTHER = document.createElement("input");
    document.body.appendChild(OTHER);
    await wrapper.find("button").trigger("click");
    OTHER.focus();

    await wrapper.setProps({ limit: 30 });
    await nextTick();
    expect(document.activeElement).toBe(OTHER);
  });

  it("loadMore: the focus stays when the button stays", async() => {
    const wrapper = mountLoadMore();
    const BUTTON = wrapper.find("button");
    BUTTON.element.focus();
    await BUTTON.trigger("click");

    await wrapper.setProps({ limit: 20 });
    await nextTick();
    expect(document.activeElement).toBe(wrapper.find("button").element);
  });

  it("loadMore: a change of the rows from outside does not move the focus", async() => {
    const wrapper = mountLoadMore({ limit: 20 });
    await wrapper.setProps({ totalCount: 15 });
    await nextTick();
    expect(document.activeElement).toBe(document.body);
  });
});

describe("APagination", () => {
  it("passes update:limit with the options of loadMore", async() => {
    const wrapper = mount(APagination, {
      props: {
        limit: 10,
        modes: { pagination: { mode: "loadMore", position: 0 } },
        offset: 0,
        rowsLength: 10,
        totalCount: 25,
      },
    });

    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("update:limit")).toEqual([[20, { loadMore: true }]]);
  });
});

describe("ATable with pagination loadMore", () => {
  it("shows more rows, keeps the offset and does not move the focus to the table", async() => {
    const DATA = Array.from({ length: 25 }, (_, index) => ({ id: index + 1 }));
    const wrapper = mount(ATable, {
      props: {
        columns: [{ id: "id", keyLabel: "id", label: "Id" }],
        data: DATA,
        id: "table_load_more",
        keyId: "id",
        label: "Table",
        rowsCountRenderPerTick: 0,
        pagination: {
          use: true,
          limitStart: 10,
          modes: {
            desktop: { pagination: { mode: "loadMore", position: 0 } },
            mobile: { pagination: { mode: "loadMore", position: 0 } },
          },
        },
      },
      attachTo: document.body,
    });
    await nextTick();
    const countRows = () => wrapper.findAll(".a_table__body .a_table__row").length;
    expect(countRows()).toBe(10);

    const BUTTON = wrapper.find("button.a_pagination__load_more__btn");
    BUTTON.element.focus();
    await BUTTON.trigger("click");
    await nextTick();

    expect(countRows()).toBe(20);
    expect(document.activeElement).toBe(wrapper.find("button.a_pagination__load_more__btn").element);
    expect(wrapper.emitted("changeLimit")).toEqual([[{ offset: 0, limit: 20, loadMore: true }]]);
  });
});
