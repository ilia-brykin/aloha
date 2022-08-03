import {
  computed,
  toRef,
} from "vue";

import {
  isUndefined,
} from "lodash-es";

export default function UiClearButtonAPI(props, {
  isModel = computed(() => true),
} = {}) {
  const options = toRef(props, "options");

  const isClearButton = toRef(props, "isClearButton");
  const isClearButtonLocal = computed(() => {
    const IS_CLEAR_BUTTON_VISIBLE = !isUndefined(options.value.isClearButton) ?
      options.value.isClearButton :
      isClearButton.value;

    return !!(IS_CLEAR_BUTTON_VISIBLE && isModel.value);
  });

  const clearButtonClass = toRef(props, "clearButtonClass");
  const clearButtonClassLocal = computed(() => {
    if (!isUndefined(options.value.clearButtonClass)) {
      return options.value.clearButtonClass;
    }
    return clearButtonClass.value;
  });

  return {
    clearButtonClassLocal,
    isClearButtonLocal,
  };
}
