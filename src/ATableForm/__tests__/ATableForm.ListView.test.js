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
import ATableForm from "../ATableForm";
import ATableFormCellList from "../ATableFormCellList/ATableFormCellList";

import CellDisabledAPI from "../ATableFormCell/compositionAPI/DisabledAPI";
import CellReadonlyAPI from "../ATableFormCell/compositionAPI/ReadonlyAPI";
import CellActionStylesAPI from "../ATableFormCellAction/compositionAPI/StylesAPI";
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
        return h(this.tag || "div", {}, this.data.map(item => {
          return h("div", {
            "data-column-id": item["data-column-id"],
          }, [
            h("input", {
              disabled: this.readonly || item.disabled,
              id: `${ this.idPrefix }${ item.id }`,
            }),
          ]);
        }));
      },
    },
  };
});

jest.mock("../../ui/AFormElement/AFormElement", () => {
  const {
    h,
  } = require("vue");

  return {
    __esModule: true,
    default: {
      name: "AFormElement",
      render() {
        return h("input");
      },
    },
  };
});

jest.mock("../../index", () => {
  const {
    h,
  } = require("vue");

  return {
    AAlert: {
      name: "AAlert",
      render() {
        return h("div");
      },
    },
    AConfirmAPI: () => ({
      closeConfirm: jest.fn(),
      openConfirm: jest.fn(),
    }),
    AErrors: {
      name: "AErrors",
      render() {
        return h("div");
      },
    },
  };
});

jest.mock("../../AButton/AButton", () => {
  const {
    h,
  } = require("vue");

  return {
    __esModule: true,
    default: {
      name: "AButton",
      props: {
        disabled: Boolean,
        id: String,
      },
      emits: [
        "click",
      ],
      render() {
        return h("button", {
          disabled: this.disabled,
          id: this.id,
          onClick: $event => this.$emit("click", $event),
        });
      },
    },
  };
});

jest.mock("aloha-svg/dist/js/bootstrap/ChevronDown", () => ({
  __esModule: true,
  default: "<svg></svg>",
}));
jest.mock("aloha-svg/dist/js/bootstrap/ChevronUp", () => ({
  __esModule: true,
  default: "<svg></svg>",
}));
jest.mock("aloha-svg/dist/js/bootstrap/ExclamationCircleFill", () => ({
  __esModule: true,
  default: "<svg></svg>",
}));
jest.mock("aloha-svg/dist/js/bootstrap/Floppy2Fill", () => ({
  __esModule: true,
  default: "<svg></svg>",
}));
jest.mock("aloha-svg/dist/js/bootstrap/GripVertical", () => ({
  __esModule: true,
  default: "<svg></svg>",
}));
jest.mock("aloha-svg/dist/js/bootstrap/LockFill", () => ({
  __esModule: true,
  default: "<svg></svg>",
}));
jest.mock("aloha-svg/dist/js/bootstrap/PencilFill", () => ({
  __esModule: true,
  default: "<svg></svg>",
}));
jest.mock("aloha-svg/dist/js/bootstrap/Plus", () => ({
  __esModule: true,
  default: "<svg></svg>",
}));
jest.mock("aloha-svg/dist/js/bootstrap/Trash", () => ({
  __esModule: true,
  default: "<svg></svg>",
}));
jest.mock("aloha-svg/dist/js/bootstrap/XLg", () => ({
  __esModule: true,
  default: "<svg></svg>",
}));

