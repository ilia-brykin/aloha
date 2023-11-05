export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import AFilters from "aloha-vue/src/AFilters/AFilters";
    
export default {
  name: "PageFiltersDefaultHide",
  components: {
    AFilters,
  },
  setup() {
     const filters = [
      {
        type: "text",
        id: "search",
        label: "_A_TABLE_FILTER_SEARCH_",
        main: true,
      },
      {
        type: "text",
        id: "aloha",
        label: "_A_TABLE_FILTER_TEXT_",
      },
      {
        type: "numberRange",
        id: "numberRange",
        label: "_A_TABLE_FILTER_INPUT_NUMBER_RANGE_",
      },
      {
        type: "date",
        id: "date",
        label: "_A_TABLE_FILTER_DATE_",
      },
      {
        type: "text",
        id: "aloha1",
        label: "_A_TABLE_FILTER_EXTRA_",
      },
      {
        type: "integerRange",
        id: "integerNumber",
        label: "Integer range",
      },
    ];

    const appliedModel = ref({});
    const unappliedModel = ref({});
    
    return {
      appliedModel,
      filters,
      unappliedModel,
    };
  },
};`;

  return {
    codeJs,
  };
}
