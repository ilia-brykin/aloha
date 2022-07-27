import ATableHeaderTh from "../ATableHeaderTh/ATableHeaderTh";
import ATableHeaderThAction from "../ATableHeaderThAction/ATableHeaderThAction";

import {
  h,
} from "vue";
import { isNil } from "lodash-es";

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
  data() {
    return {
      columnIndexDraggable: undefined,
      columnIndexOver: undefined,
    };
  },
  computed: {
    isDragstart() {
      return !isNil(this.columnIndexDraggable);
    },
  },
  methods: {
    dragstart({ columnIndex }) {
      this.columnIndexDraggable = columnIndex;
    },

    dragenter({ columnIndex }) {
      this.columnIndexOver = columnIndex;
    },

    dragleave({ columnIndex }) {
      if (this.columnIndexOver === columnIndex) {
        this.columnIndexOver = undefined;
      }
    },

    drop($event) {
      if (isNil(this.columnIndexDraggable) || isNil(this.columnIndexOver)) {
        return;
      }
      this.changeColumnsOrdering({
        columnIndexDraggable: this.columnIndexDraggable,
        columnIndexOver: this.columnIndexOver,
      });
      $event.stopPropagation();
      return false;
    },

    dragend() {
      this.removeClassOverFromChildren();
      this.columnIndexDraggable = undefined;
    },

    removeClassOverFromChildren() {
      const CHILDREN = this.$el.querySelectorAll(".a_table__th");
      CHILDREN.forEach(child => {
        child.classList.remove("a_table__th_over");
      });
    },
  },
  render() {
    return h("div", {
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
