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
        type: "dateInput",
        id: "period",
        label: "_A_DATE_INPUT_EXAMPLE_TRAVEL_",
        range: true,
        required: true,
      },
    ];
    const model = ref({
      title: "Aloha",
      period: null,
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
