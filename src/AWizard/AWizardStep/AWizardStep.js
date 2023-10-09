import {
  h,
} from "vue";

import ATranslation from "../../ATranslation/ATranslation";

import ActiveAPI from "./compositionAPI/ActiveAPI";
import AttributesAPI from "./compositionAPI/AttributesAPI";
import ContentIdAPI from "../AWizardTab/compositionAPI/ContentIdAPI";
import DisabledAPI from "./compositionAPI/DisabledAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import LinkClassAPI from "./compositionAPI/LinkClassAPI";
import NumberAPI from "./compositionAPI/NumberAPI";

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
      tabindex,
    } = AttributesAPI({
      isStepDisabled,
      isStepActive,
    });

    const {
      contentId,
    } = ContentIdAPI(props);

    return {
      ariaCurrentAttributes,
      contentId,
      isStepActive,
      isStepDisabled,
      linkClass,
      onClick,
      onKeydown,
      stepNumber,
      stepNumberText,
      tabindex,
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
        role: "presentation",
      },
      [
        h("a", {
          class: this.linkClass,
          role: "button",
          tabindex: this.tabindex,
          ariaDisabled: this.isStepDisabled,
          "aria-controls": this.contentId,
          onClick: this.onClick,
          onKeydown: this.onKeydown,
          ...this.ariaCurrentAttributes,
        }, this.step.slotLabel && this.$slots[this.step.slotLabel] ?
          this.$slots[this.step.slotLabel]({
            step: this.step,
            stepNumber: this.stepNumber,
            stepIndex: this.stepIndex,
            isStepDisabled: this.isStepDisabled,
            isStepActive: this.isStepActive,
          }) : [
            this.isStepNumberVisible && h(ATranslation, {
              tag: "span",
              text: this.stepNumberText,
              class: "a_wizard__step__number",
              extra: {
                stepActive: this.stepNumber,
                stepsCount: this.stepsCount,
              },
            }),
            h(ATranslation, {
              tag: "span",
              html: this.step.label,
              class: "a_wizard__step__text",
              extra: this.extra,
            }),
          ]),
        h("span", {
          class: "a_wizard__step__divider",
          ariaHidden: true,
        }),
      ],
    );
  },
};
