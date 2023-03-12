import {
  computed,
  h,
  inject, toRef,
} from "vue";

import ATableTd from "../ATableTd/ATableTd";
import ATableTdAction from "../ATableTdAction/ATableTdAction";
import AOneCheckbox from "../../ui/AOneCheckbox/AOneCheckbox";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import MobileAPI from "./compositionAPI/MobileAPI";

import {
  forEach,
  get,
  isFunction,
} from "lodash-es";

export default {
  name: "ATableTr",
  props: {
    allVisibleMobileColumns: {
      type: Array,
      required: true,
    },
    areAllRowsSelected: {
      type: Boolean,
      required: true,
    },
    countVisibleMobileColumns: {
      type: Number,
      required: true,
    },
    row: {
      type: Object,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    selectedRowsIndexes: {
      type: Object,
      required: true,
    },
    isRowActionsStickyLocal: {
      type: Boolean,
      required: true,
    },
    isFooter: {
      type: Boolean,
      required: false,
    },
    rowActionsClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
  },
  emits: [
    "setSelectedRowsIndexes",
  ],
  setup(props) {
    const row = toRef(props, "row");
    const rowIndex = toRef(props, "rowIndex");
    const areAllRowsSelected = toRef(props, "areAllRowsSelected");
    const currentMultipleActions = inject("currentMultipleActions");
    const isMultipleActionsActive = inject("isMultipleActionsActive");

    const isCheckboxDisabled = computed(() => {
      if (isMultipleActionsActive.value) {
        if (isFunction(get(currentMultipleActions.value, "isHiddenCallback"))) {
          return currentMultipleActions.value.isHiddenCallback({
            row: row.value,
            rowIndex: rowIndex.value,
          });
        }
        if (areAllRowsSelected.value) {
          return true;
        }
      }
      return false;
    });

    const {
      rowAttributes,
    } = AttributesAPI(props);

    const {
      isAllColumnsVisibleMobile,
      isBtnToggleAllColumnsVisible,
      textBtnToggleAllColumns,
      toggleAllColumnsVisibleMobile,
    } = MobileAPI(props);

    return {
      isAllColumnsVisibleMobile,
      isBtnToggleAllColumnsVisible,
      isCheckboxDisabled,
      isMultipleActionsActive,
      rowAttributes,
      textBtnToggleAllColumns,
      toggleAllColumnsVisibleMobile,
    };
  },
  inject: [
    "columnsOrdered",
    "isActionColumnVisible",
    "isMobile",
  ],
  computed: {
    isRowSelected() {
      return !!this.selectedRowsIndexes[this.rowIndex] || this.areAllRowsSelected;
    },
  },
  methods: {
    toggleCheckbox() {
      this.$emit("setSelectedRowsIndexes", { rowIndex: this.rowIndex });
    },
  },
  render() {
    let tds = [];
    if (this.isMobile && !this.isAllColumnsVisibleMobile) {
      forEach(this.allVisibleMobileColumns, (column, columnIndex) => {
        if (columnIndex + 1 > this.countVisibleMobileColumns) {
          return false;
        }
        tds.push(
          h(ATableTd, {
            column,
            columnIndex,
            row: this.row,
            rowIndex: this.rowIndex,
            isFooter: this.isFooter,
          }, this.$slots)
        );
      });
    } else {
      tds = this.columnsOrdered.map((column, columnIndex) => {
        return h(ATableTd, {
          column,
          columnIndex,
          row: this.row,
          rowIndex: this.rowIndex,
          isFooter: this.isFooter,
        }, this.$slots);
      });
    }

    const ACTIONS = this.isActionColumnVisible &&
      h(ATableTdAction, {
        row: this.row,
        rowIndex: this.rowIndex,
        isFooter: this.isFooter,
        rowActionsClass: this.rowActionsClass,
        isRowActionsStickyLocal: this.isRowActionsStickyLocal,
      }, this.$slots);

    const CHILDREN = this.isMobile ?
      h("dl", {
        class: "a_table_mobile__dl",
      }, tds) :
      tds;

    return h("div", this.rowAttributes, [
      this.isMultipleActionsActive && h("div", {
        scope: "row",
        class: "a_table__td a_table__cell a_table__cell_checkbox",
        style: `width: 50px; min-width: 50px; max-width: 50px;`,
      }, [
        !this.isFooter && h(AOneCheckbox, {
          isWidthAuto: true,
          modelValue: this.isRowSelected,
          disabled: this.isCheckboxDisabled,
          "onUpdate:modelValue": this.toggleCheckbox,
        }),
      ]),
      CHILDREN,
      this.isMobile ?
        h("div", {
          class: "a_table_mobile__actions_parent",
        }, [
          this.isBtnToggleAllColumnsVisible && h("button", {
            class: "a_btn a_btn_link a_table_mobile__columns_btn_toggle",
            onClick: this.toggleAllColumnsVisibleMobile,
          }, this.textBtnToggleAllColumns),
          ACTIONS,
        ]) :
        ACTIONS,
    ]);
  },
};
