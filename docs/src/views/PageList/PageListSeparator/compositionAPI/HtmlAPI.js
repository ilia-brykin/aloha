export default function HtmlAPI() {
  const codeHtml = `<a-list
  :data="items"
  :is-data-simple-array="true"
  :is-html="false"
  separator="; "
></a-list>
<div class="a_mt_4"></div>
<a-list
  :data="items"
  :is-data-simple-array="true"
  :is-html="false"
  separator=" + "
></a-list>`;

  return {
    codeHtml,
  };
}
