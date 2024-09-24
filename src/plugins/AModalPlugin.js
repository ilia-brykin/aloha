import {
  ref,
} from "vue";

export const modalPluginOptions = ref({
  propsDefault: {
    closeButtonClass: "a_btn a_btn_secondary",
    closeButtonText: "_A_MODAL_BTN_CANCEL_",
    closeButtonTextScreenReaderFooter: "_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_FOOTER_",
    closeButtonTextScreenReaderHeader: "_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_HEADER_",
    headerTag: "h2",
    idPrefix: undefined,
    isCloseButtonHide: false,
    isDataFormHide: false,
    isDataFormRender: true,
    isFooterSticky: false,
    isRequired: false,
    isSaveButtonHide: false,
    modalClass: undefined,
    modalStyle: undefined,
    saveButtonClass: "a_btn a_btn_primary",
    saveButtonText: "_A_MODAL_BTN_SAVE_",
    saveButtonTextScreenReader: "_A_MODAL_BTN_TEXT_SCREEN_READER_SAVE_",
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
