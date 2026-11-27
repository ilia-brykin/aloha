export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ACombobox,
} from "aloha-vue";

export default {
  components: {
    ACombobox,
  },
  setup() {
    const model = ref("");
    const people = [
      { id: 1, label: "Anna Schmidt", email: "anna@example.com" },
      { id: 2, label: "Andreas Wolf", email: "andreas@example.com" },
      { id: 3, label: "Maria Anders", email: "maria@example.com" },
    ];
    // own texts of the status; a missing key keeps its default
    const texts = {
      noResults: "_A_COMBOBOX_EXAMPLE_NO_PERSON_",
    };

    return {
      model,
      people,
      texts,
    };
  },
};`;

  return {
    codeJs,
  };
}
