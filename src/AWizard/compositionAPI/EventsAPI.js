import {
  computed,
  ref,
  toRef,
} from "vue";

export default function EventsAPI(props, { emit }, {
  stepActiveComputed = computed(() => 0),
  stepActiveLocal = ref(0),
  stepsVisitedLocal = ref({}),
}) {
  const isControlOutside = toRef(props, "isControlOutside");
  const steps = toRef(props, "steps");

  const goStepBack = ({ stepIndex, step }) => {
    if (isControlOutside.value) {
      emit("goStepBack", {
        step,
        targetStepIndex: stepIndex,
        currentStepIndex: stepActiveComputed.value,
      });
    } else {
      stepActiveLocal.value = stepIndex;
    }
  };

  const goStepForward = ({ stepIndex, step }) => {
    if (isControlOutside.value) {
      emit("goStepForward", {
        step,
        targetStepIndex: stepIndex,
        currentStepIndex: stepActiveComputed.value,
      });
    } else {
      stepActiveLocal.value = stepIndex;
      stepsVisitedLocal.value[stepIndex] = true;
    }
  };

  const goOneStepBack = () => {
    if (stepActiveComputed.value === 0) {
      return;
    }
    goStepBack({
      stepIndex: stepActiveComputed.value - 1,
    });
  };

  const goOneStepForward = () => {
    if (stepActiveComputed.value >= steps.value.length - 1) {
      return;
    }
    goStepForward({
      stepIndex: stepActiveComputed.value + 1,
    });
  };

  const onStepClick = ({ stepIndex, step }) => {
    if (stepActiveComputed.value === stepIndex) {
      return;
    }
    if (stepIndex < stepActiveComputed.value) {
      goStepBack({ stepIndex, step });
    } else {
      goStepForward({ stepIndex, step });
    }
  };

  return {
    goOneStepBack,
    goOneStepForward,
    onStepClick,
  };
}
