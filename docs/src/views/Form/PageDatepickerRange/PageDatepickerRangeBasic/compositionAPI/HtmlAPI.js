export default function HtmlAPI() {
  const codeHtml = `<a-datepicker-range
  v-model="model"
  label="Aloha"
</a-datepicker-range>
<div class="a_mt_3">model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
