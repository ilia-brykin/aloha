import {
  ref,
} from "vue";

export const modalPluginOptions = ref({
  propsDefault: {
    closeButtonClass: "a_btn a_btn_secondary",
    closeButtonText: "Abbrechen",
    headerTag: "h2",
    idPrefix: undefined,
    isCloseButtonHide: false,
    isDataFormHide: false,
    isDataFormRender: true,
    isRequired: false,
    isSaveButtonHide: false,
    modalClass: undefined,
    saveButtonClass: "a_btn a_btn_primary",
    saveButtonText: "Speichern",
    selectorClose: undefined,
    size: undefined,
    textRequired: undefined,
    withoutEscape: false,
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
