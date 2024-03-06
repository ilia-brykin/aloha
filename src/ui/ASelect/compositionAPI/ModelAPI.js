import {
  computed,
  toRef,
} from "vue";

import {
  isArray,
  isNil,
} from "lodash-es";

export default function ModelAPI(props) {
  const countMultiselect = toRef(props, "countMultiselect");
  const modelValue = toRef(props, "modelValue");
  const type = toRef(props, "type");

  const isMultiselect = computed(() => {
    return type.value === "multiselect";
  });

  const isModelValue = computed(() => {
    if (isMultiselect.value) {
      return !!(modelValue.value && modelValue.value.length && isArray(modelValue.value));
    }
    return !isNil(modelValue.value);
  });

  const modelValueLength = computed(() => {
    return modelValue.value ?
      modelValue.value.length :
      0;
  });

  const isModelLengthLimitExceeded = computed(() => {
    return modelValueLength.value > countMultiselect.value;
  });

  return {
    isModelLengthLimitExceeded,
    isModelValue,
    isMultiselect,
    modelValueLength,
  };
}
