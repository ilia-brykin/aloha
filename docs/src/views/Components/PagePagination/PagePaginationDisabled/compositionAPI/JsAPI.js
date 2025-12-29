export default function JsAPI() {
  const codeJs = `import {
  computed,
  ref,
} from "vue";
import {
  APagination,
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PagePaginationDisabled",
  components: {
    APagination,
    ASwitch,
  },
  setup() {
    const countAllRows = ref(123);
    const isDisabled = ref(true);
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
    
    const blockNumbers = computed(() => Array.from(
      {
        length: rowsLength.value,
      },
      (_, index) => offset.value + index + 1,
    ));
    
    const updateLimit = value => {
      limit.value = value;
      offset.value = 0;
    };
    
    const updateOffset = value => {
      offset.value = value;
    };
    
    return {
      blockNumbers,
      countAllRows,
      isDisabled,
      limit,
      limitsPerPage,
      maxPages,
      offset,
      rowsLength,
      updateLimit,
      updateOffset,
    };
  },
};`;

  return {
    codeJs,
  };
}
