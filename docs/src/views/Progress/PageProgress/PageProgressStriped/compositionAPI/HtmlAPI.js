export default function HtmlAPI() {
  const codeHtml = `<a-progress
  :value="50"
  class-progress-bar="a_bg_primary"
  :striped="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_secondary"
  :striped="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_tertiary"
  :striped="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_success"
  :striped="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_warning"
  :striped="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_info"
  :striped="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_danger"
  :striped="true"
></a-progress>`;

  return {
    codeHtml,
  };
}
