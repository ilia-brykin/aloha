import {
  h,
} from "vue";

import AElement from "../../AElement/AElement";

import DisabledAPI from "./compositionAPI/DisabledAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import FirstLastAPI from "./compositionAPI/FirstLastAPI";
import HideAPI from "./compositionAPI/HideAPI";

export default {
  name: "AWizardToolbar",
  props: {
    backButtonAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    backButtonClass: {
      type: [String, Array, Object],
      required: false,
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
      default: undefined,
    },
    backButtonTitle: {
      type: String,
      required: false,
      default: undefined,
    },
    extra: {
      type: Object,
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
      default: undefined,
    },
    forwardButtonTitle: {
      type: String,
      required: false,
      default: undefined,
    },
    isBackButtonDisabled: {
      type: Boolean,
      required: true,
    },
    isBackButtonHide: {
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
    isForwardButtonDisabled: {
      type: Boolean,
      required: true,
    },
    isForwardButtonHide: {
      type: Boolean,
      required: false,
    },
    isForwardLastButtonHide: {
      type: Boolean,
      required: false,
    },
    stepActiveComputed: {
      type: Number,
      required: false,
      default: 0,
    },
    steps: {
      type: Array,
      required: true,
    },
  },
  emits: [
    "goOneStepBack",
    "goOneStepForward",
  ],
  setup(props, context) {
    const {
      isStepActiveFirst,
      isStepActiveLast,
    } = FirstLastAPI(props);

    const {
      isBackButtonDisabledLocal,
      isForwardButtonDisabledLocal,
    } = DisabledAPI(props, {
      isStepActiveFirst,
      isStepActiveLast,
    });

    const {
      isBackButtonHideLocal,
      isForwardButtonHideLocal,
    } = HideAPI(props, {
      isStepActiveFirst,
      isStepActiveLast,
    });

    const {
      goOneStepBack,
      goOneStepForward,
    } = EventsAPI(props, context);

    return {
      goOneStepBack,
      goOneStepForward,
      isBackButtonDisabledLocal,
      isBackButtonHideLocal,
      isForwardButtonDisabledLocal,
      isForwardButtonHideLocal,
    };
  },
  render() {
    return h(
      "div",
      {
        class: "a_wizard__toolbar",
      },
      [
        !this.isBackButtonHideLocal && h(AElement, {
          class: this.backButtonClass,
          disabled: this.isBackButtonDisabledLocal,
          extra: this.extra,
          iconLeft: this.backButtonIconLeft,
          iconRight: this.backButtonIconRight,
          loading: this.isButtonsLoading,
          text: this.backButtonText,
          textAriaHidden: true,
          textScreenReader: this.backButtonTitle,
          title: this.backButtonTitle,
          type: "button",
          onClick: this.goOneStepBack,
          ...this.backButtonAttributes,
        }),
        !this.isForwardButtonHideLocal && h(AElement, {
          class: this.forwardButtonClass,
          disabled: this.isForwardButtonDisabledLocal,
          extra: this.extra,
          iconLeft: this.forwardButtonIconLeft,
          iconRight: this.forwardButtonIconRight,
          loading: this.isButtonsLoading,
          text: this.forwardButtonText,
          textAriaHidden: true,
          textScreenReader: this.forwardButtonTitle,
          title: this.forwardButtonTitle,
          type: "button",
          onClick: this.goOneStepForward,
          ...this.forwardButtonAttributes,
        }),
        this.$slots.toolbar && this.$slots.toolbar(),
      ],
    );
  },
};
