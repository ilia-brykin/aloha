import {
  h, resolveComponent,
} from "vue";

import ATranslation from "../../ATranslation/ATranslation";

import TextAPI from "../ATableTd/compositionAPI/TextAPI";
import SlotAPI from "../ATableTd/compositionAPI/SlotAPI";
import LinkAPI from "../ATableTd/compositionAPI/LinkAPI";

export default {
  name: "ATableListItem",
  inject: [
    "rowsLocalAll",
  ],
  props: {
    column: {
      type: Object,
      required: true,
    },
    columnIndex: {
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
    isFooter: {
      type: Boolean,
      required: false,
    },
  },
  setup(props) {
    const {
      classForLink,
      isLink,
      toLocal,
    } = LinkAPI(props);

    const {
      hasSlot,
      slotName,
    } = SlotAPI(props);

    const {
      textOrHtmlRender,
    } = TextAPI(props);

    return {
      classForLink,
      hasSlot,
      isLink,
      slotName,
      textOrHtmlRender,
      toLocal,
    };
  },
  render() {
    return [
      h(ATranslation, {
        text: this.column.label,
        tag: "dt",
      }),
      h(
        "dd", 
        null,
        (this.hasSlot && this.$slots[this.slotName]) ?
        this.$slots[this.slotName]({
          column: this.column,
          columnIndex: this.columnIndex,
          row: this.row,
          rowIndex: this.rowIndex,
          rows: this.rowsLocalAll,
        }) :
        (this.isLink && this.toLocal) ?
          [
            h(resolveComponent("RouterLink"), {
              class: [
                this.column.class,
                this.classForLink,
                this.column.classRow,
              ],
              to: this.toLocal,
            }, () => [
              this.textOrHtmlRender,
            ]),
          ] :
          [
            this.textOrHtmlRender,
          ]
      )
    ];
  },
};
