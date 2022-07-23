import ATableHeaderTh from "../ATableHeaderTh/ATableHeaderTh";

import {
  h,
} from "vue";

export default {
  name: "ATableHeader",
  components: {
    ATableHeaderTh,
  },
  props: {
    columns: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
    modelSort: {
      type: String,
      required: false,
    },
    modelColumnsMapping: {
      type: Object,
      required: true,
    },
  },
  emits: [
    "changeColumnsOrdering",
  ],
  data() {
    return {
      columnIndexDraggable: undefined,
      columnIndexOver: undefined,
    };
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
      this.$emit("changeColumnsOrdering", {
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
      class: "a_table__head"
    }, [
      h("div", {
        class: "a_table__row",
        onDrop: this.drop,
      }, [
        this.columns.map((column, columnIndex) => {
          return h(ATableHeaderTh, {
            ref: "th",
            column: column,
            columnIndex: columnIndex,
            "is-loading": this.isLoading,
            "model-sort": this.modelSort,
            "model-columns-mapping": this.modelColumnsMapping,
            "onChange-model-sort": this.$attrs["onChange-model-sort"],
            onDragstartParent: this.dragstart,
            onDragenterParent: this.dragenter,
            onDragleaveParent: this.dragleave,
            onDragendParent: this.dragend,
          });
        }),
      ]),
    ]);
  },
};
