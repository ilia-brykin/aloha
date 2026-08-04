import {
  computed,
  toRef,
} from "vue";

export default function UiClearButtonAPI(props, {
  isModel = computed(() => true),
} = {}) {
  const disabled = toRef(props, "disabled");
  const isClearButton = toRef(props, "isClearButton");

  const isClearButtonLocal = computed(() => {
    return !!(isClearButton.value && isModel.value && !disabled.value);
  });

  return {
    isClearButtonLocal,
  };
}
