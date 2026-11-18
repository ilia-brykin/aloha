import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AInputFile,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageInputFileMultiple",
  components: {
    AlohaExample,
    AInputFile,
  },
  setup() {
    const modelReplace = ref([]);
    const modelAppend = ref([]);

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      modelAppend,
      modelReplace,
    };
  },
};
