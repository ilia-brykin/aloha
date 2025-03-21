import {
  computed,
  inject,
  toRef,
} from "vue";

import {
  isClickTags,
} from "../../utils/utils";

import AKeysCode from "../../../const/AKeysCode";
import {
  isFunction,
} from "lodash-es";

export default function AttributesAPI(props, {
  hasChildren = computed(() => false),
  hasPreviewLocal = computed(() => false),
  rowClassChildren = computed(() => undefined),
  rowClassLevelChildren = computed(() => undefined),
  rowClassPreview = computed(() => undefined),
  toggleChildren = () => {},
}) {
  const disabledPreview = toRef(props, "disabledPreview");
  const disabledPreviewRowCallback = toRef(props, "disabledPreviewRowCallback");
  const isFooter = toRef(props, "isFooter");
  const isTreeCollapsible = toRef(props, "isTreeCollapsible");
  const level = toRef(props, "level");
  const row = toRef(props, "row");
  const rowClass = toRef(props, "rowClass");
  const rowIndex = toRef(props, "rowIndex");

  const isMobile = inject("isMobile");
  const onTogglePreview = inject("onTogglePreview");
  const tableId = inject("tableId");

  const rowHtmlId = computed(() => {
    const FOOTER_ID = isFooter.value ? "_footer" : "";
    return `${ tableId.value }${ FOOTER_ID }_${ rowIndex.value }`;
  });

  const rowClassLocal = computed(() => {
    if (isFunction(rowClass.value)) {
      return rowClass.value({
        level: level.value,
        row: row.value,
        rowindex: rowIndex.value,
      });
    }
    return rowClass.value;
  });

  const rowClassComputed = computed(() => {
    return [
      "a_table__row a_table__body__row a_table__row_hover",
      rowClassChildren.value,
      rowClassLevelChildren.value,
      rowClassPreview.value,
      rowClassLocal.value,
    ];
  });

  const roleLocal = computed(() => {
    return isMobile.value ? "listitem" : "row";
  });

  const disabledPreviewRow = computed(() => {
    if (isFunction(disabledPreviewRowCallback.value)) {
      return disabledPreviewRowCallback.value({ row: row.value, rowIndex: rowIndex.value });
    }
    return disabledPreview.value;
  });

  const onClickRow = $event => {
    if (isClickTags({
      $event,
      tagsName: [
        "A",
        "BUTTON",
        "INPUT",
        "LABEL",
      ],
      classStop: "a_table__row",
    })) {
      return;
    }
    if (hasChildren.value) {
      toggleChildren();
    } else if (hasPreviewLocal.value) {
      onTogglePreview({
        row: row.value,
        rowIndex: rowIndex.value,
      });
    }
  };

  const onKeydownRow = $event => {
    if ($event.keyCode === AKeysCode.enter) {
      onClickRow($event);
    }
  };

  const eventsLocal = computed(() => {
    if (((isTreeCollapsible.value && hasChildren.value)
      || hasPreviewLocal.value) &&
      !disabledPreviewRow.value) {
      return {
        tabindex: 0,
        onClick: onClickRow,
        onKeydown: onKeydownRow,
      };
    }

    return {};
  });

  return {
    disabledPreviewRow,
    eventsLocal,
    roleLocal,
    rowClassComputed,
    rowHtmlId,
  };
}
