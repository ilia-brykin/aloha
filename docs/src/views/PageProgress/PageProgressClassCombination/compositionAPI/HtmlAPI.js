export default function HtmlAPI() {
  const codeHtml = `<a-progress>
  class="a_bg_primary"
  :value="30"
  class-progress-bar="a_bg_gray_500"
</a-progress>
<a-progress>
  class="a_mt_4 a_bg_danger"
  :value="35"
  class-progress-bar="a_bg_secondary"
</a-progress>
<a-progress>
  class="a_mt_4 a_bg_gray_700"
  :value="40"
  class-progress-bar="a_bg_tertiary"
</a-progress>
<a-progress>
  class="a_mt_4 a_bg_secondary"
  :value="45"
  class-progress-bar="a_bg_success"
</a-progress>
<a-progress>
  class="a_mt_4 a_bg_tertiary"
  :value="50"
  class-progress-bar="a_bg_warning"
</a-progress>
<a-progress>
  class="a_mt_4 a_bg_success"
  :value="55"
  class-progress-bar="a_bg_info"
</a-progress>
<a-progress>
  class="a_mt_4 a_bg_black"
  :value="60"
  class-progress-bar="a_bg_danger"
</a-progress>
<a-progress>
  class="a_mt_4 a_bg_danger"
  :value="65"
  class-progress-bar="a_bg_gray_300"
</a-progress>
<a-progress>
  class="a_mt_4 a_bg_info"
  :value="70"
  class-progress-bar="a_bg_gray_400"
</a-progress>
<a-progress>
  class="a_mt_4 a_bg_success"
  :value="75"
  class-progress-bar="a_bg_gray_500"
</a-progress>
<a-progress>
  class="a_mt_4 a_bg_primary"
  :value="80"
  class-progress-bar="a_bg_gray_600"
</a-progress>
<a-progress>
  class="a_mt_4 a_bg_info"
  :value="85"
  class-progress-bar="a_bg_gray_700"
</a-progress>
<a-progress>
  class="a_mt_4 a_bg_secondary"
  :value="90"
  class-progress-bar="a_bg_gray_800"
</a-progress>
<a-progress>
  class="a_mt_4 a_bg_info"
  :value="95"
  class-progress-bar="a_bg_black"
</a-progress>`;

  return {
    codeHtml,
  };
}
