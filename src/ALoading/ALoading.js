import ASpinner from "../ASpinner/ASpinner.js";
import ATranslation from "../ATranslation/ATranslation";

import {
  h,
} from "vue";

export default {
  name: "ALoading",
  components: {
    ASpinner,
    ATranslation,
  },
  props: {
    align: {
      type: String,
      required: false,
      default: "center",
      validator: value => ["start", "center", "end"].indexOf(value) !== -1,
    },
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    extra: {
      type: Object,
      required: false,
    },
    isLoading: {
      type: Boolean,
      required: false,
    },
    isTextLeft: {
      type: Boolean,
      required: false,
    },
    size: {
      type: [String, Number],
      required: false,
      default: 6,
      validator: size => ["1", "2", "3", "4", "5", "6", "7"].indexOf(`${ size }`) !== -1,
    },
    tag: {
      type: String,
      required: false,
      default: "div",
    },
    text: {
      type: String,
      required: false,
      default: "_LOADING_",
    },
  },
  computed: {
    classAlign() {
      return `a_text_${ this.align }`;
    },

    classForBox() {
      return this.isTextLeft ? "a_cloak__box_text_left" : "a_cloak__box_text_right";
    },

    classTextSize() {
      return `a_fs_${ this.size }`;
    },

    boxChildren() {
      const CHILDREN = [];
      if (this.isTextLeft) {
        CHILDREN.push(this.boxTextLeft);
      }
      CHILDREN.push(this.boxSpinner);
      if (!this.isTextLeft) {
        CHILDREN.push(this.boxTextRight);
      }
      return CHILDREN;
    },

    boxTextLeft() {
      return h(ATranslation, {
        tag: "span",
        class: ["a_cloak__text a_cloak__text_left", this.classTextSize],
        text: this.text,
        extra: this.extra,
        alwaysTranslate: this.alwaysTranslate,
      });
    },

    boxTextRight() {
      return h(ATranslation, {
        tag: "span",
        class: ["a_cloak__text a_cloak__text_right", this.classTextSize],
        text: this.text,
        extra: this.extra,
        alwaysTranslate: this.alwaysTranslate,
      });
    },

    boxSpinner() {
      return h(ASpinner, {
        class: ["a_cloak__spinner"],
        "aria-hidden": "true",
      });
    },
  },
  render() {
    return [
      this.$slots.default && this.$slots.default(),
      this.isLoading && h(
        this.tag,
        {
          role: "status",
          tabindex: -1,
          class: ["a_loading", this.classAlign],
        },
        [

          h("div", {
            class: ["a_cloak__box", this.classForBox]
          }, this.boxChildren),
        ],
      ),
    ];
  },
};
