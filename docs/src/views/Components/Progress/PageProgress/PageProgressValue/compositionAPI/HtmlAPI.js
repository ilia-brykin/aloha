export default function HtmlAPI() {
  const codeHtml = `<a-input-number
  v-model="model"
  class="a_mb_4"
  :min="0"
  :max="100"
  :step="5"
  type="integerNonNegative"
></a-input-number>
<a-progress
  :value="model"
></a-progress>`;

  return {
    codeHtml,
  };
}
