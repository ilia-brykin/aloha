export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ASelect,
} from "aloha-vue";

export default {
  components: {
    ASelect,
  },
  setup() {
    const data = [
      { value: "berlin", label: "Berlin" },
      { value: "hamburg", label: "Hamburg" },
      { value: "munich", label: "München" },
      { value: "cologne", label: "Köln" },
      { value: "frankfurt", label: "Frankfurt" },
    ];
    const model = ref(["berlin", "cologne"]);

    return {
      data,
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
