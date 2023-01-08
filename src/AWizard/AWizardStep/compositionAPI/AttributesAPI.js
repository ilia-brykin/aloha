import {
  computed,
} from "vue";

export default function AttributesAPI({
  isStepDisabled = computed(() => false),
  isStepActive = computed(() => false),
}) {
  const tabindex = computed(() => {
    return isStepDisabled.value || isStepActive.value ? -1 : 0;
  });

  const ariaCurrentAttributes = computed(() => {
    if (isStepActive.value) {
      return {
        "aria-current": "step",
      };
    }
    return {};
  });

  return {
    ariaCurrentAttributes,
    tabindex,
  };
}
