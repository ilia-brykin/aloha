import {
  computed,
  h,
  ref,
  toRef,
} from "vue";

import AButton from "../../../AButton/AButton";

import {
  tablePluginComponentsProps,
} from "../../../plugins/ATablePlugin";

export default function ToggleAPI(props) {
  const filtersVisible = toRef(props, "filtersVisible");
  const filtersGroup = toRef(props, "filtersGroup");

  const isOpen = ref(false);

  const onOpen = () => {
    isOpen.value = true;
  };

  const onClose = () => {
    isOpen.value = false;
  };

  const onToggle = () => {
    if (isOpen.value) {
      onClose();
    } else {
      onOpen();
    }
  };

  const iconToggle = computed(() => {
    return isOpen.value ? "ChevronUp" : "ChevronDown";
  });

  const textToggle = computed(() => {
    return isOpen.value ? "_A_FILTERS_CLOSE_ADVANCED_SEARCH_" : "_A_FILTERS_OPEN_ADVANCED_SEARCH_";
  });

  const styleToggle = computed(() => {
    return isOpen.value ? "" : "display: none;";
  });

  const isBtnToggleVisible = computed(() => {
    return !!(filtersVisible.value.length || filtersGroup.value.alwaysVisible.length);
  });

  const buttonToggleComponent = computed(() => {
    return isBtnToggleVisible.value && h(AButton, {
      class: "a_btn a_btn_link a_text_nowrap a_table__filters_top__toggle_filter",
      type: "button",
      text: textToggle,
      iconRight: iconToggle,
      onClick: onToggle,
      ...tablePluginComponentsProps.value.buttonToggle,
    });
  });

  return {
    buttonToggleComponent,
    isOpen,
    onClose,
    onOpen,
    styleToggle,
  };
}
