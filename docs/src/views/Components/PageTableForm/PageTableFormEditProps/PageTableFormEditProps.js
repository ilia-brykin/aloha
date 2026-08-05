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
  name: "PageTableFormEditProps",
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
        id: "name",
        formElement: {
          required: true,
          type: "text",
        },
        label: "_A_TABLE_FORM_COLUMN_NAME_",
      },
      {
        id: "status",
        formElement: {
          data: [
            {
              label: "_A_TABLE_FORM_EDIT_PROPS_STATUS_EDITABLE_",
              value: "editable",
            },
            {
              label: "_A_TABLE_FORM_EDIT_PROPS_STATUS_LOCKED_",
              value: "locked",
            },
          ],
          keyId: "value",
          keyLabel: "label",
          translateData: true,
          type: "select",
        },
        label: "_A_TABLE_FORM_EDIT_PROPS_COLUMN_STATUS_",
      },
      {
        id: "score",
        formElement: {
          controlsType: "none",
          min: 0,
          type: "integer",
        },
        formElementEditPropsCallback: ({ rowData }) => ({
          disabled: rowData.status === "locked",
        }),
        label: "_A_TABLE_FORM_COLUMN_SCORE_",
        maxWidth: 120,
        minWidth: 120,
        width: 120,
      },
    ];
    const rows = ref([
      {
        id: 1,
        name: "Marta Ivanova",
        score: 18,
        status: "editable",
      },
      {
        id: 2,
        name: "Oleg Sidorov",
        score: 17,
        status: "locked",
      },
    ]);

    const saveRow = ({ model, rowIndex }) => {
      rows.value.splice(rowIndex, 1, model);
    };

    return {
      codeHtml,
      codeJs,
      columns,
      rows,
      saveRow,
    };
  },
};
