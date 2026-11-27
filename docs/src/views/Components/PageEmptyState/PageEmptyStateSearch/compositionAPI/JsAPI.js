export default function JsAPI() {
  const codeJs = `import {
  computed,
  ref,
} from "vue";

import {
  AButton,
  AEmptyState,
  AInput,
} from "aloha-vue";

// i18n: "_A_EMPTY_STATE_EXAMPLE_SEARCH_HEADER_": "Nothing found for \\"{{ search }}\\""

export default {
  components: {
    AButton,
    AEmptyState,
    AInput,
  },
  setup() {
    const items = ["Honolulu", "Hilo", "Kailua", "Lahaina", "Waikiki"];
    const search = ref("xyz");

    const itemsFiltered = computed(() => {
      const SEARCH = search.value.trim().toLowerCase();
      return items.filter(item => item.toLowerCase().includes(SEARCH));
    });

    return {
      itemsFiltered,
      search,
    };
  },
};`;

  return {
    codeJs,
  };
}
