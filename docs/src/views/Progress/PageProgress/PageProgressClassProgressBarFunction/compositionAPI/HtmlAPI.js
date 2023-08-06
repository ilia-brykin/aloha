export default function HtmlAPI() {
  const codeHtml = `<a-input-number>
  v-model="model"
  class="a_mb_4"
  :min="0"
  :max="100"
  :step="5"
  type="integer-non-negative"
</a-input-number>
<a-progress>
  :value="model"
  :class-progress-bar="getClassProgressBar"
</a-progress>`;

  return {
    codeHtml,
  };
}
