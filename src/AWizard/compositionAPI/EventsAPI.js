import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  isFunction,
} from "lodash-es";

export default function EventsAPI(props, { emit }, {
  setFocusToInvalid = () => {},
  stepActiveComputed = computed(() => 0),
  stepActiveLocal = ref(0),
  stepsVisitedLocal = ref({}),
}) {
  const beforeStepChange = toRef(props, "beforeStepChange");
  const isControlOutside = toRef(props, "isControlOutside");
  const steps = toRef(props, "steps");

  // beforeStepChange is waiting (Promise): the buttons show the loading
  const isStepChangeChecking = ref(false);

  const applyStepBack = ({ stepIndex, step }) => {
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

  const applyStepForward = ({ stepIndex, step }) => {
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

  // beforeStepChange({ from, to, step, direction }) returns false (or a Promise with false) to stay on the step
  const runChecked = ({ to, step, direction }, onAllowed) => {
    if (!isFunction(beforeStepChange.value)) {
      onAllowed();
      return;
    }
    const FROM = stepActiveComputed.value;
    const done = isAllowed => {
      if (isAllowed === false) {
        setFocusToInvalid({ stepActive: FROM });
      } else {
        onAllowed();
      }
    };
    const RESULT = beforeStepChange.value({ direction, from: FROM, step, to });
    if (RESULT && isFunction(RESULT.then)) {
      isStepChangeChecking.value = true;
      RESULT.then(done).finally(() => {
        isStepChangeChecking.value = false;
      });
    } else {
      done(RESULT);
    }
  };

  const changeStepChecked = ({ stepIndex, step, direction }) => {
    const APPLY = direction === "back" ? applyStepBack : applyStepForward;
    runChecked({
      direction,
      step: steps.value[stepIndex],
      to: stepIndex,
    }, () => APPLY({ stepIndex, step }));
  };

  const goOneStepBack = () => {
    if (stepActiveComputed.value === 0 || isStepChangeChecking.value) {
      return;
    }
    changeStepChecked({
      stepIndex: stepActiveComputed.value - 1,
      direction: "back",
    });
  };

  const goOneStepForward = () => {
    if (stepActiveComputed.value >= steps.value.length - 1 || isStepChangeChecking.value) {
      return;
    }
    changeStepChecked({
      stepIndex: stepActiveComputed.value + 1,
      direction: "forward",
    });
  };

  const onStepClick = ({ stepIndex, step }) => {
    if (stepActiveComputed.value === stepIndex || isStepChangeChecking.value) {
      return;
    }
    changeStepChecked({
      stepIndex,
      step,
      direction: stepIndex < stepActiveComputed.value ? "back" : "forward",
    });
  };

  // the last step: the finish button, also checked with beforeStepChange (to: null)
  const finish = () => {
    if (isStepChangeChecking.value) {
      return;
    }
    runChecked({ direction: "finish", step: undefined, to: null }, () => emit("finish", {
      step: steps.value[stepActiveComputed.value],
      stepIndex: stepActiveComputed.value,
    }));
  };

  return {
    finish,
    goOneStepBack,
    goOneStepForward,
    isStepChangeChecking,
    onStepClick,
  };
}
