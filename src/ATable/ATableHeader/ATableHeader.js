import {
  h,
} from "vue";

import ATableHeaderTh from "../ATableHeaderTh/ATableHeaderTh";
import ATableHeaderThAction from "../ATableHeaderThAction/ATableHeaderThAction";

import DragAndDropParentAPI from "../compositionAPI/DragAndDropParentAPI";

export default {
  name: "ATableHeader",
  components: {
    ATableHeaderTh,
    ATableHeaderThAction,
  },
  props: {
    modelSort: {
      type: String,
      required: false,
    },
  },
  inject: [
    "changeColumnsOrdering",
    "columnsOrdered",
  ],
  setup() {
    const {
      dragstart,
      dragenter,
      dragleave,
      dragend,
      drop,
      isDragstart,
      root,
    } = DragAndDropParentAPI({
      classOver: "a_table__th_over",
      classOverParent: "a_table__th"
    });

    return {
      dragstart,
      dragenter,
      dragleave,
      dragend,
      drop,
      isDragstart,
      root,
    };
  },
  render() {
    return h("div", {
      ref: "root",
      class: ["a_table__head", {
        a_table__head_dragstart: this.isDragstart,
      }],
    }, [
      h("div", {
        class: "a_table__row",
        onDrop: this.drop,
      }, [
        this.columnsOrdered.map((column, columnIndex) => {
          return h(ATableHeaderTh, {
            ref: "th",
            column: column,
            columnIndex: columnIndex,
            "model-sort": this.modelSort,
            onDragstartParent: this.dragstart,
            onDragenterParent: this.dragenter,
            onDragleaveParent: this.dragleave,
            onDragendParent: this.dragend,
          });
        }),
        h(ATableHeaderThAction),
      ]),
    ]);
  },
};
