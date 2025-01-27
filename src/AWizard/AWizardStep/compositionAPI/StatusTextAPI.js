import {
  computed,
} from "vue";

export default function StatusTextAPI(props, {
  isStepActive = computed(() => false),
  isStepBeforeActive = computed(() => false),
}) {
  const statusText = computed(() => {
    if (isStepActive.value) {
      return "_A_WIZARD_STEP_ACTIVE_";
    } else if (isStepBeforeActive.value) {
      return "_A_WIZARD_STEP_VISITED_";
    }
    return "_A_WIZARD_STEP_UPCOMING_";
  });

  return {
    statusText,
  };
}
