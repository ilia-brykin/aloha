import {
  computed,
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  AEmptyState,
  AInput,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageEmptyStateSearch",
  components: {
    AButton,
    AEmptyState,
    AInput,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const items = ["Honolulu", "Hilo", "Kailua", "Lahaina", "Waikiki"];
    const search = ref("xyz");

    const itemsFiltered = computed(() => {
      const SEARCH = search.value.trim().toLowerCase();
      return items.filter(item => item.toLowerCase().includes(SEARCH));
    });

    return {
      codeHtml,
      codeJs,
      itemsFiltered,
      search,
    };
  },
};
