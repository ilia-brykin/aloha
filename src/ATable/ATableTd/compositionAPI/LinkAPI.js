import {
  computed,
  toRef,
} from "vue";

import {
  cloneDeep,
  forEach,
  get,
  isPlainObject,
  isString,
  isUndefined,
} from "lodash-es";

export default function LinkAPI(props) {
  const column = toRef(props, "column");
  const row = toRef(props, "row");

  const isLink = computed(() => {
    return !!column.value.to;
  });
  
  const toLocal = computed(() => {
    if (isString(column.value.to)) {
      return column.value.to;
    }
    if (isPlainObject(column.value.to)) {
      const TO = cloneDeep(column.value.to);
      const PARAMS = TO.params || {};
      if (column.value.to.paramsDynamic) {
        let hasParamsDynamicError = false;
        forEach(column.value.to.paramsDynamic, (value, key) => {
          const PARAMS_VALUE = get(row.value, value);
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
  });

  const classForLink = computed(() => {
    return "a_btn a_btn_link a_p_0 a_text_left";
  });

  return {
    classForLink,
    isLink,
    toLocal,
  };
}
