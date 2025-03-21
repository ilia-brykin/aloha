import {
  computed,
  h,
  toRef,
  withDirectives,
} from "vue";

import AKeyLabel from "../../const/AKeyLabel";
import ASafeHtml from "../../directives/ASafeHtml";


export default {
  name: "ASelectLabelElement",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    data: {
      type: Object,
      required: true,
    },
    slotName: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  setup(props) {
    const data = toRef(props, "data");
    const currentLabel = computed(() => {
      return data.value[AKeyLabel];
    });

    return {
      currentLabel,
    };
  },
  render() {
    return h("span", {

    }, [
      this.slotName && this.$slots[this.slotName] ?
        this.$slots[this.slotName]({
          item: this.data,
          label: this.currentLabel,
          inDropdown: false,
        }) :
        withDirectives(h("span"), [
          [ASafeHtml, this.currentLabel],
        ]),
    ]);
  },
};
