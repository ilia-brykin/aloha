import {
  h,
} from "vue";

import AElement from "../../AElement/AElement";
import AIcon from "../../AIcon/AIcon";
import ATranslation from "../../ATranslation/ATranslation";

import ActiveAPI from "./compositionAPI/ActiveAPI";
import AttributesAPI from "./compositionAPI/AttributesAPI";
import ContentIdAPI from "../AWizardTab/compositionAPI/ContentIdAPI";
import DisabledAPI from "./compositionAPI/DisabledAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import ErrorWarningAPI from "./compositionAPI/ErrorWarningAPI";
import LinkClassAPI from "./compositionAPI/LinkClassAPI";
import NumberAPI from "./compositionAPI/NumberAPI";
import StatusTextAPI from "./compositionAPI/StatusTextAPI";

import ExclamationCircleFill from "aloha-svg/dist/js/bootstrap/ExclamationCircleFill";
import XCircleFill from "aloha-svg/dist/js/bootstrap/XCircleFill";

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
  },
  emits: [
    "onStepClick",
  ],
  setup(props, context) {
    const {
      isStepActive,
      isStepBeforeActive,
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
    });

    const {
      onClick,
      onKeydown,
    } = EventsAPI(props, context, {
      isStepDisabled,
    });

    const {
      ariaCurrentAttributes,
      stepTextId,
      stepStatusTextId,
      tabindex,
    } = AttributesAPI(props, {
      isStepDisabled,
      isStepActive,
    });

    const {
      contentId,
    } = ContentIdAPI(props);

    const {
      statusText,
    } = StatusTextAPI(props, {
      isStepActive,
      isStepBeforeActive,
    });

    const {
      iconErrorWarning,
      titleIconErrorWarning,
    } = ErrorWarningAPI(props);

    return {
      ariaCurrentAttributes,
      contentId,
      iconErrorWarning,
      isStepActive,
      isStepDisabled,
      linkClass,
      onClick,
      onKeydown,
      statusText,
      stepNumber,
      stepNumberText,
      stepStatusTextId,
      stepTextId,
      tabindex,
      titleIconErrorWarning,
    };
  },
  render() {
    return h(
      "li",
      {
        class: [
          "a_wizard__step",
          {
            a_wizard__step_active: this.isStepActive,
          },
        ],
      },
      [
        h(AElement, {
          "aria-controls": this.contentId,
          "aria-describedby": this.stepStatusTextId,
          ariaDisabled: this.isStepDisabled,
          class: this.linkClass,
          classDefault: "",
          classDisabled: "disabled",
          role: "button",
          tabindex: this.tabindex,
          title: this.step.title,
          type: "link",
          onClick: this.onClick,
          onKeydown: this.onKeydown,
          ...this.ariaCurrentAttributes,
        }, () => this.step.slotLabel && this.$slots[this.step.slotLabel] ?
          this.$slots[this.step.slotLabel]({
            isStepActive: this.isStepActive,
            isStepDisabled: this.isStepDisabled,
            step: this.step,
            stepIndex: this.stepIndex,
            stepNumber: this.stepNumber,
            stepTextId: this.stepTextId,
          })
: [
            this.isStepNumberVisible ?
              h("span", {
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
              ]) :
              "",
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
              (this.iconErrorWarning) ?
                h(AElement, {
                  iconClass: "a_wizard__step__text__icon",
                  iconLeft: this.iconErrorWarning,
                  tag: "span",
                  textScreenReader: this.titleIconErrorWarning,
                  title: this.titleIconErrorWarning,
                  type: "text",
                })
: "",
            ]),
]),
        h(ATranslation, {
          id: this.stepStatusTextId,
          class: "a_sr_only",
          tag: "span",
          text: this.statusText,
        }),
        h("span", {
          class: "a_wizard__step__divider",
          ariaHidden: true,
        }),
      ],
    );
  },
};
