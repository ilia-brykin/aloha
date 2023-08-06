export default function HtmlAPI() {
  const codeHtml = `<a-progress
  :value="30"
  class-progress-bar="a_bg_primary"
  :striped="true"
  :striped-flow="true"
  :duration="2"
  :show-value="false"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="40"
  class-progress-bar="a_bg_secondary"
  :striped="true"
  :striped-flow="true"
  :duration="0.5"
  :show-value="false"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="30"
  class-progress-bar="a_bg_tertiary"
  :indeterminate="true"
  :duration="5"
  :show-value="false"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="40"
  class-progress-bar="a_bg_success"
  :indeterminate="true"
  :duration="8"
  :show-value="false"
></a-progress>`;

  return {
    codeHtml,
  };
}