describe("ATableForm list view", () => {
  it("uses disabled fields for editable rows and readonly fields for non-editable rows", () => {
    const props = reactive({
      column: {
        formElement: {},
      },
      isEditable: true,
      isEditMode: false,
      isFooter: false,
    });
    const {
      disabledLocal,
    } = CellDisabledAPI(props);
    const {
      readonlyLocal,
    } = CellReadonlyAPI(props);

    expect(disabledLocal.value).toBe(true);
    expect(readonlyLocal.value).toBe(false);

    props.isEditable = false;

    expect(disabledLocal.value).toBe(false);
    expect(readonlyLocal.value).toBe(true);
  });

  it.each([
    [true, true, 112],
    [true, false, 56],
    [false, true, 56],
    [false, false, 56],
  ])("uses the expected action width for editable=%s and deletable=%s", (isEditable, isDeletable, width) => {
    const props = reactive({
      hasActiveEditRow: false,
      isActiveEditMode: false,
      isDeletable,
      isDeletableConfirm: false,
      isEditable,
      widths: {
        actionsColumnDouble: 112,
        actionsColumnSingle: 56,
      },
    });
    const {
      columnStyles,
    } = CellActionStylesAPI(props);

    expect(columnStyles.value.width).toBe(`${ width }px`);
  });

  it("shows the actions column only for edit, delete, or an active add row", () => {
    const isAddRowActive = ref(false);
    const props = reactive({
      columns: [{ id: "name" }],
      isDeletable: false,
      isDeletableConfirm: false,
      isDragAndDrop: false,
      isEditable: false,
      rowView: "table",
    });
    const {
      allColumnsLength,
      hasActionsColumn,
    } = ColumnsAPI(props, {
      isAddRowActive,
    });

    expect(hasActionsColumn.value).toBe(false);
    expect(allColumnsLength.value).toBe(1);

    props.isEditable = true;
    expect(hasActionsColumn.value).toBe(true);
    expect(allColumnsLength.value).toBe(2);

    props.isEditable = false;
    props.isDeletableConfirm = true;
    expect(hasActionsColumn.value).toBe(true);

    props.isDeletableConfirm = false;
    isAddRowActive.value = true;
    expect(hasActionsColumn.value).toBe(true);
  });

  it("allows adding editable data when row editing is disabled", async() => {
    const wrapper = mount(ATableForm, {
      props: {
        addRow: jest.fn(),
        columns: [
          {
            id: "name",
            formElement: {
              type: "text",
            },
          },
        ],
        isAddable: true,
        isEditable: false,
        rowView: "list",
        rows: [],
      },
    });

    expect(wrapper.find(".a_table_form__cell_actions").exists()).toBe(false);

    await wrapper.find(".a_mt_3 button").trigger("click");

    expect(wrapper.find("tbody button[id$='_cancel']").exists()).toBe(true);
    expect(wrapper.find("tbody button[id$='_save']").exists()).toBe(true);
    expect(wrapper.findComponent(AForm).props("readonly")).toBe(false);
  });

  it("allows DND but not row-click editing when rows are not editable", async() => {
    const wrapper = mount(ATableForm, {
      props: {
        columns: [
          {
            id: "name",
            formElement: {
              type: "text",
            },
          },
        ],
        isDragAndDrop: true,
        isEditable: false,
        isEditOnRowClick: true,
        rows: [{ name: "Readonly" }],
      },
    });

    expect(wrapper.find("tbody .a_table_form__reorder_handle").attributes("draggable")).toBe("true");

    await wrapper.find("tbody tr.a_table_form__row").trigger("click");

    expect(wrapper.find("tbody button[id$='_save']").exists()).toBe(false);
  });

  it("enters edit mode by row click only when enabled and row edit is available", async() => {
    const rows = [
      {
        id: 1,
        name: "Editable",
      },
      {
        id: 2,
        name: "Disabled",
      },
    ];
    const wrapper = mount(ATableForm, {
      props: {
        actionsDisabledCallback: {
          edit: ({ row }) => row.id === 2,
        },
        columns: [
          {
            id: "name",
            label: "Name",
            formElement: {
              type: "text",
            },
          },
        ],
        isEditable: true,
        isEditOnRowClick: true,
        keyId: "id",
        rows,
      },
    });

    const bodyRows = wrapper.findAll("tbody tr.a_table_form__row");

    await bodyRows[1].trigger("click");
    expect(wrapper.find("tbody tr.a_table_form__row_edit_on_click").exists()).toBe(true);

    await bodyRows[0].trigger("click");
    expect(wrapper.find("tbody tr.a_table_form__row_edit_on_click").exists()).toBe(false);
    expect(wrapper.find("tbody button[id$='_save']").exists()).toBe(true);
  });

  it("does not enter edit mode by row click when the prop is disabled", async() => {
    const wrapper = mount(ATableForm, {
      props: {
        columns: [
          {
            id: "name",
            label: "Name",
            formElement: {
              type: "text",
            },
          },
        ],
        isEditable: true,
        rows: [
          {
            name: "Readonly row click",
          },
        ],
      },
    });

    await wrapper.find("tbody tr.a_table_form__row").trigger("click");

    expect(wrapper.find("tbody button[id$='_save']").exists()).toBe(false);
  });

  it("focuses the clicked column after entering edit mode by row click", async() => {
    const wrapper = mount(ATableForm, {
      attachTo: document.body,
      props: {
        columns: [
          {
            id: "number",
            label: "Number",
            formElement: {
              type: "text",
            },
          },
          {
            id: "name",
            label: "Name",
            formElement: {
              type: "text",
            },
          },
        ],
        isEditable: true,
        isEditOnRowClick: true,
        rows: [
          {
            name: "Marta Ivanova",
            number: 1,
          },
        ],
      },
    });

    await wrapper.find("tbody [data-column-id='name']").trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.find("tbody button[id$='_save']").exists()).toBe(true);
    expect(document.activeElement.closest("[data-column-id]").dataset.columnId).toBe("name");

    wrapper.unmount();
  });

  it("focuses the clicked form item in list view after entering edit mode by row click", async() => {
    const wrapper = mount(ATableForm, {
      attachTo: document.body,
      props: {
        columns: [
          {
            id: "number",
            label: "Number",
            formElement: {
              type: "text",
            },
          },
          {
            id: "name",
            label: "Name",
            formElement: {
              type: "text",
            },
          },
        ],
        isEditable: true,
        isEditOnRowClick: true,
        rowView: "list",
        rows: [
          {
            name: "Marta Ivanova",
            number: 1,
          },
        ],
      },
    });

    await wrapper.find("tbody [data-column-id='name']").trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.find("tbody button[id$='_save']").exists()).toBe(true);
    expect(document.activeElement.closest("[data-column-id]").dataset.columnId).toBe("name");

    wrapper.unmount();
  });

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
        "data-column-id": "limits",
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
