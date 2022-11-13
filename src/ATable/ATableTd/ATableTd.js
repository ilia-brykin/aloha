import {
  h,
  resolveComponent,
} from "vue";

import ATranslation from "../../ATranslation/ATranslation";

import AttributesAPI from "./compositionAPI/AttributesAPI";

import {
  cloneDeep,
  forEach,
  get,
  isPlainObject,
  isString,
  isUndefined,
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
    isFooter: {
      type: Boolean,
      required: false,
    },
  },
  inject: [
    "columnsDefaultValue",
    "hasPreview",
    "isMobile",
    "onTogglePreview",
    "rowsLocal",
    "valuesForColumnDefault",
  ],
  setup(props) {
    const {
      attributesForTd,
    } = AttributesAPI(props);

    return {
      attributesForTd,
    };
  },
  computed: {
    text() {
      let text;
      if (this.isFooter) {
        text = get(this.row, this.column.footerPath);
      } else {
        text = get(this.row, this.column.path);
      }

      let isTextInValuesForColumnDefault = false;
      forEach(this.valuesForColumnDefault, item => {
        if (text === item) {
          isTextInValuesForColumnDefault = true;
          return false;
        }
      });
      if (isTextInValuesForColumnDefault) {
        return this.defaultValue;
      }
      return text;
    },

    defaultValue() {
      if (this.isFooter && "footerDefaultValue" in this.column) {
        return this.column.footerDefaultValue;
      }
      if ("defaultValue" in this.column) {
        return this.column.defaultValue;
      }
      if (!isUndefined(this.columnsDefaultValue)) {
        return this.columnsDefaultValue;
      }
      return "";
    },

    path() {
      if (this.isFooter) {
        return this.column.footerPath;
      }
      return this.column.path;
    },

    isSlot() {
      return !!this.slot;
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
          let hasParamsDynamicError = false;
          forEach(this.column.to.paramsDynamic, (value, key) => {
            const PARAMS_VALUE = get(this.row, value);
            if (isUndefined(PARAMS_VALUE)) {
              hasParamsDynamicError = true;
              return false;
            }
            PARAMS[key] = PARAMS_VALUE;
          });
          if (hasParamsDynamicError) {
            return undefined;
          }
        }
        TO.params = PARAMS;
        return TO;
      }
      return undefined;
    },

    classForLink() {
      return "a_btn a_btn_link a_p_0 a_text_left";
    },

    slot() {
      if (this.isFooter) {
        return this.column.footerSlot;
      }
      return this.column.slot;
    },
  },
  render() {
    if (this.column.isRender === false) {
      return "";
    }
    const TD = h(
      "div",
      this.attributesForTd,
      [
        h("div", {
          class: [
            "a_table__cell__child",
            this.column.class,
          ],
        }, (this.isSlot && this.$slots[this.slot]) ?
          this.$slots[this.slot]({
            column: this.column,
            columnIndex: this.columnIndex,
            row: this.row,
            rowIndex: this.rowIndex,
            rows: this.rowsLocal,
          }) :
          (this.isLink && this.toLocal) ?
            [
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
            ])
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
