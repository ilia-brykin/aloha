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
      h("span", {
        innerHTML: this.currentLabel,
      }),
    ]);
  },
};
