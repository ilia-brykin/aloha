import {
  computed,
  toRef,
} from "vue";

import UtilsAPI from "./UtilsAPI";

export default function HtmlAPI(props, {
  translation = computed(() => ({})),
}) {
  const extra = toRef(props, "extra");
  const html = toRef(props, "html");
  const textAfter = toRef(props, "textAfter");
  const textBefore = toRef(props, "textBefore");

  const {
    isPlaceholderTranslate,
    getTranslatedText,
  } = UtilsAPI();

  const isTranslateHtml = computed(() => {
    return !(!html.value || !isPlaceholderTranslate(html.value));
  });

  const textBeforeHtml = computed(() => {
    return textBefore.value ?
      `<span>${ textBefore.value }</span>` :
      "";
  });

  const textAfterHtml = computed(() => {
    return textAfter.value ?
      `<span>${ textAfter.value }</span>` :
      "";
  });

  const htmlLocal = computed(() => {
    if (!html.value) {
      return undefined;
    }
    let htmlString = html.value;

    if (isTranslateHtml.value) {
      htmlString = getTranslatedText({
        placeholder: html.value,
        translationObj: translation.value,
        extra: extra.value
      });
    }
    return `${ textBeforeHtml.value }${ htmlString }${ textAfterHtml.value }`;
  });

  return {
    htmlLocal,
    isTranslateHtml,
  };
}
