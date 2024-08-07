import {
  h,
  onBeforeUnmount,
  onMounted,
} from "vue";

import AButton from "../AButton/AButton";
import ATranslation from "../ATranslation/ATranslation";

import BtnAttributesAPI from "./compositionAPI/BtnAttributesAPI";
import ExpandedAPI from "./compositionAPI/ExpandedAPI";
import HeightAPI from "./compositionAPI/HeightAPI";
import IsOpenAPI from "./compositionAPI/IsOpenAPI";
import ObservingAPI from "./compositionAPI/ObservingAPI";
import ScreenReaderAPI from "./compositionAPI/ScreenReaderAPI";
import TextLengthAPI from "./compositionAPI/TextLengthAPI";
import TextOrHtmlAPI from "./compositionAPI/TextOrHtmlAPI";
import ToggleAPI from "./compositionAPI/ToggleAPI";

import {
  uniqueId,
} from "lodash-es";

// @vue/component
export default {
  name: "AShowMore",
  inheritAttrs: true,
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    btnAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
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
      default: "_A_SHOW_MORE_LESS_",
    },
    btnTextMore: {
      type: String,
      required: false,
      default: "_A_SHOW_MORE_MORE_",
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
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_show_more_"),
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
      containerRef,
      hasTextAndLength,
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

    const {
      textScreenReaderLocal,
    } = ScreenReaderAPI({
      hasTextAndLength,
      isOpen,
    });

    const {
      ariaExpanded,
    } = ExpandedAPI({
      hasTextAndLength,
      isOpen,
    });

    expose({
      buttonRef,
      containerRef,
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
      ariaExpanded,
      btnIconLeft,
      btnIconRight,
      btnText,
      btnTitle,
      buttonRef,
      containerRef,
      hasTextAndLength,
      isButtonVisible,
      isOpen,
      isTextOrHtmlVisible,
      maxHeightStyle,
      textLocal,
      textScreenReaderLocal,
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
          id: this.id,
          ariaExpanded: this.ariaExpanded,
          ...this.$attrs,
        }, [
          this.isTextOrHtmlVisible && h(ATranslation, {
            alwaysTranslate: this.alwaysTranslate,
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
          alwaysTranslate: this.alwaysTranslate,
          "aria-controls": this.id,
          class: [
            "a_show_more__button",
            this.btnClass,
          ],
          disabled: this.disabled,
          iconLeft: this.btnIconLeft,
          iconRight: this.btnIconRight,
          isTitleHtml: this.isBtnTitleHtml,
          text: this.btnText,
          textAriaHidden: !this.hasTextAndLength,
          textScreenReader: this.textScreenReaderLocal,
          title: this.btnTitle,
          titlePlacement: this.btnTitlePlacement,
          ...this.btnAttributes,
          onClick: this.toggleButton,
        }, () => this.$slots.button && this.$slots.button({
          isButtonVisible: this.isButtonVisible,
          isOpen: this.isOpen,
        })),
      ]),
    ]);
  },
};
