export default function HtmlAPI() {
  const codeHtml = `<a-tabs
  :data="data"
  :is-title-html="true"
  key-title="label"
></a-tabs>`;

  return {
    codeHtml,
  };
}
