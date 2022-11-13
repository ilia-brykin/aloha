import {
  computed,
  inject,
  toRef,
} from "vue";

export default function AttributesAPI(props) {
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

  const rowClass = computed(() => {
    return ["a_table__row a_table__row_hover", {
      a_table__row_focus: isPreviewRightForCurrentRowOpen.value,
      a_table__row_focus_was: isPreviewRightForCurrentRowWasOpen.value,
    }];
  });

  const roleLocal = computed(() => {
    return isMobile.value ? "listitem" : "row";
  });

  const rowAttributes = computed(() => {
    const ATTRIBUTES = {
      id: rowId.value,
      class: rowClass.value,
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
