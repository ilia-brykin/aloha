import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  cloneDeep,
  orderBy,
  startsWith,
} from "lodash-es";

export default function RowsAPI(props) {
  const sortingStart = toRef(props, "sortingStart");
  const limitStart = toRef(props, "limitStart");
  const offsetStart = toRef(props, "offsetStart");

  const modelSort = ref(sortingStart.value);
  const limit = ref(limitStart.value);
  const offset = ref(offsetStart.value);

  const sortOptions = computed(() => {
    if (modelSort.value) {
      let directionSort = "asc";
      let modelSortLocal = modelSort.value;
      if (startsWith(modelSort.value, "-")) {
        directionSort = "desc";
        modelSortLocal = modelSort.value.slice(1);
      }
      return {
        direction: directionSort,
        model: modelSortLocal,
      };
    }
    return {};
  });

  const isSortingOutside = toRef(props, "isSortingOutside");
  const data = toRef(props, "data");
  const dataSorted = computed(() => {
    if (modelSort.value && !isSortingOutside.value) {
      return orderBy(data.value, [sortOptions.value.model], [sortOptions.value.direction]);
    }
    return data.value;
  });

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
    modelSort,
    offset,
    rowsLocal,
    rowsLocalLength,
  };
}
