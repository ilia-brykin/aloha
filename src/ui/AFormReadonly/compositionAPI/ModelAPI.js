import {
  computed,
  toRef,
} from "vue";

import {
  isNil,
} from "lodash-es";

export default function ModelAPI(props) {
  const modelValue = toRef(props, "modelValue");
  const readonlyDefault = toRef(props, "readonlyDefault");

  const modelValueReadonly = computed(() => {
    if (isNil(modelValue.value) || modelValue.value === "") {
      return readonlyDefault.value;
    }

    return modelValue.value;
  });

  return {
    modelValueReadonly,
  };
}
