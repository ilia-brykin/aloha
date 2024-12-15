import {
  h,
} from "vue";

import AModal from "../AModal/AModal";
import AWizard from "../AWizard/AWizard";

import EmitsAPI from "./compositionAPI/EmitsAPI";
import IdsAPI from "./compositionAPI/IdsAPI";
import VisibleAPI from "./compositionAPI/VisibleAPI";

import ExclamationCircleFill from "aloha-svg/dist/js/bootstrap/ExclamationCircleFill";
import XCircleFill from "aloha-svg/dist/js/bootstrap/XCircleFill";
import {
  modalPluginOptions,
} from "../plugins/AModalPlugin";
import {
  isNil,
  uniqueId,
} from "lodash-es";

// @vue/component
export default {
  name: "AModalWizard",
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
    close: {
      type: Function,
      required: true,
    },
    closeButtonAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
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
    closeButtonTextScreenReaderFooter: {
      type: String,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.closeButtonTextScreenReaderFooter,
    },
    closeButtonTextScreenReaderHeader: {
      type: String,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.closeButtonTextScreenReaderHeader,
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
    focusStartId: {
      type: String,
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
    hideHeader: {
      type: Boolean,
      required: false,
    },
    isCloseButtonHide: {
      type: Boolean,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.isCloseButtonHide,
    },
    isFooterSticky: {
      type: Boolean,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.isFooterSticky,
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
    save: {
      type: Function,
      required: false,
      default: undefined,
    },
    saveButtonAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
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
    saveButtonTextScreenReader: {
      type: String,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.saveButtonTextScreenReader,
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
    showCloseButtonHeader: {
      type: Boolean,
      required: false,
      default: true,
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
    useEscape: {
      type: Boolean,
      required: false,
      default: () => modalPluginOptions.value.propsDefault.useEscape,
    },
    useFocusOnStart: {
      type: Boolean,
      required: false,
      default: true,
    },
    zIndex: {
      type: Number,
      required: false,
      default: undefined,
    },
    // WIZARD
    ariaLabel: {
      type: String,
      required: false,
      default: "_A_WIZARD_ARIA_LABEL_",
    },
    ariaLabelSteps: {
      type: String,
      required: false,
      default: "_A_WIZARD_STEPS_ARIA_LABEL_",
    },
    backButtonAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    backButtonClass: {
      type: [String, Array, Object],
      required: false,
      default: "a_btn a_btn_secondary"
    },
    backButtonIconLeft: {
      type: String,
      required: false,
      default: undefined,
    },
    backButtonIconRight: {
      type: String,
      required: false,
      default: undefined,
    },
    backButtonText: {
      type: String,
      required: false,
      default: "_A_WIZARD_PREVIOUS_",
    },
    backButtonTitle: {
      type: String,
      required: false,
      default: "_A_WIZARD_PREVIOUS_TITLE_",
    },
    forwardButtonAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    forwardButtonClass: {
      type: [String, Array, Object],
      required: false,
      default: "a_btn a_btn_secondary"
    },
    forwardButtonIconLeft: {
      type: String,
      required: false,
      default: undefined,
    },
    forwardButtonIconRight: {
      type: String,
      required: false,
      default: undefined,
    },
    forwardButtonText: {
      type: String,
      required: false,
      default: "_A_WIZARD_NEXT_",
    },
    forwardButtonTitle: {
      type: String,
      required: false,
      default: "_A_WIZARD_NEXT_TITLE_",
    },
    hasFocusJump: {
      type: Boolean,
      required: false,
      default: true,
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
    isMobile: {
      type: Boolean,
      required: false,
      default: false,
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
    keyId: {
      type: String,
      required: false,
      default: undefined,
    },
    showOnlyActiveStepMobile: {
      type: Boolean,
      required: false,
      default: true,
    },
    stepActive: {
      type: Number,
      default: undefined,
    },
    stepIconError: {
      type: String,
      required: false,
      default: XCircleFill,
    },
    stepIconErrorText: {
      type: String,
      required: false,
      default: "_A_WIZARD_STEP_ERROR_",
    },
    stepIconWarning: {
      type: String,
      required: false,
      default: ExclamationCircleFill,
    },
    stepIconWarningText: {
      type: String,
      required: false,
      default: "_A_WIZARD_STEP_WARNING_",
    },
    steps: {
      type: Array,
      default: () => [],
    },
    stepsProgressbarText: {
      type: String,
      required: false,
      default: "_A_WIZARD_STEPS_PROGRESSBAR_TEXT_{{stepActive}}_{{stepsCount}}_",
    },
    subType: {
      type: String,
      required: false,
      default: undefined,
      validator: (value, props) => {
        const validSubTypes = {
          arrows: [],
          basic: [],
          line: ["square", "circle", "square-bordered", "circle-bordered"],
          round: [],
        };

        if (props) {
          if (props.type in validSubTypes) {
            return isNil(value) || validSubTypes[props.type].indexOf(value) !== -1;
          }
        } else {
          return ["square", "circle", "square-bordered", "circle-bordered"].indexOf(value) !== -1;
        }

        return false;
      },
    },
    stepsVisited: {
      type: Object,
      default: undefined,
    },
    type: {
      type: String,
      required: false,
      default: "basic",
      validator: value => ["arrows", "line", "round", "basic"].indexOf(value) !== -1,
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
      wizardId,
    } = IdsAPI(props);

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
      wizardId,
    };
  },
  render() {
    return h(AModal, {
      alwaysTranslate: this.alwaysTranslate,
      backdropZIndex: this.backdropZIndex,
      close: this.close,
      closeButtonAttributes: this.closeButtonAttributes,
      closeButtonClass: this.closeButtonClass,
      closeButtonId: this.closeButtonId,
      closeButtonText: this.closeButtonText,
      closeButtonTextScreenReaderFooter: this.closeButtonTextScreenReaderFooter,
      closeButtonTextScreenReaderHeader: this.closeButtonTextScreenReaderHeader,
      disabled: this.disabled,
      disabledSave: this.disabledSave,
      extra: this.extra,
      focusStartId: this.focusStartId,
      headerTag: this.headerTag,
      headerText: this.headerText,
      hideHeader: this.hideHeader,
      id: this.id,
      isCloseButtonHide: this.isCloseButtonHide,
      isFooterSticky: this.isFooterSticky,
      isSaveButtonHide: this.isSaveButtonHide,
      loading: this.loading,
      modalClass: this.modalClass,
      modalStyle: this.modalStyle,
      save: this.save,
      saveButtonAttributes: this.saveButtonAttributes,
      saveButtonClass: this.saveButtonClass,
      saveButtonId: this.saveButtonId,
      saveButtonText: this.saveButtonText,
      saveButtonTextScreenReader: this.saveButtonTextScreenReader,
      selectorClose: this.selectorClose,
      selectorCloseIds: this.selectorCloseIds,
      showCloseButtonHeader: this.showCloseButtonHeader,
      size: this.size,
      stop: this.stop,
      useEscape: this.useEscape,
      useFocusOnStart: this.useFocusOnStart,
      zIndex: this.zIndex,
    }, {
      ...this.$slots || {},
      modalBody: () => [
        this.isWizardVisible && h(AWizard, {
          id: this.wizardId,
          ariaLabel: this.ariaLabel,
          ariaLabelSteps: this.ariaLabelSteps,
          backButtonAttributes: this.backButtonAttributes,
          backButtonClass: this.backButtonClass,
          backButtonIconLeft: this.backButtonIconLeft,
          backButtonIconRight: this.backButtonIconRight,
          backButtonText: this.backButtonText,
          backButtonTitle: this.backButtonTitle,
          forwardButtonAttributes: this.forwardButtonAttributes,
          forwardButtonClass: this.forwardButtonClass,
          forwardButtonIconLeft: this.forwardButtonIconLeft,
          forwardButtonIconRight: this.forwardButtonIconRight,
          forwardButtonText: this.forwardButtonText,
          forwardButtonTitle: this.forwardButtonTitle,
          hasFocusJump: this.hasFocusJump,
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
          isMobile: this.isMobile,
          isStepNumberVisible: this.isStepNumberVisible,
          isStepsJustified: this.isStepsJustified,
          keyId: this.keyId,
          isToolbarBottom: true,
          isToolbarTop: false,
          showOnlyActiveStepMobile: this.showOnlyActiveStepMobile,
          stepActive: this.stepActive,
          stepIconError: this.stepIconError,
          stepIconErrorText: this.stepIconErrorText,
          stepIconWarning: this.stepIconWarning,
          stepIconWarningText: this.stepIconWarningText,
          steps: this.steps,
          stepsProgressbarText: this.stepsProgressbarText,
          stepsVisited: this.stepsVisited,
          subType: this.subType,
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
