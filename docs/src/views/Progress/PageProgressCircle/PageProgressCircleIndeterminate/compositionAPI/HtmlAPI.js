export default function HtmlAPI() {
  const codeHtml = `<a-progress-circle
  :value="20"
  :indeterminate="true"
></a-progress-circle>
<a-progress-circle
  class="a_mt_3"
  :value="50"
  :indeterminate="true"
></a-progress-circle>
<a-progress-circle
  class="a_mt_3"
  :value="80"
  :indeterminate="true"
></a-progress-circle>`;

  return {
    codeHtml,
  };
}
