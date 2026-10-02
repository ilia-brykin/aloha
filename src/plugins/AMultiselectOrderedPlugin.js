const ChevronDown = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg>`;
const ChevronUp = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
</svg>`;
const Trash = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>`;

export const AMultiselectOrderedPluginTexts = {
  btnDeleteTitle: "_A_MULTISELECT_ORDERED_BTN_DELETE_",
  btnDownTitle: "_A_MULTISELECT_ORDERED_BTN_DOWN_",
  btnGroupAriaLabel: "_A_MULTISELECT_ORDERED_BTN_GROUP_ARIA_LABEL_",
  btnUpTitle: "_A_MULTISELECT_ORDERED_BTN_UP_",
  deselectAll: "_A_MULTISELECT_ORDERED_DESELECT_ALL_",
  groupAllAriaLabel: "_A_MULTISELECT_ORDERED_GROUP_ALL_",
  modelEmpty: "_A_MULTISELECT_ORDERED_MODEL_EMPTY_",
  selectAll: "_A_MULTISELECT_ORDERED_SELECT_ALL_",
};

export const AMultiselectOrderedPluginOptions = {
  propsDefault: {
    attributesBtnDeselectAll: {},
    attributesBtnSelectAll: {},
    attributesFieldset: {},
    btnDeleteClass: "a_btn a_btn_primary",
    btnDeleteIcon: Trash,
    btnDownClass: "a_btn a_btn_outline_secondary",
    btnDownIcon: ChevronDown,
    btnGroupClass: "a_btn_group",
    btnUpClass: "a_btn a_btn_outline_secondary",
    btnUpIcon: ChevronUp,
    classFieldset: undefined,
    hasBorder: true,
    isDeselectAll: false,
    isSelectAll: false,
    keyDisabled: undefined,
    keyGroup: undefined,
    keyId: "value",
    keyLabel: "label",
    labelClass: undefined,
    listItemClass: "a_list_group__item",
    readonlyDefault: "",
    search: false,
    searchApi: false,
    searchApiKey: undefined,
    searchInGroup: false,
    searchOutside: false,
    searchTextInHtml: false,
    searchTimeout: 0,
    selectButtonClass: undefined,
    selectButtonClassDefault: "a_form_control a_select_toggle",
    selectCaretIcon: ChevronDown,
    selectHasCaret: true,
    selectInBody: true,
    selectIsCloseByClick: false,
    selectIsLabelFloat: true,
    selectIsSelectionCloseable: true,
    selectLabel: "_A_MULTISELECT_ORDERED_LABEL_SELECT_",
    selectLabelClass: undefined,
    selectMenuClass: undefined,
    selectMenuWidthType: "as_button",
    selectPlacement: "bottom-end",
    selectPopperContainerId: "a_select_container",
    slotName: undefined,
    sortOrder: "asc",
    sortOrderGroup: "asc",
    texts: {
      ...AMultiselectOrderedPluginTexts,
    },
    translateData: false,
    translateGroup: false,
  },
};


export default {
  install: (app, {
    propsDefault = {},
  } = {}) => {
    AMultiselectOrderedPluginOptions.propsDefault = {
      ...AMultiselectOrderedPluginOptions.propsDefault,
      ...propsDefault,
    };
  },
};
