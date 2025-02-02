export default function HtmlAPI() {
  const codeHtml = `<a-list
  :data="items1"
  key-label="label"
  key-id="id"
></a-list>
<a-list
  class="a_mt_4"
  :data="items2"
  key-label="label"
  key-id="label"
></a-list>`;

  return {
    codeHtml,
  };
}
