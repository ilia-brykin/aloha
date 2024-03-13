import {
  computed,
  inject,
  toRef,
} from "vue";

import {
  filter,
  keyBy,
} from "lodash-es";

export default function ColumnsAPI(props) {
  const additionalSortingColumns = toRef(props, "additionalSortingColumns");

  const columnsOrdered = inject("columnsOrdered");

  const columnsAll = computed(() => {
    return [
      ...filter(columnsOrdered.value, column => {
        return column.sortId;
      }),
      ...additionalSortingColumns.value,
    ];
  });

  const columnsAllKeyBySortId = computed(() => {
    return keyBy(columnsAll.value, "sortId");
  });

  const countColumnsAll = computed(() => {
    return columnsAll.value.length;
  });

  return {
    columnsAll,
    columnsAllKeyBySortId,
    countColumnsAll,
  };
}
