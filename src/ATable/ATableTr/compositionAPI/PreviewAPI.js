import {
  computed,
  inject,
  toRef,
} from "vue";

import {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

export default function PreviewAPI(props, {
  hasChildren = computed(() => false),
}) {
  const isFooter = toRef(props, "isFooter");
  const rowIndex = toRef(props, "rowIndex");

  const hasPreview = inject("hasPreview");
  const previewRightRowIndex = inject("previewRightRowIndex");
  const previewRightRowIndexLast = inject("previewRightRowIndexLast");

  const hasPreviewLocal = computed(() => {
    return !!(!hasChildren.value && hasPreview.value && !isFooter.value);
  });

  const isPreviewRightForCurrentRowOpen = computed(() => {
    return rowIndex.value === previewRightRowIndex.value;
  });

  const isPreviewRightForCurrentRowWasOpen = computed(() => {
    return !isPreviewRightForCurrentRowOpen.value &&
      rowIndex.value === previewRightRowIndexLast.value;
  });

  const previewAriaLabel = computed(() => {
    return getTranslatedText({
      placeholder: isPreviewRightForCurrentRowOpen.value ?
        "_A_TABLE_ROW_PREVIEW_CLOSE_" :
        "_A_TABLE_ROW_PREVIEW_OPEN_",
    });
  });

  const previewAttributes = computed(() => {
    if (!hasPreviewLocal.value) {
      return {};
    }

    return {
      tabindex: 0,
      "aria-label": previewAriaLabel.value,
    };
  });

  const rowClassPreview = computed(() => {
    if (!hasPreviewLocal.value) {
      return undefined;
    }

    return {
      a_table__row_preview_open: isPreviewRightForCurrentRowOpen.value,
      a_table__row_preview_was_open: isPreviewRightForCurrentRowWasOpen.value,
    };
  });

  return {
    hasPreviewLocal,
    previewAttributes,
    rowClassPreview,
  };
}
