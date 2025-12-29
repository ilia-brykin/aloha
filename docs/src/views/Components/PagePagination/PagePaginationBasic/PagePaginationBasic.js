import {
  computed,
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import AlohaPaginationItems from "../../../../global/components/AlohaPaginationItems/AlohaPaginationItems.vue";
import {
  APagination,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PagePaginationBasic",
  components: {
    AlohaExample,
    AlohaPaginationItems,
    APagination,
  },
  setup() {
    const countAllRows = ref(87);
    const limit = ref(10);
    const maxPages = ref(5);
    const offset = ref(0);

    const limitsPerPage = [
      "10",
      "25",
      "50",
      "100",
    ];

    const rowsLength = computed(() => {
      const remaining = countAllRows.value - offset.value;

      if (remaining <= 0) {
        return 0;
      }

      return Math.min(remaining, limit.value);
    });


    const updateLimit = value => {
      limit.value = value;
      offset.value = 0;
    };

    const updateOffset = value => {
      offset.value = value;
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
      countAllRows,
      limit,
      limitsPerPage,
      maxPages,
      offset,
      rowsLength,
      updateLimit,
      updateOffset,
    };
  },
};
