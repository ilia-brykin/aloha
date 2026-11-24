export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ADateInput,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
    ATranslation,
  },
  setup() {
    const YEAR = new Date().getFullYear();
    const holidays = [\`\${ YEAR }-12-24\`, \`\${ YEAR }-12-25\`, \`\${ YEAR }-12-26\`, \`\${ YEAR }-12-31\`];
    const model = ref(\`\${ YEAR }-12-01\`);

    return {
      holidays,
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
