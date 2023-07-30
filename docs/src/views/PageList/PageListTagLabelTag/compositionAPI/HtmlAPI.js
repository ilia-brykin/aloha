export default function HtmlAPI() {
  const codeHtml = `<a-list :data="items" key-label="label" tag="div" label-tag="h3"></a-list>`;

  return {
    codeHtml,
  };
}
