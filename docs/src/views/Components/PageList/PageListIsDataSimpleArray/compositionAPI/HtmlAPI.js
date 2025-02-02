export default function HtmlAPI() {
  const codeHtml = `<a-list
  :data="items1"
  :is-data-simple-array="true"
></a-list>
<a-list
  class="a_mt_4"
  :data="items2"
  :is-data-simple-array="true"
></a-list>`;

  return {
    codeHtml,
  };
}
