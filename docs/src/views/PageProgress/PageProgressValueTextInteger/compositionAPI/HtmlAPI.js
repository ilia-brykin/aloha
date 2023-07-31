export default function HtmlAPI() {
  const codeHtml = `<a-progress>
  :value="20"
  :value-text-integer="true"
</a-progress>
<a-progress>
  class="a_mt_4"
  :value="40"
  :value-text-integer="true"
</a-progress>`;

  return {
    codeHtml,
  };
}
