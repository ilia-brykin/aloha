import {
  computed,
  toRef,
} from "vue";

export default function DisabledAPI(props) {
  const disabled = toRef(props, "disabled");
  const exclusiveOptionValue = toRef(props, "exclusiveOptionValue");
  const isExclusiveOptionEnabled = toRef(props, "isExclusiveOptionEnabled");
  const modelValue = toRef(props, "modelValue");

  const isExclusiveOptionSelected = computed(() => {
    if (isExclusiveOptionEnabled.value) {
      return modelValue.value && modelValue.value.indexOf(exclusiveOptionValue.value) !== -1;
    }

    return false;
  });

  const disabledLocal = computed(() => {
    return isExclusiveOptionSelected.value || disabled.value;
  });

  const disabledLocalAttribut = computed(() => {
    return disabledLocal.value || undefined;
  });

  const disabledAttribut = computed(() => {
    return disabled.value || undefined;
  });

  return {
    disabledAttribut,
    disabledLocal,
    disabledLocalAttribut,
    isExclusiveOptionSelected,
  };
}
