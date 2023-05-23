import {
  computed,
  toRef,
} from "vue";

export default function TextOrHtmlAPI(props, {
  textLocal = computed(() => undefined),
}) {
  const safeHtml = toRef(props, "safeHtml");
  const html = toRef(props, "html");

  const isTextOrHtmlVisible = computed(() => {
    return !!(textLocal.value || safeHtml.value || html.value);
  });

  return {
    isTextOrHtmlVisible,
  };
}
