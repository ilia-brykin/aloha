export default function HtmlAPI() {
  const codeHtml = `<a-tabs
  :data="data1"
  active-tab-id="3"
  key-id="id"
></a-tabs>
<a-tabs
  :active-tab-id="2"
  :data="data2"
  class="a_mt_3"
></a-tabs>`;

  return {
    codeHtml,
  };
}
