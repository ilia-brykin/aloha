import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  cloneDeep,
} from "lodash-es";

export default function RowsAPI(props, {
  dataSorted = computed(() => []),
}) {
  const limitStart = toRef(props, "limitStart");
  const offsetStart = toRef(props, "offsetStart");

  const limit = ref(limitStart.value);
  const offset = ref(offsetStart.value);

  const isPaginationOutside = toRef(props, "isPaginationOutside");
  const isPagination = toRef(props, "isPagination");
  const dataPaginated = computed(() => {
    if (limit.value && !isPaginationOutside.value && isPagination.value) {
      const DATA_SORTED = cloneDeep(dataSorted.value);
      const INDEX_START = offset.value;
      const INDEX_END = INDEX_START + limit.value;
      return DATA_SORTED.slice(INDEX_START, INDEX_END);
    }
    return dataSorted.value;
  });

  const rowsLocal = computed(() => {
    return dataPaginated.value;
  });

  const rowsLocalLength = computed(() => {
    return rowsLocal.value.length;
  });

  const hasRows = computed(() => {
    return !!rowsLocalLength.value;
  });

  return {
    hasRows,
    limit,
    offset,
    rowsLocal,
    rowsLocalLength,
  };
}
