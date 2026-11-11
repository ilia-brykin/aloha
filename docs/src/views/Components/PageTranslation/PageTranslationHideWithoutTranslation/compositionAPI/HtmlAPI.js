export default function HtmlAPI() {
  const codeHtml = `<a-translation
  text="_A_TRANSLATION_SHOW_MORE_"
  hide-without-translation
></a-translation>
<a-translation
  text="_A_TRANSLATION_EXAMPLE_MISSING_"
  hide-without-translation
></a-translation>
<a-translation
  text="_A_TRANSLATION_EXAMPLE_EMPTY_"
  hide-without-translation
></a-translation>`;

  return {
    codeHtml,
  };
}
