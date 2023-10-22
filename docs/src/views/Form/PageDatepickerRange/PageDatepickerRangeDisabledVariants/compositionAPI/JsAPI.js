export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import ADatepickerRange from "aloha-vue/ui/ADatepickerRange/ADatepickerRange";

export default {
  name: "PageDatepickerRangeDisabledVariants",
  components: {
    ADatepickerRange,
  },
  setup() {
    const model = ref(undefined);

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
