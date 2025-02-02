export default function HtmlAPI() {
  const codeHtml = `<a-input-currency
  v-model="model"
  help-text="Aloha"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
