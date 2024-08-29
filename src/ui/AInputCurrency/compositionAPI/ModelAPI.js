import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  isNil,
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
  const decimalPartLength = toRef(props, "decimalPartLength");
  const thousandDivider = toRef(props, "thousandDivider");

  const displayValue = ref(modelValue.value);
  const isInternalChange = ref(false);
  const localModel = ref(modelValue.value);

  const modelNumber = computed(() => {
    return Number(`${ displayValue.value }`.replaceAll(thousandDivider.value, "").replace(decimalDivider.value, "."));
  });

  const modelUndefinedLocal = computed(() => {
    return required.value
      ? [
        "0",
        decimalDivider.value,
        times(decimalPartLength.value, () => "0").join(""),
      ].join("")
      : modelUndefined.value;
  });

  const setCurrentValue = (value, updateOutside = false) => {
    displayValue.value = isNil(value) ? "" : value;
    let newVal = value;
    if (!required.value && isNil(value)) {
      newVal = modelUndefinedLocal.value;
    } else {
      newVal = modelType.value === "number"
        ? Number(`${ value }`.replaceAll(thousandDivider.value, "").replace(decimalDivider.value, "."))
        : value;
    }
    if (!updateOutside) {
      isInternalChange.value = true;
      localModel.value = newVal;
      changeModel({ model: newVal });
    }
  };

  const clearModel = () => {
    if (disabled.value) {
      return;
    }
    setCurrentValue(modelUndefinedLocal.value);
  };

  return {
    clearModel,
    displayValue,
    isInternalChange,
    localModel,
    modelNumber,
    modelUndefinedLocal,
    setCurrentValue,
  };
}
