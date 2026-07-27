import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ATableForm,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

const getFieldset = ({
  id,
  label,
  negativeId,
  positiveId,
  type = "integer",
}) => ({
  id,
  label,
  formElement: {
    children: [
      {
        classColumn: "a_column a_column_6",
        controlsType: "none",
        id: negativeId,
        label: "_A_TABLE_FORM_LIST_NEGATIVE_",
        type,
      },
      {
        classColumn: "a_column a_column_6",
        controlsType: "none",
        id: positiveId,
        label: "_A_TABLE_FORM_LIST_POSITIVE_",
        type,
      },
    ],
    classColumn: "a_column a_column_4",
    classColumns: "a_columns a_columns_count_12 a_columns_gap_2",
    type: "fieldset",
  },
});

export default {
  name: "PageTableFormList",
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
        id: "fundingTypes",
        label: "_A_TABLE_FORM_LIST_FUNDING_TYPES_",
        formElement: {
          classColumn: "a_column a_column_12",
          data: [
            {
              label: "_A_TABLE_FORM_LIST_FUNDING_TYPE_FEES_",
              value: "fees",
            },
            {
              label: "_A_TABLE_FORM_LIST_FUNDING_TYPE_TRAVEL_",
              value: "travel",
            },
            {
              label: "_A_TABLE_FORM_LIST_FUNDING_TYPE_INVESTMENT_",
              value: "investment",
            },
          ],
          keyId: "value",
          keyLabel: "label",
          required: true,
          translateData: true,
          type: "multiselect",
        },
      },
      getFieldset({
        id: "percentDeviation",
        label: "_A_TABLE_FORM_LIST_PERCENT_DEVIATION_",
        negativeId: "percentNegative",
        positiveId: "percentPositive",
      }),
      getFieldset({
        id: "amountDeviation",
        label: "_A_TABLE_FORM_LIST_AMOUNT_DEVIATION_",
        negativeId: "amountNegative",
        positiveId: "amountPositive",
        type: "currency",
      }),
      getFieldset({
        id: "shareDeviation",
        label: "_A_TABLE_FORM_LIST_SHARE_DEVIATION_",
        negativeId: "shareNegative",
        positiveId: "sharePositive",
      }),
      {
        id: "exceedAsError",
        label: "_A_TABLE_FORM_LIST_EXCEED_AS_ERROR_",
        formElement: {
          classColumn: "a_column a_column_12",
          type: "oneCheckbox",
        },
      },
      {
        id: "validationMessage",
        label: "_A_TABLE_FORM_LIST_VALIDATION_MESSAGE_",
        formElement: {
          classColumn: "a_column a_column_12",
          required: true,
          rows: 2,
          type: "textarea",
        },
      },
    ];

    const rows = ref([
      {
        amountNegative: 5300,
        amountPositive: 5300,
        exceedAsError: true,
        fundingTypes: ["fees", "travel", "investment"],
        id: 1,
        percentNegative: 20,
        percentPositive: 20,
        shareNegative: 10,
        sharePositive: 5,
        validationMessage: "The configured deviation threshold was exceeded.",
      },
      {
        amountNegative: 2500,
        amountPositive: 3000,
        exceedAsError: false,
        fundingTypes: ["travel"],
        id: 2,
        percentNegative: 10,
        percentPositive: 15,
        shareNegative: 4,
        sharePositive: 6,
        validationMessage: "Please verify the entered values.",
      },
    ]);

    const validate = model => {
      const errors = {};

      if (!model.fundingTypes?.length) {
        errors.fundingTypes = ["_A_TABLE_FORM_LIST_ERROR_REQUIRED_"];
      }
      if (!model.validationMessage?.trim()) {
        errors.validationMessage = ["_A_TABLE_FORM_LIST_ERROR_REQUIRED_"];
      }

      return errors;
    };

    const saveRow = ({ model, rowIndex }) => {
      const errors = validate(model);
      if (Object.keys(errors).length) {
        return { errors };
      }

      rows.value.splice(rowIndex, 1, model);
    };

    const addRow = ({ model }) => {
      const errors = validate(model);
      if (Object.keys(errors).length) {
        return { errors };
      }

      rows.value.push({
        ...model,
        id: Math.max(0, ...rows.value.map(row => row.id)) + 1,
      });
    };

    const deleteRow = ({ rowIndex }) => {
      rows.value.splice(rowIndex, 1);
    };

    const updateRows = ({ rows: rowsUpdated }) => {
      rows.value = rowsUpdated;
    };

    return {
      addRow,
      codeHtml,
      codeJs,
      columns,
      deleteRow,
      rows,
      saveRow,
      updateRows,
    };
  },
};
