import {
  computed,
  h,
  toRef,
} from "vue";

import UiMixinProps from "../mixins/UiMixinProps";

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
    const html = toRef(props, "html");
    const attributesWithHtml = computed(() => {
      const ATTRIBUTES = {};
      if (html.value) {
        ATTRIBUTES.innerHTML = html.value;
      }
      return ATTRIBUTES;
    });

    return {
      attributesWithHtml,
    };
  },
  render() {
    return h("div", {
      class: "a_template",
      ...this.attributesWithHtml,
    }, this.$slots[this.slotName] &&
      this.$slots[this.slotName]());
  },
};
