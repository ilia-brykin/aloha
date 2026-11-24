import {
  computed,
  toRef,
} from "vue";

export default function ActiveAPI(props) {
  const stepIndex = toRef(props, "stepIndex");
  const stepActiveComputed = toRef(props, "stepActiveComputed");
  const stepsVisitedComputed = toRef(props, "stepsVisitedComputed");

  const isStepActive = computed(() => {
    return stepActiveComputed.value === stepIndex.value;
  });

  const isStepBeforeActive = computed(() => {
    return stepIndex.value < stepActiveComputed.value;
  });

  // a step that was open before; without stepsVisited the steps before the active one
  const isStepVisited = computed(() => {
    if (stepsVisitedComputed.value) {
      return !!stepsVisitedComputed.value[stepIndex.value];
    }
    return isStepBeforeActive.value;
  });

  return {
    isStepActive,
    isStepBeforeActive,
    isStepVisited,
  };
}
