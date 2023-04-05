import {
  h,
  withDirectives,
} from "vue";

import ASafeHtml from "../../directives/ASafeHtml";

import UiMixinProps from "../mixins/UiMixinProps";

import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

export default {
  name: "ATemplate",
  mixins: [
    UiMixinProps,
  ],
  props: {
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
      componentStyleHide,
    } = UiStyleHideAPI(props);

    return {
      componentStyleHide,
    };
  },
  render() {
    return this.isRender && h("div", {
      style: this.componentStyleHide,
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
