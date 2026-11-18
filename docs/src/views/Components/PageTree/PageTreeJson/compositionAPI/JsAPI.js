export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AInput,
  ATree,
} from "aloha-vue";

export default {
  name: "PageTreeJson",
  components: {
    AInput,
    ATree,
  },
  setup() {
    const json = {
      id: 42,
      name: "Anna Becker",
      email: "anna.becker@example.com",
      active: true,
      manager: null,
      roles: ["admin", "editor"],
      address: {
        street: "Hauptstraße 1",
        city: "Berlin",
        geo: { lat: 52.52, lng: 13.405 },
      },
    };
    const searchModel = ref("");
    const selected = ref(undefined);

    return {
      json,
      searchModel,
      selected,
    };
  },
};`;

  return {
    codeJs,
  };
}
