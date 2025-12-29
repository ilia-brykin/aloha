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
    const countAllRows = ref(143);
    const limit = ref(10);
    const maxPages = ref(5);
    const offset = ref(0);
        
    const limitsPerPageOptions = [
      {
        value: "5",
        label: "5",
      },
      {
        value: "10",
        label: "10",
      },
      {
        value: "25",
        label: "25",
      },
      {
        value: "50",
        label: "50",
      },
      {
        value: "75",
        label: "75",
      },
      {
        value: "100",
        label: "100",
      },
    ];

    const defaultLimitsPerPage = limitsPerPageOptions.map(option => option.value);
    const limitsPerPageModel = ref([...defaultLimitsPerPage]);

    const limitsPerPage = computed(() => (
      limitsPerPageModel.value.length
        ? limitsPerPageModel.value
        : defaultLimitsPerPage
    ));
    
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
      limit,
      limitsPerPage,
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
