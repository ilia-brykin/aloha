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
      subject: "Hello {{ user.firstName }}",
      body: "Your order {{ order.id }} costs {{ order.total }} €.",
      total: "{{ order.total }}",
      urgent: "{{ order.total }}",
      footer: "{{ company.nmae }}",
    });
    // the list of the variables: also a function ({ query }) => Promise
    const variables = [
      { name: "user.firstName", label: "_A_JSON_EDITOR_EXAMPLE_VAR_FIRST_NAME_", type: "string", example: "Anna", group: "User" },
      { name: "order.id", type: "string", example: "A-1042", group: "Order" },
      { name: "order.total", type: "number", example: 49.9, group: "Order" },
      { name: "company.name", type: "string", example: "Aloha GmbH", group: "Company" },
    ];
    // for "show with the values of the variables"
    const variableValues = {
      user: { firstName: "Anna" },
      order: { id: "A-1042", total: 49.9 },
      company: { name: "Aloha GmbH" },
    };
    // a number variable in a field of a boolean is a warning
    const rules = {
      "/urgent": { type: "boolean" },
    };

    return {
      model,
      rules,
      variables,
      variableValues,
    };
  },
};`;

  return {
    codeJs,
  };
}
