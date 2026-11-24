import {
  computed,
  toRef,
} from "vue";

export default function LinkClassAPI(props, {
  isStepActive = computed(() => false),
  isStepBeforeActive = computed(() => false),
  isStepDisabled = computed(() => false),
  isStepVisited = computed(() => false),
}) {
  const step = toRef(props, "step");

  // done: visited and reachable; upcoming: reachable but not visited yet (looks like default, but can be clicked)
  const linkClass = computed(() => {
    const IS_REACHABLE = !isStepActive.value && !isStepDisabled.value;
    return ["a_wizard__step__link", {
      active: isStepActive.value,
      before_active: isStepBeforeActive.value,
      default: isStepDisabled.value || (IS_REACHABLE && !isStepVisited.value),
      done: IS_REACHABLE && isStepVisited.value,
      upcoming: IS_REACHABLE && !isStepVisited.value,
      error: step.value.error,
      warning: step.value.warning,
    }];
  });

  return {
    linkClass,
  };
}
