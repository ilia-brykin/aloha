import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AFilters,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageFiltersExample",
  components: {
    AFilters,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const filterMain = {
      type: "text",
      id: "search",
      label: "_A_PAGE_FILTER_SEARCH_",
      labelScreenReader: "_A_PAGE_FILTER_SEARCH_SCREEN_READER_",
    };

    const filters = [
      {
        type: "text",
        id: "aloha",
        label: "_A_PAGE_FILTER_TEXT_",
        alwaysVisible: true,
      },
      {
        type: "date",
        id: "date",
        label: "_A_PAGE_FILTER_DATE_",
        alwaysVisible: true,
      },
      {
        type: "integer",
        id: "integer",
        label: "_A_PAGE_FILTER_INTEGER_",
        alwaysVisible: true,
      },
      {
        type: "dateRange",
        id: "dateRange",
        label: "_A_TABLE_FILTER_INPUT_DATE_RANGE_",
        alwaysVisible: true,
      },
      {
        type: "numberRange",
        id: "numberRange",
        label: "_A_TABLE_FILTER_INPUT_NUMBER_RANGE_",
        alwaysVisible: true,
      },
    ];

    const appliedModel = ref({});
    const mainModel = ref({});
    const unappliedModel = ref({});

    return {
      appliedModel,
      codeHtml,
      codeJs,
      filterMain,
      filters,
      mainModel,
      unappliedModel,
    };
  },
};
