import {
  computed,
  toRef,
} from "vue";

import {
  isNil,
} from "lodash-es";

export default function ReadonlyAPI(props) {
  const mask = toRef(props, "mask");
  const modelValue = toRef(props, "modelValue");
  const readonlyMaskSymbol = toRef(props, "readonlyMaskSymbol");

  const modelValueReadonly = computed(() => {
    if (isNil(modelValue.value) || modelValue.value === "") {
      return modelValue.value;
    }
    if (mask.value) {
      return readonlyMaskSymbol.value.repeat(`${ modelValue.value }`.length);
    }
    return modelValue.value;
  });

  return {
    modelValueReadonly,
  };
}
