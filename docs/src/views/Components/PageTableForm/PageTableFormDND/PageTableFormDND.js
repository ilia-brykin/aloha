import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ATableForm,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageTableFormDND",
  components: {
    AlohaExample,
    ATableForm,
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
        id: "position",
        label: "_A_TABLE_FORM_COLUMN_POSITION_",
        maxWidth: 96,
        minWidth: 96,
        width: 96,
        formElement: {
          type: "text",
        },
      },
      {
        id: "name",
        formElement: {
          type: "text",
        },
        label: "_A_TABLE_FORM_COLUMN_NAME_",
        maxWidth: "18rem",
        minWidth: "12rem",
        width: "16rem",
      },
      {
        id: "team",
        formElement: {
          translateData: true,
          data: [
            {
              label: "_A_TABLE_FORM_TEAM_NORTH_",
              value: "north",
            },
            {
              label: "_A_TABLE_FORM_TEAM_WEST_",
              value: "west",
            },
            {
              label: "_A_TABLE_FORM_TEAM_SOUTH_",
              value: "south",
            },
            {
              label: "_A_TABLE_FORM_TEAM_EAST_",
              value: "east",
            },
          ],
          keyId: "value",
          keyLabel: "label",
          type: "select",
        },
        label: "_A_TABLE_FORM_COLUMN_TEAM_",
        minWidth: "12rem",
      },
      {
        id: "score",
        footerDefaultValue: "68",
        footerKeyLabel: "score",
        formElement: {
          type: "integer",
        },
        label: "_A_TABLE_FORM_COLUMN_SCORE_",
        maxWidth: 120,
        minWidth: 120,
        width: 120,
      },
    ];

    const rows = ref([
      {
        id: 1,
        name: "Марта Иванова",
        position: 1,
        score: 18,
        team: "north",
      },
      {
        id: 2,
        name: "Олег Сидоров",
        position: 2,
        score: 17,
        team: "west",
      },
      {
        id: 3,
        name: "Анна Петрова",
        position: 3,
        score: 16,
        team: "south",
      },
      {
        id: 4,
        name: "Игорь Ковалёв",
        position: 4,
        score: 17,
        team: "east",
      },
    ]);

    const rowsFooter = [
      {
        name: "_A_TABLE_FORM_FOOTER_TOTAL_",
        score: 68,
      },
    ];

    const updateRows = ({ rows: _rows, trigger }) => {
      rows.value = _rows;
      console.log("trigger", trigger);
    };

    return {
      codeHtml,
      codeJs,
      columns,
      rows,
      rowsFooter,
      updateRows,
    };
  },
};
