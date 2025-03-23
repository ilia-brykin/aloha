import {
  computed,
  toRef,
} from "vue";

export default function IncreaseDecreaseAPI(props, {
  adjustFloatPartAndDivider = () => {},
  ensurePrecision = () => {},
  setCurrentValue = () => {},
  modelNumber = computed(() => undefined),
}) {
  const decimalDivider = toRef(props, "decimalDivider");
  const disabled = toRef(props, "disabled");
  const modelValue = toRef(props, "modelValue");
  const max = toRef(props, "max");
  const min = toRef(props, "min");
  const step = toRef(props, "step");

  const minDisabled = computed(() => {
    return modelNumber.value <= min.value;
  });

  const maxDisabled = computed(() => {
    return modelNumber.value >= max.value;
  });

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
    increase,
    decrease,
  };
}
