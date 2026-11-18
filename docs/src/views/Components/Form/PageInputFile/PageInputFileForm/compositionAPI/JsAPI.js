export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AForm,
} from "aloha-vue";

export default {
  name: "PageInputFileForm",
  components: {
    AForm,
  },
  setup() {
    const model = ref({
      contract: undefined,
      attachments: [],
    });
    const data = [
      {
        id: "contract",
        type: "file",
        label: "_A_INPUT_FILE_EXAMPLE_LABEL_CONTRACT_",
        accept: ".pdf",
        required: true,
      },
      {
        id: "attachments",
        type: "file",
        label: "_A_INPUT_FILE_EXAMPLE_LABEL_ATTACHMENTS_",
        isDropzone: true,
        isMultiple: true,
        isAppend: true,
        maxFiles: 5,
      },
    ];

    return {
      data,
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
