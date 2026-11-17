import {
  computed,
  toRef,
} from "vue";

export default function ToggleClassAPI(props, {
  isClearButtonLocal = computed(() => false),
  isErrors = computed(() => false),
}) {
  const errorIcon = toRef(props, "errorIcon");

  const hasErrorIcon = computed(() => {
    return !!(isErrors.value && errorIcon.value);
  });

  const toggleClassBtns = computed(() => {
    return isClearButtonLocal.value ? "a_form_element_with_one_btn" : undefined;
  });

  return {
    hasErrorIcon,
    toggleClassBtns,
  };
}
