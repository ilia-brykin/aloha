export default function HtmlAPI() {
  const codeHtml = `<a-progress>
  :value="20"
  class-progress-bar="a_bg_primary"
  :striped="true"
  :striped-flow="true"
</a-progress>
<a-progress>
  class="a_mt_4"
  :value="30"
  class-progress-bar="a_bg_secondary"
  :striped="true"
  :striped-flow="true"
</a-progress>
<a-progress>
  class="a_mt_4"
  :value="40"
  class-progress-bar="a_bg_tertiary"
  :striped="true"
  :striped-flow="true"
</a-progress>
<a-progress>
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_success"
  :striped="true"
  :striped-flow="true"
</a-progress>
<a-progress>
  class="a_mt_4"
  :value="60"
  class-progress-bar="a_bg_warning"
  :striped="true"
  :striped-flow="true"
</a-progress>
<a-progress>
  class="a_mt_4"
  :value="70"
  class-progress-bar="a_bg_info"
  :striped="true"
  :striped-flow="true"
</a-progress>
<a-progress>
  class="a_mt_4"
  :value="80"
  class-progress-bar="a_bg_danger"
  :striped="true"
  :striped-flow="true"
</a-progress>`;

  return {
    codeHtml,
  };
}
