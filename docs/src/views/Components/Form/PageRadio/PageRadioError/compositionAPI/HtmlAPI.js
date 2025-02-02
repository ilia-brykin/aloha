export default function HtmlAPI() {
  const codeHtml = `<a-radio
  v-model="model"
  :data="data"
  errors="Aloha"
  label="Radio"
></a-radio>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
