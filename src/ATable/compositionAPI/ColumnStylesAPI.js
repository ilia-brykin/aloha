import {
  computed,
  inject,
  toRef,
} from "vue";

import ARemPxAPI from "../../compositionAPI/ARemPxAPI";
import ColumnAdditionalSpaceAPI from "./ColumnAdditionalSpaceAPI";

export default function ColumnStylesAPI(props) {
  const column = toRef(props, "column");

  const columnWidthDefault = inject("columnWidthDefault");
  const useRem = inject("useRem");

  const {
    additionalWidthForCurrentColumn,
  } = ColumnAdditionalSpaceAPI(props);

  const {
    scalePxWithRem,
  } = ARemPxAPI();

  const columnWidth = computed(() => {
    if (useRem.value) {
      return scalePxWithRem(column.value.width) || columnWidthDefault.value;
    }

    return column.value.width || columnWidthDefault.value;
  });

  const columnWidthWithAdditionalSpace = computed(() => {
    return columnWidth.value + additionalWidthForCurrentColumn.value;
  });

  const stylesWidth = computed(() => {
    return `width: ${ columnWidthWithAdditionalSpace.value }px; min-width: ${ columnWidthWithAdditionalSpace.value }px; max-width: ${ columnWidthWithAdditionalSpace.value }px;`;
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
