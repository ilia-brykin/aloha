import {
  computed,
  inject,
  toRef,
} from "vue";

import {
  isNil,
} from "lodash-es";

export default function ColumnVisibleAPI(props) {
  const column = toRef(props, "column");
  const columnIndex = toRef(props, "columnIndex");
  const indexFirstScrollInvisibleColumn = inject("indexFirstScrollInvisibleColumn", undefined);
  const modelColumnsVisibleLocal = inject("modelColumnsVisibleLocal", {});
  const modelIsTableWithoutScroll = inject("modelIsTableWithoutScroll");


  const isVisibleFromModel = computed(() => {
    if (column.value.id in modelColumnsVisibleLocal.value) {
      return !!modelColumnsVisibleLocal.value[column.value.id];
    }
    return !column.value.hide;
  });

  const isVisibleFromScroll = computed(() => {
    if (isNil(indexFirstScrollInvisibleColumn)) {
      return true;
    }
    return columnIndex.value < indexFirstScrollInvisibleColumn.value;
  });

  const isColumnVisible = computed(() => {
    if (modelIsTableWithoutScroll.value) {
      return isVisibleFromModel.value && isVisibleFromScroll.value;
    }
    return isVisibleFromModel.value;
  });

  return {
    isColumnVisible,
  };
}
