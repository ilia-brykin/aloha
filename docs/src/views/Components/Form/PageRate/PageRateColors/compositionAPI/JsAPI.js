export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateColors",
  components: {
    ARate,
  },
  setup() {
    const modelArray = ref(2);
    const modelObject = ref(6);
    const colorsArray = ["var(--a_color_danger)", "var(--a_color_warning)", "var(--a_color_success)"];
    const colorsObject = {
      3: "var(--a_color_danger)",
      7: "var(--a_color_warning)",
      10: "var(--a_color_success)",
    };

    return {
      colorsArray,
      colorsObject,
      modelArray,
      modelObject,
    };
  },
};`;

  return {
    codeJs,
  };
}
