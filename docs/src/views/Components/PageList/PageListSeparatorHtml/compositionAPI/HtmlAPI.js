export default function HtmlAPI() {
  const codeHtml = `<a-list
  :data="items"
  :is-data-simple-array="true"
  :is-html="true"
  separator-html="<div aria-hidden='true'>-------------</div>"
></a-list>
<div class="a_mt_4"></div>
<a-list
  :data="items"
  :is-data-simple-array="true"
  :is-html="true"
  separator-html="<hr>"
></a-list>`;

  return {
    codeHtml,
  };
}
