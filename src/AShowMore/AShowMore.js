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
  props: {
    align: {
      type: String,
      required: false,
      default: "center",
      validator: value => ["center", "left", "right"].indexOf(value) !== -1,
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
    btnParentClass: {
      type: String,
      required: false,
      default: "a_text_center",
    },
    btnTextLess: {
      type: String,
      required: false,
      default: "Weniger anzeigen",
    },
    btnTextMore: {
      type: String,
      required: false,
      default: "Mehr anzeigen",
    },
    height: {
      type: Number,
      required: false,
      default: 200,
    },
    html: {
      type: String,
      required: false,
      default: undefined,
    },
    isOpenDefault: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const {
      isOpen,
      toggleBtn,
    } = ToggleAPI(props);

    const {
      btnIconLeft,
      btnIconRight,
      btnText,
    } = BtnAttributesAPI(props, {
      isOpen,
    });

    const {
      checkHeight,
      containerRef,
      isMoreButtonVisible,
      startObservingMutation,
      stopObservingMutation,
    } = ObservingAPI(props);

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
      isMoreButtonVisible,
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
      this.isMoreButtonVisible && h("div", {
        class: this.btnParentClass,
      }, [
        h(AButton, {
          class: [
            "a_show_more__button",
            this.btnClass,
          ],
          iconLeft: this.btnIconLeft,
          iconRight: this.btnIconRight,
          text: this.btnText,
          onClick: this.toggleBtn,
        }),
      ]),
    ]);
  },
};
