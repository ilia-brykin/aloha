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
  name: "PageInputTagsForm",
  components: {
    AForm,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

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
      codeHtml,
      codeJs,
      dataForm,
      model,
    };
  },
};
