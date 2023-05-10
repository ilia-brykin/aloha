import {
  computed,
  ref,
  toRef,
  watch,
} from "vue";

import {
  cloneDeep,
  map,
} from "lodash-es";

export default function RowsAPI(props, {
  dataSorted = computed(() => []),
}) {
  const isPagination = toRef(props, "isPagination");
  const isPaginationOutside = toRef(props, "isPaginationOutside");
  const limitStart = toRef(props, "limitStart");
  const offsetStart = toRef(props, "offsetStart");
  const rowsCountRenderPerTick = toRef(props, "rowsCountRenderPerTick");

  const limit = ref(limitStart.value);
  const offset = ref(offsetStart.value);
  const rowsLocal = ref([]);
  let rowsLocalIndex = 0;
  let rowsLocalInterval = undefined;

  const dataPaginated = computed(() => {
    if (limit.value && !isPaginationOutside.value && isPagination.value) {
      const DATA_SORTED = cloneDeep(dataSorted.value);
      const INDEX_START = offset.value;
      const INDEX_END = INDEX_START + limit.value;
      return DATA_SORTED.slice(INDEX_START, INDEX_END);
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

  watch(dataPaginated, () => {
    rowsLocal.value = [];
    rowsLocalIndex = 0;
    stopRenderRows();
    addRowsPartToRowsLocal();
    addAllRowsToRowsLocal();
  }, {
    immediate: true,
  });

  return {
    hasRows,
    limit,
    offset,
    rowsLocal,
    rowsLocalAll,
    rowsLocalLength,
    stopRenderRows,
  };
}
