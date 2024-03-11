import {
  h,
  withDirectives,
} from "vue";

import ASafeHtml from "../../directives/ASafeHtml";

import UiMixinProps from "../mixins/UiMixinProps";

import UIExcludeRenderAttributesAPI from "../compositionApi/UIExcludeRenderAttributesAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

export default {
  name: "ATemplate",
  mixins: [
    UiMixinProps,
  ],
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
      style: this.componentStyleHide,
      ...this.attributesToExcludeFromRender,
    }, [
      this.$slots[this.slotName] ?
        h("div", {
          class: "a_template",
        }, this.$slots[this.slotName]({
          options: this.options,
        })) :
        withDirectives(h("div", {
          class: "a_template",
        }), [
          this.html ? [ASafeHtml, this.html] : [],
        ]),
    ]);
  },
};
