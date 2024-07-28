import {
  computed,
  toRef,
} from "vue";

export default function ErrorWarningAPI(props) {
  const step = toRef(props, "step");
  const stepIconError = toRef(props, "stepIconError");
  const stepIconErrorText = toRef(props, "stepIconErrorText");
  const stepIconWarning = toRef(props, "stepIconWarning");
  const stepIconWarningText = toRef(props, "stepIconWarningText");

  const iconErrorWarning = computed(() => {
    if (step.value.error) {
      return stepIconError.value;
    }
    if (step.value.warning) {
      return stepIconWarning.value;
    }

    return undefined;
  });

  const titleIconErrorWarning = computed(() => {
    if (step.value.error) {
      return stepIconErrorText.value;
    }
    if (step.value.warning) {
      return stepIconWarningText.value;
    }

    return undefined;
  });

  return {
    iconErrorWarning,
    titleIconErrorWarning,
  };
}
