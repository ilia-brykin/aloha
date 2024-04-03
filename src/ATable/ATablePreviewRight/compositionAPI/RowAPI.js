import {
  computed,
  toRef,
} from "vue";

import AFiltersAPI from "../../../compositionAPI/AFiltersAPI";

import {
  isFunction,
} from "lodash-es";

export default function RowAPI(props) {
  const countAllRows = toRef(props, "countAllRows");
  const disabledPreviewRowCallback = toRef(props, "disabledPreviewRowCallback");
  const offsetPagination = toRef(props, "offsetPagination");
  const rowIndex = toRef(props, "rowIndex");
  const rows = toRef(props, "rows");
  const usePagination = toRef(props, "usePagination");

  const {
    filterCurrency,
  } = AFiltersAPI();

  const rowNumber = computed(() => {
    if (usePagination.value) {
      const OFFSET = offsetPagination.value || 0;
      return OFFSET + rowIndex.value + 1;
    }
    return rowIndex.value + 1;
  });

  const currentRow = computed(() => {
    return rows.value[rowIndex.value];
  });
  const nextAvailableRowIndex = computed(() => {
    let nextIndex = null;
    if (!isFunction(disabledPreviewRowCallback.value)) {
      nextIndex = rowIndex.value === rows.value.length - 1 ? null : rowIndex.value++;
    } else {
      for (let index = rowIndex.value + 1; index < rows.value.length; index++) {
        const ROW = rows.value[index];

        if (!disabledPreviewRowCallback.value({ row: ROW, rowIndex: index })) {
          nextIndex = index;
          break;
        }
      }
    }

    return nextIndex;
  });
  const previousAvailableRowIndex = computed(() => {
    let prevIndex = null;
    if (!isFunction(disabledPreviewRowCallback.value)) {
      prevIndex = rowIndex.value === 0 ? null : rowIndex.value--;
    } else {
      for (let index = rowIndex.value - 1; index >= 0; index--) {
        const ROW = rows.value[index];

        if (!disabledPreviewRowCallback.value({ row: ROW, rowIndex: index })) {
          prevIndex = index;
          break;
        }
      }
    }

    return prevIndex;
  });

  const countAllRowsFormatted = computed(() => {
    return filterCurrency(countAllRows.value, { suffix: "", digits: 0 });
  });

  const rowNumberFormatted = computed(() => {
    return filterCurrency(rowNumber.value, { suffix: "", digits: 0 });
  });

  return {
    countAllRowsFormatted,
    currentRow,
    nextAvailableRowIndex,
    previousAvailableRowIndex,
    rowNumber,
    rowNumberFormatted,
  };
}
