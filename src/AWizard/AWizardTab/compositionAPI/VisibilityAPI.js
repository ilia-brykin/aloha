import {
  computed,
  toRef,
} from "vue";

export default function VisibilityAPI(props, {
  isStepActive = computed(() => false),
}) {
  const stepsVisitedComputed = toRef(props, "stepsVisitedComputed");
  const stepIndex = toRef(props, "stepIndex");

  const styleStep = computed(() => {
    return isStepActive.value ? "" : "display: none;";
  });

  const isStepRender = computed(() => {
    return isStepActive.value || stepsVisitedComputed.value[stepIndex.value];
  });

  return {
    isStepRender,
    styleStep,
  };
}
