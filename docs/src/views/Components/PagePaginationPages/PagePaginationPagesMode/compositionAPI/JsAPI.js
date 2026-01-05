export default function JsAPI() {
  const codeJs = `import {
  computed,
  ref,
} from "vue";
import {
  APaginationPages,
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PagePaginationPagesMode",
  components: {
    APaginationPages,
    ASelect,
  },
  setup() {
    const totalCount = ref(87);
    const limit = ref(10);
    const offset = ref(0);
    const mode = ref("short");
    const modeOptions = [
      {
        id: "short",
        label: "_A_PAGINATION_PAGES_MODE_SHORT_",
      },
      {
        id: "normal",
        label: "_A_PAGINATION_PAGES_MODE_NORMAL_",
      },
    ];

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
      mode,
      modeOptions,
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
