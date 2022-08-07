import {
  computed,
  inject,
  toRef,
} from "vue";

import ColumnAdditionalSpaceAPI from "./ColumnAdditionalSpaceAPI";
import ColumnVisibleAPI from "./ColumnVisibleAPI";

export default function ColumnStylesAPI(props) {
  const column = toRef(props, "column");
  const columnWidthDefault = inject("columnWidthDefault");

  const {
    isColumnVisible,
  } = ColumnVisibleAPI(props);

  const {
    additionalWidthForCurrentColumn,
  } = ColumnAdditionalSpaceAPI(props);

  const columnWidth = computed(() => {
    return column.value.width || columnWidthDefault;
  });

  const columnWidthWithAdditionalSpace = computed(() => {
    return columnWidth.value + additionalWidthForCurrentColumn.value;
  });

  const stylesWidth = computed(() => {
    return `width: ${ columnWidthWithAdditionalSpace.value }px; min-width: ${ columnWidthWithAdditionalSpace.value }px; max-width: ${ columnWidthWithAdditionalSpace.value }px; ${ !isColumnVisible.value ? `display: none;` : "" }`;
  });

  const columnsStyles = computed(() => {
    if (column.value.style) {
      return `${ stylesWidth.value } ${ column.value.style }`;
    }
    return stylesWidth.value;
  });

  return {
    columnsStyles,
  };
}
