import {
  computed,
  inject,
  toRef,
} from "vue";

import EyeClose from "../../../../AIcon/Icons/EyeClose";
import EyeOpen from "../../../../AIcon/Icons/EyeOpen";
import Lock from "../../../../AIcon/Icons/Lock";
import {
  cloneDeep,
} from "lodash-es";

export default function ButtonVisibleAPI(props, {
  isLocked = computed(() => false),
}) {
  const column = toRef(props, "column");
  const disabledOptions = toRef(props, "disabledOptions");

  const changeModelColumnsVisible = inject("changeModelColumnsVisible");
  const modelColumnsVisibleLocal = inject("modelColumnsVisibleLocal");

  const isColumnVisible = computed(() => {
    if (column.value.id in modelColumnsVisibleLocal.value) {
      return !!modelColumnsVisibleLocal.value[column.value.id];
    }
    return !column.value.hide;
  });

  const iconVisible = computed(() => {
    if (isLocked.value) {
      return Lock;
    }
    return isColumnVisible.value ?
      EyeOpen :
      EyeClose;
  });

  const titleButtonVisible = computed(() => {
    if (isLocked.value) {
      return "_A_TABLE_OPTIONS_BTN_LOCK_TITLE_";
    }
    if (isColumnVisible.value) {
      return "_A_TABLE_OPTIONS_BTN_EYE_TITLE_";
    }
    return "_A_TABLE_OPTIONS_BTN_EYE_CLOSED_TITLE_";
  });

  const toggleColumnVisible = ({ $event }) => {
    $event.stopPropagation();
    $event.preventDefault();
    const MODEL_COLUMNS = cloneDeep(modelColumnsVisibleLocal.value);
    MODEL_COLUMNS[column.value.id] = !isColumnVisible.value;
    changeModelColumnsVisible(MODEL_COLUMNS);
  };

  const buttonVisibleProps = computed(() => {
    const ATTRIBUTES = {
      class: "a_table__th__dropdown_item__icon",
      tag: "span",
      iconLeft: iconVisible.value,
      title: titleButtonVisible.value,
      textScreenReader: titleButtonVisible.value,
    };
    if (!isLocked.value) {
      ATTRIBUTES.tag = "button";
      ATTRIBUTES.class += " a_table__th__dropdown_item__icon_btn a_btn a_btn_link";
      ATTRIBUTES.onClick = toggleColumnVisible;
      if (disabledOptions.value) {
        ATTRIBUTES.disabled = true;
      }
    }
    return ATTRIBUTES;
  });

  return {
    buttonVisibleProps,
    isColumnVisible,
  };
}
