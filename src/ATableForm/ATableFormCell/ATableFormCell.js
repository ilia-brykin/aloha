import {
  computed,
  h,
} from "vue";

import AFormElement from "../../ui/AFormElement/AFormElement";

import DisabledAPI from "./compositionAPI/DisabledAPI";
import ReadonlyAPI from "./compositionAPI/ReadonlyAPI";
import StylesAPI from "../compositionAPI/StylesAPI";

import {
  get,
} from "lodash-es";

export default {
  name: "ATableFormCell",
  props: {
    column: {
      type: Object,
      required: true,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
    errorIcon: {
      type: String,
      required: false,
      default: undefined,
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
    isEditMode: {
      type: Boolean,
      required: false,
      default: false,
    },
    isEditable: {
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
    tag: {
      type: String,
      required: false,
      default: "td",
    },
  },
  emits: [
    "updateRowData",
  ],
  setup(props) {
    const {
      columnStyles,
    } = StylesAPI({
      column: props.column,
    });

    const {
      readonlyLocal,
    } = ReadonlyAPI(props);

    const {
      disabledLocal,
    } = DisabledAPI(props);

    const rowDataLocal = computed(() => {
      return props.rowData || props.row;
    });

    return {
      columnStyles,
      disabledLocal,
      readonlyLocal,
      rowDataLocal,
    };
  },
  methods: {
    updateRowData({ model }) {
      this.$emit("updateRowData", {
        columnId: this.column.id,
        model,
      });
    },
  },
  render() {
    const {
      type = "text",
      ...formElement
    } = this.column.formElement || {};

    return h(this.tag, {
      class: [
        "a_table_form__cell",
        `a_table_form__cell_${ this.tag }`,
        this.column.class,
        this.isFooter ? this.column.classFooter : this.column.classRow,
      ],
      style: this.columnStyles,
    }, [
      h(AFormElement, {
        id: this.column.id,
        errorIcon: this.errorIcon,
        idPrefix: this.id,
        ...formElement,
        change: this.updateRowData,
        disabled: this.disabledLocal,
        errors: get(this.errors, this.column.id),
        errorsClass: "a_sr_only",
        modelValue: get(this.rowDataLocal, this.column.id),
        readonly: this.readonlyLocal,
        type,
      }),
    ]);
  },
};
