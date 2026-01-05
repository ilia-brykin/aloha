import {
  computed,
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import AlohaPaginationItems from "../../../../global/components/AlohaPaginationItems/AlohaPaginationItems.vue";
import {
  APaginationPages,
  ASlider,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PagePaginationPagesMaxPages",
  components: {
    AlohaExample,
    AlohaPaginationItems,
    APaginationPages,
    ASlider,
  },
  setup() {
    const totalCount = ref(143);
    const limit = ref(10);
    const maxPages = ref(5);
    const offset = ref(0);

    const rowsLength = computed(() => {
      const remaining = totalCount.value - offset.value;

      if (remaining <= 0) {
        return 0;
      }

      return Math.min(remaining, limit.value);
    });

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
      limit,
      maxPages,
      offset,
      rowsLength,
      totalCount,
      updateOffset,
    };
  },
};
