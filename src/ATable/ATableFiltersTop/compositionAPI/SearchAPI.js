import {
  computed,
  h,
  toRef,
} from "vue";

import AButton from "../../../AButton/AButton";

import {
  tablePluginComponentsProps,
} from "../../../plugins/ATablePlugin";

export default function SearchAPI(props, { emit }, {
  onClose = () => {},
}) {
  const disabledFilters = toRef(props, "disabledFilters");

  const onSearch = () => {
    if (disabledFilters.value) {
      return;
    }

    onClose();
    emit("startSearch");
  };

  const buttonSearchComponent = computed(() => {
    return h(AButton, {
      class: "a_btn a_btn_primary a_text_nowrap a_table__filters_top__search",
      iconLeft: "Search",
      type: "submit",
      text: {
        desktop: "_A_TABLE_START_SEARCH_",
      },
      textScreenReader: {
        mobile: "_A_TABLE_START_SEARCH_",
      },
      prevent: true,
      stop: true,
      disabled: disabledFilters.value,
      onClick: onSearch,
      ...tablePluginComponentsProps.value.buttonSearch,
    });
  });

  return {
    buttonSearchComponent,
    onSearch,
  };
}
