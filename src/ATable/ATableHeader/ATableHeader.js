import {
  h,
} from "vue";

import AOneCheckbox from "../../ui/AOneCheckbox/AOneCheckbox";
import ATableHeaderTh from "../ATableHeaderTh/ATableHeaderTh";
import ATableHeaderThAction from "../ATableHeaderThAction/ATableHeaderThAction";

import CheckboxAPI from "./compositionAPI/CheckboxAPI";
import DragAndDropParentAPI from "../compositionAPI/DragAndDropParentAPI";

export default {
  name: "ATableHeader",
  components: {
    ATableHeaderTh,
    ATableHeaderThAction,
  },
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
      columnIndexDraggable,
      dragstart,
      dragenter,
      dragleave,
      dragend,
      drop,
      isDragstart,
      root,
    } = DragAndDropParentAPI({
      classOver: "a_table__th_over",
      classOverRight: "a_table__th_over_right",
      classOverParent: "a_table__th",
      inHeader: true,
    });

    const {
      isCheckboxDisabled,
      isCheckboxIndeterminate,
      labelCheckbox,
      modelValueCheckboxLocal,
      toggleCheckbox,
    } = CheckboxAPI(props, context);

    return {
      columnIndexDraggable,
      dragend,
      dragenter,
      dragleave,
      dragstart,
      drop,
      isCheckboxDisabled,
      isCheckboxIndeterminate,
      isDragstart,
      labelCheckbox,
      modelValueCheckboxLocal,
      root,
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
      class: ["a_table__head", {
        a_table__head_dragstart: this.isDragstart,
      }],
    }, [
      h("div", {
        class: "a_table__row a_table__head__row",
        role: "row",
        onDrop: this.drop,
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
        this.columnsFilteredForRender.map((column, columnIndex) => {
          return h(ATableHeaderTh, {
            ref: "th",
            column: column,
            columnIndex: columnIndex,
            columnIndexDraggable: this.columnIndexDraggable,
            disabledSort: this.disabledSort,
            hasMultipleActions: this.hasMultipleActions,
            isSortingMultiColumn: this.isSortingMultiColumn,
            modelSort: this.modelSort,
            showFirstSortingSequenceNumber: this.showFirstSortingSequenceNumber,
            sortingSequenceNumberClass: this.sortingSequenceNumberClass,
            onDragstartParent: this.dragstart,
            onDragenterParent: this.dragenter,
            onDragleaveParent: this.dragleave,
            onDragendParent: this.dragend,
          });
        }),
        this.isActionColumnVisible && h(ATableHeaderThAction, {
          disabledOptions: this.disabledOptions,
          isRowActionsStickyLocal: this.isRowActionsStickyLocal,
        }),
      ]),
    ]);
  },
};
