import {
  h,
  resolveComponent,
} from "vue";

import AElement from "../../AElement/AElement";
import ATranslation from "../../ATranslation/ATranslation";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import LinkAPI from "./compositionAPI/LinkAPI";
import SlotAPI from "./compositionAPI/SlotAPI";
import TextAPI from "./compositionAPI/TextAPI";

export default {
  name: "ATableTd",
  props: {
    column: {
      type: Object,
      required: true,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
    disabledPreview: {
      type: Boolean,
      required: false,
    },
    isFooter: {
      type: Boolean,
      required: false,
    },
    row: {
      type: Object,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    showIconChildren: {
      type: Boolean,
      required: false,
    },
  },
  inject: [
    "isMobile",
    "rowsLocalAll",
  ],
  setup(props) {
    const {
      attributesForTd,
    } = AttributesAPI(props);

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
      attributesForTd,
      classForLink,
      hasSlot,
      isLink,
      slotName,
      textOrHtmlRender,
      toLocal,
    };
  },
  render() {
    const TD = h(
      "div",
      this.attributesForTd,
      [
        h("div", {
          class: [
            "a_table__cell__child",
            this.column.class,
            this.column.classRow,
          ],
        }, [
          this.showIconChildren ? h(AElement, {
            "aria-hidden": true,
            class: "a_table__row_level__icon",
            classDefault: "",
            iconLeft: "CaretRightFill",
            type: "text",
          }) : "",
          (this.hasSlot && this.$slots[this.slotName]) ?
            this.$slots[this.slotName]({
              column: this.column,
              columnIndex: this.columnIndex,
              row: this.row,
              rowIndex: this.rowIndex,
              rows: this.rowsLocalAll,
            }) :
            (this.isLink && this.toLocal) ?
              h(resolveComponent("RouterLink"), {
                class: [
                  this.column.class,
                  this.classForLink,
                  this.column.classRow,
                ],
                to: this.toLocal,
              }, () => [
                this.textOrHtmlRender,
              ]) :
              this.textOrHtmlRender,
        ]),
      ]
    );

    if (!this.isMobile) {
      return TD;
    }
    return [
      h(ATranslation, {
        text: this.column.label,
        tag: "dt",
      }),
      h("dd", {}, [
        TD,
      ]),
    ];
  },
};
