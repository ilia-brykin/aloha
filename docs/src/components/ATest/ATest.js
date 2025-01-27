import {
  h,
  withDirectives,
} from "vue";

import {
  ASafeHtml,
} from "aloha-vue";

import UIExcludeRenderAttributesAPI from "../../../../src/ui/compositionApi/UIExcludeRenderAttributesAPI";
import UiStyleHideAPI from "../../../../src/ui/compositionApi/UiStyleHideAPI";

export default {
  name: "ATest",
  inheritAttrs: false,
  props: {
    excludeRenderAttributes: {
      type: Array,
      required: false,
      default: () => [],
    },
    html: {
      type: String,
      required: false,
      default: undefined,
    },
    isHide: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    isRender: {
      type: Boolean,
      required: false,
      default: true,
    },
    options: {
      type: [String, Number, Object, Array, Boolean],
      required: false,
      default: undefined,
    },
    slotName: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  setup(props) {
    const {
      attributesToExcludeFromRender,
    } = UIExcludeRenderAttributesAPI(props);

    const {
      componentStyleHide,
    } = UiStyleHideAPI(props);

    return {
      attributesToExcludeFromRender,
      componentStyleHide,
    };
  },
  render() {
    if (!this.isRender) {
      return null;
    }

    return h("div", {
      ...this.$attrs,
      style: this.componentStyleHide,
      alwaysTranslate: undefined,
      type: undefined,
      modelValue: undefined,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", "Aloha"),
      this.$slots[this.slotName] ?
        h("div", {
          class: "a_template",
        }, this.$slots[this.slotName]({
          options: this.options,
          props: this.$props,
        })) :
        "",
      this.html ?
        withDirectives(h("div", {
          class: "a_template",
        }), [
          [ASafeHtml, this.html],
        ]) :
        "",
    ]);
  },
};
