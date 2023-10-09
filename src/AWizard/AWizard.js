import {
  h,
  Teleport,
} from "vue";

import AWizardStep from "./AWizardStep/AWizardStep";
import AWizardTab from "./AWizardTab/AWizardTab";
import AWizardToolbar from "./AWizardToolbar/AWizardToolbar";

import ClassAPI from "./compositionAPI/ClassAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import FocusAPI from "./compositionAPI/FocusAPI";
import LocalAPI from "./compositionAPI/LocalAPI";
import MobileAPI from "./compositionAPI/MobileAPI";
import StepsAPI from "./compositionAPI/StepsAPI";
import TeleportAPI from "./compositionAPI/TeleportAPI";

import {
  uniqueId,
} from "lodash-es";

export default {
  name: "AWizard",
  props: {
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
      default: undefined,
    },
    extra: {
      type: Object,
      required: false,
      default: () => ({}),
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
      default: undefined,
    },
    hasFocusJump: {
      type: Boolean,
      required: false,
      default: true,
    },
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_wizard_"),
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
    isToolbarBottom: {
      type: Boolean,
      required: false,
      default: true,
    },
    isToolbarTop: {
      type: Boolean,
      required: false,
      default: false,
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
      required: false,
      default: undefined,
    },
    steps: {
      type: Array,
      required: false,
      default: () => [],
    },
    stepsProgressbarText: {
      type: String,
      required: false,
      default: "_A_WIZARD_STEPS_PROGRESSBAR_TEXT_{{stepActive}}_{{stepsCount}}_{{stepActiveLabel}}_",
    },
    stepsVisited: {
      type: Object,
      required: false,
      default: undefined,
    },
    toolbarBottomTeleportId: {
      type: String,
      required: false,
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
      classWizard,
    } = ClassAPI(props);

    const {
      setFocusToActiveStep,
      wizardTabsRef,
    } = FocusAPI(props);

    const {
      initStepActive,
      stepActiveComputed,
      stepActiveLocal,
      stepsVisitedComputed,
      stepsVisitedLocal,
    } = LocalAPI(props, {
      setFocusToActiveStep,
    });

    const {
      goOneStepBack,
      goOneStepForward,
      onStepClick,
    } = EventsAPI(props, context, {
      stepActiveComputed,
      stepActiveLocal,
      stepsVisitedLocal,
    });

    const {
      stepActiveNumber,
      stepsCount,
      stepsProgressbarTextTranslated,
    } = StepsAPI(props, {
      stepActiveComputed,
    });

    const {
      toolbarBottomTeleportSelector,
      useTeleportToolbarBottom,
    } = TeleportAPI(props);

    const {
      isMobileLocal,
    } = MobileAPI(props);

    initStepActive();

    return {
      classWizard,
      goOneStepBack,
      goOneStepForward,
      isMobileLocal,
      onStepClick,
      stepActiveComputed,
      stepActiveNumber,
      stepsCount,
      stepsProgressbarTextTranslated,
      stepsVisitedComputed,
      toolbarBottomTeleportSelector,
      useTeleportToolbarBottom,
      wizardTabsRef,
    };
  },
  render() {
    const TOOLBAR = h(AWizardToolbar, {
      backButtonAttributes: this.backButtonAttributes,
      backButtonClass: this.backButtonClass,
      backButtonIconLeft: this.backButtonIconLeft,
      backButtonIconRight: this.backButtonIconRight,
      backButtonText: this.backButtonText,
      backButtonTitle: this.backButtonTitle,
      extra: this.extra,
      forwardButtonAttributes: this.forwardButtonAttributes,
      forwardButtonClass: this.forwardButtonClass,
      forwardButtonIconLeft: this.forwardButtonIconLeft,
      forwardButtonIconRight: this.forwardButtonIconRight,
      forwardButtonText: this.forwardButtonText,
      forwardButtonTitle: this.forwardButtonTitle,
      isBackButtonDisabled: this.isBackButtonDisabled,
      isBackButtonHide: this.isBackButtonHide,
      isBackFirstButtonHide: this.isBackFirstButtonHide,
      isButtonsLoading: this.isButtonsLoading,
      isForwardButtonDisabled: this.isForwardButtonDisabled,
      isForwardButtonHide: this.isForwardButtonHide,
      isForwardLastButtonHide: this.isForwardLastButtonHide,
      stepActiveComputed: this.stepActiveComputed,
      steps: this.steps,
      onGoOneStepBack: this.goOneStepBack,
      onGoOneStepForward: this.goOneStepForward,
    }, this.$slots);

    return h("div", {
      id: this.id,
      class: [
        this.classWizard,
        {
          a_wizard_mobile: this.isMobileLocal,
          a_wizard_show_only_active_step_mobile: this.showOnlyActiveStepMobile,
        }
      ],
      role: "application",
    }, [
      h("ul", {
        class: "a_wizard__steps",
        tabindex: 0,
        role: "progressbar",
        "aria-valuemin": 1,
        "aria-valuemax": this.stepsCount,
        "aria-valuenow": this.stepActiveNumber,
        "aria-valuetext": this.stepsProgressbarTextTranslated,
      }, [
        this.steps.map((step, stepIndex) => {
          return h(AWizardStep, {
            key: this.keyId ? step[this.keyId] : stepIndex,
            id: this.id,
            extra: this.extra,
            isBackButtonDisabled: this.isBackButtonDisabled,
            isBackStepButtonDisabled: this.isBackStepButtonDisabled,
            isForwardButtonDisabled: this.isForwardButtonDisabled,
            isForwardStepButtonDisabled: this.isForwardStepButtonDisabled,
            isMobile: this.isMobileLocal,
            isStepNumberVisible: this.isStepNumberVisible,
            showOnlyActiveStepMobile: this.showOnlyActiveStepMobile,
            step,
            stepActiveComputed: this.stepActiveComputed,
            stepIndex,
            stepsCount: this.stepsCount,
            onOnStepClick: this.onStepClick,
          }, this.$slots);
        }),
      ]),
      this.isToolbarTop && TOOLBAR,
      h("div", {
        class: "a_wizard__tab_content",
      }, [
        this.steps.map((step, stepIndex) => {
          return h(AWizardTab, {
            key: this.keyId ? step[this.keyId] : stepIndex,
            id: this.id,
            extra: this.extra,
            step,
            stepIndex,
            stepActiveComputed: this.stepActiveComputed,
            stepsVisitedComputed: this.stepsVisitedComputed,
          }, this.$slots);
        }),
      ]),
      this.isToolbarBottom && h(Teleport, {
        to: this.toolbarBottomTeleportSelector,
        disabled: !this.useTeleportToolbarBottom,
      }, [
        TOOLBAR,
      ]),
    ]);
  },
};
