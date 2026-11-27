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
    // the model has the ids, the tags show the labels
    const model = ref(["de", "at"]);
    const countries = [
      { id: "at", label: "Österreich" },
      { id: "ch", label: "Schweiz" },
      { id: "de", label: "Deutschland" },
      { id: "fr", label: "Frankreich" },
      { id: "it", label: "Italien" },
    ];

    return {
      countries,
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
