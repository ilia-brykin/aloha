export default function HtmlAPI() {
  const codeHtml = `<a-progress
  class="a_progress_small"
  :value="20"
></a-progress>
<a-progress
  class="a_mt_4 a_progress_medium"
  :value="20"
></a-progress>
<a-progress
  class="a_mt_4 a_progress_large"
  :value="20"
></a-progress>`;

  return {
    codeHtml,
  };
}
