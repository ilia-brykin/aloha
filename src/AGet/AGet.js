import {
  h,
  withDirectives,
} from "vue";

import AFiltersAPI from "../compositionAPI/AFiltersAPI";

import ASafeHtml from "../directives/ASafeHtml";

import {
  capitalize,
  forEach,
  get,
  isArray,
  isFunction,
  isNil,
  isUndefined,
} from "lodash-es";


// @vue/component
export default {
  name: "AGet",
  props: {
    keyLabel: {
      type: [String, Array],
      required: true,
      info: "Weg zu Informationen. Z.B.('a[0].b.c', 'vertrag.antrag_obj.pk', ['vertrag', aloha, 'pk'])",
    },
    data: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      required: false,
      default: undefined,
      info: "Haupt-Objekt oder -Array, wo man sucht",
    },
    tag: {
      type: String,
      required: false,
      default: "span",
      info: "Semantisch-relevanter HTML-Tag.(span, div, ...)",
    },
    defaultValue: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      required: false,
      default: undefined,
      info: "Standardwert, wenn Lodash-Funktion 'get' undefined zurückschickt",
    },
    filter: {
      type: String,
      required: false,
      default: undefined,
    },
    filterParameters: {
      type: [Object, String, Number],
      required: false,
      default: () => {},
    },
    replacedWithDefault: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      required: false,
      default: undefined,
      info: "Wenn das Wert, das Lodash-Funktion 'get' zurückschickt, === this.replacedWithDefault, dann this.defaultValue",
    },
  },
  setup() {
    const filters = AFiltersAPI();

    return filters;
  },
  computed: {
    valueLocal() {
      let value = get(this.data, this.keyLabelLocal);
      if (isNil(value)) {
        value = this.defaultValue;
      }
      if (this.isValueEqualsWithValueThenDefaultValue(value)) {
        return this.defaultValue;
      }
      if (this.filter) {
        const FILTER_FUNCTION_NAME = `filter${ capitalize(this.filter) }`;
        if (isFunction(this[FILTER_FUNCTION_NAME])) {
          return this[FILTER_FUNCTION_NAME](value, this.filterParameters);
        }
        console.warn(`filter "${ FILTER_FUNCTION_NAME }" ist not defined`);
      }
      return value;
    },

    keyLabelLocal() {
      if (isArray(this.keyLabel)) {
        return this.keyLabel.join(".");
      }
      return this.keyLabel;
    },
  },
  methods: {
    isValueEqualsWithValueThenDefaultValue(value) {
      if (isUndefined(this.replacedWithDefault)) {
        return false;
      }
      let isEquals = false;
      if (isArray(this.replacedWithDefault)) {
        forEach(this.replacedWithDefault, item => {
          if (item === value) {
            isEquals = true;
            return false;
          }
        });
      } else if (this.replacedWithDefault === value) {
        isEquals = true;
      }
      return isEquals;
    },
  },
  render() {
    return withDirectives(h(this.tag), [
      [ASafeHtml, this.valueLocal],
    ]);
  },
};
