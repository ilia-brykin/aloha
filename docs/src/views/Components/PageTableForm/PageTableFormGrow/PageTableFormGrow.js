import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ACheckbox,
  ATableForm,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageTableFormGrow",
  components: {
    ACheckbox,
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

    const dataCheckbox = [
      {
        label: "is-deletable",
        value: "is-deletable",
      },
      {
        label: "is-editable",
        value: "is-editable",
      },
      {
        label: "is-drag-and-drop",
        value: "is-drag-and-drop",
      },
    ];
    const modelCheckbox = ref(["is-deletable", "is-editable"]);

    const columns = [
      {
        id: "position",
        label: "_A_TABLE_FORM_COLUMN_POSITION_",
        minWidth: 96,
        width: 96,
        grow: 1,
        formElement: {
          controlsType: "none",
          type: "integer",
        },
      },
      {
        id: "name",
        formElement: {
          type: "text",
        },
        label: "_A_TABLE_FORM_COLUMN_NAME_",
        minWidth: "12rem",
        width: "16rem",
        grow: 2,
      },
      {
        id: "team",
        formElement: {
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
          translateData: true,
          type: "select",
        },
        label: "_A_TABLE_FORM_COLUMN_TEAM_",
        minWidth: "12rem",
        width: "12rem",
        grow: 1,
      },
      {
        id: "score",
        footerDefaultValue: "68",
        footerKeyLabel: "score",
        formElement: {
          controlsType: "none",
          min: 0,
          type: "integer",
        },
        label: "_A_TABLE_FORM_COLUMN_SCORE_",
        minWidth: 120,
        width: 120,
        grow: 1,
      },
    ];

    const rows = ref([
      {
        id: 1,
        name: "Marta Ivanova",
        position: 1,
        score: 18,
        team: "north",
      },
      {
        id: 2,
        name: "Oleg Sidorov",
        position: 2,
        score: 17,
        team: "west",
      },
      {
        id: 3,
        name: "Anna Petrova",
        position: 3,
        score: 16,
        team: "south",
      },
      {
        id: 4,
        name: "Igor Kovalev",
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

    const texts = {
      editInfoText: "Only one row can be edited at a time.",
    };

    const saveRow = ({ model, rowIndex }) => {
      rows.value.splice(rowIndex, 1, model);
    };

    const deleteRow = ({ rowIndex }) => {
      rows.value.splice(rowIndex, 1);
    };

    return {
      codeHtml,
      codeJs,
      columns,
      dataCheckbox,
      deleteRow,
      modelCheckbox,
      rows,
      rowsFooter,
      saveRow,
      texts,
    };
  },
};
