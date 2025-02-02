export default function HtmlAPI() {
  const codeHtml = `<a-progress-circle
  :value="20"
></a-progress-circle>
<a-progress-circle
  class="a_mt_3"
  :value="50"
></a-progress-circle>`;

  return {
    codeHtml,
  };
}
