import ASpinner from "../ASpinner/ASpinner.js";
import ATranslation from "../ATranslation/ATranslation";

import {
  h,
} from "vue";

export default {
  name: "ACloak",
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
    text: {
      type: String,
      required: false,
      default: "_LOADING_",
    },
    isTextLeft: {
      type: Boolean,
      required: false,
    },
    extraTranslate: {
      type: Object,
      required: false,
    },
    tag: {
      type: String,
      required: false,
      default: "div",
    },
    spinnerType: {
      type: String,
      required: false,
      default: "border",
    },
    size: {
      type: String,
      required: false,
      default: "1",
      validator: size => ["1", "2", "3", "4", "5", "6"].indexOf(size) !== -1,
    },
  },
  computed: {
    classAlign() {
      return `text-${ this.align }`;
    },

    classForBox() {
      return this.isTextLeft ? "a_cloak__box_text_left" : "a_cloak__box_text_right";
    },

    classTextSize() {
      return `fs-${ this.size }`;
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
        class: ["a_cloak__text a_cloak__text_left", this.classTextSize],
        text: this.text,
        extra: this.extraTranslate,
      });
    },

    boxTextRight() {
      return h(ATranslation, {
        class: ["a_cloak__text a_cloak__text_right", this.classTextSize],
        text: this.text,
        extra: this.extraTranslate,
      });
    },

    boxSpinner() {
      return h(ASpinner, {
        class: ["a_cloak__spinner"],
        type: this.spinnerType,
        size: this.size,
        text: "",
        "aria-hidden": "true",
      });
    },
  },
  render() {
    return h(
      this.tag,
      {
        role: "status",
        class: this.classAlign,
      },
      [
        h("div", {
          class: ["a_cloak__box", this.classForBox]
        }, this.boxChildren),
      ],
    );
  },
};
