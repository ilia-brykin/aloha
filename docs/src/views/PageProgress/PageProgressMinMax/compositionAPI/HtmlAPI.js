export default function HtmlAPI() {
  const codeHtml = `<a-progress>
  :value="-20"
  :min="-100"
  :max="0"
</a-progress>
<a-progress>
  class="a_mt_4"
  :min="50"
  :max="100"
  :value="75"
</a-progress>
<a-progress>
  class="a_mt_4"
  :min="0"
  :max="1000"
  :value="600"
</a-progress>
<a-progress>
  class="a_mt_4"
  :min="-200"
  :max="-100"
  :value="-130"
</a-progress>`;

  return {
    codeHtml,
  };
}
