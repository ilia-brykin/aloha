export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ATree,
} from "aloha-vue";

export default {
  name: "PageTreeKeys",
  components: {
    ATree,
  },
  setup() {
    // JSON as it comes from an API
    const data = [
      {
        uuid: "7c1e",
        active: true,
        meta: { title: "Anna Becker, CEO" },
        subordinates: [
          { uuid: "9a2f", active: true, meta: { title: "Ben Ott, CTO" } },
          { uuid: "3d8b", active: false, meta: { title: "Clara Lenz, CFO" } },
        ],
      },
    ];
    const selected = ref(undefined);

    return {
      data,
      selected,
    };
  },
};`;

  return {
    codeJs,
  };
}
