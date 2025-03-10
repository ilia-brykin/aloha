import {
  computed,
  toRef,
} from "vue";

import {
  times,
} from "lodash-es";

export default function IncreaseDecreaseAPI(props, {
  ensurePrecision = () => {},
  getCleanIntValue = () => {},
  setCurrentValue = () => {},
  modelNumber = computed(() => undefined),
}) {
  const decimalDivider = toRef(props, "decimalDivider");
  const disabled = toRef(props, "disabled");
  const modelValue = toRef(props, "modelValue");
  const max = toRef(props, "max");
  const min = toRef(props, "min");
  const decimalPartLength = toRef(props, "decimalPartLength");
  const step = toRef(props, "step");
  const thousandDivider = toRef(props, "thousandDivider");

  const minDisabled = computed(() => {
    return modelNumber.value <= min.value;
  });

  const maxDisabled = computed(() => {
    return modelNumber.value >= max.value;
  });

  const adjustFloatPartAndDivider = val => {
    if (decimalDivider.value) {
      const splitVal = typeof val === "number"
        ? val.toString().split(".")
        : val.toString().split(decimalDivider.value);
      const intPart = splitVal[0];
      const setMinusSymbol = intPart[0] === "-" ? "-" : "";
      const intPartWithDivider = thousandDivider.value
        ? getCleanIntValue({ value: intPart, thousandDivider: thousandDivider.value })
        : intPart;
      const floatPart = splitVal.length > 1 ? splitVal[1] : "";
      const floatPartLength = floatPart.length;
      const zerosToAdd = times(decimalPartLength.value - floatPartLength, () => "0").join("");

      return `${ setMinusSymbol }${ intPartWithDivider }${ decimalDivider.value }${ floatPart }${ zerosToAdd }`;
    }

    return val;
  };

  const setMaximumValue = () => {
    const newVal = adjustFloatPartAndDivider(max.value);
    setCurrentValue(newVal);
  };

  const setMinimumValue = () => {
    const newVal = adjustFloatPartAndDivider(min.value);
    setCurrentValue(newVal);
  };

  const increase = () => {
    if (disabled.value || maxDisabled.value) {
      return;
    }
    const value = modelNumber.value;
    const newValue = ensurePrecision({
      value,
      currentValue: modelValue.value,
    }).replace(".", decimalDivider.value);
    if (value + step.value > max.value) {
      setMaximumValue();

      return;
    }
    setCurrentValue(adjustFloatPartAndDivider(newValue));
  };

  const decrease = () => {
    if (disabled.value || minDisabled.value) {
      return;
    }
    const value = modelNumber.value;
    const newValue = ensurePrecision({
      value,
      currentValue: modelValue.value,
      coefficient: -1,
    }).replace(".", decimalDivider.value);
    if (value - step.value < min.value) {
      setMinimumValue();

      return;
    }
    setCurrentValue(adjustFloatPartAndDivider(newValue));
  };

  return {
    adjustFloatPartAndDivider,
    increase,
    decrease,
  };
}
