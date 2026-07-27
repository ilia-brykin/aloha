import {
  computed,
  h,
} from "vue";

import AForm from "../../ui/AForm/AForm";

import DataAPI from "./compositionAPI/DataAPI";

function hasItemWithId(items, id) {
  return items?.some(item => {
    return item?.id === id || hasItemWithId(item?.children, id);
  }) || false;
}

export default {
  name: "ATableFormCellList",
  props: {
    columns: {
      type: Array,
      required: true,
    },
    errors: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    id: {
      type: String,
      required: true,
    },
    isEditable: {
      type: Boolean,
      required: false,
      default: false,
    },
    isEditMode: {
      type: Boolean,
      required: false,
      default: false,
    },
    isFooter: {
      type: Boolean,
      required: false,
      default: false,
    },
    row: {
      type: Object,
      required: true,
    },
    rowData: {
      type: Object,
      required: false,
      default: undefined,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
  },
  emits: [
    "updateRowData",
  ],
  setup(props) {
    const {
      dataForm,
    } = DataAPI(props);

    return {
      dataForm,
      rowDataLocal: computed(() => props.rowData || props.row),
    };
  },
  methods: {
    updateRowData({
      fullModel,
      id,
      item,
      model,
    }) {
      const column = this.columns.find(columnLocal => {
        return columnLocal.id === id ||
          hasItemWithId(columnLocal.formElement?.children, id);
      });

      this.$emit("updateRowData", {
        column,
        columnId: id,
        fullModel,
        item,
        model,
      });
    },
  },
  render() {
    return h("td", {
      class: [
        "a_table_form__cell",
        "a_table_form__cell_td",
        "a_table_form__cell_list",
      ],
    }, [
      h(AForm, {
        data: this.dataForm,
        errors: this.errors,
        idPrefix: this.id,
        modelValue: this.rowDataLocal,
        readonly: this.isFooter || !this.isEditable,
        showErrors: true,
        showRequiredText: false,
        tag: "div",
        useFlatErrors: true,
        useFlatModel: true,
        onChange: this.updateRowData,
      }, this.$slots),
    ]);
  },
};
