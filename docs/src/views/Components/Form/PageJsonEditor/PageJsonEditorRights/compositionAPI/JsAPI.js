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
    const model = ref({
      id: 42,
      created: "2025-03-05",
      email: "anna@example.com",
      password: "secret",
      roles: ["editor"],
      profile: { firstName: "Anna", lastName: "Muster" },
    });

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
