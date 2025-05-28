import {
  h,
} from "vue";
import {
  AElement,
} from "../../index";

import ClassAPI from "./compositionAPI/ClassAPI";
import TextAPI from "./compositionAPI/TextAPI";

export default {
  name: "ACarouselBtn",
  props: {
    ariaDisabled: {
      type: Boolean,
      required: false,
    },
    btnAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    icon: {
      type: String,
      required: false,
      default: undefined,
    },
    texts: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: true,
      validator: type => ["previous", "next"].includes(type),
    },
  },
  emits: [
    "toSlide",
  ],
  setup(props) {
    const {
      btnClass,
    } = ClassAPI(props);

    const {
      btnTitle,
    } = TextAPI(props);

    return {
      btnClass,
      btnTitle,
    };
  },
  render() {
    return h(AElement, {
      class: [
        "a_carousel__arrow",
        this.btnClass,
      ],
      ariaDisabled: this.ariaDisabled,
      disabled: this.disabled,
      iconLeft: this.icon,
      title: this.btnTitle,
      textScreenReader: this.btnTitle,
      type: "button",
      onClick: () => this.$emit("toSlide"),
      ...this.btnAttributes,
    });
  },
};
