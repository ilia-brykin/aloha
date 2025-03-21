import {
  computed,
  toRef,
} from "vue";

import {
  isNil,
} from "lodash-es";

export default function ReadonlyAPI(props, {
  htmlIdLocal = computed(() => ""),
}) {
  const modelValue = toRef(props, "modelValue");
  const readonlyDefault = toRef(props, "readonlyDefault");
  const readonlyPasswordLength = toRef(props, "readonlyPasswordLength");
  const readonlyPasswordSymbol = toRef(props, "readonlyPasswordSymbol");
  const showPassword = toRef(props, "showPassword");
  const type = toRef(props, "type");

  const modelValueReadonly = computed(() => {
    if (type.value === "password") {
      if (showPassword.value) {
        return modelValue.value;
      }
      return readonlyPasswordSymbol.value.repeat(readonlyPasswordLength.value);
    }
    if (isNil(modelValue.value) || modelValue.value === "") {
      return readonlyDefault.value;
    }

    return modelValue.value;
  });

  const labelIdReadonly = computed(() => {
    return `${ htmlIdLocal.value }_label`;
  });

  return {
    labelIdReadonly,
    modelValueReadonly,
  };
}
