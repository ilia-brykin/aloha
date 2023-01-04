import {
  computed,
} from "vue";

export default function AttributesAPI({
  isStepDisabled = computed(() => false),
}) {
  const tabindex = computed(() => {
    return isStepDisabled.value ? -1 : 0;
  });

  return {
    tabindex,
  };
}
