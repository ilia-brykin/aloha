import {
  computed,
  ref,
  toRef,
} from "vue";

export default function BtnAttributesAPI(props, {
  hasTextAndLength = ref(false),
  isMoreButtonObservingVisible = ref(false),
  isOpen = ref(false),
  isTextShorterThanTextLength = ref(false),
}) {
  const btnIconLeftLess = toRef(props, "btnIconLeftLess");
  const btnIconLeftMore = toRef(props, "btnIconLeftMore");
  const btnIconRightLess = toRef(props, "btnIconRightLess");
  const btnIconRightMore = toRef(props, "btnIconRightMore");
  const btnTextLess = toRef(props, "btnTextLess");
  const btnTextMore = toRef(props, "btnTextMore");
  const btnTitleLess = toRef(props, "btnTitleLess");
  const btnTitleMore = toRef(props, "btnTitleMore");
  const showLess = toRef(props, "showLess");

  const buttonRef = ref(undefined);

  const btnText = computed(() => {
    return isOpen.value ?
      btnTextLess.value :
      btnTextMore.value;
  });

  const btnTitle = computed(() => {
    return isOpen.value ?
      btnTitleLess.value :
      btnTitleMore.value;
  });

  const btnIconLeft = computed(() => {
    return isOpen.value ?
      btnIconLeftLess.value :
      btnIconLeftMore.value;
  });

  const btnIconRight = computed(() => {
    return isOpen.value ?
      btnIconRightLess.value :
      btnIconRightMore.value;
  });

  const isButtonVisible = computed(() => {
    if (hasTextAndLength.value) {
      if (isTextShorterThanTextLength.value) {
        return false;
      }
      if (showLess.value) {
        return true;
      }
      return !isOpen.value;
    }
    if (!isMoreButtonObservingVisible.value) {
      return false;
    }
    if (showLess.value) {
      return true;
    }
    return !isOpen.value;
  });

  return {
    btnIconLeft,
    btnIconRight,
    btnText,
    btnTitle,
    buttonRef,
    isButtonVisible,
  };
}
