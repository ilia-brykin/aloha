import {
  ref,
} from "vue";

export const selectPluginOptions = ref({
  propsDefault: {
    buttonClass: undefined,
    countMultiselect: 4,
    dataExtra: [],
    inBody: true,
    isCloseByClick: undefined,
    isDataSimpleArray: false,
    deselectable: true,
    isDeselectAll: false,
    isSelectAll: false,
    isSelectionCloseable: true,
    keyDisabled: undefined,
    keyGroup: undefined,
    keyId: "value",
    keyLabel: "label",
    maxCountMultiselect: undefined,
    menuWidthType: "as_button",
    modelValue: undefined,
    placement: "bottom-end",
    popperContainerId: "a_select_container",
    search: false,
    searchOutside: false,
    searchTimeout: 0,
    slotName: undefined,
    sortOrder: undefined,
    sortOrderGroup: undefined,
    textDeselectAll: "Alle abwählen",
    textSelectAll: "Alle auswählen",
    translateData: false,
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
