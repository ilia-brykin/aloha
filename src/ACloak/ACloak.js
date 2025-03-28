import {
  h,
} from "vue";
import {
  ASpinner,
  ATranslation,
} from "../index";

import ClassAPI from "./compositionAPI/ClassAPI";

import {
  cloakPluginOptions,
} from "../plugins/ACloakPlugin";
import {
  spinnerPluginOptions,
} from "../plugins/ASpinnerPlugin";

export default {
  name: "ACloak",
  props: {
    align: {
      type: String,
      required: false,
      default: () => cloakPluginOptions.value.propsDefault.align,
      validator: value => ["left", "center", "right"].indexOf(value) !== -1,
    },
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    extra: {
      type: Object,
      required: false,
      default: cloakPluginOptions.value.propsDefault.extra,
    },
    size: {
      type: [String, Number],
      required: false,
      default: () => cloakPluginOptions.value.propsDefault.size,
      validator: size => ["1", "2", "3", "4", "5", "6", "7"].indexOf(`${ size }`) !== -1,
    },
    spinnerClass: {
      type: [String, Object],
      required: false,
      default: () => spinnerPluginOptions.value.propsDefault.class,
    },
    spinnerSafeHtml: {
      type: String,
      required: false,
      default: () => spinnerPluginOptions.value.propsDefault.safeHtml,
    },
    spinnerTag: {
      type: String,
      required: false,
      default: () => spinnerPluginOptions.value.propsDefault.tag,
    },
    tag: {
      type: String,
      required: false,
      default: () => cloakPluginOptions.value.propsDefault.tag,
    },
    text: {
      type: String,
      required: false,
      default: () => cloakPluginOptions.value.propsDefault.text,
    },
    textAlign: {
      type: String,
      required: false,
      default: () => cloakPluginOptions.value.propsDefault.textAlign,
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
