import {
  nextTick,
  ref,
} from "vue";
import {
  describe,
  expect,
  it,
  vi,
} from "vitest";

import CountAPI from "../compositionAPI/CountAPI";
import MultipleActionAPI from "../compositionAPI/MultipleActionAPI";
import RowsAPI from "../compositionAPI/RowsAPI";
import VariablesAPI from "../compositionAPI/VariablesAPI";

describe("ATable multiple action row filtering", () => {
  it("filters before pagination, updates counts and selection, and restores rows on close", async() => {
    const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
    const callback = vi.fn(({ row }) => row.id === 2);
    const props = {
      clearSelectedRowsOnDataChange: true,
      data,
      multipleActions: [],
      pagination: { isOutside: false },
      rowsCountRenderPerTick: 0,
    };
    const {
      currentMultipleActions,
      isMultipleActionsActive,
    } = VariablesAPI();
    const clearSelection = vi.fn();
    const rows = RowsAPI(props, {
      currentMultipleActions,
      dataSorted: ref(data),
      isMultipleActionsActive,
      limit: ref(2),
      offset: ref(0),
      setEmptySelectedRowsIndexes: clearSelection,
      usePaginationLocal: ref(true),
    });
    const { countAllRowsLocal } = CountAPI(props, { data: rows.dataFiltered });
    const actions = MultipleActionAPI(props, { emit: vi.fn() }, {
      currentMultipleActions,
      isMultipleActionsActive,
      rowsLocalAll: rows.rowsLocalAll,
      rowsLocalLength: rows.rowsLocalLength,
    });

    currentMultipleActions.value = { isRowHiddenCallback: callback };
    expect(rows.rowsLocal.value).toEqual(data.slice(0, 2));
    expect(callback).not.toHaveBeenCalled();

    isMultipleActionsActive.value = true;
    await nextTick();

    expect(rows.rowsLocal.value).toEqual([data[0], data[2]]);
    expect(countAllRowsLocal.value).toBe(3);
    expect(callback).toHaveBeenCalledWith({ row: data[1], rowIndex: 1 });
    expect(clearSelection).toHaveBeenCalledOnce();
    actions.setSelectedRowsIndexes({ isAll: true });
    expect(actions.selectedRows.value).toEqual([data[0], data[2]]);

    actions.closeMultipleActionsActive();
    await nextTick();

    expect(rows.rowsLocal.value).toEqual(data.slice(0, 2));
    expect(countAllRowsLocal.value).toBe(4);
    expect(actions.selectedRows.value).toEqual([]);
    expect(props.data).toEqual(data);
  });

  it.each([undefined, {}, { isRowHiddenCallback: true }, { isHiddenCallback: () => true }])(
    "keeps rows when the active action has no row callback: %j",
    action => {
      const data = [{ id: 1 }];
      const { rowsLocal } = RowsAPI({ pagination: {}, rowsCountRenderPerTick: 0 }, {
        currentMultipleActions: ref(action),
        dataSorted: ref(data),
        isMultipleActionsActive: ref(true),
      });

      expect(rowsLocal.value).toEqual(data);
    },
  );
});
