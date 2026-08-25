import {
  toRef,
} from "vue";

export default function ChangeStepAPI(props, { emit }) {
  const steps = toRef(props, "steps");

  const changeStep = ({ stepIndex, previousStepIndex }) => {
    emit("changeStep", {
      step: steps.value[stepIndex],
      stepIndex,
      previousStepIndex,
    });
  };

  return {
    changeStep,
  };
}
