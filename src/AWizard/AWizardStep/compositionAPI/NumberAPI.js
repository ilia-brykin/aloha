import {
  computed,
  toRef,
} from "vue";

export default function NumberAPI(props, {
  isStepActive = computed(() => false),
}) {
  const isMobile = toRef(props, "isMobile");
  const isStepNumberVisible = toRef(props, "isStepNumberVisible");
  const showOnlyActiveStepMobile = toRef(props, "showOnlyActiveStepMobile");
  const stepIndex = toRef(props, "stepIndex");

  const stepNumber = computed(() => {
    return stepIndex.value + 1;
  });

  const isActiveStepMobileSpecial = computed(() => {
    return isMobile.value && showOnlyActiveStepMobile.value && isStepActive.value;
  });

  const stepNumberText = computed(() => {
    if (!isStepNumberVisible.value) {
      return "";
    }
    if (isActiveStepMobileSpecial.value) {
      return "_A_WIZARD_STEP_NUMBER_OF_{{stepActive}}_{{stepsCount}}_";
    }
    return stepNumber.value;
  });

  return {
    stepNumber,
    stepNumberText,
  };
}
