export default function HtmlAPI() {
  const codeHtml = `<a-input-number-range
  v-model="model"
  label="Aloha"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
