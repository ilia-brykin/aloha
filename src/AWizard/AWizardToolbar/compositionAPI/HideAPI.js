import {
  computed,
  toRef,
} from "vue";

export default function HideAPI(props, {
  isStepActiveFirst = computed(() => false),
  isStepActiveLast = computed(() => false),
}) {
  const isForwardButtonHide = toRef(props, "isForwardButtonHide");
  const isBackButtonHide = toRef(props, "isBackButtonHide");
  const isForwardLastButtonHide = toRef(props, "isForwardLastButtonHide");
  const isBackFirstButtonHide = toRef(props, "isBackFirstButtonHide");

  const isBackButtonHideLocal = computed(() => {
    if (isBackButtonHide.value) {
      return true;
    }
    return isStepActiveFirst.value && isBackFirstButtonHide.value;
  });

  const isForwardButtonHideLocal = computed(() => {
    if (isForwardButtonHide.value) {
      return true;
    }
    return isStepActiveLast.value && isForwardLastButtonHide.value;
  });

  return {
    isBackButtonHideLocal,
    isForwardButtonHideLocal,
  };
}
