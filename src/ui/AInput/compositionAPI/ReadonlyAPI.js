import {
  computed,
  toRef,
} from "vue";

export default function ReadonlyAPI(props) {
  const modelValue = toRef(props, "modelValue");
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

    return modelValue.value;
  });

  return {
    modelValueReadonly,
  };
}
