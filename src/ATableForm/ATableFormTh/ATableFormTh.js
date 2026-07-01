import {
  h,
} from "vue";

import ATranslation from "../../ATranslation/ATranslation";

import StylesAPI from "../compositionAPI/StylesAPI";

export default {
  name: "ATableFormTh",
  props: {
    column: {
      type: Object,
      required: true,
    },
    columnStyle: {
      type: Object,
      required: false,
      default: undefined,
    },
    isEditable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const {
      columnStyles,
    } = StylesAPI({
      column: props.column,
    });

    return {
      columnStyles,
    };
  },
  render() {
    const slotHeader = this.column.slotHeader;
    const slotProps = {
      column: this.column,
      isEditable: this.isEditable,
    };

    return h("th", {
      class: [
        "a_table_form__cell",
        "a_table_form__cell_th",
        this.column.class,
      ],
      style: [
        this.columnStyles,
        this.columnStyle,
      ],
    }, [
      (this.column.slotHeader && this.$slots[this.column.slotHeader]) ?
        this.$slots[this.column.slotHeader]({
          column: this.column,
          isEditable: this.isEditable,
        }) :
        this.column.label && h(ATranslation, {
          html: this.column.label,
          tag: "span",
        }),
      this.isEditable && this.column.formElement?.required && h("span", {
        class: "a_label__required",
      }, "*"),
    ]);
  },
};
