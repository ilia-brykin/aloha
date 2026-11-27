export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AForm,
} from "aloha-vue";

export default {
  components: {
    AForm,
  },
  setup() {
    const dataForm = [
      {
        type: "text",
        id: "title",
        label: "_A_FORM_EXAMPLE_TITLE_",
      },
      {
        type: "tags",
        id: "keywords",
        label: "_A_INPUT_TAGS_EXAMPLE_KEYWORDS_",
        required: true,
        maxTags: 10,
      },
    ];
    const model = ref({
      title: "Aloha",
      keywords: ["vue"],
    });

    return {
      dataForm,
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
