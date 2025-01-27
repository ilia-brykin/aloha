import {
  computed,
  ref,
  toRef,
  watch,
} from "vue";

import {
  isNil,
} from "lodash-es";

export default function LocalAPI(props, {
  setFocusToActiveStep = () => {
  },
}) {
  const stepActive = toRef(props, "stepActive");
  const stepsVisited = toRef(props, "stepsVisited");
  const isControlOutside = toRef(props, "isControlOutside");

  const isWatchActive = ref(false);
  const stepActiveLocal = ref(0);
  const stepsVisitedLocal = ref({
    0: true,
  });

  const stepActiveComputed = computed(() => {
    return isControlOutside.value ? stepActive.value : stepActiveLocal.value;
  });

  const stepsVisitedComputed = computed(() => {
    return isControlOutside.value ? stepsVisited.value : stepsVisitedLocal.value;
  });

  const initStepActive = () => {
    if (!isControlOutside.value) {
      if (!isNil(stepActive.value)) {
        stepActiveLocal.value = stepActive.value;
        stepsVisitedLocal.value = {
          [stepActive.value]: true,
        };
      }
    }
    setTimeout(() => {
      isWatchActive.value = true;
    });
  };

  watch(stepActiveComputed, newValue => {
    if (isWatchActive.value) {
      setFocusToActiveStep({ stepActive: newValue });
    }
  });

  return {
    initStepActive,
    stepActiveComputed,
    stepActiveLocal,
    stepsVisitedComputed,
    stepsVisitedLocal,
  };
}
