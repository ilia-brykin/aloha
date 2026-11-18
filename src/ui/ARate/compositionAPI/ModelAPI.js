import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  isNil,
  toNumber,
} from "lodash-es";

export default function ModelAPI(props, {
  allowHalfLocal = computed(() => false),
  changeModel = () => {},
  maxLocal = computed(() => 5),
}) {
  const clearable = toRef(props, "clearable");
  const disabled = toRef(props, "disabled");
  const modelUndefined = toRef(props, "modelUndefined");
  const modelValue = toRef(props, "modelValue");

  const hoverValue = ref(undefined);

  const step = computed(() => (allowHalfLocal.value ? 0.5 : 1));

  const valueLocal = computed(() => {
    if (isNil(modelValue.value) || modelValue.value === "") {
      return 0;
    }
    const VALUE = toNumber(modelValue.value);
    if (Number.isNaN(VALUE)) {
      return 0;
    }
    return Math.min(Math.max(VALUE, 0), maxLocal.value);
  });

  const isHovering = computed(() => !isNil(hoverValue.value));

  const valueDisplayed = computed(() => {
    return isHovering.value ? hoverValue.value : valueLocal.value;
  });

  const valueMin = computed(() => (clearable.value ? 0 : step.value));

  const setValue = ({ value, triggerDetails }) => {
    if (disabled.value) {
      return;
    }
    if (value === 0) {
      if (valueLocal.value === 0) {
        return;
      }
      changeModel({
        model: modelUndefined.value,
        triggerDetails: triggerDetails || "clear",
      });
      return;
    }
    const VALUE = Math.min(Math.max(value, valueMin.value), maxLocal.value);
    if (VALUE === valueLocal.value) {
      return;
    }
    changeModel({
      model: VALUE,
      triggerDetails,
    });
  };

  const clear = () => {
    if (!clearable.value) {
      return;
    }
    setValue({ value: 0, triggerDetails: "clear" });
  };

  return {
    clear,
    hoverValue,
    isHovering,
    setValue,
    step,
    valueDisplayed,
    valueLocal,
    valueMin,
  };
}
