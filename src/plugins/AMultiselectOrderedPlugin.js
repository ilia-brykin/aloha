import ChevronDown from "aloha-svg/dist/js/bootstrap/ChevronDown";
import ChevronUp from "aloha-svg/dist/js/bootstrap/ChevronUp";
import Trash from "aloha-svg/dist/js/bootstrap/Trash";

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
