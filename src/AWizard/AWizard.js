import {
  h,
} from "vue";

import AWizardStep from "./AWizardStep/AWizardStep";
import AWizardTab from "./AWizardTab/AWizardTab";
import AWizardToolbar from "./AWizardToolbar/AWizardToolbar";

import ClassAPI from "./compositionAPI/ClassAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import FocusAPI from "./compositionAPI/FocusAPI";
import LocalAPI from "./compositionAPI/LocalAPI";
import StepsAPI from "./compositionAPI/StepsAPI";

export default {
  name: "AWizard",
  props: {
    steps: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      required: false,
      default: "basic",
      validator: value => ["arrows", "square", "round", "basic"].indexOf(value) !== -1,
    },
    isStepNumberVisible: {
      type: Boolean,
      required: false,
      default: true,
    },
    isControlOutside: {
      type: Boolean,
      required: false,
      default: false,
    },
    stepActive: {
      type: Number,
      default: undefined,
    },
    stepsVisited: {
      type: Object,
      default: undefined,
    },
    isForwardStepButtonDisabled: {
      type: Boolean,
      required: false,
      default: true,
    },
    isForwardButtonDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    isBackStepButtonDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    isBackButtonDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    backButtonClass: {
      type: [String, Array, Object],
      required: false,
      default: "a_btn a_btn_secondary"
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
    forwardButtonClass: {
      type: [String, Array, Object],
      required: false,
      default: "a_btn a_btn_secondary"
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
    extraTranslate: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    isForwardButtonHide: {
      type: Boolean,
      required: false,
    },
    isBackButtonHide: {
      type: Boolean,
      required: false,
    },
    isForwardLastButtonHide: {
      type: Boolean,
      required: false,
    },
    isBackFirstButtonHide: {
      type: Boolean,
      required: false,
    },
    isButtonsLoading: {
      type: Boolean,
      required: false,
    },
    isToolbarTop: {
      type: Boolean,
      required: false,
      default: false,
    },
    isToolbarBottom: {
      type: Boolean,
      required: false,
      default: true,
    },
    stepsProgressbarText: {
      type: String,
      required: false,
      default: "_WIZARD_STEPS_PROGRESSBAR_TEXT_{{stepActive}}_{{stepsCount}}_{{stepActiveLabel}}_",
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
      stepActiveComputed,
      stepActiveLocal,
      stepsVisitedComputed,
      stepsVisitedLocal,
    } = LocalAPI(props);

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
      tabContentRef,
    } = FocusAPI({
      stepActiveComputed,
    });

    const {
      stepActiveNumber,
      stepsCount,
      stepsProgressbarTextTranslated,
    } = StepsAPI(props, {
      stepActiveComputed,
    });

    return {
      classWizard,
      goOneStepBack,
      goOneStepForward,
      onStepClick,
      stepActiveComputed,
      stepActiveNumber,
      stepsCount,
      stepsProgressbarTextTranslated,
      stepsVisitedComputed,
      tabContentRef,
    };
  },
  render() {
    const TOOLBAR = h(AWizardToolbar, {
      steps: this.steps,
      stepActiveComputed: this.stepActiveComputed,
      backButtonClass: this.backButtonClass,
      backButtonText: this.backButtonText,
      backButtonTitle: this.backButtonTitle,
      backButtonIcon: this.backButtonIcon,
      backButtonIconAlign: this.backButtonIconAlign,
      forwardButtonClass: this.forwardButtonClass,
      forwardButtonText: this.forwardButtonText,
      forwardButtonTitle: this.forwardButtonTitle,
      forwardButtonIcon: this.forwardButtonIcon,
      forwardButtonIconAlign: this.forwardButtonIconAlign,
      extraTranslate: this.extraTranslate,
      isForwardButtonDisabled: this.isForwardButtonDisabled,
      isBackButtonDisabled: this.isBackButtonDisabled,
      isForwardButtonHide: this.isForwardButtonHide,
      isBackButtonHide: this.isBackButtonHide,
      isForwardLastButtonHide: this.isForwardLastButtonHide,
      isBackFirstButtonHide: this.isBackFirstButtonHide,
      isButtonsLoading: this.isButtonsLoading,
      onGoOneStepBack: this.goOneStepBack,
      onGoOneStepForward: this.goOneStepForward,
    }, this.$slots);

    return h("div", {
      class: this.classWizard,
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
            step,
            stepIndex,
            stepActiveComputed: this.stepActiveComputed,
            isStepNumberVisible: this.isStepNumberVisible,
            isForwardStepButtonDisabled: this.isForwardStepButtonDisabled,
            isBackStepButtonDisabled: this.isBackStepButtonDisabled,
            isForwardButtonDisabled: this.isForwardButtonDisabled,
            isBackButtonDisabled: this.isBackButtonDisabled,
            extraTranslate: this.extraTranslate,
            onOnStepClick: this.onStepClick,
          }, this.$slots);
        }),
      ]),
      this.isToolbarTop && TOOLBAR,
      h("div", {
        ref: "tabContentRef",
        class: "a_wizard__tab_content",
        tabindex: -1,
      }, [
        this.steps.map((step, stepIndex) => {
          return h(AWizardTab, {
            step,
            stepIndex,
            stepActiveComputed: this.stepActiveComputed,
            stepsVisitedComputed: this.stepsVisitedComputed,
          }, this.$slots);
        }),
      ]),
      this.isToolbarBottom && TOOLBAR,
    ]);
  },
};
