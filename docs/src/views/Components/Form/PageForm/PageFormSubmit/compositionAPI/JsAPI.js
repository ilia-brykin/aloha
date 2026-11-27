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
    const data = [
      {
        type: "text",
        id: "search",
        label: "_A_FORM_EXAMPLE_SEARCH_",
      },
    ];
    const model = ref({});
    const countSubmit = ref(0);

    // Enter in the field: the page is not reloaded
    const onSubmit = () => {
      countSubmit.value++;
    };

    return {
      countSubmit,
      data,
      model,
      onSubmit,
    };
  },
};`;

  return {
    codeJs,
  };
}
