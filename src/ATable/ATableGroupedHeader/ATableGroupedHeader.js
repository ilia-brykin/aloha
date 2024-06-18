import {
  h,
} from "vue";

import AOneCheckbox from "../../ui/AOneCheckbox/AOneCheckbox";
import ATableHeaderThAction from "../ATableHeaderThAction/ATableHeaderThAction";

import CheckboxAPI from "../ATableHeader/compositionAPI/CheckboxAPI";

export default {
  name: "ATableGroupedHeader",
  props: {
    areAllRowsSelected: {
      type: Boolean,
      required: true,
    },
    areAllVisibleRowsSelected: {
      type: Boolean,
      required: true,
    },
    areSomeRowsSelected: {
      type: Boolean,
      required: true,
    },
    columnsForRender: {
      type: Array,
      required: true,
    },
    disabledOptions: {
      type: Boolean,
      required: false,
    },
    disabledSort: {
      type: Boolean,
      required: false,
    },
    hasMultipleActions: {
      type: Boolean,
      required: true,
    },
    isRowActionsStickyLocal: {
      type: Boolean,
      required: true,
    },
    isSortingMultiColumn: {
      type: Boolean,
      required: false,
    },
    modelSort: {
      type: Array,
      required: true,
    },
    rowsLocalLength: {
      type: Number,
      required: true,
    },
    showFirstSortingSequenceNumber: {
      type: Boolean,
      required: false,
    },
    sortingSequenceNumberClass: {
      type: [String, Object],
      required: false,
    },
  },
  emits: [
    "setSelectedRowsIndexes",
  ],
  inject: [
    "changeColumnsOrdering",
    "columnsFilteredForRender",
    "isActionColumnVisible",
    "isMobile",
    "isMultipleActionsActive",
  ],
  setup(props, context) {
    const {
      isCheckboxDisabled,
      isCheckboxIndeterminate,
      labelCheckbox,
      modelValueCheckboxLocal,
      toggleCheckbox,
    } = CheckboxAPI(props, context);

    return {
      isCheckboxDisabled,
      isCheckboxIndeterminate,
      labelCheckbox,
      modelValueCheckboxLocal,
      toggleCheckbox,
    };
  },
  render() {
    if (this.isMobile) {
      return null;
    }

    return h("div", {
      ref: "root",
      role: "rowgroup",
      class: "a_table__head",
    }, [
      h("div", {
        class: "a_table__row a_table__head__row",
        role: "row",
      }, [
        this.isMultipleActionsActive && h("div", {
          role: "columnheader",
          class: "a_table__th a_table__cell a_table__cell_checkbox",
          style: `width: 50px; min-width: 50px; max-width: 50px;`,
          "aria-colindex": 1,
        }, [
          h(AOneCheckbox, {
            isWidthAuto: true,
            modelValue: this.modelValueCheckboxLocal,
            indeterminate: this.isCheckboxIndeterminate,
            disabled: this.isCheckboxDisabled,
            label: this.labelCheckbox,
            labelClass: "a_sr_only",
            isLabelTitle: true,
            "onUpdate:modelValue": this.toggleCheckbox,
          }),
        ]),
        this.columnsForRender,
        this.isActionColumnVisible && h(ATableHeaderThAction, {
          disabledOptions: this.disabledOptions,
          isRowActionsStickyLocal: this.isRowActionsStickyLocal,
        }),
      ]),
    ]);
  },
};
