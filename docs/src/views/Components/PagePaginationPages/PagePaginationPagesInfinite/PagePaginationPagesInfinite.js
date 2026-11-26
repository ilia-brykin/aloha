import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import AlohaPaginationItems from "../../../../global/components/AlohaPaginationItems/AlohaPaginationItems.vue";
import {
  APaginationPages,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PagePaginationPagesInfinite",
  components: {
    AlohaExample,
    AlohaPaginationItems,
    APaginationPages,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const totalCount = ref(60);
    const limit = ref(10);
    // the button and the scroll add the next rows: limit 10 -> 20 -> 30
    const updateLimit = value => {
      limit.value = value;
    };

    return {
      codeHtml,
      codeJs,
      limit,
      totalCount,
      updateLimit,
    };
  },
};
