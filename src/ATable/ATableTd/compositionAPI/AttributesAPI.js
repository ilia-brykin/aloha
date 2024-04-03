import {
  computed,
  inject,
  toRef,
} from "vue";

import ColumnStylesAPI from "../../compositionAPI/ColumnStylesAPI";

export default function AttributesAPI(props) {
  const column = toRef(props, "column");
  const disabledPreview = toRef(props, "disabledPreview");
  const isFooter = toRef(props, "isFooter");

  const hasPreview = inject("hasPreview");
  const isMobile = inject("isMobile");

  const {
    columnsStyles,
  } = ColumnStylesAPI(props);

  const attributesForTd = computed(() => {
    const ATTRIBUTES = {
      class: [
        "a_table__td a_table__cell",
        {
          a_table__cell_click: hasPreview.value && !isFooter.value && !disabledPreview.value,
        },
        column.value.classRowParent,
      ],
      style: columnsStyles.value,
    };
    if (!isMobile.value) {
      ATTRIBUTES.role = "cell";
    }

    return ATTRIBUTES;
  });

  return {
    attributesForTd,
  };
}
