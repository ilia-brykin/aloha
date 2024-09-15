export default function HtmlAPI() {
  const codeHtml = `<a-tabs
  :data="data"
  :is-boxed="true"
></a-tabs>
<a-tabs
  :data="data"
  :is-boxed="false"
  class="a_mt_3"
></a-tabs>`;

  return {
    codeHtml,
  };
}
