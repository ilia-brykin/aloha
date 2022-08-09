import {
  capitalize,
  h,
} from "vue";

import FiltersAPI from "../compositionAPI/FiltersAPI";

import {
  forEach,
  get,
  isArray, isFunction,
  isUndefined,
} from "lodash-es";

// @vue/component
export default {
  name: "AGet",
  props: {
    path: {
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
      type: Array,
      required: false,
      default: () => [],
    },
    replacedWithDefault: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      required: false,
      default: undefined,
      info: "Wenn das Wert, das Lodash-Funktion 'get' zurückschickt, === this.replacedWithDefault, dann this.defaultValue",
    },
  },
  setup() {
    const {
      filterBoolean,
      filterCurrency,
      filterDate,
      filterDefaultForEmpty,
      filterEmail,
      filterFileSize,
      filterIban,
      filterJson,
      filterKeyValue,
      filterLimitTo,
      filterLink,
      filterList,
      filterSearchHighlight,
    } = FiltersAPI();

    return {
      filterBoolean,
      filterCurrency,
      filterDate,
      filterDefaultForEmpty,
      filterEmail,
      filterFileSize,
      filterIban,
      filterJson,
      filterKeyValue,
      filterLimitTo,
      filterLink,
      filterList,
      filterSearchHighlight,
    };
  },
  computed: {
    valueLocal() {
      const VALUE = get(this.data, this.pathLocal, this.defaultValue);
      if (this.isValueEqualsWithValueThenDefaultValue(VALUE)) {
        return this.defaultValue;
      }
      if (this.filter) {
        const FILTER_FUNCTION_NAME = `filter${ capitalize(this.filter) }`;
        if (isFunction(this[FILTER_FUNCTION_NAME])) {
          return this[FILTER_FUNCTION_NAME](VALUE, ...this.filterParameters);
        } 
        console.warn(`filter "${ FILTER_FUNCTION_NAME }" ist not defined`);
      }
      return VALUE;
    },

    pathLocal() {
      if (isArray(this.path)) {
        return this.path.join(".");
      }
      return this.path;
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
    return h(this.tag, {
      innerHTML: this.valueLocal,
    });
  },
};
