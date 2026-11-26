export default function JsAPI() {
  const codeJs = `import {
  ref,
  computed,
} from "vue";

import {
  APaginationPages,
} from "aloha-vue";

export default {
  components: {
    APaginationPages,
  },
  setup() {
    const totalCount = ref(500);
    const limit = ref(10);
    const offset = ref(0);
    const rowsLength = computed(() => {
      return Math.max(Math.min(totalCount.value - offset.value, limit.value), 0);
    });
    const updateOffset = value => {
      offset.value = value;
    };

    return {
      limit,
      offset,
      rowsLength,
      totalCount,
      updateOffset,
    };
  },
};`;

  return {
    codeJs,
  };
}
