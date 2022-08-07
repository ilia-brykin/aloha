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
  const modelColumnsVisibleMapping = inject("modelColumnsVisibleMapping", {});
  const modelIsTableWithoutScroll = inject("modelIsTableWithoutScroll");


  const isVisibleFromModel = computed(() => {
    return !!modelColumnsVisibleMapping.value[column.value.id];
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
