import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  isNumber,
} from "lodash-es";

export default function IncreaseDecreaseAPI(props, {
  currentValue = ref(0),
  displayValue = computed(() => ""),
  ensurePrecision = () => {},
  setCurrentValue = () => {},
  minLocal = computed(() => undefined),
}) {
  const disabled = toRef(props, "disabled");
  const modelValue = toRef(props, "modelValue");
  const max = toRef(props, "max");
  const readonly = toRef(props, "readonly");

  const minDisabled = computed(() => {
    return isNumber(modelValue.value) && modelValue.value <= minLocal.value;
  });

  const maxDisabled = computed(() => {
    return isNumber(modelValue.value) && modelValue.value >= max.value;
  });

  const increase = () => {
    if (readonly.value || disabled.value || maxDisabled.value) {
      return; 
    }
    const value = Number(displayValue.value) || 0;
    const newValue = ensurePrecision({ value, currentValue: currentValue.value });
    setCurrentValue(newValue);
  };

  const decrease = () => {
    if (readonly.value || disabled.value || minDisabled.value) {
      return; 
    }
    const value = Number(displayValue.value) || 0;
    const newValue = ensurePrecision({ value, currentValue: currentValue.value, coefficient: -1 });
    setCurrentValue(newValue);
  };

  return {
    increase,
    decrease,
  };
}
