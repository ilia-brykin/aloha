import {
  h,
  Teleport,
} from "vue";

import ATranslation from "../ATranslation/ATranslation";
import AWizardStep from "./AWizardStep/AWizardStep";
import AWizardTab from "./AWizardTab/AWizardTab";
import AWizardToolbar from "./AWizardToolbar/AWizardToolbar";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import ChangeStepAPI from "./compositionAPI/ChangeStepAPI";
import ClassAPI from "./compositionAPI/ClassAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import FocusAPI from "./compositionAPI/FocusAPI";
import LocalAPI from "./compositionAPI/LocalAPI";
import MobileAPI from "./compositionAPI/MobileAPI";
import StepsAPI from "./compositionAPI/StepsAPI";
import TeleportAPI from "./compositionAPI/TeleportAPI";
import TypeAPI from "./compositionAPI/TypeAPI";

import {
  ExclamationCircleFill,
  XCircleFill,
} from "./utils/icons";
import {
  isNil,
  uniqueId,
} from "lodash-es";

export default {
  name: "AWizard",
  props: {
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
    classExtra: {
      type: [String, Object],
      required: false,
      default: "a_wizard_class_extra",
    },
    backButtonAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    backButtonClass: {
      type: [String, Array, Object],
      required: false,
      default: "a_btn a_btn_secondary",
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
    // ({ from, to, step, direction: "back" | "forward" | "finish" }) => false or Promise<false> to stay on the step
    beforeStepChange: {
      type: Function,
      required: false,
      default: undefined,
    },
    extra: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    finishButtonAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    finishButtonClass: {
      type: [String, Array, Object],
      required: false,
      default: "a_btn a_btn_primary",
    },
    // e.g. "_A_WIZARD_FINISH_": the last step has this button (event finish) instead of the disabled next button
    finishButtonText: {
      type: String,
      required: false,
      default: undefined,
    },
    forwardButtonAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    forwardButtonClass: {
      type: [String, Array, Object],
      required: false,
      default: "a_btn a_btn_secondary",
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
    // the heading "Step 2 of 4: Address" of the step is visible (else only for screen readers)
    isStepHeadingVisible: {
      type: Boolean,
      required: false,
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
    stepHeadingTag: {
      type: String,
      required: false,
      default: "h3",
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
      required: false,
      default: () => [],
    },
    stepsProgressbarText: {
      type: String,
      required: false,
      default: "_A_WIZARD_STEPS_PROGRESSBAR_TEXT_{{stepActive}}_{{stepsCount}}_",
    },
    stepsVisited: {
      type: Object,
      required: false,
      default: undefined,
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
    toolbarBottomTeleportId: {
      type: String,
      required: false,
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
    "changeStep",
    "finish",
    "goStepBack",
    "goStepForward",
  ],
  setup(props, context) {
    const {
      subTypeLocal,
    } = TypeAPI(props);

    const {
      classWizard,
    } = ClassAPI(props, {
      subTypeLocal,
    });

    const {
      setFocusToActiveStep,
      setFocusToInvalid,
    } = FocusAPI(props);

    const {
      changeStep,
    } = ChangeStepAPI(props, context);

    const {
      initStepActive,
      stepActiveComputed,
      stepActiveLocal,
      stepsVisitedComputed,
      stepsVisitedLocal,
    } = LocalAPI(props, {
      changeStep,
      setFocusToActiveStep,
    });

    const {
      ariaLabelAttributes,
      ariaLabelStepsAttributes,
      idProgressbar,
    } = AttributesAPI(props);

    const {
      finish,
      goOneStepBack,
      goOneStepForward,
      isStepChangeChecking,
      onStepClick,
    } = EventsAPI(props, context, {
      setFocusToInvalid,
      stepActiveComputed,
      stepActiveLocal,
      stepsVisitedLocal,
    });

    const {
      stepActiveNumber,
      stepsCount,
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
      ariaLabelAttributes,
      ariaLabelStepsAttributes,
      classWizard,
      finish,
      goOneStepBack,
      goOneStepForward,
      idProgressbar,
      isMobileLocal,
      isStepChangeChecking,
      onStepClick,
      stepActiveComputed,
      stepActiveNumber,
      stepsCount,
      stepsVisitedComputed,
      toolbarBottomTeleportSelector,
      useTeleportToolbarBottom,
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
      finishButtonAttributes: this.finishButtonAttributes,
      finishButtonClass: this.finishButtonClass,
      finishButtonText: this.finishButtonText,
      forwardButtonAttributes: this.forwardButtonAttributes,
      forwardButtonClass: this.forwardButtonClass,
      forwardButtonIconLeft: this.forwardButtonIconLeft,
      forwardButtonIconRight: this.forwardButtonIconRight,
      forwardButtonText: this.forwardButtonText,
      forwardButtonTitle: this.forwardButtonTitle,
      isBackButtonDisabled: this.isBackButtonDisabled,
      isBackButtonHide: this.isBackButtonHide,
      isBackFirstButtonHide: this.isBackFirstButtonHide,
      isButtonsLoading: this.isButtonsLoading || this.isStepChangeChecking,
      isForwardButtonDisabled: this.isForwardButtonDisabled,
      isForwardButtonHide: this.isForwardButtonHide,
      isForwardLastButtonHide: this.isForwardLastButtonHide,
      stepActiveComputed: this.stepActiveComputed,
      steps: this.steps,
      onFinish: this.finish,
      onGoOneStepBack: this.goOneStepBack,
      onGoOneStepForward: this.goOneStepForward,
    }, this.$slots);

    // no role application and no tabindex: the browse mode of screen readers works in the wizard
    return h("div", {
      id: this.id,
      "aria-describedby": this.ariaLabelAttributes.role ? this.idProgressbar : undefined,
      class: [
        this.classWizard,
        this.classExtra,
        {
          a_wizard_mobile: this.isMobileLocal,
          a_wizard_show_only_active_step_mobile: this.showOnlyActiveStepMobile,
        },
      ],
      ...this.ariaLabelAttributes,
    }, [
      h(ATranslation, {
        id: this.idProgressbar,
        class: "a_sr_only",
        extra: {
          stepActive: this.stepActiveNumber,
          stepsCount: this.stepsCount,
        },
        tag: "span",
        text: this.stepsProgressbarText,
      }),
      h("ul", {
        class: "a_wizard__steps",
        ...this.ariaLabelStepsAttributes,
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
            stepIconError: this.stepIconError,
            stepIconErrorText: this.stepIconErrorText,
            stepIconWarning: this.stepIconWarning,
            stepIconWarningText: this.stepIconWarningText,
            stepIndex,
            stepsCount: this.stepsCount,
            stepsVisitedComputed: this.stepsVisitedComputed,
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
            isStepHeadingVisible: this.isStepHeadingVisible,
            step,
            stepActiveComputed: this.stepActiveComputed,
            stepHeadingTag: this.stepHeadingTag,
            stepIconErrorText: this.stepIconErrorText,
            stepIconWarningText: this.stepIconWarningText,
            stepIndex,
            stepsCount: this.stepsCount,
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
