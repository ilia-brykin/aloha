import {
  computed,
  toRef,
} from "vue";

export default function ReadonlyAPI(props) {
  const modelValue = toRef(props, "modelValue");
  const trueValue = toRef(props, "trueValue");
  const falseValue = toRef(props, "falseValue");

  const modelValueReadonly = computed(() => {
    if (modelValue.value === trueValue.value) {
      return "_YES_";
    }

    if (modelValue.value === falseValue.value) {
      return "_NO_";
    }

    return modelValue.value;
  });

  return {
    modelValueReadonly,
  };
}
