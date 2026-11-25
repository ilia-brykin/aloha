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
      name: "A",
      age: 200,
      email: "anna-example.com",
      tags: ["vue", "vue"],
      contacts: [{ type: "phone" }, { type: "fax" }],
    });
    // "*" is any index or key; level: "warning" does not block
    const rules = {
      "/name": { type: "string", minLength: 2 },
      "/age": { type: "integer", min: 0, max: 150 },
      "/email": { pattern: "^[^@]+@[^@]+$", message: "_A_JSON_EDITOR_EXAMPLE_EMAIL_INVALID_" },
      "/tags": { uniqueItems: true, level: "warning" },
      "/contacts/*/type": { enum: ["phone", "email"] },
      "/country": { required: true },
    };

    return {
      model,
      rules,
    };
  },
};`;

  return {
    codeJs,
  };
}
