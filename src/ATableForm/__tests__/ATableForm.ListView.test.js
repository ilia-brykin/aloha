import {
  reactive,
  ref,
} from "vue";
import {
  describe,
  expect,
  it,
  jest,
} from "@jest/globals";
import {
  mount,
} from "@vue/test-utils";

import AForm from "../../ui/AForm/AForm";
import ATableFormCellList from "../ATableFormCellList/ATableFormCellList";

import ColumnsAPI from "../compositionAPI/ColumnsAPI";
import DataAPI from "../ATableFormCellList/compositionAPI/DataAPI";
import RowEditAPI from "../ATableFormRow/compositionAPI/EditAPI";
import TableEditAPI from "../compositionAPI/EditAPI";

jest.mock("../../ui/AForm/AForm", () => {
  const {
    h,
  } = require("vue");

  return {
    __esModule: true,
    default: {
      name: "AForm",
      props: {
        data: Array,
        errors: Object,
        idPrefix: String,
        modelValue: Object,
        readonly: Boolean,
        showErrors: Boolean,
        showRequiredText: Boolean,
        tag: String,
        useFlatErrors: Boolean,
        useFlatModel: Boolean,
      },
      emits: [
        "change",
      ],
      render() {
        return h("div");
      },
    },
  };
});

describe("ATableForm list view", () => {
  it("uses one content column and finds required fields recursively", () => {
    const props = reactive({
      columns: [
        {
          id: "fieldset",
          formElement: {
            children: [
              {
                id: "requiredChild",
                required: true,
                type: "text",
              },
            ],
            type: "fieldset",
          },
        },
        {
          id: "secondColumn",
          formElement: {
            type: "text",
          },
        },
      ],
      isAddable: false,
      isDeletable: true,
      isDeletableConfirm: false,
      isDragAndDrop: true,
      isEditable: true,
      rowView: "list",
      rows: [],
    });
    const {
      allColumnsLength,
      columnsVisible,
      hasActionsColumn,
    } = ColumnsAPI(props);
    const {
      hasRequiredEditableColumns,
    } = TableEditAPI(props, {
      columnsVisible,
      getRowKey: jest.fn(),
    });

    expect(allColumnsLength.value).toBe(3);
    expect(hasRequiredEditableColumns.value).toBe(true);

    props.rowView = "table";
    expect(allColumnsLength.value).toBe(4);
    expect(hasActionsColumn.value).toBe(true);
  });

  it("converts columns and nested fieldsets to AForm data", () => {
    const props = reactive({
      columns: [
        {
          id: "limits",
          label: "Limits",
          formElement: {
            type: "fieldset",
            children: [
              {
                id: "negative",
                label: "Negative",
                type: "integer",
                useRowReadonly: true,
              },
            ],
          },
        },
      ],
      isEditable: true,
      isEditMode: false,
    });
    const {
      dataForm,
    } = DataAPI(props);

    expect(dataForm.value).toEqual([
      {
        children: [
          {
            id: "negative",
            label: "Negative",
            readonly: true,
            type: "integer",
            useRowReadonly: true,
          },
        ],
        disabled: true,
        id: "limits",
        label: "Limits",
        type: "fieldset",
      },
    ]);

    props.isEditMode = true;

    expect(dataForm.value[0].disabled).toBeUndefined();
    expect(dataForm.value[0].children[0].readonly).toBe(false);
  });

  it("passes the complete errors object to AForm and emits its full model", async() => {
    const errors = {
      negative: ["Value is too low"],
    };
    const wrapper = mount(ATableFormCellList, {
      props: {
        columns: [
          {
            id: "limits",
            formElement: {
              type: "fieldset",
              children: [
                {
                  id: "negative",
                  type: "integer",
                },
              ],
            },
          },
        ],
        errors,
        id: "table_0",
        isEditable: true,
        isEditMode: true,
        row: {
          negative: 10,
        },
        rowIndex: 0,
        rows: [],
      },
    });
    const form = wrapper.findComponent(AForm);

    expect(form.props("errors")).toEqual(errors);
    expect(form.props("showErrors")).toBe(true);
    expect(form.props("showRequiredText")).toBe(false);
    expect(form.props("useFlatErrors")).toBe(true);

    form.vm.$emit("change", {
      fullModel: {
        negative: 20,
      },
      id: "negative",
      item: {
        id: "negative",
      },
      model: 20,
    });
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted("updateRowData")[0][0]).toEqual(expect.objectContaining({
      column: wrapper.props("columns")[0],
      columnId: "negative",
      fullModel: {
        negative: 20,
      },
      model: 20,
    }));
  });

  it("replaces the complete edit model and clears the changed field error", () => {
    const errorsLocal = ref({
      negative: ["Value is too low"],
      positive: ["Value is too high"],
    });
    const {
      modelLocal,
      updateModelLocal,
    } = RowEditAPI(reactive({
      changeModel: undefined,
      onCancelEditRow: jest.fn(),
      row: {
        negative: 10,
        positive: 10,
      },
      rowIndex: 0,
      rows: [],
      saveRow: jest.fn(),
    }), {
      errorsLocal,
    });

    updateModelLocal({
      columnId: "negative",
      fullModel: {
        negative: 20,
        positive: 10,
      },
      model: 20,
    });

    expect(modelLocal.value).toEqual({
      negative: 20,
      positive: 10,
    });
    expect(errorsLocal.value).toEqual({
      positive: ["Value is too high"],
    });
  });
});
