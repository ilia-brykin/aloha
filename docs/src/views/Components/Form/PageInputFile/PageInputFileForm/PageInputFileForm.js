import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AForm,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageInputFileForm",
  components: {
    AlohaExample,
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

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      data,
      model,
    };
  },
};
