export default function JsAPI() {
  const codeJs = `import {
  computed,
  ref,
} from "vue";
import {
  APagination,
} from "aloha-vue";
    
export default {
  name: "PagePaginationBasic",
  components: {
    APagination,
  },
  setup() {
    const countAllRows = ref(87);
    const limit = ref(10);
    const maxPages = ref(5);
    const offset = ref(0);
    const totalRowsCount = ref(87);
    
    const limitsPerPage = [
      "10",
      "25",
      "50",
      "100",
    ];
    
    const rowsLength = computed(() => {
      const remaining = totalRowsCount.value - offset.value;
    
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
    
    return {
      countAllRows,
      limit,
      limitsPerPage,
      maxPages,
      offset,
      rowsLength,
      totalRowsCount,
      updateLimit,
      updateOffset,
    };
  },
};`;

  return {
    codeJs,
  };
}
