export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
    // almost JSON: a comment, quotes, a missing comma, a trailing comma, Python constants
    const model = ref([
      "{",
      "  // the server",
      "  host: 'localhost',",
      "  port: 8080,",
      "  tls: False,",
      "  proxy: None,",
      "  features: [\\"search\\" \\"export\\",],",
      "}",
    ].join("\\n"));

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
