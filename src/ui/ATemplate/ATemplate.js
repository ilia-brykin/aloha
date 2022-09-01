import {
  computed,
  h,
  toRef,
} from "vue";

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

    const html = toRef(props, "html");
    const attributesWithHtml = computed(() => {
      const ATTRIBUTES = {};
      if (html.value) {
        ATTRIBUTES.innerHTML = html.value;
      }
      return ATTRIBUTES;
    });

    return {
      componentStyleHide,

      attributesWithHtml,
    };
  },
  render() {
    return this.isRender && h("div", {
      style: this.componentStyleHide,
    }, [
      h("div", {
        class: "a_template",
        ...this.attributesWithHtml,
      }, this.$slots[this.slotName] &&
        this.$slots[this.slotName]())
    ]);
  },
};
