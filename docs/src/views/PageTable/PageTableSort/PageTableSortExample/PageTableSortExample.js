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
  times,
} from "lodash-es";

export default {
  name: "PageTableSortExample",
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
        label: "_A_TABLE_COLUMN_MULTI_ROWS_",
        sortId: "id",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
        sortId: "aloha",
      },
      {
        id: "column3",
        keyLabel: "number",
        label: "_A_TABLE_COLUMN_3_",
        sortId: "number",
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

    const data = ref([]);

    const setData = () => {
      const COUNT = 10;
      const DATA = [];
      times(COUNT, item => {
        DATA.push({
          id: item + 1,
          aloha: `aloha ${ item }`,
          number: COUNT - item,
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
    };
  },
};
