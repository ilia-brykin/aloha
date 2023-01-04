import {
  computed,
  toRef,
} from "vue";

export default function DisabledAPI(props, {
  isStepActiveFirst = computed(() => false),
  isStepActiveLast = computed(() => false),
}) {
  const isBackButtonDisabled = toRef(props, "isBackButtonDisabled");
  const isForwardButtonDisabled = toRef(props, "isForwardButtonDisabled");

  const isBackButtonDisabledLocal = computed(() => {
    if (isStepActiveFirst.value) {
      return true;
    }
    return isBackButtonDisabled.value;
  });

  const isForwardButtonDisabledLocal = computed(() => {
    if (isStepActiveLast.value) {
      return true;
    }
    return isForwardButtonDisabled.value;
  });

  return {
    isBackButtonDisabledLocal,
    isForwardButtonDisabledLocal,
  };
}
