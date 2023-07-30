export default function HtmlAPI() {
  const codeHtml = `<a-list :data="items" :key-label-callback="keyLabelCallback" key-label="label"></a-list>`;

  return {
    codeHtml,
  };
}
