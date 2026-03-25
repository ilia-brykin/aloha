export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ARadio,
} from "aloha-vue";

export default {
  name: "PageRadioRetrieve",
  components: {
    ARadio,
  },
  setup() {
    const model1 = ref("aloha_10");
    const url = \`\${ import.meta.env.BASE_URL }assets/mock/select-base.json\`;
    const urlRetrieve = \`\${ import.meta.env.BASE_URL }assets/mock/select-retrieve.json\`;

    return {
      model1,
      url,
      urlRetrieve,
    };
  },
};`;

  return {
    codeJs,
  };
}
