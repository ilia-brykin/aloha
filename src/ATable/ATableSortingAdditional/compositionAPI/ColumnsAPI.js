import {
  computed,
  inject,
  toRef,
} from "vue";

import {
  filter,
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

  const countColumnsAll = computed(() => {
    return columnsAll.value.length;
  });

  return {
    columnsAll,
    countColumnsAll,
  };
}
