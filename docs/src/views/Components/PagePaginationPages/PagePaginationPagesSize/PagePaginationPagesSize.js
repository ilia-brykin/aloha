import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  APaginationPages,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PagePaginationPagesSize",
  components: {
    AlohaExample,
    APaginationPages,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const page = ref(1);
    const sizes = ["small", "medium", "large"];

    return {
      codeHtml,
      codeJs,
      page,
      sizes,
    };
  },
};
