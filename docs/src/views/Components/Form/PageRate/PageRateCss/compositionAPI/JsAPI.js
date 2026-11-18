export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateCss",
  components: {
    ARate,
  },
  setup() {
    const model = ref(4);
    const styleRate = {
      "--a_rate_fill_color": "var(--a_color_primary)",
      "--a_rate_icon_size": "2rem",
      "--a_rate_gap": ".5rem",
      "--a_rate_text_font_size": "1.25rem",
    };

    return {
      model,
      styleRate,
    };
  },
};`;

  return {
    codeJs,
  };
}
