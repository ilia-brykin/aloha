import {
  computed,
  toRef,
} from "vue";

import {
  isArray,
} from "lodash-es";

export default function CheckedAPI(props, {
  valueLocal = computed(() => undefined),
}) {
  const modelValue = toRef(props, "modelValue");

  const isChecked = computed(() => {
    if (isArray(modelValue.value)) {
      return modelValue.value.indexOf(valueLocal.value) !== -1;
    }
    return modelValue.value === valueLocal.value;
  });

  return {
    isChecked,
  };
}
