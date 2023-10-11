import {
  h,
} from "vue";

import AModal from "../AModal/AModal";
import AWizard from "../AWizard/AWizard";

import EmitsAPI from "./compositionAPI/EmitsAPI";
import FooterAPI from "./compositionAPI/FooterAPI";
import VisibleAPI from "./compositionAPI/VisibleAPI";

import {
  modalPluginOptions,
} from "../plugins/AModalPlugin";
import {
  uniqueId,
} from "lodash-es";

// @vue/component
export default {
  name: "AModalWizard",
  inheritAttrs: false,
  props: {
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
    isCloseButtonHide: {
      type: Boolean,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.isCloseButtonHide,
    },
    isConfirm: {
      type: Boolean,
      required: false,
    },
    isModalHidden: {
      type: Boolean,
      required: false,
      default: false,
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
    useEscape: {
      type: Boolean,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.useEscape,
    },
    // WIZARD
    backButtonClass: {
      type: [String, Array, Object],
      required: false,
      default: "a_btn a_btn_secondary"
    },
    backButtonIcon: {
      type: String,
      required: false,
      default: undefined,
    },
    backButtonIconAlign: {
      type: String,
      required: false,
      default: undefined,
    },
    backButtonText: {
      type: String,
      required: false,
      default: "_WIZARD_PREVIOUS_",
    },
    backButtonTitle: {
      type: String,
      required: false,
      default: undefined,
    },
    forwardButtonClass: {
      type: [String, Array, Object],
      required: false,
      default: "a_btn a_btn_secondary"
    },
    forwardButtonIcon: {
      type: String,
      required: false,
      default: undefined,
    },
    forwardButtonIconAlign: {
      type: String,
      required: false,
      default: undefined,
    },
    forwardButtonText: {
      type: String,
      required: false,
      default: "_WIZARD_NEXT_",
    },
    forwardButtonTitle: {
      type: String,
      required: false,
      default: undefined,
    },
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_modal_wizard_")
    },
    isBackButtonDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    isBackButtonHide: {
      type: Boolean,
      required: false,
    },
    isBackFirstButtonHide: {
      type: Boolean,
      required: false,
    },
    isBackStepButtonDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    isButtonsLoading: {
      type: Boolean,
      required: false,
    },
    isControlOutside: {
      type: Boolean,
      required: false,
      default: false,
    },
    isForwardButtonDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    isForwardButtonHide: {
      type: Boolean,
      required: false,
    },
    isForwardLastButtonHide: {
      type: Boolean,
      required: false,
    },
    isForwardStepButtonDisabled: {
      type: Boolean,
      required: false,
      default: true,
    },
    isStepNumberVisible: {
      type: Boolean,
      required: false,
      default: true,
    },
    isStepsJustified: {
      type: Boolean,
      required: false,
      default: true,
    },
    stepActive: {
      type: Number,
      default: undefined,
    },
    steps: {
      type: Array,
      default: () => [],
    },
    stepsProgressbarText: {
      type: String,
      required: false,
      default: "_WIZARD_STEPS_PROGRESSBAR_TEXT_{{stepActive}}_{{stepsCount}}_{{stepActiveLabel}}_",
    },
    stepsVisited: {
      type: Object,
      default: undefined,
    },
    type: {
      type: String,
      required: false,
      default: "basic",
      validator: value => ["arrows", "square", "round", "basic"].indexOf(value) !== -1,
    },
  },
  emits: [
    "goStepBack",
    "goStepForward",
  ],
  setup(props, context) {
    const {
      goStepBackLocal,
      goStepForwardLocal,
    } = EmitsAPI(context);

    const {
      footerId,
    } = FooterAPI(props);

    const {
      initWizard,
      isWizardVisible,
    } = VisibleAPI();

    initWizard();

    return {
      footerId,
      goStepBackLocal,
      goStepForwardLocal,
      isWizardVisible,
    };
  },
  render() {
    return h(AModal, {
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
      isModalHidden: this.isModalHidden,
      isSaveButtonHide: this.isSaveButtonHide,
      loading: this.loading,
      modalClass: this.modalClass,
      save: this.save,
      saveButtonClass: this.saveButtonClass,
      saveButtonId: this.saveButtonId,
      saveButtonText: this.saveButtonText,
      selectorClose: this.selectorClose,
      selectorCloseIds: this.selectorCloseIds,
      size: this.size,
      useEscape: this.useEscape,
    }, {
      ...this.$slots || {},
      modalBody: () => [
        this.isWizardVisible && h(AWizard, {
          extra: this.extra,
          isBackButtonDisabled: this.isBackButtonDisabled,
          isBackButtonHide: this.isBackButtonHide,
          isBackFirstButtonHide: this.isBackFirstButtonHide,
          isBackStepButtonDisabled: this.isBackStepButtonDisabled,
          isButtonsLoading: this.isButtonsLoading,
          isControlOutside: this.isControlOutside,
          isForwardButtonDisabled: this.isForwardButtonDisabled,
          isForwardButtonHide: this.isForwardButtonHide,
          isForwardLastButtonHide: this.isForwardLastButtonHide,
          isForwardStepButtonDisabled: this.isForwardStepButtonDisabled,
          isStepNumberVisible: this.isStepNumberVisible,
          isStepsJustified: this.isStepsJustified,
          isToolbarBottom: true,
          isToolbarTop: false,
          stepActive: this.stepActive,
          steps: this.steps,
          stepsProgressbarText: this.stepsProgressbarText,
          stepsVisited: this.stepsVisited,
          toolbarBottomTeleportId: this.footerId,
          type: this.type,
          onGoStepBack: this.goStepBackLocal,
          onGoStepForward: this.goStepForwardLocal,
        }, this.$slots),
      ],
      modalFooterPrepend: () => [
        this.$slots.modalWizardFooterPrepend && this.$slots.modalWizardFooterPrepend(),
        h("div", {
          id: this.footerId,
        }),
        this.$slots.modalWizardFooterAppend && this.$slots.modalWizardFooterAppend(),
      ],
    });
  },
};
