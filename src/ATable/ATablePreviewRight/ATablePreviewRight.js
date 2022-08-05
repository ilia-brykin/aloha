import {
  h,
  ref,
} from "vue";

import AIcon from "../../AIcon/AIcon";
import AResizer from "../../AResizer/AResizer";

export default {
  name: "ATablePreviewRight",
  props: {
    rows: {
      type: Array,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    previewHeaderTag: {
      type: String,
      required: true,
    },
  },
  emits: [
    "closePreview",
    "mousedownResizePreviewRight",
    "mousemoveResizePreviewRight",
    "mouseupResizePreviewRight",
    "togglePreviewResize",
  ],
  setup(props, { emit }) {
    const previewRef = ref(undefined);
    const mousedown = ({ clientWidth }) => {
      emit("mousedownResizePreviewRight", {
        clientWidth,
      });
    };

    const mousemove = ({ clientX }) => {
      emit("mousemoveResizePreviewRight", {
        clientX,
        previewRef: previewRef.value,
      });
    };

    const mouseup = () => {
      emit("mouseupResizePreviewRight", {
        previewRightWidth: previewRef.value.offsetWidth,
      });
    };

    return {
      mousedown,
      mousemove,
      mouseup,
      previewRef,
    };
  },
  computed: {
    currentRow() {
      return this.rows[this.rowIndex];
    },
  },
  mounted() {
    this.$emit("togglePreviewResize", {
      isOpen: true,
      previewRef: this.previewRef,
    });
  },
  beforeUnmount() {
    this.$emit("togglePreviewResize", {
      isOpen: false,
      previewRef: this.previewRef,
    });
  },
  methods: {
    onClosePreview() {
      this.$emit("closePreview");
    },
  },
  render() {
    return h("div", {
      ref: "previewRef",
      class: "a_table__preview_right",
    }, [
      h(AResizer, {
        class: "a_table__preview_right__resizer",
        direction: "x",
        onMousedown: this.mousedown,
        onMousemove: this.mousemove,
        onMouseup: this.mouseup,
        onMouseoutDocument: this.mouseup,
      }),
      h(this.previewHeaderTag, {
        class: "a_table__preview_right__header",
      }, [
        this.$slots.tableDetailsLabel ?
          this.$slots.tableDetailsLabel({
            row: this.currentRow,
            rowIndex: this.rowIndex,
          }) :
          h("span", null, "Benutzen sie bitte slot: 'tableDetailsLabel'"),
        h("button", {
          class: "a_btn a_btn_link a_table__preview_right__btn_close",
          type: "button",
          onClick: this.onClosePreview,
        }, [
          h(AIcon, {
            icon: "Close",
            class: "a_table__preview_right__btn_close__icon",
          }),
        ]),
      ]),
      h("div", {
        class: "a_table__preview_right__body",
      }, [
        this.$slots.tableDetailsBody ?
          this.$slots.tableDetailsBody({
            row: this.currentRow,
            rowIndex: this.rowIndex,
          }) :
          h("span", null, "Benutzen sie bitte slot: 'tableDetailsBody'"),
      ]),
    ]);
  },
};
