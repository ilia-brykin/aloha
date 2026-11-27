export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AInputTags,
} from "aloha-vue";

export default {
  components: {
    AInputTags,
  },
  setup() {
    const model = ref(["Plan", "Build", "Test", "Release"]);
    // the first step is marked
    const tagClass = ({ index }) => (index === 0 ? "a_text_bold" : undefined);

    return {
      model,
      tagClass,
    };
  },
};`;

  return {
    codeJs,
  };
}
