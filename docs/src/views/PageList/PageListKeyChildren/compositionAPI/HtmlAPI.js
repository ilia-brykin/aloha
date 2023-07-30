export default function HtmlAPI() {
  const codeHtml = `<a-list :data="items" key-label="label" key-children="children"></a-list>`;

  return {
    codeHtml,
  };
}
