export default function HtmlAPI() {
  const codeHtml = `<a-list
  :data="items"
  key-label="label"
></a-list>`;

  return {
    codeHtml,
  };
}
