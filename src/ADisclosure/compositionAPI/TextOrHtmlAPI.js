import {
  computed,
  ref,
  toRef,
} from "vue";

export default function TextOrHtmlAPI(props, {
  isOpen = ref(false),
}) {
  const htmlLess = toRef(props, "htmlLess");
  const htmlMore = toRef(props, "htmlMore");
  const safeHtmlLess = toRef(props, "safeHtmlLess");
  const safeHtmlMore = toRef(props, "safeHtmlMore");
  const textLess = toRef(props, "textLess");
  const textMore = toRef(props, "textMore");

  const htmlLocal = computed(() => {
    return isOpen.value ?
      htmlMore.value :
      htmlLess.value;
  });

  const safeHtmlLocal = computed(() => {
    return isOpen.value ?
      safeHtmlMore.value :
      safeHtmlLess.value;
  });

  const textLocal = computed(() => {
    return isOpen.value ?
      textMore.value :
      textLess.value;
  });

  const isTextOrHtmlVisible = computed(() => {
    return !!(textLocal.value || safeHtmlLocal.value || htmlLocal.value);
  });

  return {
    htmlLocal,
    isTextOrHtmlVisible,
    safeHtmlLocal,
    textLocal,
  };
}
