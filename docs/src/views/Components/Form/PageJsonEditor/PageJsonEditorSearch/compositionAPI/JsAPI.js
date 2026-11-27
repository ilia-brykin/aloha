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
    const CITIES = ["Bonn", "Berlin", "Köln", "Hamburg", "München"];
    const model = ref({
      users: Array.from({ length: 12 }, (_, index) => ({
        id: index + 1,
        name: \`User \${ index + 1 }\`,
        address: { city: CITIES[index % CITIES.length], zip: \`\${ 10000 + index * 731 }\` },
        active: index % 3 !== 0,
      })),
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
