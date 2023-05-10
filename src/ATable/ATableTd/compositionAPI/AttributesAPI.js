import {
  computed,
  inject,
  toRef,
} from "vue";

import ColumnStylesAPI from "../../compositionAPI/ColumnStylesAPI";

import {
  isClickTags,
} from "../../utils/utils";

export default function AttributesAPI(props) {
  const disabledPreview = toRef(props, "disabledPreview");
  const isFooter = toRef(props, "isFooter");
  const row = toRef(props, "row");
  const rowIndex = toRef(props, "rowIndex");

  const hasPreview = inject("hasPreview");
  const isMobile = inject("isMobile");
  const onTogglePreview = inject("onTogglePreview");

  const {
    columnsStyles,
  } = ColumnStylesAPI(props);

  const attributesForTd = computed(() => {
    const ATTRIBUTES = {
      class: [
        "a_table__td a_table__cell",
        {
          a_table__cell_click: hasPreview.value && !isFooter.value,
        },
      ],
      style: columnsStyles.value,
    };
    if (!isMobile.value) {
      ATTRIBUTES.role = "cell";
    }
    if (hasPreview.value && !isFooter.value) {
      ATTRIBUTES.onClick = $event => {
        if (disabledPreview.value) {
          return;
        }
        if (isClickTags({
          $event,
          tagsName: [
            "A",
            "BUTTON",
          ],
          classStop: "a_table__td",
        })) {
          return;
        }
        onTogglePreview({
          row: row.value,
          rowIndex: rowIndex.value,
        });
      };
    }
    return ATTRIBUTES;
  });

  return {
    attributesForTd,
  };
}
