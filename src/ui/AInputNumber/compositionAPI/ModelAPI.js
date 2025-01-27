import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  isNil,
  isNumber,
  isUndefined,
} from "lodash-es";

export default function ModelAPI(props, {
  verifyValue = () => {},
  changeModel = () => {},
}) {
  const precision = toRef(props, "precision");
  const modelValue = toRef(props, "modelValue");

  const userInput = ref(null);
  const currentValue = ref(modelValue.value);

  const displayValue = computed(() => {
    if (userInput.value !== null) {
      return userInput.value;
    }
    let currentValueLocal = currentValue.value;
    if (isNil(currentValueLocal)) {
      return "";
    }
    if (isNumber(currentValueLocal)) {
      if (Number.isNaN(currentValueLocal)) {
        return "";
      }
      if (!isUndefined(precision.value)) {
        currentValueLocal = currentValueLocal.toFixed(precision.value);
      }
    }
    return currentValueLocal;
  });

  const setCurrentValue = (
    value,
    emitChange = true,
  ) => {
    const oldVal = currentValue.value;
    const newVal = verifyValue(value);
    if (oldVal === newVal) {
      return;
    }
    if (!emitChange) {
      changeModel({ model: newVal });
      return;
    }
    userInput.value = null;
    changeModel({ model: newVal });

    currentValue.value = newVal;
  };

  return {
    currentValue,
    displayValue,
    setCurrentValue,
    userInput,
  };
}
