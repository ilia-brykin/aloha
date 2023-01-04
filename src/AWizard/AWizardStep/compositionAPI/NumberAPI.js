import {
  computed,
  toRef,
} from "vue";

export default function NumberAPI(props) {
  const stepIndex = toRef(props, "stepIndex");
  const isStepNumberVisible = toRef(props, "isStepNumberVisible");

  const stepNumber = computed(() => {
    return stepIndex.value + 1;
  });

  const stepNumberText = computed(() => {
    return isStepNumberVisible.value ? stepNumber.value : "";
  });

  return {
    stepNumber,
    stepNumberText,
  };
}
