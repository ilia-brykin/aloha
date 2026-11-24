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
    // the whole text fits: no cut, no button
    return textLength.value >= text.value.length;
  });

  const isBtnHiddenDependentOnTextLength = computed(() => {
    return hasTextAndLength.value && isTextShorterThanTextLength.value;
  });

  // cut at the end of a word, without punctuation at the end, with an ellipsis (…)
  const textLess = computed(() => {
    let textLessLocal = text.value.slice(0, textLength.value);
    const IS_CUT_IN_WORD = /\S/.test(text.value.charAt(textLength.value)) && /\S$/.test(textLessLocal);
    const LAST_SPACE = textLessLocal.search(/\s\S*$/);
    if (IS_CUT_IN_WORD && LAST_SPACE > 0) {
      textLessLocal = textLessLocal.slice(0, LAST_SPACE);
    }
    textLessLocal = textLessLocal.trimEnd().replace(/[\s.,;:!?…-]+$/, "");
    return `${ textLessLocal }…`;
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
