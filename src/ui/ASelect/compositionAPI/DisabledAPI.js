import {
  computed,
  toRef,
} from "vue";

export default function DisabledAPI(props) {
  const disabled = toRef(props, "disabled");
  const exclusiveOptionValue = toRef(props, "exclusiveOptionValue");
  const isExclusiveOptionEnabled = toRef(props, "isExclusiveOptionEnabled");
  const modelValue = toRef(props, "modelValue");

  const disabledLocal = computed(() => {
    if (isExclusiveOptionEnabled.value) {
      return modelValue.value && modelValue.value.indexOf(exclusiveOptionValue.value) !== -1;
    }
    return disabled.value;
  });

  return {
    disabledLocal,
  };
}
