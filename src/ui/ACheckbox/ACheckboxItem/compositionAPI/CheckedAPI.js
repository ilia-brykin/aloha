import {
  computed,
  toRef,
} from "vue";

export default function CheckedAPI(props, {
  valueLocal = computed(() => undefined),
}) {
  const modelValue = toRef(props, "modelValue");

  const isChecked = computed(() => {
    return modelValue.value && modelValue.value.indexOf(valueLocal.value) !== -1;
  });

  return {
    isChecked,
  };
}
