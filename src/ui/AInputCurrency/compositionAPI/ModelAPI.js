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
  const decimalDivider = toRef(props, "decimalDivider");
  const disabled = toRef(props, "disabled");
  const symbolsAfterDecimalDivider = toRef(props, "symbolsAfterDecimalDivider");
  const thousandDivider = toRef(props, "thousandDivider");

  const displayValue = ref(modelValue.value);

  const modelNumber = computed(() => {
    return Number(`${ displayValue.value }`.replaceAll(thousandDivider.value, "").replace(decimalDivider.value, "."));
  });

  const setCurrentValue = (
    value,
    emitChange = true
  ) => {
    displayValue.value = value;
    const newVal = modelType.value === "number"
      ? Number(`${ value }`.replaceAll(thousandDivider.value, "").replace(decimalDivider.value, "."))
      : value;
    if (!emitChange) {
      changeModel({ model: newVal });
      return;
    }
    changeModel({ model: newVal });
  };

  const modelUndefined = computed(() => {
    return required.value
      ? [
        "0",
        decimalDivider.value,
        times(symbolsAfterDecimalDivider.value, () => "0").join(""),
      ].join("")
      : "";
  });
  const clearModel = () => {
    if (disabled.value) {
      return;
    }
    setCurrentValue(modelUndefined.value);
  };

  return {
    clearModel,
    displayValue,
    modelNumber,
    modelValue,
    setCurrentValue,
  };
}
