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
    // the model is the JSON text, e.g. from a database field
    const model = ref("{\\"debug\\":false,\\"level\\":\\"info\\",\\"targets\\":[\\"console\\",\\"file\\"]}");

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
