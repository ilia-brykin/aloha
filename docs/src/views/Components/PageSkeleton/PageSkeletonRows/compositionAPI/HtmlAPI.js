export default function HtmlAPI() {
  const codeHtml = `<a-skeleton
  :avatar="true"
  :rows="2"
></a-skeleton>
<a-skeleton
  class="a_mt_5"
  :title="false"
  :rows="5"
></a-skeleton>`;

  return {
    codeHtml,
  };
}
