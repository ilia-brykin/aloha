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
    isRowActionsStickyLocal: {
      type: Boolean,
      required: true,
    },
    modelSort: {
      type: String,
      required: false,
    },
    rowsLocalLength: {
      type: Number,
      required: true,
    },
  },
  emits: [
    "setSelectedRowsIndexes",
  ],
  inject: [
    "changeColumnsOrdering",
    "columnsOrdered",
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
      classOverParent: "a_table__th"
    });

    const {
      isCheckboxDisabled,
      isCheckboxIndeterminate,
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
      modelValueCheckboxLocal,
      root,
      toggleCheckbox,
    };
  },
  render() {
    if (this.isMobile) {
      return "";
    }
    return h("div", {
      ref: "root",
      role: "rowgroup",
      class: ["a_table__head", {
        a_table__head_dragstart: this.isDragstart,
      }],
    }, [
      h("div", {
        class: "a_table__row",
        role: "row",
        onDrop: this.drop,
      }, [
        this.isMultipleActionsActive && h("div", {
          scope: "col",
          role: "columnheader",
          class: "a_table__th a_table__cell a_table__cell_checkbox",
          style: `width: 50px; min-width: 50px; max-width: 50px;`,
        }, [
          h(AOneCheckbox, {
            isWidthAuto: true,
            modelValue: this.modelValueCheckboxLocal,
            indeterminate: this.isCheckboxIndeterminate,
            disabled: this.isCheckboxDisabled,
            label: "_TABLE_SELECT_ALL_VISIBLE_POSSIBLE_ROWS_",
            labelClass: "a_sr_only",
            isLabelTitle: true,
            "onUpdate:modelValue": this.toggleCheckbox,
          }),
        ]),
        this.columnsOrdered.map((column, columnIndex) => {
          return h(ATableHeaderTh, {
            ref: "th",
            column: column,
            columnIndex: columnIndex,
            columnIndexDraggable: this.columnIndexDraggable,
            "model-sort": this.modelSort,
            onDragstartParent: this.dragstart,
            onDragenterParent: this.dragenter,
            onDragleaveParent: this.dragleave,
            onDragendParent: this.dragend,
          });
        }),
        this.isActionColumnVisible && h(ATableHeaderThAction, {
          isRowActionsStickyLocal: this.isRowActionsStickyLocal,
        }),
      ]),
    ]);
  },
};
