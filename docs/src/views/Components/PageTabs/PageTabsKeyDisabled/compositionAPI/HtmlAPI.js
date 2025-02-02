export default function HtmlAPI() {
  const codeHtml = `<a-tabs
  :data="data"
  key-disabled="disabled"
></a-tabs>`;

  return {
    codeHtml,
  };
}
