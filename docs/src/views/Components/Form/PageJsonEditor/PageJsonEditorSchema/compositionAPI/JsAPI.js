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
      id: 1,
      price: -5,
      color: "pink",
    });
    // a subset of JSON Schema; "add" takes the next key of "properties"
    const schema = {
      type: "object",
      required: ["id", "name", "price"],
      additionalProperties: false,
      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 3 },
        price: { type: "number", minimum: 0 },
        color: { enum: ["red", "green", "blue"] },
        tags: { type: "array", items: { type: "string" }, maxItems: 5 },
      },
    };

    return {
      model,
      schema,
    };
  },
};`;

  return {
    codeJs,
  };
}
