import {
  h,
} from "vue";
import {
  ASpinner,
  ATranslation,
} from "../index";

import ClassAPI from "./compositionAPI/ClassAPI";

import {
  getPropDefault,
} from "../plugins/APropsDefaultPlugin";

export default {
  name: "ACloak",
  props: {
    align: {
      type: String,
      required: false,
      default: () => getPropDefault("ACloak", "align", "center"),
      validator: value => ["left", "center", "right"].indexOf(value) !== -1,
    },
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    extra: {
      type: Object,
      required: false,
      default: () => getPropDefault("ACloak", "extra"),
    },
    size: {
      type: [String, Number],
      required: false,
      default: () => getPropDefault("ACloak", "size", 6),
      validator: size => ["1", "2", "3", "4", "5", "6", "7"].indexOf(`${ size }`) !== -1,
    },
    spinnerClass: {
      type: [String, Object],
      required: false,
      default: () => getPropDefault("ACloak", "spinnerClass", "a_spinner"),
    },
    spinnerSafeHtml: {
      type: String,
      required: false,
      default: () => getPropDefault("ACloak", "spinnerSafeHtml", ""),
    },
    spinnerTag: {
      type: String,
      required: false,
      default: () => getPropDefault("ACloak", "spinnerTag", "span"),
    },
    tag: {
      type: String,
      required: false,
      default: () => getPropDefault("ACloak", "tag", "div"),
    },
    text: {
      type: String,
      required: false,
      default: () => getPropDefault("ACloak", "text", "_A_CLOAK_LOADING_"),
    },
    textAlign: {
      type: String,
      required: false,
      default: () => getPropDefault("ACloak", "textAlign", "right"),
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

    return h(
      this.tag,
      {
        role: "status",
        class: this.classAlign,
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
    );
  },
};
