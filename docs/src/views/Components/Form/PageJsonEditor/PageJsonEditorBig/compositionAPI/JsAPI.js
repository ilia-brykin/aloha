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
    // 3000 rows: only the visible rows are rendered (virtual-threshold), aria-rowcount and aria-rowindex
    const model = ref({
      entries: Array.from({ length: 3000 }, (_, index) => ({
        id: index + 1,
        level: ["info", "warning", "error"][index % 3],
        message: \`Event \${ index + 1 }\`,
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
