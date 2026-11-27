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
    // GET url?search=<text> after a pause of 300 ms; an older answer does not replace a newer one
    const url = \`\${ import.meta.env.BASE_URL }assets/mock/select-base.json\`;

    return {
      model,
      url,
    };
  },
};`;

  return {
    codeJs,
  };
}
