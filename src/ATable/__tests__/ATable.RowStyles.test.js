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
  flushPromises,
  mount,
} from "@vue/test-utils";

import ATable from "../ATable";
import {
  componentsPluginOptions,
} from "../../plugins/AComponentsPlugin";

const columns = [
  { id: "id", keyLabel: "id", label: "Id" },
];
const data = [{ id: 1 }, { id: 2 }, { id: 3 }];

const mountTable = props => mount(ATable, {
  props: {
    columns,
    data,
    id: "table_row_styles",
    keyId: "id",
    label: "Table",
    rowsCountRenderPerTick: 0,
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
  delete componentsPluginOptions.ATable;
  document.body.innerHTML = "";
});

describe("ATable row styles", () => {
  it("sets a_table_striped with isStriped or the plugin default", () => {
    expect(mountTable().find(".a_table").classes()).not.toContain("a_table_striped");
    expect(mountTable({ isStriped: true }).find(".a_table").classes()).toContain("a_table_striped");
    componentsPluginOptions.ATable = { props: { isStriped: true } };
    expect(mountTable().find(".a_table").classes()).toContain("a_table_striped");
  });

  it("marks rows selected with the checkbox", async() => {
    const wrapper = mountTable({
      multipleActions: [{ id: "action", label: "Action", isHiddenCallback: () => false }],
    });
    await flushPromises();
    wrapper.vm.toggleMultipleActionsActive({ action: wrapper.props("multipleActions")[0] });
    await nextTick();
    await flushPromises();
    const rows = () => wrapper.findAll(".a_table__body .a_table__body__row");
    expect(rows().some(row => row.classes().includes("a_table__row_selected"))).toBe(false);
    await rows()[1].find(".a_table__cell_checkbox input").trigger("click");
    // AOneCheckbox changes the model in setTimeout
    await new Promise(resolve => setTimeout(resolve));
    await nextTick();
    expect(rows().map(row => row.classes().includes("a_table__row_selected"))).toEqual([false, true, false]);
  });
});
