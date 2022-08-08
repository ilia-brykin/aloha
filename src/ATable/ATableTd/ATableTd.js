import {
  h,
  resolveComponent,
} from "vue";

import ColumnStylesAPI from "../compositionAPI/ColumnStylesAPI";

import {
  cloneDeep,
  forEach,
  get,
  isPlainObject,
  isString,
} from "lodash-es";


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
    row: {
      type: Object,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
  },
  inject: [
    "hasPreview",
    "modelColumnsVisibleMapping",
    "onTogglePreview",
  ],
  setup(props) {
    const {
      columnsStyles,
    } = ColumnStylesAPI(props);

    return {
      columnsStyles,
    };
  },
  computed: {
    text() {
      return get(this.row, this.column.path);
    },

    path() {
      return this.column.path;
    },

    isSlot() {
      return !!this.column.slot;
    },

    attributesForTd() {
      const ATTRIBUTES = {
        role: "cell",
        class: ["a_table__td a_table__cell", {
          a_table__cell_click: this.hasPreview,
        }],
        style: this.columnsStyles,
      };
      if (this.hasPreview) {
        ATTRIBUTES.onClick = () => this.onTogglePreview({
          row: this.row,
          rowIndex: this.rowIndex,
        });
      }
      return ATTRIBUTES;
    },

    isLink() {
      return !!this.column.to;
    },

    toLocal() {
      if (isString(this.column.to)) {
        return this.column.to;
      }
      if (isPlainObject(this.column.to)) {
        const TO = cloneDeep(this.column.to);
        const PARAMS = TO.params || {};
        if (this.column.to.paramsDynamic) {
          forEach(this.column.to.paramsDynamic, (value, key) => {
            PARAMS[key] = get(this.row, value);
          });
        }
        TO.params = PARAMS;
        return TO;
      }
      return undefined;
    },

    classForLink() {
      return "a_btn a_btn_link a_p_0";
    },
  },
  render() {
    return h("div", this.attributesForTd, this.isSlot ?
      this.$slots[this.column.slot]({
        column: this.column,
        "column-index": this.columnIndex,
        row: this.row,
        "row-index": this.rowIndex,
      }) : this.isLink ? [
        h(resolveComponent("RouterLink"), {
          class: [this.column.class, this.classForLink],
          to: this.toLocal,
        }, () => [
          h("span", {
            innerHTML: this.text,
          }),
        ]),
      ] :
      [
        h("span", {
          innerHTML: this.text,
        }),
      ]);
  },
};
