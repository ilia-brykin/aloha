import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  APaginationPages,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PagePaginationPagesHideOnSinglePage",
  components: {
    AlohaExample,
    AButton,
    APaginationPages,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const totalCount = ref(8);
    const page = ref(1);

    return {
      codeHtml,
      codeJs,
      page,
      totalCount,
    };
  },
};
