import {
  ref,
} from "vue";

export const modalPluginOptions = ref({
  propsDefault: {
    closeButtonClass: "a_btn a_btn_secondary",
    closeButtonText: "_A_MODAL_BTN_CANCEL_",
    headerTag: "h2",
    idPrefix: undefined,
    isCloseButtonHide: false,
    isDataFormHide: false,
    isDataFormRender: true,
    isRequired: false,
    isSaveButtonHide: false,
    modalClass: undefined,
    saveButtonClass: "a_btn a_btn_primary",
    saveButtonText: "_A_MODAL_BTN_SAVE_",
    selectorClose: undefined,
    selectorCloseIds: undefined,
    size: undefined,
    textRequired: undefined,
    useEscape: true,
  },
});
export default {
  install: (app, {
    propsDefault = {},
  } = {}) => {
    modalPluginOptions.value.propsDefault = {
      ...modalPluginOptions.value.propsDefault,
      ...propsDefault,
    };
  },
};
