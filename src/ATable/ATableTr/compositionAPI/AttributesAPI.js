import {
  computed,
  inject,
  toRef,
} from "vue";

import AKeysCode from "../../../const/AKeysCode";
import {
  isClickTags,
} from "../../utils/utils";
import {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";
import {
  isFunction,
} from "lodash-es";

export default function AttributesAPI(props) {
  const disabledPreview = toRef(props, "disabledPreview");
  const isFooter = toRef(props, "isFooter");
  const row = toRef(props, "row");
  const rowClass = toRef(props, "rowClass");
  const rowIndex = toRef(props, "rowIndex");

  const hasPreview = inject("hasPreview");
  const isMobile = inject("isMobile");
  const onTogglePreview = inject("onTogglePreview");
  const previewRightRowIndex = inject("previewRightRowIndex");
  const previewRightRowIndexLast = inject("previewRightRowIndexLast");
  const tableId = inject("tableId");

  const rowId = computed(() => {
    const FOOTER_ID = isFooter.value ? "_footer" : "";
    return `${ tableId.value }${ FOOTER_ID }_${ rowIndex.value }`;
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
        a_table__row_preview_open: isPreviewRightForCurrentRowOpen.value,
        a_table__row_preview_was_open: isPreviewRightForCurrentRowWasOpen.value,
      },
      rowClassLocal.value
    ];
  });

  const roleLocal = computed(() => {
    return isMobile.value ? "listitem" : "row";
  });

  const previewAriaLabel = computed(() => {
    return getTranslatedText({
      placeholder: isPreviewRightForCurrentRowOpen.value ?
        "_A_TABLE_ROW_PREVIEW_CLOSE_" :
        "_A_TABLE_ROW_PREVIEW_OPEN_",
    });
  });

  const onClickRow = $event => {
    if (disabledPreview.value) {
      return;
    }
    if (isClickTags({
      $event,
      tagsName: [
        "A",
        "BUTTON",
      ],
      classStop: "a_table__row",
    })) {
      return;
    }

    $event.stopPropagation();
    $event.preventDefault();

    onTogglePreview({
      row: row.value,
      rowIndex: rowIndex.value,
    });
  };

  const onKeydownRow = $event => {
    if ($event.keyCode === AKeysCode.enter) {
      onClickRow($event);
    }
  };

  const rowAttributes = computed(() => {
    const ATTRIBUTES = {
      id: rowId.value,
      class: rowClassComputed.value,
      role: roleLocal.value,
    };
    if (hasPreview.value && !isFooter.value) {
      ATTRIBUTES.tabindex = 0;
      ATTRIBUTES["aria-label"] = previewAriaLabel.value;
      ATTRIBUTES.onClick = onClickRow;
      ATTRIBUTES.onKeydown = onKeydownRow;
    }
    return ATTRIBUTES;
  });

  return {
    rowAttributes,
  };
}
