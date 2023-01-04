import {
  h,
} from "vue";

import AButton from "../../AButton/AButton";

import DisabledAPI from "./compositionAPI/DisabledAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import FirstLastAPI from "./compositionAPI/FirstLastAPI";
import HideAPI from "./compositionAPI/HideAPI";

export default {
  name: "AWizardToolbar",
  props: {
    steps: {
      type: Array,
      required: true,
    },
    stepActiveComputed: {
      type: Number,
      required: false,
      default: 0,
    },
    backButtonClass: {
      type: [String, Array, Object],
      required: false,
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
      default: undefined,
    },
    isForwardButtonDisabled: {
      type: Boolean,
      required: true,
    },
    isBackButtonDisabled: {
      type: Boolean,
      required: true,
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
        role: "status",
        class: "a_wizard__toolbar",
      },
      [
        !this.isBackButtonHideLocal && h(AButton, {
          type: "button",
          class: this.backButtonClass,
          text: this.backButtonText,
          icon: this.backButtonIcon,
          iconAlign: this.backButtonIconAlign,
          title: this.backButtonTitle,
          extraTranslate: this.extraTranslate,
          disabled: this.isBackButtonDisabledLocal,
          loading: this.isButtonsLoading,
          onClick: this.goOneStepBack,
        }),
        !this.isForwardButtonHideLocal && h(AButton, {
          type: "button",
          class: this.forwardButtonClass,
          text: this.forwardButtonText,
          icon: this.forwardButtonIcon,
          iconAlign: this.forwardButtonIconAlign,
          title: this.forwardButtonTitle,
          extraTranslate: this.extraTranslate,
          disabled: this.isForwardButtonDisabledLocal,
          loading: this.isButtonsLoading,
          onClick: this.goOneStepForward,
        }),
        this.$slots.toolbar && this.$slots.toolbar(),
      ],
    );
  },
};
