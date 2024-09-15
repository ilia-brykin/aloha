export default function HtmlAPI() {
  const codeHtml = `<a-cloak
  :extra="{ number: 1 }"
  text="_PAGE_CLOAK_TEXT_{{number}}_"
></a-cloak>`;

  return {
    codeHtml,
  };
}
