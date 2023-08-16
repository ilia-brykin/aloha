import {
  computed,
  toRef,
} from "vue";

export default function CheckedAPI(props, {
  valueLocal = computed(() => undefined),
}) {
  const type = toRef(props, "type");
  const modelValue = toRef(props, "modelValue");

  const isChecked = computed(() => {
    if (type.value === "multiselect") {
      return !!(modelValue.value && modelValue.value.indexOf(valueLocal.value) !== -1);
    }
    return modelValue.value === valueLocal.value;
  });

  return {
    isChecked,
  };
}
