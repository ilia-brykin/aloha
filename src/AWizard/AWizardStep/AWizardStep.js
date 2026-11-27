import {
  h,
} from "vue";

import AIcon from "../../AIcon/AIcon";
import ATranslation from "../../ATranslation/ATranslation";

import ActiveAPI from "./compositionAPI/ActiveAPI";
import AttributesAPI from "./compositionAPI/AttributesAPI";
import DisabledAPI from "./compositionAPI/DisabledAPI";
import ErrorWarningAPI from "./compositionAPI/ErrorWarningAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import LinkClassAPI from "./compositionAPI/LinkClassAPI";
import NumberAPI from "./compositionAPI/NumberAPI";
import StatusTextAPI from "./compositionAPI/StatusTextAPI";
import {
  getTranslatedText,
} from "../../ATranslation/compositionAPI/UtilsAPI";

import {
  ExclamationCircleFill,
  XCircleFill,
} from "../utils/icons";

export default {
  name: "AWizardStep",
  props: {
    extra: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    isBackButtonDisabled: {
      type: Boolean,
      required: true,
    },
    isBackStepButtonDisabled: {
      type: Boolean,
      required: true,
    },
    isForwardButtonDisabled: {
      type: Boolean,
      required: true,
    },
    isForwardStepButtonDisabled: {
      type: Boolean,
      required: true,
    },
    isMobile: {
      type: Boolean,
      required: true,
    },
    isStepNumberVisible: {
      type: Boolean,
      required: true,
    },
    showOnlyActiveStepMobile: {
      type: Boolean,
      required: false,
      default: true,
    },
    step: {
      type: Object,
      required: true,
    },
    stepActiveComputed: {
      type: Number,
      required: false,
      default: 0,
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
    stepIndex: {
      type: Number,
      required: true,
    },
    stepsCount: {
      type: Number,
      required: true,
    },
    // { [stepIndex]: true }; without it the steps before the active one count as visited
    stepsVisitedComputed: {
      type: Object,
      required: false,
      default: undefined,
    },
  },
  emits: [
    "onStepClick",
  ],
  setup(props, context) {
    const {
      isStepActive,
      isStepBeforeActive,
      isStepVisited,
    } = ActiveAPI(props);

    const {
      stepNumber,
      stepNumberText,
    } = NumberAPI(props, {
      isStepActive,
    });

    const {
      isStepDisabled,
    } = DisabledAPI(props);

    const {
      linkClass,
    } = LinkClassAPI(props, {
      isStepActive,
      isStepBeforeActive,
      isStepDisabled,
      isStepVisited,
    });

    const {
      onClick,
    } = EventsAPI(props, context, {
      isStepDisabled,
    });

    const {
      stepStatusTextId,
      stepTextId,
    } = AttributesAPI(props);

    const {
      iconErrorWarning,
      titleIconErrorWarning,
    } = ErrorWarningAPI(props);

    const {
      statusText,
    } = StatusTextAPI(props, {
      isStepActive,
      isStepVisited,
      titleIconErrorWarning,
    });

    return {
      iconErrorWarning,
      isStepActive,
      isStepDisabled,
      linkClass,
      onClick,
      statusText,
      stepNumber,
      stepNumberText,
      stepStatusTextId,
      stepTextId,
      titleIconErrorWarning,
    };
  },
  render() {
    const CONTENT = this.step.slotLabel && this.$slots[this.step.slotLabel] ?
      this.$slots[this.step.slotLabel]({
        isStepActive: this.isStepActive,
        isStepDisabled: this.isStepDisabled,
        step: this.step,
        stepIndex: this.stepIndex,
        stepNumber: this.stepNumber,
        stepTextId: this.stepTextId,
      }) :
      [
        this.isStepNumberVisible && h("span", {
          class: "a_wizard__step__number",
        }, [
          this.step.icon ?
            h(AIcon, {
              class: "a_wizard__step__number__icon",
              icon: this.step.icon,
            }) :
            h(ATranslation, {
              class: "a_wizard__step__number__text",
              tag: "span",
              text: this.stepNumberText,
              extra: {
                stepActive: this.stepNumber,
                stepsCount: this.stepsCount,
              },
            }),
        ]),
        h("span", {
          class: "a_wizard__step__text",
        }, [
          h(ATranslation, {
            id: this.stepTextId,
            class: "a_wizard__step__text__child",
            extra: this.extra,
            html: this.step.label,
            tag: "span",
          }),
          // the icon is for the eyes, the screen reader gets the error in the status
          this.iconErrorWarning && h(AIcon, {
            class: "a_wizard__step__text__icon",
            icon: this.iconErrorWarning,
            "aria-hidden": "true",
            title: getTranslatedText({ placeholder: this.titleIconErrorWarning }),
          }),
        ]),
      ];

    return h("li", {
      class: [
        "a_wizard__step",
        {
          a_wizard__step_active: this.isStepActive,
        },
      ],
    }, [
      // the current step is no button, it only has aria-current
      this.isStepActive ?
        h("span", {
          class: this.linkClass,
          title: this.step.title,
          "aria-current": "step",
        }, CONTENT) :
        h("button", {
          type: "button",
          class: this.linkClass,
          disabled: this.isStepDisabled,
          title: this.step.title,
          "aria-describedby": this.stepStatusTextId,
          onClick: this.onClick,
        }, CONTENT),
      h("span", {
        id: this.stepStatusTextId,
        class: "a_sr_only",
      }, this.statusText),
      h("span", {
        class: "a_wizard__step__divider",
        "aria-hidden": "true",
      }),
    ]);
  },
};
