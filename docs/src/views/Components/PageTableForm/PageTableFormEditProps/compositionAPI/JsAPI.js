export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ATableForm,
} from "aloha-vue";

export default {
  components: {
    ATableForm,
  },
  setup() {
    const columns = [
      {
        id: "name",
        formElement: {
          type: "text",
        },
        label: "_A_TABLE_FORM_COLUMN_NAME_",
      },
      {
        id: "status",
        formElement: {
          data: [
            { label: "_A_TABLE_FORM_EDIT_PROPS_STATUS_EDITABLE_", value: "editable" },
            { label: "_A_TABLE_FORM_EDIT_PROPS_STATUS_LOCKED_", value: "locked" },
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
          min: 0,
          type: "integer",
        },
        formElementEditPropsCallback: ({ rowData }) => ({
          disabled: rowData.status === "locked",
        }),
        label: "_A_TABLE_FORM_COLUMN_SCORE_",
      },
    ];
    const rows = ref([
      { id: 1, name: "Marta Ivanova", score: 18, status: "editable" },
      { id: 2, name: "Oleg Sidorov", score: 17, status: "locked" },
    ]);
    const saveRow = ({ model, rowIndex }) => {
      rows.value.splice(rowIndex, 1, model);
    };

    return {
      columns,
      rows,
      saveRow,
    };
  },
};`;

  return {
    codeJs,
  };
}
