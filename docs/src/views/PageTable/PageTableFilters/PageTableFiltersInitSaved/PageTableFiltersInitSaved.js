import {
  ref,
} from "vue";

import {
  ATable,
} from "aloha-vue";
import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

import {
  cloneDeep,
  times,
} from "lodash-es";

export default {
  name: "PageTableFiltersInitSaved",
  components: {
    AlohaExample,
    ATable,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
      },
      {
        id: "column3",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_3_",
      },
      {
        id: "column4",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_4_",
      },
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
      },
    ];

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
        alwaysVisible: true,
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
    ];
    const filtersSaved = [
      {
        label: "Aloha 1",
        data: {
          search: "Aloha",
          aloha1: "test",
        },
      },
      {
        label: "Aloha 2",
        data: {
          aloha: "test 2",
          aloha1: "test 2",
        },
      },
    ];
    const data = ref([]);
    const modelFilters = ref({});

    const updateModelFilters = ({ model } = {}) => {
      modelFilters.value = cloneDeep(model);
    };

    const setData = () => {
      const DATA = [];
      times(20, item => {
        DATA.push({
          id: item,
          aloha: `aloha ${ item }`,
        });
      });
      data.value = DATA;
    };

    setData();

    return {
      codeHtml,
      codeJs,
      columns,
      data,
      modelFilters,
      filters,
      filtersSaved,
      updateModelFilters,
    };
  },
};
