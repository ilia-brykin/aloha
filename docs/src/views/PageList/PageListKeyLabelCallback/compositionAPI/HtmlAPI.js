export default function HtmlAPI() {
  const codeHtml = `<a-list
  :data="items"
  :key-label-callback="keyLabelCallback"
></a-list>`;

  return {
    codeHtml,
  };
}
