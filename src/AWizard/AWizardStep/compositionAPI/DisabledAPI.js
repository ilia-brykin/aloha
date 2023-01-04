import {
  computed,
  toRef,
} from "vue";

export default function DisabledAPI(props) {
  const step = toRef(props, "step");
  const stepIndex = toRef(props, "stepIndex");
  const stepActiveComputed = toRef(props, "stepActiveComputed");
  const isForwardStepButtonDisabled = toRef(props, "isForwardStepButtonDisabled");
  const isBackStepButtonDisabled = toRef(props, "isBackStepButtonDisabled");
  const isForwardButtonDisabled = toRef(props, "isForwardButtonDisabled");
  const isBackButtonDisabled = toRef(props, "isBackButtonDisabled");

  const isStepBack = computed(() => {
    return stepIndex.value < stepActiveComputed.value;
  });

  const isStepForward = computed(() => {
    return stepIndex.value > stepActiveComputed.value;
  });

  const isStepDisabled = computed(() => {
    if (step.value.disabled) {
      return true;
    }
    if (isStepForward.value) {
      return isForwardButtonDisabled.value || isForwardStepButtonDisabled.value;
    }
    if (isStepBack.value) {
      return isBackButtonDisabled.value || isBackStepButtonDisabled.value;
    }
    return false;
  });

  return {
    isStepDisabled,
  };
}
