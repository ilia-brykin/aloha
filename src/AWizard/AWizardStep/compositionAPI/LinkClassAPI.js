import {
  computed,
  toRef,
} from "vue";

export default function LinkClassAPI(props, {
  isStepActive = computed(() => false),
  isStepBeforeActive = computed(() => false),
  isStepDisabled = computed(() => false),
}) {
  const step = toRef(props, "step");

  const linkClass = computed(() => {
    return ["a_wizard__step__link", {
      active: isStepActive.value,
      before_active: isStepBeforeActive.value,
      default: isStepDisabled.value,
      done: !isStepActive.value && !isStepDisabled.value,
      error: step.value.error,
      warning: step.value.warning,
    }];
  });

  return {
    linkClass,
  };
}
