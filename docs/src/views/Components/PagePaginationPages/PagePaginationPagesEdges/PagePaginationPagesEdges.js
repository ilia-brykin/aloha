import {
  computed,
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
  name: "PagePaginationPagesEdges",
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

    const totalCount = ref(300);
    const limit = ref(10);
    const offset = ref(90);
    const rowsLength = computed(() => {
      return Math.max(Math.min(totalCount.value - offset.value, limit.value), 0);
    });
    const updateOffset = value => {
      offset.value = value;
    };

    return {
      codeHtml,
      codeJs,
      limit,
      offset,
      rowsLength,
      totalCount,
      updateOffset,
    };
  },
};
