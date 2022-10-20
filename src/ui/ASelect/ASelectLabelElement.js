import {
  computed,
  h,
  toRef,
} from "vue";

import AKeyLabel from "../const/AKeyLabel";


export default {
  name: "ASelectLabelElement",
  props: {
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
      currentLabel
    };
  },
  render() {
    return h("span", {

    }, [
      this.slotName && this.$slots[this.slotName] ?
        this.$slots[this.slotName]({
          item: this.data,
          label: this.currentLabel,
        }) :
        h("span", {
          innerHTML: this.currentLabel,
        }),
    ]);
  },
};
