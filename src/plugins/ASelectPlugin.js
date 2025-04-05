import ChevronDown from "aloha-svg/dist/js/bootstrap/ChevronDown";

export const ASelectPluginOptions = {
  propsDefault: {
    buttonClass: undefined,
    caretIcon: ChevronDown,
    countMultiselect: 4,
    dataExtra: [],
    exceededItemsDeletable: true,
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
    keyTitle: undefined,
    maxCountMultiselect: undefined,
    menuWidthType: "as_button",
    modelValue: undefined,
    placement: "bottom-end",
    popperContainerId: "a_select_container",
    readonlyDefault: "",
    search: false,
    searchApi: false,
    searchApiKey: undefined,
    searchOutside: false,
    searchTextInHtml: false,
    searchTimeout: 0,
    slotName: undefined,
    sortOrder: undefined,
    sortOrderGroup: undefined,
    textDeselectAll: "Alle abwählen",
    textSelectAll: "Alle auswählen",
    translateData: false,
    type: "select",
  },
};


export default {
  install: (app, {
    propsDefault = {},
  } = {}) => {
    ASelectPluginOptions.propsDefault = {
      ...ASelectPluginOptions.propsDefault,
      ...propsDefault,
    };
  },
};
