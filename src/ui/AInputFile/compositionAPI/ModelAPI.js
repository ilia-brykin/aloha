import {
  computed,
  toRef,
} from "vue";

import {
  isArray,
  isPlainObject,
  size,
} from "lodash-es";

export default function ModelAPI(props) {
  const isMultiple = toRef(props, "isMultiple");
  const modelValue = toRef(props, "modelValue");

  const isModel = computed(() => {
    if (isMultiple.value) {
      return !!(isArray(modelValue.value) && modelValue.value.length > 0);
    }
    return !!(isPlainObject(modelValue.value) && size(modelValue.value) > 0);
  });

  const modelValueListLocal = computed(() => {
    if (!isModel.value) {
      return [];
    }
    if (isMultiple.value) {
      return modelValue.value;
    }
    return [modelValue.value];
  });

  return {
    isModel,
    modelValueListLocal,
  };
}
