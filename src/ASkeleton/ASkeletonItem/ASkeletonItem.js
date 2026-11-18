import {
  computed,
  h,
  toRef,
} from "vue";

import {
  isNumber,
} from "lodash-es";

export const SKELETON_ITEM_VARIANTS = ["text", "heading", "circle", "rect", "button", "input", "image"];

const toCssSize = size => (isNumber(size) ? `${ size }px` : size);

export default {
  name: "ASkeletonItem",
  props: {
    height: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    tag: {
      type: String,
      required: false,
      default: "span",
    },
    variant: {
      type: String,
      required: false,
      default: "text",
      validator: value => SKELETON_ITEM_VARIANTS.indexOf(value) !== -1,
    },
    width: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
  },
  setup(props) {
    const height = toRef(props, "height");
    const width = toRef(props, "width");

    const style = computed(() => {
      const STYLE = {};
      if (width.value !== undefined && width.value !== "") {
        STYLE.width = toCssSize(width.value);
      }
      if (height.value !== undefined && height.value !== "") {
        STYLE.height = toCssSize(height.value);
      }
      return STYLE;
    });

    return {
      style,
    };
  },
  render() {
    return h(this.tag, {
      class: [
        "a_skeleton__item",
        `a_skeleton__item_${ this.variant }`,
      ],
      style: this.style,
      "aria-hidden": "true",
    });
  },
};
