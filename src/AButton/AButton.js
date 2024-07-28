import {
  h,
} from "vue";

import AElement from "../AElement/AElement";

import EmitsAPI from "./compositionAPI/EmitsAPI";

import placements from "../const/placements";
import {
  isInteger,
  isString,
  uniqueId,
} from "lodash-es";

export default {
  name: "AButton",
  inheritAttrs: false,
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    ariaDisabled: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    ariaLabel: {
      type: [String, Number, Object],
      required: false,
      default: undefined,
    },
    attributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    class: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    classDefault: {
      type: String,
      required: false,
      default: "aloha_element",
    },
    classDefaultHidden: {
      type: String,
      required: false,
      default: "aloha_element__hidden",
    },
    classDisabled: {
      type: String,
      required: false,
      default: "disabled",
    },
    disabled: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    excludeRenderAttributes: {
      type: Array,
      required: false,
      default: () => [],
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    extraData: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol, null, undefined],
      required: false,
      default: undefined,
    },
    html: {
      type: [String, Number, Object, Array],
      required: false,
      default: undefined,
    },
    htmlScreenReader: {
      type: [String, Number, Object, Array],
      required: false,
      default: undefined,
    },
    iconAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    iconClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    iconLeft: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    iconRight: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    iconTag: {
      type: String,
      required: false,
      default: undefined,
    },
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_btn_"),
    },
    isSwitch: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    isTitleHtml: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    loadingAlign: {
      type: String,
      required: false,
      default: "right",
      validator: value => ["right", "left"].indexOf(value) !== -1,
    },
    loadingClass: {
      type: [String, Object],
      required: false,
      default: "a_spinner_small",
    },
    modelSwitch: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    prevent: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    safeHtml: {
      type: [String, Number, Object, Array],
      required: false,
      default: undefined,
    },
    safeHtmlScreenReader: {
      type: [String, Number, Object, Array],
      required: false,
      default: undefined,
    },
    stop: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    tabindex: {
      type: [Number, String],
      required: false,
      default: undefined,
    },
    tag: {
      type: String,
      required: false,
      default: undefined,
    },
    text: {
      type: [String, Number, Object, Array],
      required: false,
      default: undefined,
    },
    textAfter: {
      type: [String, Number, Object],
      required: false,
      default: undefined,
    },
    textAriaHidden: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    textBefore: {
      type: [String, Number, Object],
      required: false,
      default: undefined,
    },
    textClass: {
      type: String,
      required: false,
      default: undefined,
    },
    textScreenReader: {
      type: [String, Number, Object, Array],
      required: false,
      default: undefined,
    },
    textTag: {
      type: String,
      required: false,
      default: "span",
    },
    title: {
      type: [String, Number, Object, Array],
      required: false,
      default: undefined,
    },
    titleAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    titlePlacement: {
      type: String,
      required: false,
      default: "top",
      validator: placement => placements.indexOf(placement) !== -1,
    },
    titleZIndex: {
      type: [Number, String],
      required: false,
      default: "auto",
      validator: value => {
        if (isString(value)) {
          return value === "auto";
        }
        return isInteger(value);
      },
    },
    type: {
      type: String,
      required: false,
      default: "button",
      validator: value => ["button", "submit", "reset"].indexOf(value) !== -1,
    },
  },
  emits: [
    "click",
  ],
  setup(props, context) {
    const {
      clickEmit,
    } = EmitsAPI(props, context);

    return {
      clickEmit,
    };
  },
  render() {
    return h(AElement, {
      ...this.$attrs,
      ...this.$props,
      onClick: this.clickEmit,
    }, this.$slots);
  },
};
