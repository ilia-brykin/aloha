import {
  computed,
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ATable,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

import {
  times,
} from "lodash-es";

export default {
  name: "PageTablePaginationOutside",
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

    const data = ref([]);
    const limit = ref(10);
    const offset = ref(0);

    const dataPaginated = computed(() => {
      return data.value.slice(offset.value, limit.value + offset.value);
    });

    const setData = () => {
      const DATA = [];
      times(999, item => {
        DATA.push({
          id: item,
          aloha: `aloha ${ item }`,
        });
      });
      data.value = DATA;
    };

    const changeLimitOrOffset = ({ limit: limitLocal, offset: offsetLocal }) => {
      limit.value = limitLocal;
      offset.value = offsetLocal;
    };

    const changeLimit = ({ limit, offset }) => {
      changeLimitOrOffset({ limit, offset });
    };

    const changeOffset = ({ limit, offset }) => {
      changeLimitOrOffset({ limit, offset });
    };

    setData();

    return {
      changeLimit,
      changeOffset,
      codeHtml,
      codeJs,
      columns,
      data,
      dataPaginated,
    };
  },
};
