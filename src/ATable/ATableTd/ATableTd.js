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
      return !!this.row.to;
    },

    toLocal() {
      if (isString(this.column.to)) {
        return this.column.to;
      }
      if (isPlainObject(this.column.to)) {
        const TO = cloneDeep(this.column.to);
        const PARAMS = TO.params || {};
        if (this.column.to.paramsDynamic) {
          forEach(this.column.to.paramsDynamic, (key, value) => {
            PARAMS[key] = get(this.row, value);
          });
        }
        TO.params = PARAMS;
        return TO;
      }
      return undefined;
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
          class: ["a_dropdown__item a_table__row_action", this.column.class],
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
