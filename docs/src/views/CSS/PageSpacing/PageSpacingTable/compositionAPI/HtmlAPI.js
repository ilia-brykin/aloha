import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "aloha-vue";

export default function HtmlAPI() {
  const codeHtml = computed(() => {
    return getTranslatedText({
      placeholder: "_A_SPACING_HTML_EXAMPLE_",
    });
  });

  return {
    codeHtml,
  };
}
