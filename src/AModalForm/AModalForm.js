import {
  h,
} from "vue";

import AForm from "../ui/AForm/AForm";
import AModal from "../AModal/AModal";
import ATranslation from "../ATranslation/ATranslation";

import DataFormAPI from "./compositionAPI/DataFormAPI";
import UpdateModalAPI from "./compositionAPI/UpdateModalAPI";

import {
  modalPluginOptions,
} from "../plugins/AModalPlugin";
import {
  uniqueId,
} from "lodash-es";

// @vue/component
export default {
  name: "AModalForm",
  inheritAttrs: false,
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    backdropZIndex: {
      type: Number,
      required: false,
      default: undefined,
    },
    bodyHtml: {
      type: String,
      required: false,
      default: "",
    },
    close: {
      type: Function,
      required: true,
    },
    closeButtonClass: {
      type: [String, Array, Object],
      required: false,
      default: () => modalPluginOptions.value.propsDefault.closeButtonClass,
    },
    closeButtonId: {
      type: String,
      required: false,
      default: undefined,
    },
    closeButtonText: {
      type: String,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.closeButtonText,
    },
    dataForm: {
      type: Array,
      required: false,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabledSave: {
      type: Boolean,
      required: false,
      default: false,
    },
    errors: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    headerTag: {
      type: String,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.headerTag,
    },
    headerText: {
      type: String,
      required: false,
      default: undefined,
    },
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_modal_form_")
    },
    idPrefix: {
      type: String,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.idPrefix,
    },
    isCloseButtonHide: {
      type: Boolean,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.isCloseButtonHide,
    },
    isConfirm: {
      type: Boolean,
      required: false,
    },
    isDataFormHide: {
      type: Boolean,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.isDataFormHide,
    },
    isDataFormRender: {
      type: Boolean,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.isDataFormRender,
    },
    isFooterSticky: {
      type: Boolean,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.isFooterSticky,
    },
    isModalHidden: {
      type: Boolean,
      required: false,
      default: false,
    },
    isRequired: {
      type: Boolean,
      required: false,
      default: modalPluginOptions.value.propsDefault.isRequired,
    },
    isSaveButtonHide: {
      type: Boolean,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.isSaveButtonHide,
    },
    loading: {
      type: Boolean,
      required: false,
    },
    modalClass: {
      type: [String, Object],
      required: false,
      default: () => modalPluginOptions.value.propsDefault.modalClass,
    },
    modalStyle: {
      type: [String, Object],
      required: false,
      default: () => modalPluginOptions.value.propsDefault.modalStyle,
    },
    modelValue: {
      type: Object,
      required: false,
      default: undefined,
    },
    save: {
      type: Function,
      required: false,
      default: undefined,
    },
    saveButtonClass: {
      type: [String, Array, Object],
      required: false,
      default: () => modalPluginOptions.value.propsDefault.saveButtonClass,
    },
    saveButtonId: {
      type: String,
      required: false,
      default: undefined,
    },
    saveButtonText: {
      type: String,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.saveButtonText,
    },
    selectorClose: {
      type: [String, Array],
      required: false,
      default: () => modalPluginOptions.value.propsDefault.selectorClose,
    },
    selectorCloseIds: {
      type: [String, Array],
      required: false,
      default: () => modalPluginOptions.value.propsDefault.selectorCloseIds,
    },
    size: {
      type: String,
      validator: value => ["small", "large", "xl", "xxl", "fullscreen"].indexOf(value) !== -1,
      default: () => modalPluginOptions.value.propsDefault.size,
    },
    stop: {
      type: Boolean,
      required: false,
    },
    textErrorHeader: {
      type: String,
      required: false,
      default: undefined,
    },
    textRequired: {
      type: String,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.textRequired,
    },
    useEscape: {
      type: Boolean,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.useEscape,
    },
    zIndex: {
      type: Number,
      required: false,
      default: undefined,
    },
  },
  emits: [
    "update:modelValue",
  ],
  setup(props, context) {
    const {
      hasDataForm,
    } = DataFormAPI(props);

    const {
      updateModelLocal,
    } = UpdateModalAPI(context);

    return {
      hasDataForm,
      updateModelLocal,
    };
  },
  render() {
    return h(AModal, {
      alwaysTranslate: this.alwaysTranslate,
      backdropZIndex: this.backdropZIndex,
      close: this.close,
      closeButtonClass: this.closeButtonClass,
      closeButtonId: this.closeButtonId,
      closeButtonText: this.closeButtonText,
      disabled: this.disabled,
      disabledSave: this.disabledSave,
      extra: this.extra,
      headerTag: this.headerTag,
      headerText: this.headerText,
      id: this.id,
      isCloseButtonHide: this.isCloseButtonHide,
      isConfirm: this.isConfirm,
      isFooterSticky: this.isFooterSticky,
      isModalHidden: this.isModalHidden,
      isSaveButtonHide: this.isSaveButtonHide,
      loading: this.loading,
      modalClass: this.modalClass,
      modalStyle: this.modalStyle,
      save: this.save,
      saveButtonClass: this.saveButtonClass,
      saveButtonId: this.saveButtonId,
      saveButtonText: this.saveButtonText,
      selectorClose: this.selectorClose,
      selectorCloseIds: this.selectorCloseIds,
      size: this.size,
      stop: this.stop,
      useEscape: this.useEscape,
      zIndex: this.zIndex,
    }, {
      ...this.$slots || {},
      modalBody: () => [
        this.$slots.modalBodyPrepend && this.$slots.modalBodyPrepend(),
        this.hasDataForm && h(AForm, {
          alwaysTranslate: this.alwaysTranslate,
          modelValue: this.modelValue,
          data: this.dataForm,
          errors: this.errors,
          idPrefix: this.idPrefix,
          isRequired: this.isRequired,
          textRequired: this.textRequired,
          textErrorHeader: this.textErrorHeader,
          isHide: this.isDataFormHide,
          isRender: this.isDataFormRender,
          "onUpdate:modelValue": this.updateModelLocal,
        }, this.$slots),
        this.bodyHtml && h(ATranslation, {
          alwaysTranslate: this.alwaysTranslate,
          html: this.bodyHtml,
          extra: this.extra,
        }),
        this.$slots.modalBodyAppend && this.$slots.modalBodyAppend(),
      ],
    });
  },
};
