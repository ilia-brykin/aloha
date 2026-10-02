const ChevronDown = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg>`;

export const ASelectPluginOptions = {
  propsDefault: {
    buttonClass: undefined,
    caretIcon: ChevronDown,
    class: undefined,
    classMenuSearch: "a_select_menu_with_search",
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
    labelNotFound: "_A_SELECT_LABEL_NOT_FOUND_",
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
    showNotFound: true,
    showSelectedFirst: false,
    slotName: undefined,
    sortOrder: undefined,
    sortOrderGroup: undefined,
    textDeselectAll: "_A_SELECT_DESELECT_ALL_",
    textSelectAll: "_A_SELECT_SELECT_ALL_",
    translateData: false,
    translateGroup: false,
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
