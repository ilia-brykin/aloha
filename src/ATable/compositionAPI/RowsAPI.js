import {
  computed,
  ref,
  toRef, watch,
} from "vue";

import {
  cloneDeep,
} from "lodash-es";

export default function RowsAPI(props, {
  dataSorted = computed(() => []),
}) {
  const isPagination = toRef(props, "isPagination");
  const isPaginationOutside = toRef(props, "isPaginationOutside");
  const limitStart = toRef(props, "limitStart");
  const offsetStart = toRef(props, "offsetStart");

  const limit = ref(limitStart.value);
  const offset = ref(offsetStart.value);
  const rowsLocal = ref([]);
  let rowsLocalIndex = 0;
  const rowsCount = 20;
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

  const rowsLocalLength = computed(() => {
    return dataPaginated.value.length;
  });

  const hasRows = computed(() => {
    return !!rowsLocalLength.value;
  });

  const addRowsPartToRowsLocal = ({ rows }) => {
    const INDEX_START = rowsLocalIndex * rowsCount;
    const INDEX_END = INDEX_START + rowsCount;
    rowsLocal.value.push(...rows.slice(INDEX_START, INDEX_END));
    rowsLocalIndex++;
  };

  const addAllRowsToRowsLocal = ({ rows }) => {
    rowsLocalInterval = setInterval(() => {
      if (rowsLocalIndex * rowsCount >= rows.length) {
        clearInterval(rowsLocalInterval);
      } else {
        addRowsPartToRowsLocal({ rows });
      }
    });
  };

  watch(dataPaginated, rows => {
    rowsLocal.value = [];
    rowsLocalIndex = 0;
    clearInterval(rowsLocalInterval);
    addRowsPartToRowsLocal({ rows });
    addAllRowsToRowsLocal({ rows });
  }, {
    immediate: true,
  });

  return {
    hasRows,
    limit,
    offset,
    rowsLocal,
    rowsLocalLength,
  };
}
