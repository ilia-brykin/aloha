export default function JsAPI() {
  const codeJs = `import {
  computed,
  ref,
} from "vue";
import {
  AMultiselectOrdered,
  APagination,
} from "aloha-vue";
    
export default {
  name: "PagePaginationLimitsPerPage",
  components: {
    AMultiselectOrdered,
    APagination,
  },
  setup() {
    const totalCount = ref(143);
    const limit = ref(10);
    const maxPages = ref(5);
    const offset = ref(0);
    const limitsPerPageOptions = [
      "5",
      "10",
      "25",
      "50",
      "75",
      "100",
    ];
    const limitsPerPageModel = ref([...limitsPerPageOptions]);

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
    
    const updateLimit = value => {
      limit.value = value;
      offset.value = 0;
    };
    
    const updateOffset = value => {
      offset.value = value;
    };
    
    return {
      blockNumbers,
      totalCount,
      limit,
      limitsPerPageModel,
      limitsPerPageOptions,
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
