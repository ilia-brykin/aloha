export default function JsAPI() {
  const codeJs = `import {
  computed,
  ref,
} from "vue";
import {
  APaginationPages,
} from "aloha-vue";
    
export default {
  name: "PagePaginationPagesShort",
  components: {
    APaginationPages,
  },
  setup() {
    const totalCount = ref(87);
    const limit = ref(10);
    const offset = ref(0);

    const rowsLength = computed(() => {
      const remaining = totalCount.value - offset.value;

      if (remaining <= 0) {
        return 0;
      }

      return Math.min(remaining, limit.value);
    });

    const blockNumbers = computed(() => Array.from(
      {
        length: rowsLength.value,
      },
      (_, index) => offset.value + index + 1,
    ));

    const updateOffset = value => {
      offset.value = value;
    };

    return {
      blockNumbers,
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
