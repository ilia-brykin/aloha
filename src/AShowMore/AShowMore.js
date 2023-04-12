import {
  h,
  onBeforeUnmount,
  onMounted,
  withDirectives,
} from "vue";

import AButton from "../AButton/AButton";

import ASafeHtml from "../directives/ASafeHtml";

import BtnAttributesAPI from "./compositionAPI/BtnAttributesAPI";
import HeightAPI from "./compositionAPI/HeightAPI";
import ObservingAPI from "./compositionAPI/ObservingAPI";
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
    btnTitle: {
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
    showLess: {
      type: Boolean,
      required: false,
      default: true,
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
  },
  emits: [
    "toggle",
  ],
  setup(props, context) {
    const {
      checkHeight,
      containerRef,
      isMoreButtonObservingVisible,
      startObservingMutation,
      stopObservingMutation,
    } = ObservingAPI(props);

    const {
      isOpen,
      toggleBtn,
    } = ToggleAPI(props, context, {
      stopObservingMutation,
    });

    const {
      btnIconLeft,
      btnIconRight,
      btnText,
      isButtonVisible,
    } = BtnAttributesAPI(props, {
      isOpen,
      isMoreButtonObservingVisible,
    });

    const {
      maxHeightStyle,
    } = HeightAPI(props, {
      isOpen,
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
      containerRef,
      isButtonVisible,
      isOpen,
      maxHeightStyle,
      toggleBtn,
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
          this.html && withDirectives(h("div", {}), [
            [ASafeHtml, this.html],
          ]),
          this.$slots.default && this.$slots.default(),
        ]),
      ]),
      this.isButtonVisible && h("div", {
        class: this.btnParentClass,
      }, [
        h(AButton, {
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
          onClick: this.toggleBtn,
        }),
      ]),
    ]);
  },
};
