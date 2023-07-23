export default function HtmlAPI() {
  const codeHtml = `<a-translation
  :text="{ mobile: '_A_TRANSLATION_SHOW_MORE_', desktop: '_A_TRANSLATION_SHOW_LESS_' }"
></a-translation>`;

  return {
    codeHtml,
  };
}
