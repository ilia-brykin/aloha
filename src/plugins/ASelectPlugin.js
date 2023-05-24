import {
  ref,
} from "vue";

export const selectPluginOptions = ref({
  propsDefault: {
    buttonClass: undefined,
    countMultiselect: 4,
    data: [],
    isCloseByClick: undefined,
    isDataSimpleArray: false,
    isDeselect: true,
    isDeselectAll: false,
    isSelectAll: false,
    isSelectionCloseable: true,
    keyGroup: undefined,
    keyId: "value",
    keyLabel: "label",
    loading: false,
    maxCountMultiselect: undefined,
    menuWidthType: "as_button",
    modelValue: undefined,
    placement: "bottom-end",
    popperContainerId: "a_select_container",
    search: false,
    searchOutside: false,
    slotName: undefined,
    sortOrder: undefined,
    sortOrderGroup: undefined,
    textDeselectAll: "Alle abwählen",
    textEmpty: "_SELECT_TEXT_EMPTY_",
    textSearch: "Suche",
    textSelectAll: "Alle auswählen",
    type: "select",
  },
});


export default {
  install: (app, {
    propsDefault = {},
  } = {}) => {
    selectPluginOptions.value.propsDefault = {
      ...selectPluginOptions.value.propsDefault,
      ...propsDefault,
    };
  },
};