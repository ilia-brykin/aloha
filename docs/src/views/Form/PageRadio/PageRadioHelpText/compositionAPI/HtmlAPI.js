export default function HtmlAPI() {
  const codeHtml = `<a-radio
  v-model="model"
  :data="data"
  help-text="Aloha"
  label="Radio"
></a-radio>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
