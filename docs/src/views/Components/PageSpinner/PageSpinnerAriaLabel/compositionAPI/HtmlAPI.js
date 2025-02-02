export default function HtmlAPI() {
  const codeHtml = `<a-spinner
  :extra="{ number: 1 }"
  aria-label="_PAGE_SPINNER_ARIA_LABEL_{{number}}_"
></a-spinner>`;

  return {
    codeHtml,
  };
}
