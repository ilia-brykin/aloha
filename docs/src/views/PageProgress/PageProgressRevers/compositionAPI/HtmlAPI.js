export default function HtmlAPI() {
  const codeHtml = `<a-progress>
  :value="20"
  :revers="true"
</a-progress>
<a-progress>
  class="a_mt_4"
  :value="40"
  :revers="true"
</a-progress>`;

  return {
    codeHtml,
  };
}
