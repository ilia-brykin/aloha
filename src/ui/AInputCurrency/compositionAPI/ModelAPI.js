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
  adjustFloatPartAndDivider = () => {},
  changeModel = () => {},
}) {
  const currencySymbol = toRef(props, "currencySymbol");
  const currencySymbolPosition = toRef(props, "currencySymbolPosition");
  const decimalDivider = toRef(props, "decimalDivider");
  const decimalPartLength = toRef(props, "decimalPartLength");
  const disabled = toRef(props, "disabled");
  const modelType = toRef(props, "modelType");
  const modelUndefined = toRef(props, "modelUndefined");
  const modelValue = toRef(props, "modelValue");
  const required = toRef(props, "required");
  const skipRequiredModelInit = toRef(props, "skipRequiredModelInit");
  const thousandDivider = toRef(props, "thousandDivider");

  const displayValue = ref(undefined);
  const isInternalChange = ref(false);
  const localModel = ref(undefined);

  const displayValueReadonly = computed(() => {
    if (isNil(displayValue.value) || displayValue.value === "" || !currencySymbol.value) {
      return displayValue.value;
    }

    return currencySymbolPosition.value === "left" ?
      `${ currencySymbol.value } ${ displayValue.value }` :
      `${ displayValue.value } ${ currencySymbol.value }`;
  });

  const initLocalVars = () => {
    displayValue.value = adjustFloatPartAndDivider(modelValue.value);
    localModel.value = modelValue.value;
  };

  const modelNumber = computed(() => {
    return Number(`${ displayValue.value }`.replaceAll(thousandDivider.value, "").replace(decimalDivider.value, "."));
  });

  const modelUndefinedLocal = computed(() => {
    if (!required.value || skipRequiredModelInit.value) {
      return modelUndefined.value;
    }
    if (!decimalPartLength.value) {
      return "0";
    }

    return [
      "0",
      decimalDivider.value,
      times(decimalPartLength.value, () => "0").join(""),
    ].join("");
  });

  const setCurrentValue = ({ value, updateOutside = false, trigger, triggerDetails } = {}) => {
    displayValue.value = isNil(value) ? "" : value;
    let newVal;
    if ((!required.value || skipRequiredModelInit.value) && isNil(value)) {
      newVal = modelUndefinedLocal.value;
    } else {
      newVal = modelType.value === "number" ?
        Number(`${ value }`.replaceAll(thousandDivider.value, "").replace(decimalDivider.value, ".")) :
        value;
    }
    if (!updateOutside) {
      isInternalChange.value = true;
      localModel.value = newVal;
      changeModel({ model: newVal, trigger, triggerDetails });
    }
  };

  const clearModel = () => {
    if (disabled.value) {
      return;
    }
    setCurrentValue({ value: modelUndefinedLocal.value, triggerDetails: "clear" });
  };

  return {
    clearModel,
    displayValue,
    displayValueReadonly,
    initLocalVars,
    isInternalChange,
    localModel,
    modelNumber,
    modelUndefinedLocal,
    setCurrentValue,
  };
}
