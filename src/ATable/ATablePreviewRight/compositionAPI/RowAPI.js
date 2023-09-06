import {
  computed,
  toRef,
} from "vue";

import AFiltersAPI from "../../../compositionAPI/AFiltersAPI";

export default function RowAPI(props) {
  const countAllRows = toRef(props, "countAllRows");
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

  const countAllRowsFormatted = computed(() => {
    return filterCurrency(countAllRows.value, { suffix: "", digits: 0 });
  });

  const rowNumberFormatted = computed(() => {
    return filterCurrency(rowNumber.value, { suffix: "", digits: 0 });
  });

  return {
    countAllRowsFormatted,
    currentRow,
    rowNumber,
    rowNumberFormatted,
  };
}
