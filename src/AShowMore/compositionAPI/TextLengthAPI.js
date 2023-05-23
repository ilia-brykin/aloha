import {
  computed,
  ref,
  toRef,
} from "vue";

export default function TextLengthAPI(props, {
  isOpen = ref(false),
}) {
  const text = toRef(props, "text");
  const textLength = toRef(props, "textLength");

  const hasTextAndLength = computed(() => {
    return !!(text.value && textLength.value);
  });

  const isTextShorterThanTextLength = computed(() => {
    return textLength.value > text.value.length;
  });

  const isBtnHiddenDependentOnTextLength = computed(() => {
    return hasTextAndLength.value && isTextShorterThanTextLength.value;
  });

  const textLess = computed(() => {
    const TEXT_LESS = text.value.slice(0, textLength.value).trimEnd();
    let pointsSuffix = "...";
    let hasPoint = true;
    for (let i = TEXT_LESS.length - 1; i > TEXT_LESS.length - 4; i--) {
      const SYMBOL = TEXT_LESS[i];
      if (SYMBOL === ".") {
        if (hasPoint) {
          pointsSuffix = pointsSuffix.slice(0, -1);
        } else {
          break;
        }
        hasPoint = true;
      } else {
        break;
      }
    }
    return `${ TEXT_LESS }${ pointsSuffix }`;
  });

  const textLocal = computed(() => {
    if (hasTextAndLength.value) {
      if (isTextShorterThanTextLength.value) {
        return text.value;
      }
      if (!isOpen.value) {
        return textLess.value;
      }
    }
    return text.value;
  });

  return {
    hasTextAndLength,
    isBtnHiddenDependentOnTextLength,
    isTextShorterThanTextLength,
    textLocal,
  };
}
