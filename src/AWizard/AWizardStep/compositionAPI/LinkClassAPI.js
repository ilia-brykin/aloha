import {
  computed,
  toRef,
} from "vue";

export default function LinkClassAPI(props, {
  isStepActive = computed(() => false),
  isStepDisabled = computed(() => false),
}) {
  const step = toRef(props, "step");
  const stepIndex = toRef(props, "stepIndex");
  const stepActiveComputed = toRef(props, "stepActiveComputed");

  const isBeforeActive = computed(() => {
    return stepIndex.value < stepActiveComputed.value;
  });

  const linkClass = computed(() => {
    return ["a_wizard__step__link", {
      active: isStepActive.value,
      before_active: isBeforeActive.value,
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
