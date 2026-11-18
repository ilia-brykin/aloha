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
  name: "PageInputFileRestrictions",
  components: {
    AlohaExample,
    AInputFile,
  },
  setup() {
    const model = ref([]);
    const rejected = ref([]);

    const onReject = ({ files }) => {
      rejected.value = files.map(({ name, reason }) => `${ name }: ${ reason }`);
    };

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      model,
      onReject,
      rejected,
    };
  },
};
