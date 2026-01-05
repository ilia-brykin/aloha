export default function JsAPI() {
  const codeJs = `import {
  computed,
  ref,
} from "vue";
import {
  APaginationPages,
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PagePaginationPagesDisabled",
  components: {
    APaginationPages,
    ASwitch,
  },
  setup() {
    const totalCount = ref(87);
    const limit = ref(10);
    const maxPages = ref(5);
    const offset = ref(0);
    const isDisabled = ref(true);

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
      isDisabled,
      limit,
      maxPages,
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
