import {
  computed,
  toRef,
} from "vue";

export default function UiClearButtonAPI(props, {
  isModel = computed(() => true),
} = {}) {
  const isClearButton = toRef(props, "isClearButton");
  const isClearButtonLocal = computed(() => {
    return !!(isClearButton.value && isModel.value);
  });

  return {
    isClearButtonLocal,
  };
}
