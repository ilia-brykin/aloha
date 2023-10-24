import {
  computed,
  inject,
  toRef,
} from "vue";
import { isFunction } from "lodash-es";

export default function AttributesAPI(props) {
  const row = toRef(props, "row");
  const rowClass = toRef(props, "rowClass");
  const rowIndex = toRef(props, "rowIndex");

  const hasPreview = inject("hasPreview");
  const isMobile = inject("isMobile");
  const previewRightRowIndex = inject("previewRightRowIndex");
  const previewRightRowIndexLast = inject("previewRightRowIndexLast");
  const tableId = inject("tableId");

  const rowId = computed(() => {
    return `${ tableId.value }_${ rowIndex.value }`;
  });

  const isPreviewRightForCurrentRowOpen = computed(() => {
    return rowIndex.value === previewRightRowIndex.value;
  });

  const isPreviewRightForCurrentRowWasOpen = computed(() => {
    return !isPreviewRightForCurrentRowOpen.value &&
      rowIndex.value === previewRightRowIndexLast.value;
  });

  const rowClassLocal = computed(() => {
    if (isFunction(rowClass.value)) {
      return rowClass.value({
        row: row.value,
        rowindex: rowIndex.value,
      });
    }
    return rowClass.value;
  });

  const rowClassComputed = computed(() => {
    return [
      "a_table__row a_table__row_hover",
      {
        a_table__row_focus: isPreviewRightForCurrentRowOpen.value,
        a_table__row_focus_was: isPreviewRightForCurrentRowWasOpen.value,
      },
      rowClassLocal.value
    ];
  });

  const roleLocal = computed(() => {
    return isMobile.value ? "listitem" : "row";
  });

  const rowAttributes = computed(() => {
    const ATTRIBUTES = {
      id: rowId.value,
      class: rowClassComputed.value,
      role: roleLocal.value,
    };
    if (hasPreview.value) {
      ATTRIBUTES.tabindex = -1;
    }
    return ATTRIBUTES;
  });

  return {
    rowAttributes,
  };
}
