import {
  h,
} from "vue";

import AIcon from "../AIcon/AIcon";
import ATranslation from "../ATranslation/ATranslation";

import {
  getPropDefault,
} from "../plugins/AComponentsPlugin";

// @vue/component
export default {
  name: "AEmptyState",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    // "p" by default: a fixed heading level would break the outline of many pages
    headerTag: {
      type: String,
      required: false,
      default: () => getPropDefault("AEmptyState", "headerTag", "p"),
    },
    headerText: {
      type: String,
      required: false,
      default: undefined,
    },
    icon: {
      type: String,
      required: false,
      default: () => getPropDefault("AEmptyState", "icon"),
    },
    text: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  render() {
    const ACTIONS = this.$slots.default?.();

    return h("div", {
      class: "a_empty_state",
    }, [
      (this.$slots.icon || this.icon) && h("div", {
        class: "a_empty_state__icon",
        "aria-hidden": "true",
      }, this.$slots.icon ?
        this.$slots.icon() :
        [h(AIcon, { icon: this.icon })]),
      this.headerText && h(ATranslation, {
        class: "a_empty_state__title",
        alwaysTranslate: this.alwaysTranslate,
        extra: this.extra,
        tag: this.headerTag,
        text: this.headerText,
      }),
      this.text && h(ATranslation, {
        class: "a_empty_state__text",
        alwaysTranslate: this.alwaysTranslate,
        extra: this.extra,
        tag: "p",
        text: this.text,
      }),
      ACTIONS?.length && h("div", {
        class: "a_empty_state__actions",
      }, ACTIONS),
    ]);
  },
};
