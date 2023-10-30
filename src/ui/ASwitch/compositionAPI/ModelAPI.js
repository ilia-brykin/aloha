import {
  computed,
  toRef,
} from "vue";

export default function ModelAPI(props) {
  const modelValue = toRef(props, "modelValue");
  const trueValue = toRef(props, "trueValue");
  const falseValue = toRef(props, "falseValue");

  const isModelTrue = computed(() => {
    return modelValue.value === trueValue.value ||
      modelValue.value === "true";
  });

  const isModelFalse = computed(() => {
    return modelValue.value === falseValue.value ||
      modelValue.value === "false";
  });

  const isModelDefault = computed(() => {
    return !isModelTrue.value && !isModelFalse.value;
  });

  return {
    isModelDefault,
    isModelFalse,
    isModelTrue,
  };
}
