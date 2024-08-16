import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  times,
} from "lodash-es";

export default function ModelAPI(props, {
  changeModel = () => {},
}) {
  const required = toRef(props, "required");
  const modelValue = toRef(props, "modelValue");
  const modelType = toRef(props, "modelType");
  const modelUndefined = toRef(props, "modelUndefined");
  const decimalDivider = toRef(props, "decimalDivider");
  const disabled = toRef(props, "disabled");
  const symbolsAfterDecimalDivider = toRef(props, "symbolsAfterDecimalDivider");
  const thousandDivider = toRef(props, "thousandDivider");

  const displayValue = ref(modelValue.value);

  const modelNumber = computed(() => {
    return Number(`${ displayValue.value }`.replaceAll(thousandDivider.value, "").replace(decimalDivider.value, "."));
  });

  const setCurrentValue = value => {
    displayValue.value = value;
    const newVal = modelType.value === "number"
      ? Number(`${ value }`.replaceAll(thousandDivider.value, "").replace(decimalDivider.value, "."))
      : value;
    changeModel({ model: newVal });
  };

  const modelUndefinedLocal = computed(() => {
    return required.value
      ? [
        "0",
        decimalDivider.value,
        times(symbolsAfterDecimalDivider.value, () => "0").join(""),
      ].join("")
      : modelUndefined.value;
  });
  const clearModel = () => {
    if (disabled.value) {
      return;
    }
    setCurrentValue(modelUndefinedLocal.value);
  };

  return {
    clearModel,
    displayValue,
    modelNumber,
    modelUndefinedLocal,
    setCurrentValue,
  };
}
