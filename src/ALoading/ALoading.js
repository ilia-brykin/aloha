import {
  h,
} from "vue";

import ATranslation from "../ATranslation/ATranslation";

import ClassAPI from "../ACloak/compositionAPI/ClassAPI";

import ASpinner from "../ASpinner/ASpinner.js";
import {
  getPropDefault,
} from "../plugins/APropsDefaultPlugin";

export default {
  name: "ALoading",
  inheritAttrs: false,
  props: {
    align: {
      type: String,
      required: false,
      default: () => getPropDefault("ALoading", "align", "center"),
      validator: value => ["left", "center", "right"].indexOf(value) !== -1,
    },
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    extra: {
      type: Object,
      required: false,
      default: () => getPropDefault("ALoading", "extra"),
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    size: {
      type: [String, Number],
      required: false,
      default: () => getPropDefault("ALoading", "size", 6),
      validator: size => ["1", "2", "3", "4", "5", "6", "7"].indexOf(`${ size }`) !== -1,
    },
    spinnerClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    spinnerSafeHtml: {
      type: String,
      required: false,
      default: () => getPropDefault("ALoading", "spinnerSafeHtml", ""),
    },
    spinnerTag: {
      type: String,
      required: false,
      default: () => getPropDefault("ALoading", "spinnerTag", "span"),
    },
    tag: {
      type: String,
      required: false,
      default: () => getPropDefault("ALoading", "tag", "div"),
    },
    text: {
      type: String,
      required: false,
      default: () => getPropDefault("ALoading", "text", "_A_LOADING_LOADING_"),
    },
    textAlign: {
      type: String,
      required: false,
      default: () => getPropDefault("ALoading", "textAlign", "right"),
      validator: value => ["left", "right"].indexOf(value) !== -1,
    },
  },
  setup(props) {
    const {
      classAlign,
      classForBox,
      classTextSize,
    } = ClassAPI(props);

    return {
      classAlign,
      classForBox,
      classTextSize,
    };
  },
  render() {
    const IS_TEXT_LEFT = this.textAlign === "left";

    const BOX_TEXT = h(ATranslation, {
      alwaysTranslate: this.alwaysTranslate,
      tag: "span",
      class: [
        "a_cloak__text",
        IS_TEXT_LEFT ?
          "a_cloak__text_left" :
          "a_cloak__text_right",
        this.classTextSize,
      ],
      text: this.text,
      extra: this.extra,
    });

    return [
      this.$slots.default && this.$slots.default(),
      this.isLoading && h(
        this.tag,
        {
          ...this.$attrs,
          role: "status",
          tabindex: -1,
          class: ["a_loading", this.classAlign],
        },
        [

          h("div", {
            class: ["a_cloak__box", this.classForBox],
          }, [
            IS_TEXT_LEFT ?
              BOX_TEXT :
              "",
            h(ASpinner, {
              alwaysTranslate: this.alwaysTranslate,
              class: [
                "a_cloak__spinner",
                this.spinnerClass,
              ],
              "aria-hidden": "true",
              safeHtml: this.spinnerSafeHtml,
              size: this.size,
              tag: this.spinnerTag,
            }),
            !IS_TEXT_LEFT ?
              BOX_TEXT :
              "",
          ]),
        ],
      ),
    ];
  },
};
