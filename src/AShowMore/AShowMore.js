import {
  h,
  onBeforeUnmount,
  onMounted,
} from "vue";

import AButton from "../AButton/AButton";
import ATranslation from "../ATranslation/ATranslation";

import BtnAttributesAPI from "./compositionAPI/BtnAttributesAPI";
import HeightAPI from "./compositionAPI/HeightAPI";
import IsOpenAPI from "./compositionAPI/IsOpenAPI";
import ObservingAPI from "./compositionAPI/ObservingAPI";
import TextLengthAPI from "./compositionAPI/TextLengthAPI";
import TextOrHtmlAPI from "./compositionAPI/TextOrHtmlAPI";
import ToggleAPI from "./compositionAPI/ToggleAPI";

// @vue/component
export default {
  name: "AShowMore",
  inheritAttrs: true,
  props: {
    btnClass: {
      type: [String, Object],
      required: false,
      default: "a_btn a_btn_link a_p_0",
    },
    btnIconLeftLess: {
      type: String,
      required: false,
      default: undefined,
    },
    btnIconLeftMore: {
      type: String,
      required: false,
      default: undefined,
    },
    btnIconRightLess: {
      type: String,
      required: false,
      default: undefined,
    },
    btnIconRightMore: {
      type: String,
      required: false,
      default: undefined,
    },
    btnId: {
      type: String,
      required: false,
      default: undefined,
    },
    btnParentClass: {
      type: String,
      required: false,
      default: "a_text_center",
    },
    btnTextLess: {
      type: String,
      required: false,
      default: "_SHOW_LESS_",
    },
    btnTextMore: {
      type: String,
      required: false,
      default: "_SHOW_MORE_",
    },
    btnTitleLess: {
      type: String,
      required: false,
      default: undefined,
    },
    btnTitleMore: {
      type: String,
      required: false,
      default: undefined,
    },
    btnTitlePlacement: {
      type: String,
      required: false,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    height: {
      type: Number,
      required: false,
      default: 200,
      validator: value => value >= 0,
    },
    html: {
      type: String,
      required: false,
      default: undefined,
    },
    isBtnTitleHtml: {
      type: Boolean,
      required: false,
    },
    isOpenDefault: {
      type: Boolean,
      required: false,
      default: false,
    },
    safeHtml: {
      type: String,
      required: false,
      default: undefined,
    },
    showLess: {
      type: Boolean,
      required: false,
      default: true,
    },
    text: {
      type: String,
      required: false,
      default: undefined,
    },
    textLength: {
      type: Number,
      required: false,
      default: undefined,
      validator: value => value > 0,
    },
  },
  emits: [
    "toggle",
  ],
  setup(props, context) {
    const {
      expose,
    } = context;

    const {
      isOpen,
    } = IsOpenAPI(props);

    const {
      hasTextAndLength,
      isBtnHiddenDependentOnTextLength,
      isTextShorterThanTextLength,
      textLocal,
    } = TextLengthAPI(props, {
      isOpen,
    });

    const {
      isTextOrHtmlVisible,
    } = TextOrHtmlAPI(props, {
      textLocal,
    });

    const {
      checkHeight,
      containerRef,
      isMoreButtonObservingVisible,
      startObservingMutation,
      stopObservingMutation,
    } = ObservingAPI(props, {
      isBtnHiddenDependentOnTextLength,
    });

    const {
      toggleButton,
    } = ToggleAPI(props, context, {
      isOpen,
      stopObservingMutation,
    });

    const {
      btnIconLeft,
      btnIconRight,
      btnText,
      btnTitle,
      buttonRef,
      isButtonVisible,
    } = BtnAttributesAPI(props, {
      hasTextAndLength,
      isMoreButtonObservingVisible,
      isOpen,
      isTextShorterThanTextLength,
    });

    const {
      maxHeightStyle,
    } = HeightAPI(props, {
      hasTextAndLength,
      isOpen,
    });

    expose({
      buttonRef,
      containerRef,
      isButtonVisible,
      isOpen,
      toggleButton,
    });

    onMounted(() => {
      checkHeight();
      startObservingMutation();
    });

    onBeforeUnmount(() => {
      stopObservingMutation();
    });

    return {
      btnIconLeft,
      btnIconRight,
      btnText,
      btnTitle,
      buttonRef,
      containerRef,
      isButtonVisible,
      isOpen,
      isTextOrHtmlVisible,
      maxHeightStyle,
      textLocal,
      toggleButton,
    };
  },
  render() {
    return h("div", {
      class: [
        "a_show_more",
        {
          a_show_more_open: this.isOpen,
        },
      ],
    }, [
      h("div", {
        class: "a_show_more__wrapper",
        style: this.maxHeightStyle,
      }, [
        h("div", {
          ref: "containerRef",
          ...this.$attrs,
        }, [
          this.isTextOrHtmlVisible && h(ATranslation, {
            tag: "div",
            text: this.textLocal,
            html: this.html,
            safeHtml: this.safeHtml,
          }),
          this.$slots.default && this.$slots.default({
            isButtonVisible: this.isButtonVisible,
            isOpen: this.isOpen,
          }),
        ]),
      ]),
      this.isButtonVisible && h("div", {
        class: this.btnParentClass,
      }, [
        h(AButton, {
          ref: "buttonRef",
          id: this.btnId,
          class: [
            "a_show_more__button",
            this.btnClass,
          ],
          iconLeft: this.btnIconLeft,
          iconRight: this.btnIconRight,
          text: this.btnText,
          title: this.btnTitle,
          isTitleHtml: this.isBtnTitleHtml,
          titlePlacement: this.btnTitlePlacement,
          disabled: this.disabled,
          onClick: this.toggleButton,
        }, () => this.$slots.button && this.$slots.button({
          isButtonVisible: this.isButtonVisible,
          isOpen: this.isOpen,
        })),
      ]),
    ]);
  },
};
