import {
  computed,
  ref,
  toRef,
  watch,
} from "vue";

import {
  isEqual,
  map,
} from "lodash-es";

export default function RowsAPI(props, {
  dataSorted = computed(() => []),
  limit = ref(0),
  offset = ref(0),
  setEmptySelectedRowsIndexes = () => {
  },
  usePaginationLocal = computed(() => false),
}) {
  const clearSelectedRowsOnDataChange = toRef(props, "clearSelectedRowsOnDataChange");
  const pagination = toRef(props, "pagination");
  const rowsCountRenderPerTick = toRef(props, "rowsCountRenderPerTick");

  const prevDataPaginated = ref([]);
  const rowsLocal = ref([]);
  let firstLoad = true;
  let rowsLocalIndex = 0;
  let rowsLocalInterval = undefined;

  const dataPaginated = computed(() => {
    if (limit.value && !pagination.value.isOutside && usePaginationLocal.value) {
      const INDEX_START = offset.value;
      const INDEX_END = INDEX_START + limit.value;
      return dataSorted.value.slice(INDEX_START, INDEX_END);
    }
    return dataSorted.value;
  });

  const rowsLocalAll = computed(() => {
    return dataPaginated.value;
  });

  const rowsLocalLength = computed(() => {
    return rowsLocalAll.value.length;
  });

  const hasRows = computed(() => {
    return !!rowsLocalLength.value;
  });

  const addRowsPartToRowsLocal = () => {
    const INDEX_START = rowsLocalIndex * rowsCountRenderPerTick.value;
    const INDEX_END = INDEX_START + rowsCountRenderPerTick.value;
    map(dataPaginated.value.slice(INDEX_START, INDEX_END), item => rowsLocal.value.push(item));
    rowsLocalIndex++;
  };

  const addAllRowsToRowsLocal = () => {
    rowsLocalInterval = setInterval(() => {
      if (rowsLocalIndex * rowsCountRenderPerTick.value >= dataPaginated.value.length) {
        clearInterval(rowsLocalInterval);
      } else {
        addRowsPartToRowsLocal();
      }
    });
  };

  const stopRenderRows = () => {
    clearInterval(rowsLocalInterval);
  };

  const updateRow = ({ row, rowIndex }) => {
    if (rowIndex > rowsLocal.value.length - 1) {
      return;
    }
    rowsLocal.value[rowIndex] = row;
  };

  const addRow = ({ row }) => {
    rowsLocal.value.unshift(row);
  };

  const deleteRow = ({ index }) => {
    rowsLocal.value.splice(index, 1);
  };

  watch(dataPaginated, newValue => {
    if (isEqual(newValue, prevDataPaginated.value)) {
      return;
    }
    prevDataPaginated.value = [...newValue];
    if (!firstLoad && clearSelectedRowsOnDataChange.value) {
      setEmptySelectedRowsIndexes();
    }
    firstLoad = false;

    rowsLocal.value = [];
    rowsLocalIndex = 0;
    stopRenderRows();
    if (rowsCountRenderPerTick.value > 0) {
      addRowsPartToRowsLocal();
      addAllRowsToRowsLocal();
    } else {
      rowsLocal.value = dataPaginated.value;
    }
  }, {
    immediate: true,
    deep: true,
  });

  return {
    addRow,
    deleteRow,
    hasRows,
    rowsLocal,
    rowsLocalAll,
    rowsLocalLength,
    stopRenderRows,
    updateRow,
  };
}
