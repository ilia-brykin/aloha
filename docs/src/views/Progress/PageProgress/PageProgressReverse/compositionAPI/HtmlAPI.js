export default function HtmlAPI() {
  const codeHtml = `<a-progress
  :value="20"
  :reverse="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="40"
  :reverse="true"
></a-progress>`;

  return {
    codeHtml,
  };
}
