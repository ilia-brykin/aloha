import {
  h,
} from "vue";

import AElement from "../AElement/AElement";
import ATranslation from "../ATranslation/ATranslation";

import BtnAttributesAPI from "./compositionAPI/BtnAttributesAPI";
import IsOpenAPI from "./compositionAPI/IsOpenAPI";
import TextOrHtmlAPI from "./compositionAPI/TextOrHtmlAPI";
import ToggleAPI from "./compositionAPI/ToggleAPI";

import {
  uniqueId,
} from "lodash-es";

// @vue/component
export default {
  name: "ADisclosure",
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
      default: "_A_DISCLOSURE_LESS_",
    },
    btnTextMore: {
      type: String,
      required: false,
      default: "_A_DISCLOSURE_MORE_",
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
    htmlLess: {
      type: String,
      required: false,
      default: undefined,
    },
    htmlMore: {
      type: String,
      required: false,
      default: undefined,
    },
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_disclosure_"),
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
    safeHtmlLess: {
      type: String,
      required: false,
      default: undefined,
    },
    safeHtmlMore: {
      type: String,
      required: false,
      default: undefined,
    },
    showLess: {
      type: Boolean,
      required: false,
      default: true,
    },
    textLess: {
      type: String,
      required: false,
      default: undefined,
    },
    textMore: {
      type: String,
      required: false,
      default: undefined,
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
      initIsOpen,
      isOpen,
    } = IsOpenAPI(props);

    const {
      htmlLocal,
      isTextOrHtmlVisible,
      safeHtmlLocal,
      textLocal,
    } = TextOrHtmlAPI(props, {
      isOpen,
    });

    const {
      containerRef,
      toggleButton,
    } = ToggleAPI(props, context, {
      isOpen,
    });

    const {
      btnIconLeft,
      btnIconRight,
      btnText,
      btnTitle,
      buttonRef,
      isButtonVisible,
    } = BtnAttributesAPI(props, {
      isOpen,
    });

    initIsOpen();

    expose({
      buttonRef,
      containerRef,
      isOpen,
      toggleButton,
    });

    return {
      btnIconLeft,
      btnIconRight,
      btnText,
      btnTitle,
      buttonRef,
      containerRef,
      htmlLocal,
      isButtonVisible,
      isOpen,
      isTextOrHtmlVisible,
      safeHtmlLocal,
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
      }, [
        h("div", {
          ref: "containerRef",
          id: this.id,
          ariaExpanded: this.isOpen,
          ...this.$attrs,
        }, [
          this.isTextOrHtmlVisible && h(ATranslation, {
            alwaysTranslate: this.alwaysTranslate,
            html: this.htmlLocal,
            safeHtml: this.safeHtmlLocal,
            tag: "div",
            text: this.textLocal,
          }),
          this.isOpen ?
            this.$slots.more && this.$slots.more({
              isButtonVisible: this.isButtonVisible,
              isOpen: this.isOpen,
            }) :
            this.$slots.less && this.$slots.less({
              isButtonVisible: this.isButtonVisible,
              isOpen: this.isOpen,
            }),
        ]),
      ]),
      this.isButtonVisible && h("div", {
        class: this.btnParentClass,
      }, [
        h(AElement, {
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
          title: this.btnTitle,
          titlePlacement: this.btnTitlePlacement,
          type: "button",
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
